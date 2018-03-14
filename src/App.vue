<template>
  <div id="app">
    <app-header :seller="seller"></app-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import {urlParse} from './common/js/util';
  import Header from './components/header/header.vue';

  export default {
    data(){
      return {
        seller:{
          id:(()=>{
            let queryParam = urlParse();
            return queryParam.id;
          })()
        }
      };
    },
    created(){
      const url = 'https://gist.githubusercontent.com/Zhouqchao/64bfb02f304a0d6075c171285569e54d/raw/f45b3e3ea32f8f309526ca36a0b70212e9e48ee0/vue-sell-data.json';
      this.$http.get(url + '?id=' + this.seller.id).then((res) => {
        res = res.body.seller;
        this.seller = Object.assign({},this.seller,res);
      });
    },
    components: {
      appHeader: Header
    }
  };

</script>

<style  lang="stylus" rel="stylesheet/stylus">

  @import "./common/stylus/mixin.styl"

    .tab
      display:flex
      width: 100%
      height:40px
      line-height 40px
      //border-bottom:1px solid rgba(7,17,27,0.1)
      border-1px(rgba(7,17,27,0.1))
      .tab-item
        flex: 1
        text-align:center
        & > a
          display:block
          font-size 14px
          color:rgb(77,85,93)
          &.active
            color:red

</style>
