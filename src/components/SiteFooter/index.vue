<template>
  <footer class="l-footer">

    <div class="l-footer-pagetop" v-bind:class="showGoTop?'':'is-hide'" ><a v-on:click="goTop"><i class="fa fa-arrow-up"></i>TOP</a></div>

    <div class="l-footer-upper" style="display: none">

      <div class="l-footer-upper-pagetop"><a v-on:click="goTop" style="cursor:pointer"><i class="fa fa-arrow-up"></i><span>TOP</span></a></div>

      <div class="l-footer-upper-share">
        <div class="c-link-share">
          <div class="c-link-share-text"><i class="fa fa-share u-mr-10"></i><span>SHARE</span></div>
          <div data-network="facebook" class="c-link-share-button st-custom-button"><i class="fa fa-facebook"></i></div>
          <div data-network="linkedin" class="c-link-share-button st-custom-button"><i class="fa fa-linkedin"></i></div>
          <div data-network="twitter" class="c-link-share-button st-custom-button"><i class="fa fa-twitter"></i></div>
        </div>
      </div>

    </div>
    <div class="l-footer-lower">

      <div class="l-footer-lower-logo">
        <a href="/">
          <picture>
            <source media="(max-width:767px)" v-bind:srcset="imgUrlSp">
            <source media="(min-width:768px)" v-bind:srcset="imgUrlPc">
            <img v-bind:src="imgUrlPc" alt="Newtouch Innovation" class="u-w-100p">
          </picture>
        </a>
      </div>

      <nav class="l-footer-lower-nav">
        <ul>
<!--          <li><a href="/news">ニュース</a></li>-->
<!--          <li><a href="/recruit">採用情報</a></li>-->
<!--          <li><a href="/access">アクセス</a></li>-->
<!--          <li><a href="/contact">お問合せ</a></li>-->
          <li><a href="/sitemap">{{ $t('message') }}</a></li>
          <li><a href="/sitemap">サイトマップ</a></li>
          <li><a href="/info/exclusion">リンク・免責事項</a></li>
          <li><a href="/info/privacy_policy">個人情報保護方針</a></li>
          <li><a href="/info/privacy_policy/public">個人情報に関する公表文</a></li>
          <li><a href="/info/terms">サイトのご利用条件</a></li>
          <li><a href="/info/accessibility_policy">アクセシビリティポリシー</a></li>
        </ul>
      </nav>

      <div class="l-footer-lower-subnav" style="display: none;">

        <ul class="l-footer-lower-subnav-sns">
          <li><a href="https://twitter.com/NEWTOUCH_PR" target="_blank"><i class="fa fa-twitter"></i></a></li>
          <li><a href="https://www.facebook.com/NEWTOUCHJapan" target="_blank"><i class="fa fa-facebook"></i></a></li>
          <li><a href="https://www.youtube.com/user/newtouchdatapr" target="_blank"><i class="fa fa-youtube-play"></i></a></li>
        </ul>
        <ul class="l-footer-lower-subnav-site">
          <li><a href="/sitemap">サイトマップ</a></li>
          <li><a href="/info/exclusion">リンク・免責事項</a></li>
          <li><a href="/info/privacy_policy">個人情報保護方針</a></li>
          <li><a href="/info/privacy_policy/public">個人情報に関する公表文</a></li>
          <li><a href="/info/terms">サイトのご利用条件</a></li>
          <li><a href="/info/accessibility_policy">アクセシビリティポリシー</a></li>
        </ul>

      </div>

      <div class="l-footer-lower-copyright" style="margin-top: 40px">
        <small>Copyright &copy; Newtouch Innovation Co., LTD.</small>
      </div>

    </div>
  </footer>
</template>

<script>
import CommonContents from '../../components/CommonContents/index.js'

export default {
  name:'SiteFooter',
  data() {
      return {
        imgUrlPc: CommonContents.data.images.imgUrlWhitePcURL,
        imgUrlSp: CommonContents.data.images.imgUrlWhiteSpURL,
        showGoTop: false,
      }
  },
  methods: {
    setShowGoTop() {
      if (window.scrollY > 0 && !this.showGoTop) {
        this.showGoTop = true;
      } else if(window.scrollY <= 0 && this.showGoTop) {
        this.showGoTop = false;
      }
    },
    goTop() {
      $('html, body').animate({
        scrollTop: 0
      }, CommonContents.data.variables.scrollSpeed, 'swing');
    },
  },
  components: {
  },
  created() {
    document.addEventListener('scroll', this.setShowGoTop)
    window.addEventListener('touchmove', this.setShowGoTop)
  },
}
</script>

<style scoped>
</style>
