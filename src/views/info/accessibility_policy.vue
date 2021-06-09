<template>
  <main class="l-main">
    <div class="c-block-content-header c-bg-smart-blue">
      <div class="c-block-content-header-wrapper">
        <ul class="c-block-content-header-breadcrumb">
          <li>
            <a href="/">ホーム</a>
          </li>
          <li>
            <a href="/info">インフォメーション</a>
          </li>
        </ul>

        <h1 class="c-block-content-header-head">アクセシビリティポリシー</h1>
        <div class="c-block-content-header-bottom">
          <div class="c-block-content-header-bottom-left">
            <div class="c-block-content-header-link">
              <a class="c-btn-detail" href="/jp/ja/contact-us">お問い合わせ</a>
            </div>
          </div>

          <div class="c-block-content-header-bottom-right">
            <div class="c-flex-justify-end u-mt-20">
              <div class="c-link-share">
                <div class="c-link-share-text">
                  <i class="nttd nttd-share u-mr-10"></i><span>SHARE</span>
                </div>
                <div
                  data-network="facebook"
                  class="c-link-share-button st-custom-button"
                >
                  <i class="fa fa-facebook"></i>
                </div>
                <div
                  data-network="linkedin"
                  class="c-link-share-button st-custom-button"
                >
                  <i class="fa fa-linkedin"></i>
                </div>
                <div
                  data-network="twitter"
                  class="c-link-share-button st-custom-button"
                >
                  <i class="fa fa-twitter"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="c-block">
      <div class="c-richtext">
        <p class="spacer-bottom-xs">2021年3月5日作成</p>

        <p>
          当サイトは、日本工業規格JIS X
          8341-3「高齢者・障害者等配慮設計指針-情報通信における機器、ソフトウエア及びサービス-第3部：ウェブコンテンツ」（以下JIS
          X 8341-3：2016という）の等級AAに準拠することを目標とします。
        </p>
      </div>
    </div>

    <div class="c-block">
      <div class="c-richtext">
        <h3 class="u-fs-20 u-fw-bold">1.対象範囲</h3>
        <ul class="list-none">
          <li>
            ホーム（<span class="c-link-caret u-pl-5"
              ><a href="/">https://www.newtouch.jp/</a></span
            >）
          </li>
          <li>
            企業情報（<span class="c-link-caret u-pl-5"
              ><a href="/about"
                >https://www.newtouch.jp/about/</a
              ></span
            >）
          </li>
          <li>
            採用情報（<span class="c-link-caret u-pl-5"
              ><a href="/recruit"
                >https://www.newtouch.jp/recruit/</a
              ></span
            >）
          </li>
          <li>
            ニュース（<span class="c-link-caret u-pl-5"
              ><a href="/news"
                >https://www.newtouch.jp/news/</a
              ></span
            >）
          </li>
          <li>
            ソリューション（<span class="c-link-caret u-pl-5"
              ><a href="/solutions"
                >https://www.newtouch.jp/solutions/</a
              ></span
            >）
          </li>
        </ul>

        <p>対象範囲外としたページについても、今後対応を検討していきます。</p>
      </div>
    </div>

    <div class="c-block">
      <div class="c-richtext">
        <h3 class="u-fs-20 u-fw-bold">2.目標とする達成等級及び対応度</h3>

        <p>JIS X 8341-3：2016の等級AAに準拠</p>

        <p class="u-mt-10" style="color: #616161; display: table">
          <span
            style="
              display: table-cell;
              padding-right: 1rem;
              white-space: nowrap; ;
            "
            >注</span
          >本アクセシビリティポリシーにおける「準拠」という表記は、情報通信アクセス協議会ウェブアクセシビリティ基盤委員会「ウェブコンテンツのJIS
          X 8341-3：2016 対応度表記ガイドライン
          2016年3月版」で定められた表記によります。
        </p>
        <p>
          <span class="c-link-caret u-pl-0"
            ><a
              href="https://waic.jp/docs/jis2016/compliance-guidelines/201603/"
              target="_blank"
              class="c-link-external"
              >ウェブコンテンツのJIS X 8341-3：2016 対応度表記ガイドライン
              2016年3月版</a
            ></span
          >
        </p>
      </div>
    </div>

    <div class="c-block">
      <div class="c-richtext">
        <h3 class="u-fs-20 u-fw-bold">
          3.ウェブアクセシビリティに関するお問い合わせ先
        </h3>
        <p>
          ニュータッチイノベーション株式会社 総務部<br />
          〒105-0014 東京都港区芝1-9-3 芝マツラビル 4F
        </p>
        <p>
          <span class="c-link-caret u-pl-0"><a href="/contact">お問い合わせ</a></span>
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "AccessibilityPolicyView",
};
</script>

<style scoped>
.list-none {
  list-style-type: none !important;
  padding-left: 0 !important;
}
.infodetailsec .sub-item ul {
  padding: 0 15px;
}
.infodetailsec .sub-item ul li {
  list-style-type: none;
  padding-left: 0;
  padding-bottom: 0.5rem;
}
</style>