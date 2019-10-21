<template>
  <div class="goods_detail_top">
        <div class="goods_detail_top_container">
                <div @click="lzback"><span class="el-icon-arrow-left"></span></div>
                <div @click="lzshow = !lzshow"><span class="etc" >···</span></div>
        </div>
        <showMenu v-if="lzshow"></showMenu>
  </div>
</template>

<script>
import showMenu from "../public/showMenu.vue";   // 显示隐藏菜单
export default {
    data(){
        return{
            lzshow:false
        }
    },
     methods:{
         lzback(){
             this.$router.go(-1)
         },
     },
     components: {
         showMenu
     }
}
</script>

<style scoped>
    .goods_detail_top{
        width: 100%;
        padding: 10px 8px;
    }

    .goods_detail_top_container{
        width: 100%;
        display: flex;
        justify-content: space-between;
        line-height: 30px;
         align-items: center
    }

     .goods_detail_top_container div{
         width: 30px;
         height: 30px;
         background-color: grey;
         display: flex;
         justify-content: center;
         align-items: center;
        border-radius: 50%

     }

     .goods_detail_top_container div span{
         color: #fff;
         display: inline-block;
         font-size:20px
     }

     .goods_detail_top_container div .etc{
         letter-spacing: 2px;
         display: flex;
         justify-content: center;
         align-items: center;
         padding-left: 2px;
         font-size: 25px;
     }
</style>