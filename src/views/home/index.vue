<template>

    <div>
      
  <!-- <swiper
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  > 
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
  -->
        <div class="slider-area section-padding-5">
            <div class="container-fluid">
                <div class="slider-active-2 swiper-container pagination-wrap-3">

                    <div class="swiper-wrapper">
                        <div class="swiper-slide bag-single-slider slider-height-3 custom-d-flex custom-align-item-center single-animation-wrap bag-slider-bg-color">
                            <div class="row">
                                <div class="col-12">
                                    <div class="hero-content-8 slider-animated-2">
                                        <h4 class="animated">THE BEST <br>DESIGN FROM <br>GIORDANO </h4>
                                        <h1 class="animated">Giordano Duffles Collection </h1>
                                        <p class="animated">Lorem ipsum dolor sit amet, consectetur adipis elit. Nunc imperdiet, nulla a scelerisque condimentum, enim mi blandit erat, at blandit. </p>
                                        <div class="btn-style-7">
                                            <a class="animated" href="shop.html">VIEW COLLECTION <i class="ion-play"></i></a>
                                        </div>
          <div class="c-block-mainv-item-inner">
            <h3 class="c-block-mainv-item-head">
              <a href="/about" target="">
                より多くのお客様に、<br>
                より良いサービスを<br>
                提供していくことが<br>
                私たちの使命です。
                <span class="c-block-mainv-item-head-sub">ニュータッチイノベーション株式会社</span>
              </a>
            </h3>
            <div class="c-block-mainv-item-link">
              <a href="/about" target="" class="c-btn-detail" tabindex="-1">詳細情報</a>
            </div>
          </div>
        </article>
        <article class="c-block-mainv-item">
          <div class="">
            <picture>
              <source media="(max-width:767px)" srcset="https://www.nttdata.com/jp/ja/-/media/nttdatajapan/images/home/top-visual/release/56/tp_hero_56_m.jpg">
              <source media="(min-width:768px)" srcset="https://www.nttdata.com/jp/ja/-/media/nttdatajapan/images/home/top-visual/release/56/tp_hero_56_d.jpg">
              <img src="https://www.nttdata.com/jp/ja/-/media/nttdatajapan/images/home/top-visual/release/56/tp_hero_56_d.jpg?h=1575&amp;la=ja-JP&amp;w=2800&amp;hash=29DD1D2BDC468B700FA5FBEF974B9A2FB0A875FE" class="js-object-fit-images" alt="" DisableWebEdit="False" />
            </picture>
          </div>
          <div class="c-block-mainv-item-inner">
            <h3 class="c-block-mainv-item-head">
              <a href="/solutions" target="">
                Newtouchグループが<br>
                グローバルに連携し、<br>
                円滑なプロジェクト推<br>
                進をお約束いたします。
                <span class="c-block-mainv-item-head-sub">ニュータッチイノベーション株式会社</span>
              </a>
            </h3>
            <div class="c-block-mainv-item-link">
              <a href="/solutions" target="" class="c-btn-detail" tabindex="-1">詳細情報</a>
            </div>
          </div>
        </article>
      </div>
      <div class="bx-controls bx-has-pager">
        <div class="bx-pager bx-default-pager">
          <div class="bx-pager-item">
            <a href="" data-slide-index="0" class="bx-pager-link active">1</a>
          </div>
          <div class="bx-pager-item">
            <a href="" data-slide-index="1" class="bx-pager-link">2</a>
          </div>
        </div>
      </div>
      <div class="c-btn-mainv-prev "><a class="slick-prev" /></div>
      <div class="c-btn-mainv-next "><a class="slick-next" /></div>
      <!-- <div class="c-btn-mainv-scroll" v-on:click="onScroll">scroll</div> -->
    </section>
    <!-- // Carousel -->

    <!-- Notice -->
    <section> 
    <div class="c-block c-block-toppage-notice">
      <div class="c-block-toppage-notice-item c-bg-smart-navy">
        <div style="font-size: 18px;">
        ニュータッチイノベーションは<br>
        良質で安全なITサービス製品を提供いたします
        </div>
      </div>
      <div class="c-block " style="padding-left: 0; padding-right:0">
        <div class="c-richtext">
          <a href="/news/20201214" class="c-block-toppage-notice-item c-border-smart-navy">
            <div style="font-size: 18px;">
              上海新致軟件有限公司 上海証券取引所科創板(STAR)新規上場のお知らせ
            </div>
          </a>
        </div>
      </div>
    </div>
    </section>
    <!-- // Notice -->

    <!--news-->
    <section class="c-block c-block-news-grid ">
      <h2 class="c-block-news-grid-head">NEWS</h2>
      <div class="c-block-news-grid-body">
        <article class="c-block-news-grid-item">
          <a href="/news/20201214">
            <div class="c-block-news-grid-item-category">お知らせ</div>
            <div class="c-block-news-grid-item-date">2020年12月7日</div>
            <h3 class="c-block-news-grid-item-head">上海新致軟件有限公司 上海証券取引所科創板(STAR)新規上場のお知らせ</h3>
          </a>
        </article>
        <article class="c-block-news-grid-item">
          <a href="/news">
<!--            <div class="c-block-news-grid-item-category">ニュースリリース</div>-->
            <div class="c-block-news-grid-item-category">お知らせ</div>
            <div class="c-block-news-grid-item-date">2018年5月1日</div>
            <h3 class="c-block-news-grid-item-head">プライバシーマーク取得　　登録番号 21004473</h3>
          </a>
        </article>
        <article class="c-block-news-grid-item">
          <a href="/news/20180401">
            <div class="c-block-news-grid-item-category">お知らせ</div>
            <div class="c-block-news-grid-item-date">2018年4月1日</div>
            <h3 class="c-block-news-grid-item-head">会長及び社長交代のお知らせ</h3>
          </a>
        </article>
      </div>
      <div class="c-link-caret u-ta-center u-mt-40"><a href="/news"><strong>すべてのニュースを見る</strong></a></div>
    </section>
    <!--// news-->

    <!-- pick up -->
    <section class="c-block c-block-toppage-pickup c-bg-light-grey">
      <h2 class="c-block-toppage-pickup-head">PICK UP</h2>
      <div class="c-block-toppage-pickup-body">
        <section class="c-block-toppage-pickup-item">
          <a href="/solutions/dev" target="">
            <div class="c-block-toppage-pickup-item-image ">
              <img src="../../assets/themes/default/images/tp_pic_system.jpg?h=640&amp;la=ja-JP&amp;w=830" alt="">
            </div>
            <div class="c-block-toppage-pickup-item-category">システム開発</div>
            <h3 class="c-block-toppage-pickup-item-head">金融・医療・物流</h3>
          </a>
        </section>
        <section class="c-block-toppage-pickup-item">
          <a href="/solutions/embedded" target="">
            <div class="c-block-toppage-pickup-item-image ">
              <img src="../../assets/themes/default/images/tp_pic_initiatives-830x640.jpg?h=640&amp;la=ja-JP&amp;w=830" alt="">
            </div>
            <div class="c-block-toppage-pickup-item-category">組込開発</div>
            <h3 class="c-block-toppage-pickup-item-head">通信・製品・車載</h3>
          </a>
        </section>
        <section class="c-block-toppage-pickup-item">
          <a href="/solutions/evaluation" target="">
            <div class="c-block-toppage-pickup-item-image ">
              <img src="../../assets/themes/default/images/tp_pic_verification-830x640.png?h=640&amp;la=ja-JP&amp;w=830" alt=""></div>
            <div class="c-block-toppage-pickup-item-category">評価/検証</div>
            <h3 class="c-block-toppage-pickup-item-head">システム・各種デバイス</h3>
          </a>
        </section>
        <section class="c-block-toppage-pickup-item">
          <a href="/solutions/blockchain" target="">
            <div class="c-block-toppage-pickup-item-image "><img src="../../assets/themes/default/images/tp_pic_blockchain.jpg" alt=""></div>
            <div class="c-block-toppage-pickup-item-category">ブロックチェーン</div>
            <h3 class="c-block-toppage-pickup-item-head">ブロックチェーン関連ソリューション</h3>
          </a>
        </section>
        <section class="c-block-toppage-pickup-item">
          <a href="/solutions/ai" target="">
            <div class="c-block-toppage-pickup-item-image "><img src="../../assets/themes/default/images/tp_pic_ai.jpg?h=640&amp;la=ja-JP&amp;w=830" alt=""></div>
            <div class="c-block-toppage-pickup-item-category">AI</div>
            <h3 class="c-block-toppage-pickup-item-head">AIテクノロジーへの取組み</h3>
          </a>
        </section>
        <section class="c-block-toppage-pickup-item">
          <a href="/solutions/bigdata" target="">
            <div class="c-block-toppage-pickup-item-image "><img src="../../assets/themes/default/images/big-data-connector-intro-830x640.png?h=640&amp;la=ja-JP&amp;w=830&amp;hash=5544CBB4E304C1B7733ADA01046306B02E857B42" alt=" "></div>
            <div class="c-block-toppage-pickup-item-category">ビッグデータ</div>
            <h3 class="c-block-toppage-pickup-item-head">ビッグデータの効果的活用</h3>
          </a>
        </section>
      </div>
    </section>
    <!-- // pick up -->

    <!-- Service -->
    <section class="c-block c-block-toppage-services c-bg-smart-blue" style="display: none">
      <h2 class="c-block-toppage-services-head"><i class="nttd nttd-angle-left u-sp"></i>SERVICES<i class="nttd nttd-angle-right u-sp"></i></h2>
      <div class="c-block-toppage-services-body is-hide">
        <section class="c-block-toppage-services-item">
          <div style="height: 141px;">
            <h3 class="c-block-toppage-services-item-head"><a href="/jp/ja/services/bi" class="c-color-inherit">ビッグデータ・BI
            </a></h3>
            <div class="c-block-toppage-services-item-summary">膨大なデータ（ビッグデータ）活用を通したサービス・ソリューションを紹介します。幅広いビジネス課題に対応するNTTデータの最新の取り組み事例やニュースをご覧ください。</div>
          </div>
          <div class="c-block-toppage-services-item-link"><a href="/jp/ja/services/bi" class="c-link-caret"><span>続きを見る</span></a></div>
        </section>
        <section class="c-block-toppage-services-item">
          <div style="height: 141px;">
            <h3 class="c-block-toppage-services-item-head"><a href="/jp/ja/services/ai" class="c-color-inherit">AI（人工知能）</a></h3>
            <div class="c-block-toppage-services-item-summary">急速な勢いで進化を続けるAIをいかにビジネスに活用するか？幅広いビジネス課題に対応するAI活用のポイントとNTTデータの最新の取り組み事例やニュースを紹介します。</div>
          </div>
          <div class="c-block-toppage-services-item-link"><a href="/jp/ja/services/ai" class="c-link-caret"><span>続きを見る</span></a></div>
        </section>
        <section class="c-block-toppage-services-item">
          <div style="height: 141px;">
            <h3 class="c-block-toppage-services-item-head"><a href="/jp/ja/services/blockchain" class="c-color-inherit">ブロックチェーン</a></h3>
            <div class="c-block-toppage-services-item-summary">NTTデータの考えるブロックチェーンの可能性</div>
          </div>
          <div class="c-block-toppage-services-item-link"><a href="/jp/ja/services/blockchain" class="c-link-caret"><span>続きを見る</span></a></div>
        </section>
        <section class="c-block-toppage-services-item">
          <div style="height: 113px;">
            <h3 class="c-block-toppage-services-item-head"><a href="/jp/ja/services/crm" class="c-color-inherit">CRM（顧客管理）</a></h3>
            <div class="c-block-toppage-services-item-summary">顧客の利便性や満足度の向上に向けた環境構築を強力にサポート</div>
          </div>
          <div class="c-block-toppage-services-item-link"><a href="/jp/ja/services/crm" class="c-link-caret"><span>続きを見る</span></a></div>
        </section>
        <section class="c-block-toppage-services-item">
          <div style="height: 113px;">
            <h3 class="c-block-toppage-services-item-head"><a href="/jp/ja/services/security" class="c-color-inherit">セキュリティ・認証</a></h3>
            <div class="c-block-toppage-services-item-summary">技術力と豊富な実績が可能にする先進のセキュリティソリューションをご提供</div>
          </div>
          <div class="c-block-toppage-services-item-link"><a href="/jp/ja/services/security" class="c-link-caret"><span>続きを見る</span></a></div>
        </section>
        <section class="c-block-toppage-services-item">
          <div style="height: 113px;">
            <h3 class="c-block-toppage-services-item-head"><a href="/jp/ja/services/datacenter" class="c-color-inherit">データセンター</a></h3>
            <div class="c-block-toppage-services-item-summary">長きにわたって蓄積した実績に基づく高効率・高信頼なデータセンターサービスにより、お客様のIT基盤を強力にサポート</div>
          </div>
          <div class="c-block-toppage-services-item-link"><a href="/jp/ja/services/datacenter" class="c-link-caret"><span>続きを見る</span></a></div>
        </section>
        <section class="c-block-toppage-services-item">
          <div style="height: 85px;">
            <h3 class="c-block-toppage-services-item-head"><a href="/jp/ja/services/network" class="c-color-inherit">ネットワーク</a></h3>
            <div class="c-block-toppage-services-item-summary">お客様のニーズに応える高品質なネットワークサービスをご提供</div>
          </div>
          <div class="c-block-toppage-services-item-link"><a href="/jp/ja/services/network" class="c-link-caret"><span>続きを見る</span></a></div>
        </section>
        <section class="c-block-toppage-services-item">
          <div style="height: 85px;">
            <h3 class="c-block-toppage-services-item-head"><a href="/jp/ja/services/robotics" class="c-color-inherit">ロボティクス</a></h3>
            <div class="c-block-toppage-services-item-summary">さまざまなデバイスを用いたサービス開発をサポート</div>
          </div>
          <div class="c-block-toppage-services-item-link"><a href="/jp/ja/services/robotics" class="c-link-caret"><span>続きを見る</span></a></div>
        </section>
        <section class="c-block-toppage-services-item">
          <div style="height: 85px;">
            <h3 class="c-block-toppage-services-item-head"><a href="/jp/ja/services/erp" class="c-color-inherit">ERP（統合業務）・経営管理</a></h3>
            <div class="c-block-toppage-services-item-summary">時代の変化やニーズに即した先進のERPソリューションをご提供</div>
          </div>
          <div class="c-block-toppage-services-item-link"><a href="/jp/ja/services/erp" class="c-link-caret"><span>続きを見る</span></a></div>
        </section>
        <section class="c-block-toppage-services-item">
          <div style="height: 113px;">
            <h3 class="c-block-toppage-services-item-head"><a href="/jp/ja/services/iot" class="c-color-inherit">IoT</a></h3>
            <div class="c-block-toppage-services-item-summary">IoT活用をビジネスの検討段階からサポート</div>
          </div>
          <div class="c-block-toppage-services-item-link"><a href="/jp/ja/services/iot" class="c-link-caret"><span>続きを見る</span></a></div>
        </section>
        <section class="c-block-toppage-services-item">
          <div style="height: 113px;">
            <h3 class="c-block-toppage-services-item-head"><a href="/jp/ja/services/payment" class="c-color-inherit">決済</a></h3>
            <div class="c-block-toppage-services-item-summary">様々なシステムの構築・運用ノウハウを活かして、お客様のビジネスを支える高信頼な決済システムを実現</div>
          </div>
          <div class="c-block-toppage-services-item-link"><a href="/jp/ja/services/payment" class="c-link-caret"><span>続きを見る</span></a></div>
        </section>
        <section class="c-block-toppage-services-item">
          <div style="height: 113px;">
            <h3 class="c-block-toppage-services-item-head"><a href="/jp/ja/services/cloud" class="c-color-inherit">クラウド</a></h3>
            <div class="c-block-toppage-services-item-summary">お客様に安心して利用いただける最適なクラウド基盤を実現</div>
          </div>
          <div class="c-block-toppage-services-item-link"><a href="/jp/ja/services/cloud" class="c-link-caret"><span>続きを見る</span></a></div>
        </section>
      </div>
      <div class="c-link-caret u-ta-center u-mt-60-pc u-mt-30-sp">
        <a href="/services"><strong>すべてのサービスを見る</strong></a>
      </div>
    </section>
    <!-- // Service -->
  </main>
</template>

<script>
// import '../../assets/refs/slick-carousel/1.9.0/slick.min.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js'
import '../../assets/themes/default/css/js-slick.less';
import '../../assets/themes/default/css/c-richtext.less';
// import '../../assets/refs/slick-carousel/1.9.0/slick.min.css';
import CommonContents from "../../components/CommonContents";

export default {
  name: 'HomeView',
  components: {

  },
  data() {
    return {
    }
  },
  methods: {
    onScroll: () => {
      let headerHeight = $('.l-header').outerHeight();
      headerHeight = 63
      // let windowHeight = $(window).height();
      let top = $('.c-block-toppage-notice').offset().top;
      let position = top - headerHeight;
      $('html, body').animate({
        scrollTop: position
      }, CommonContents.data.variables.scrollSpeed, 'swing');
    }
  },
  mounted() {
    $('.slick-wrapper').slick({
      // adaptiveHeight: true,
      infinite: true,
      adaptiveHeight: false,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 5000,
      // lazyLoad: 'progressive',//'ondemand',
      prevArrow: '.slick-prev',
      nextArrow: '.slick-next',
    }).on('afterChange', function(event, slick, currentSlide){
      // $('.bx-pager-link').removeClass('active');
      // $('.bx-pager-item a[data-slide-index='+nextSlide+']').addClass('active');
      $('.bx-pager-item a').each((index,element)=>{
        if ($(element).attr('data-slide-index') == currentSlide) {
          $(element).addClass('active');
        } else {
          $(element).removeClass('active');
        }
      })
    })
  }
};
</script>

<style scoped>
/* @import url('../../assets/refs/slick-carousel/1.9.0/slick.min.css'); */
@import url(https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css);
</style>
