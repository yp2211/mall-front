<template>
  <header class="l-header " v-bind:class="isScroll? 'is-scroll': ''">
    <div class="l-header-inner" v-bind:class="showDark?'c-color-normal':''">

      <!-- <ul class="l-header-country">
        <li><a href="//www.newtouch.com">Global</a></li>
        <li class="is-current"><span>JAPAN</span></li>
      </ul> -->

      <div class="c-flex-align-center" v-bind:class="isScroll? '': 'u-mt-30-pc', showDark?'show-dark':''">

        <div class="l-header-logo">
          <a href="/">
            <picture>
              <source media="(max-width:767px)" v-bind:srcset="imgUrlSp">
              <source media="(min-width:768px)" v-bind:srcset="imgUrlPc">
              <img v-bind:src="imgUrlPc" alt="Newtouch Innovation" class="u-w-100p">
            </picture>
          </a>
        </div>

        <nav class="l-header-gnav">
          <ul>
            <li><a href="/solutions">ソリューション</a></li>
            <li><a href="/about">会社概要</a></li>
            <li><a href="/about/access">アクセス</a></li>
            <li><a href="/recruit">採用情報</a></li>
            <li><a href="/news">ニュース</a></li>
            <li><a href="/contact">お問合せ</a></li>
          </ul>
        </nav>

        <div class="l-header-ico-search" tabindex="0"><i class="ntd ntd-search"></i></div>

        <div class="l-header-ico-menu is-menu" tabindex="0" v-on:click="onClickMenu" v-bind:class="switchSlideMenu ? 'is-close': ''"><span></span></div>

      </div>
    </div>

    <div class="l-header-search is-hide">
      <div class="l-header is-close u-mt-30-pc u-pos-absolute u-left-0">
        <div class="l-header-inner">
          <div class="u-pos-relative">
            <div class="l-header-ico-menu" tabindex="0"><span></span></div>
          </div>
        </div>
      </div>
      <form action="/search-result" method="get">
        <div class="l-header-search-text">何をお探しですか？</div>
        <div class="l-header-search-input">
          <i class="search-decoration ntd ntd-search"></i>
          <input id="search-box" type="text" class="search-field" name="query" placeholder="何をお探しですか？" autocomplete="off">
        </div>
        <ul class="l-header-search-suggestions suggestions">
        </ul>
      </form>
      <ul class="l-header-search-results results result-suggestions">
      </ul>
    </div>

    <div class="l-header-menu" v-bind:class="switchSlideMenu ? '': 'is-hide'" v-bind:style="switchSlideMenu ? 'display: flex': 'display: none'">
      <ul class="l-header-menu-list-main">
        <li><a href="/solutions">ソリューション</a></li>
        <li><a href="/about">会社概要</a></li>
        <li><a href="/recruit">採用情報</a></li>
        <li><a href="/contact">お問合せ</a></li>
      </ul>
      <ul class="l-header-menu-list-sub">
        <li><a href="/news">ニュース</a></li>
        <li><a href="/about/access">アクセス</a></li>
        <li><a href="/info/privacy_policy">個人情報保護方針</a></li>
        <li><a href="/info/privacy_policy/public">個人情報に関する公表文</a></li>
      </ul>
    </div>

  </header>
</template>

<script>
import CommonContents from '../../components/CommonContents/index.js'

export default {
  name: 'SiteHeader',
  // props: {
  //   'showDark': Boolean,
  // },
  data() {
    return {
      imgUrlPc: CommonContents.data.images.imgUrlWhitePcURL,
      imgUrlSp: CommonContents.data.images.imgUrlWhiteSpURL,
      isScroll: false,
      switchSlideMenu: false,
      showDark: false,
    };
  },
  components: {},
  created() {
    // this.$refs['body'].on('scroll', this.onScroll);
    document.addEventListener('scroll', this.onScroll)
    window.addEventListener('touchmove', this.onScroll)
    // window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      if (window.scrollY > 0 && !this.isScroll) {
        this.isScroll = true;
        // console.log(new Date().getTime());
      } else if(window.scrollY <= 0 && this.isScroll) {
        this.isScroll = false;
      }

      if (this.showDark) return;

      if (this.isScroll) {
        this.imgUrlPc = CommonContents.data.images.imgUrlBluePcURL;
        this.imgUrlSp = CommonContents.data.images.imgUrlBlueSpURL;
      } else {
        this.imgUrlPc = CommonContents.data.images.imgUrlWhitePcURL;
        this.imgUrlSp = CommonContents.data.images.imgUrlWhiteSpURL;
      }
    },
    onClickMenu () {
      this.switchSlideMenu = !this.switchSlideMenu;
    }
  },
  watch: {
    $route (to, from) {
      if (to.name == 'solutions' || to.name == 'info') {
        this.showDark = true;
        this.imgUrlPc = CommonContents.data.images.imgUrlBluePcURL;
        this.imgUrlSp = CommonContents.data.images.imgUrlBlueSpURL;
      }
    }
  }
};
</script>
