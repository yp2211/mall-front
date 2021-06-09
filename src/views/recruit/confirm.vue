<template>
  <main class="l-main">
    <div class="c-block-content-header c-bg-smart-blue">
      <div class="c-block-content-header-wrapper">
        <ul class="c-block-content-header-breadcrumb">
          <li>
            <a href="/">ホーム</a>
          </li>
          <li>
            <a href="/recruit">採用情報</a>
          </li>
        </ul>

        <h1 class="c-block-content-header-head">キャリア採用 応募</h1>
        <div class="c-block-content-header-bottom">
          <div class="c-block-content-header-bottom-left">
            <div class="c-block-content-header-link">
              <a class="c-btn-detail" href="/contact">お問い合わせ</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="c-block">
      <div class="c-richtext">
        <h2 class="c-head-lg-b u-ta-left u-fs-20 u-ff-noto-sans">
          応募における個人情報収集の同意書
        </h2>
        <p>
          この度は、ニュータッチイノベーション株式会社へのご応募、誠にありがとうございます。
          当社は採用選考の際、応募書類をご提出いただくことにより貴方に関する個人情報をお預かりいたします。
          事項について内容をご確認の上、同意いただけましたら下記の「同意」をクリックしていただくようお願いいたします。
          なお、同意いただけない場合、応募書類はお預かりできません。ご了承ください。
        </p>
        <!-- <h4 class="u-fs-14 u-fw-normal u-mt-20">１．個人情報管理責任者</h4> -->
        <ol>
          <li>
            <p>個人情報管理責任者</p>
            <p>ニュータッチイノベーション株式会社 管理本部　朝日</p>
          </li>
          <li>
            <p>個人情報の収集・利用目的について</p>
            <p>
              当社の社員選考のために収集し、当社の採用業務以外で利用することはありません。
            </p>
            <p>
              また、採用された際は弊社の人事労務管理のために利用いたします。
            </p>
            <p>
              個人情報を当社にご提供いただくことは、任意によるものです。但し、ご提供いただけない場合は、採用の対象外になることがあります。
            </p>
          </li>
          <li>
            <p>第三者提供について</p>
            <p>
              今回お預かりした個人情報は、貴方の同意を得ず第三者に開示・提供・預託することはございません。
            </p>
          </li>
          <li>
            <p>開示・訂正・削除について</p>
            <p>
              弊社が保有する貴方の個人情報について、開示を請求することができます。開示の結果、個人情報の訂正・削除を請求することもできます。
              但し、採用判断にかかわる情報の開示は、採用業務の適正な実施に著しい支障を及ぼす恐れがあるため応じておりません。
              貴方ご自身の個人情報の開示・訂正・削除を請求される場合は、下記連絡先にご連絡をお願いいたします。本手続きにあたっては、貴方がご自身であることを確認の上、対応させていただきます。
              なお、採用選考後、不採用となった場合は、お預かりした応募書類はご返却しないものとさせていただき、当社で責任もって、ご提供いただいた採用応募者の履歴書等全ての個人情報は速やかに破棄いたします。
            </p>
          </li>
        </ol>
      </div>
    </div>

    <div class="c-block">
      <div class="c-richtext" style="text-align: right">
        <p class="spacer-top-m">
          2017年9月1日<br />
          ニュータッチイノベーション株式会社<br />
          個人情報相談窓口<br />
          e-mail：privacy@newtouch.jp<br />
          電話：03-6809-4521（受付時間：平日9時～17時)<br />
        </p>
      </div>
    </div>

    <div class="c-block">
      <div class="c-richtext">
        <p class="link-btn">
          <a href="mailto:customer@newtouch.jp">同意</a>
        </p>
      </div>
    </div>
  </main>
</template>


<script>
export default {
  name: "RecruitConfirmView",
};
</script>

<style scoped>
.link-btn a {
  color: #5876aa;
  letter-spacing: 0.3em;
  font-size: 1.4rem;
  line-height: 1.8;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  position: relative;
}
.link-btn a::before,
.link-btn a::after {
  content: "";
  display: inline-block;
  border: 1px solid;
  border-right: none;
  border-radius: 25px 0 0 25px;
  width: 25px;
  height: 50px;
  margin: 0 10px 0 0;
  transition: 0.2s ease;
  box-sizing: border-box;
  color: #4c4c4c;
}
.more-btn a::after,
.link-btn a::after {
  border: 1px solid;
  border-left: none;
  border-radius: 0 25px 25px 0;
  margin: 0 0 0 10px;
}
.link-btn a:hover::before,
.link-btn a:hover::after {
  color: #5876aa;
}
.link-btn a:hover::before {
  transform: translate(-10px, 0);
}
.link-btn a:hover::after {
  transform: translate(10px, 0);
}
</style>