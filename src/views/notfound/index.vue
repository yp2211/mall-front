<template>
  <main class="l-main c-bg-human-blue is-error">
    <div class="c-block-content-header c-bg-human-blue">
      <div class="c-block-content-header-wrapper">
        <h1 class="c-block-content-header-head u-fw-bold c-color-black u-ff-catamaran">Not found</h1>
      </div>
    </div>
    <section class="c-block">
      <h2 class="c-head-lg-b u-fs-26 u-mb-0 u-ff-catamaran">Error code: 404</h2>
      <div class="c-color-black c-block-error-text">
        お探しのページはみつかりませんでした。
      </div>
    </section>
    <section class="c-block u-mb-40">
      <div class="u-fw-bold u-fs-22 u-mb-10 c-color-black u-lh-17">
        メニューから探す:
      </div>
      <ul class="c-list-caret u-fs-20">
        <li><a href="/solution">ソリューション</a></li>
        <li><a href="/about">会社概要</a></li>
        <li><a href="/news">ニュース</a></li>
        <li><a href="/contact">お問合せ</a></li>
      </ul>
      <ul class="c-list-caret u-mt-30">
        <li><a href="/recruit">採用情報</a></li>
        <li><a href="/about/access">アクセス</a></li>
        <li><a href="/info/privacy_policy">個人情報保護方針</a></li>
        <li>
          <a href="/info/privacy_policy/public">個人情報に関する公表文</a>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: "NotFoundView",
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
