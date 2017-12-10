<template>
  <div class="cartcontrol">
    <div @click.stop.prevent="decreaseCart" transition="move" class="cart-decrease" v-show="food.count>0">
      <span class="inner icon-remove_circle_outline"></span>
    </div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div @click.stop.prevent="increaseCart" class="cart-increase icon-add_circle"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';

  export default{
    props:{
      food:{
        type:Object
      }
    },
    methods:{
      increaseCart(e){
        if(!e._constructed){
          return;
        }
        if(!this.food.count){
//          this.food.count = 1;
          Vue.set(this.food,'count',1);
        }else{
          this.food.count ++;
        }
        this.$dispatch('cart.increase',e.target);
      },
      decreaseCart(e){
        if(!e._constructed){
          return;
        }
        if(this.food.count){
          this.food.count --;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">


  .cartcontrol
    font-size:0
    .cart-decrease
      display:inline-block
      padding:6px
      transition:all 0.4s linear
      &.move-transition
        opacity: 1
        transform:translate3d(0,0,0)
        .inner
          display:inline-block
          font-size: 24px
          line-height: 24px
          color:rgb(0,160,220)
          transition:all 0.4s linear
          transform:rotate(0)
      &.move-enter,&.move-leave
        opacity: 0
        transform:translate3d(24px,0,0)
        .inner
          transform:rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align:top
      width:12px
      padding-top:6px
      line-height: 24px
      text-align:center
      font-size: 10px
      color:rgb(147,153,159)
    .cart-increase
      display:inline-block
      padding:6px
      font-size: 24px
      line-height: 24px
      color:rgb(0,160,220)

</style>
