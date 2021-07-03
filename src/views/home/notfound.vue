<template>
    <div class="error-area bg-img  section-padding-1" style="background-image:url(../../assets/themes/bag/images/bg/bg-2.jpg);">
        <div class="error-content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <h1>404</h1>
                        <h3>ohh! page not found</h3>
                        <p> It seems we can't find what you're looking for. Perhaps searching can help or go back to <a href="/index">Homepage</a></p>
                        <div class="search-style-4">
                            <form action="#">
                                <input type="text" placeholder="Search …">
                                <button class="button-search-4"><i class="icon_search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
