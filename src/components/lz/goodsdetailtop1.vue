<template>
  <div class="goods_detail_top1">
        <div class="goods_detail_top_container1">
                <div class="leftdiv1" @click="lzback1"><span class="el-icon-arrow-left"></span></div>
                <div class="goods_detail_top_container1_middle">
                    <div style="color:#e4393c">商品</div>
                    <div>评价</div>
                    <div>详情</div>
                    <div>推荐</div>
                </div>
                <div class="leftdiv2" @click="lzshow1 = !lzshow1"><span  class="etc1">···</span></div>
        </div>
        <showMenu v-if="lzshow1"></showMenu>
  </div>
</template>

<script>
import showMenu from "../public/showMenu.vue";   // 显示隐藏菜单
export default {
    data(){ return{
         lzshow1:false
    }
       
    },
     methods:{
         lzback1(){
             this.$router.go(-1)
         }
     },
     components: {
         showMenu
     }
}
</script>

<style scoped>
    .goods_detail_top1{
        width: 100%;
        padding: 10px 8px;
        background-color: #fff;
        border: 1px solid #f5f5f5
    }

    .goods_detail_top_container1{
        width: 100%;
        display: flex;
        justify-content: space-between;
        line-height: 30px;
        align-items: center
    }

     .leftdiv1{
         width: 30px;
         height: 30px;
         background-color: #fff;
         display: flex;
         justify-content: center;
         align-items: center;
        border-radius: 50%

     }

      .leftdiv2{
         width: 30px;
         height: 30px;
         background-color: #fff;
         display: flex;
         justify-content: center;
         align-items: center;
        border-radius: 50%

     }

     .goods_detail_top_container1 div span{
         color: #252525;
         display: inline-block;
         font-size:20px
     }

     .goods_detail_top_container1 div .etc1{
         letter-spacing: 2px;
         display: flex;
         justify-content: center;
         align-items: center;
         padding-left: 2px;
         font-size: 25px;
     }

     .goods_detail_top_container1_middle {
         flex: 1;
         margin: 0 45px;
         display: flex;
     }

     .goods_detail_top_container1_middle div{
         width: 25%;
         height: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
         font-size: 12px;
         color: #252525;
     }
  
</style>