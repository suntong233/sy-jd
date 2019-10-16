<template>
    <div class="st-newpeoplecontainer">
        <div class="st-newpeoplecontainer-top">
            <img onclick="window.open('https://h5.m.jd.com/babelDiy/Zeus/3TF5zx1uKaXie125DCh3jU4sYWUy/index.html#/','_self')" src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/49601/16/12206/115887/5d91b4d5E34709952/aba2bcb4855e6e52.png!q70.jpg.dpg">
            <img onclick="window.open('https://pro.m.jd.com/mall/active/4HinegyNut8exydNTNHQzZhmKpsF/index.html','_self')" src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/32449/33/15631/174497/5cc2d86bE0289110c/9c53e25651659d43.png!q70.jpg.dpg">
        </div>
        <div class="st-newpeopleBanner">
            <img onclick="window.open('https://wq.jd.com/webportal/event/27126?ptag=138097.1.9&sceneval=2','_self')" src="//m.360buyimg.com/mobilecms/jfs/t1/81904/27/12903/117678/5da5c590Eb6256913/8aa3848d579d2f4b.gif">
        </div>
    </div>
</template>

<script>
export default {
    name: "newpeople"
}
</script>

<style scoped>
    .st-newpeoplecontainer{
        width: 100%;
    }
    .st-newpeoplecontainer-top{
        width: 100%;
        overflow: hidden;
        margin: 8px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 8px;
    }
    .st-newpeopleBanner{
        width: 100%;
        overflow: hidden;
    }
    .st-newpeopleBanner>img{
        width: 100%;
    }
    .st-newpeoplecontainer-top>img:nth-child(1){
        border-radius: 8px 0 0 8px;
    }
    .st-newpeoplecontainer-top>img:nth-child(2){
        border-radius: 0 8px 8px 0;
    }
    .st-newpeoplecontainer-top>img{
        width: 50%;
    }
</style>