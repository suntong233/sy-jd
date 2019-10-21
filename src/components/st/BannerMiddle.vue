<template>
  <div v-if="isshow" @click.self="closeBanner" class="bannerBox">
    <div class="bannerContainer">
        <img onclick="window.open('https://h5.m.jd.com/babelDiy/Zeus/4MbKVFewJEL6YEMCDWNZbVe4DUQ5/index.html')" style="width:100%;height:100%" src="//img11.360buyimg.com/aotucms/jfs/t1/62668/9/13527/916581/5daae29eE9b283426/54de7de8179ea6f0.png" alt="">
    </div>
    <div class="closeBtn" @click="closeBanner"><img src="/images/叉号.png"></div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            isshow:false
        }
    },
    created () {
        let that = this
        setTimeout(()=>{
            if(localStorage.hasshowbanner){
                return
            }
            if(that.$store.state.showBanner){
                that.isshow = true
                that.$store.state.showBanner = false
                localStorage.setItem("hasshowbanner", JSON.stringify(1));
            }  
        },1000)
    },
    methods: {
        closeBanner(){
            this.isshow = false
        }
    }
}
</script>

<style scoped>
.bannerBox{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 100000;
}
.bannerContainer{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    width: 210px;
    height: 300px;
    animation: beginInit 500ms;
}
.closeBtn{
    width: 30px;
    height: 30px;
    position: fixed;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
}
.closeBtn>img{
    width: 100%;
}
@keyframes beginInit{
    0%{
        width: 0;
        height: 0;
    }
    50%{
         width: 250px;
        height: 350px;
    }
    100%{
        width: 210px;
        height: 300px;
    }
}
</style>