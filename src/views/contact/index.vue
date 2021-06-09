<template>
  <main class="l-main">
    <div class="c-block-content-header c-bg-smart-blue">
      <div class="c-block-content-header-wrapper">
        <ul class="c-block-content-header-breadcrumb">
          <li>
            <a href="/">ホーム</a>
          </li>
        </ul>

        <h1 class="c-block-content-header-head">お問い合わせ</h1>
        <div class="c-block-content-header-summary"></div>
        <div class="c-block-content-header-bottom">
          <div class="c-block-content-header-bottom-left">
            <div class="c-block-content-header-link">
              <!-- <a class="c-btn-detail" href="/contact">お問い合わせ</a> -->
            </div>
          </div>

          <div
            class="c-block-content-header-bottom-right"
            style="display: none"
          >
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
        <h3 class="u-fs-20 u-fw-bold u-mb-20">ご注意</h3>
        <p>
          不特定多数の方に向けて当社を騙った請求や折り返しの電話を要請するSMSで送信される事例が確認されています。
          <br />
          当社および当社グループとは一切関係ございません。このようなSMSを受信された場合の返信や記載され
          ている電話番号への連絡は行わないよう、十分にご注意頂きますようお願いいたします。
        </p>
        <p class="col-sm-12">
          <span class="c-link-caret u-pl-0"
            >[E-mail]
            <a href="mailto:customer@newtouch.jp?subject=【NT_HP】お問い合わせ&body=【お名前*】%0D%0A【フリガナ*】%0D%0A【Email*】%0D%0A【電話番号*】%0D%0A【会社名/組織名】%0D%0A【部署名】%0D%0A【役職】%0D%0A【お問合せ内容】"
              >customer@newtouch.jp</a
            ></span
          >
        </p>
      </div>
      <div class="c-richtext">
                <p>
          【本社】<br />
          〒105-0014 東京都港区芝1-9-3 芝マツラビル4F<br>
          TEL 03-6809-4521<br>
          FAX 03-6809-4529<br>
          <br>
          【関西支店】<br />
          〒541-0052 大阪府大阪市中央区安土町1-3-5 安土町センタービル2F<br>
          TEL 06-6210-2013<br>
          FAX 06-6210-2024<br>
          <br>
          【福岡事業所】<br>
          〒812-0016<br>
          福岡県福岡市博多区博多駅南2-8-16 東洋マンション駅南スターオフィス211<br>
          TEL 092-474-0858<br>
          FAX 092-474-0857
        </p>
        <p class="u-mb-0 u-mb-0-pc u-mt-0-tab u-mt-0-sp">
          ※緊急事態宣言の発令を受け、当面の間電話によるお問合せ受付は休止させて頂きます。
        </p>
      </div>
    </div>

    <div class="c-block">
      <div class="c-richtext">
        <h3 class="u-fs-20 u-fw-bold u-mb-20">個人情報の取り扱いについて</h3>
        <p>
          個人情報の取り扱いについて
          NTTデータでは、当社が定めた「個人情報保護方針」に基づき、当ホームページのプライバシーポリシーを定めております。
          <br />
          <!-- ご入力いただいたお客様の情報は、当ホームページのプライバシーポリシーに則り適切に取り扱い、これらで定める範囲内で、サービスの提供やご案内等のために利用させていただいております。
          <br /> -->
          <a href="/info/privacy_policy" target="_blank"
            ><span style="text-decoration: underline">個人情報保護方針</span
            ><em class="link-ico-white icon-right ico-size"></em
          ></a>
        </p>
        <p>
          お問い合わせに回答するため、当社グループ会社および商品・サービスのサポート業務を委託している会社にお客様の情報を開示することがあります。また、回答は当社グループ会社もしくは業務委託先から直接させていただく場合があります。あらかじめご了承ください。
          <br />
          また、当社が取得する個人情報のお取扱いについて、個人情報保護法で定められた公表事項等につき以下に掲載しておりますので、ご確認いただきますようお願いいたします。
          <br />
          <a href="/info/privacy_policy/public" target="_blank"
            ><span style="text-decoration: underline"
              >個人情報に関する公表文</span
            ><em class="link-ico-white icon-right ico-size"></em
          ></a>
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ContactView",
};
</script>

<style scoped>
</style>