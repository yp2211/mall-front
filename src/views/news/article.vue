<template>

  <main class="l-main">

    <div class="c-block-content-header  c-bg-smart-blue">
      <div class="c-block-content-header-wrapper">

        <ul class="c-block-content-header-breadcrumb">
          <li v-for="nav in navs">
            <a v-bind:href="nav.href">{{ nav.name }}</a>
          </li>
        </ul>

        <h1 class="c-block-content-header-head">{{title}}</h1>
        <div class="c-block-content-header-bottom">
          <div class="c-block-content-header-bottom-left">
            <div class="c-block-content-header-link">
              <a class="c-btn-detail" href="/contact">お問い合わせ</a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="c-block ">
      <div class="c-richtext">
        <div class="col-md-12 col-sm-12 col-xs-12 no-gutter same-height-target" style="height: 89.33px;">
          <div class="col-md-6 col-sm-12 col-xs-12 topblogtitle no-gutter">

            <p class="small no-wide secondary-type">{{updated}}</p>
<!--            <p class="small no-wide secondary-type">{{author}}</p>-->
          </div>
        </div>
        <div class="c-richtext" v-html="content"></div>
      </div>
    </div>

    <div class="c-block ">

    </div>

  </main>

</template>

<script>
import CommonContents from "../../components/CommonContents";

export default {
  name: "ArticleView",
  props: ['id'],
  data() {
    return {
      jsonData: undefined,
    }
  },
  computed: {
    navs: {
      get() {
        if (this.jsonData)
          return this.jsonData.nav;

        return undefined;
      }
    },
    title: {
      get() {
        if (this.jsonData)
          return this.jsonData.data.title;

        return undefined;
      }
    },
    updated: {
      get() {
        if (this.jsonData)
          return this.jsonData.data.updated;

        return undefined;
      }
    },
    author: {
      get() {
        if (this.jsonData)
          return this.jsonData.data.author;

        return undefined;
      }
    },
    content: {
      get() {
        if (this.jsonData)
          return this.jsonData.data.content;

        return undefined;
      }
    }
  },
  created() {
    console.log(this.id);
    fetch(CommonContents.data.api.url + 'article_'+this.id+'.json')
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.jsonData = json;
        })
  }
}
</script>

<style scoped>

</style>