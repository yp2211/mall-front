<template>
    <div ref="roczoom" class="easyzoom easyzoom--overlay">
        <a href="../../assets/themes/bag/images/product-details/pro-details-b-large-img-1.jpg">
            <img src="../../assets/themes/bag/images/product-details/pro-details-large-img-1.jpg" alt="">
        </a>
    </div>
</template>

<script>
export default({
    name: "RocZoom",
    props: {
        $target,
        options,
    },
    data: {
        zoomImgOverlapX:0,
        zoomImgOverlapY:0,
        ratioX:0,
        ratioY:0,
        pointerPositionX:0,
        pointerPositionY:0,

        // The text to display within the notice box while loading the zoom image.
        loadingNotice: 'Loading image',

        // The text to display within the notice box if an error occurs when loading the zoom image.
        errorNotice: 'The image could not be loaded',

        // The time (in milliseconds) to display the error notice.
        errorDuration: 2500,

        // Attribute to retrieve the zoom image URL from.
        linkAttribute: 'href',

        // Prevent clicks on the zoom image link.
        preventClicks: true,

        // Callback function to execute before the flyout is displayed.
        beforeShow: $.noop,

        // Callback function to execute before the flyout is removed.
        beforeHide: $.noop,

        // Callback function to execute when the flyout is displayed.
        onShow: $.noop,

        // Callback function to execute when the flyout is removed.
        onHide: $.noop,

        // Callback function to execute when the cursor is moved while over the image.
        onMove: $.noop

    },
    methods: {
        _init() {
            this.$link   = this.$target.find('a');
            this.$image  = this.$target.find('img');

            this.$flyout = $('<div class="easyzoom-flyout" />');
            this.$notice = $('<div class="easyzoom-notice" />');

            this.$target.on({
                'mousemove.easyzoom touchmove.easyzoom': $.proxy(this._onMove, this),
                'mouseleave.easyzoom touchend.easyzoom': $.proxy(this._onLeave, this),
                'mouseenter.easyzoom touchstart.easyzoom': $.proxy(this._onEnter, this)
            });

            this.opts.preventClicks && this.$target.on('click.easyzoom', function(e) {
                e.preventDefault();
            })
        },
        show(e, testMouseOver) {
            var self = this;

            if (this.opts.beforeShow.call(this) === false) return;

            if (!this.isReady) {
                return this._loadImage(this.$link.attr(this.opts.linkAttribute), function() {
                    if (self.isMouseOver || !testMouseOver) {
                        self.show(e);
                    }
                });
            }

            this.$target.append(this.$flyout);

            var targetWidth = this.$target.outerWidth();
            var targetHeight = this.$target.outerHeight();

            var flyoutInnerWidth = this.$flyout.width();
            var flyoutInnerHeight = this.$flyout.height();

            var zoomImgWidth = this.$zoom.width();
            var zoomImgHeight = this.$zoom.height();

            zoomImgOverlapX = Math.ceil(zoomImgWidth - flyoutInnerWidth);
            zoomImgOverlapY = Math.ceil(zoomImgHeight - flyoutInnerHeight);

            // For when the zoom image is smaller than the flyout element.
            if (zoomImgOverlapX < 0) zoomImgOverlapX = 0;
            if (zoomImgOverlapY < 0) zoomImgOverlapY = 0;

            ratioX = zoomImgOverlapX / targetWidth;
            ratioY = zoomImgOverlapY / targetHeight;

            this.isOpen = true;

            this.opts.onShow.call(this);

            e && this._move(e);
        },
        _onEnter(e) {
            var touches = e.originalEvent.touches;

            this.isMouseOver = true;

            if (!touches || touches.length == 1) {
                e.preventDefault();
                this.show(e, true);
            }
        },
        _onMove(e) {
            if (!this.isOpen) return;

            e.preventDefault();
            this._move(e);
        },
        _onLeave() {
            this.isMouseOver = false;
            this.isOpen && this.hide();
        },
        _onLoad(e) {
            // IE may fire a load event even on error so test the image dimensions
            if (!e.currentTarget.width) return;

            this.isReady = true;

            this.$notice.detach();
            this.$flyout.html(this.$zoom);
            this.$target.removeClass('is-loading').addClass('is-ready');

            e.data.call && e.data();
        },
        _onError() {
            var self = this;

            this.$notice.text(this.opts.errorNotice);
            this.$target.removeClass('is-loading').addClass('is-error');

            this.detachNotice = setTimeout(function() {
                self.$notice.detach();
                self.detachNotice = null;
            }, this.opts.errorDuration);
        },
    },
    onmounted() {
        this.$target = mount(this.$refs.roczoom);
        // this.opts = $.extend({}, defaults, options, this.$target.data());

        this.isOpen === undefined && this._init();

    }
})
</script>
<style>
@import '../assetes/themes/bag/css/plugins/easyzoom.css'
</style>