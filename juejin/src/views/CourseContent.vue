<template>
 <div class="page">
     <div class="main">
    <div class="main-left">
        <div class="main-left-top">
            <div class="main-left-top-left">
                <div class="all">全部</div>
                <div class="newest">最新</div>
                <div class="hottest">最热</div>
                <div class="price">
                <div class="price-left">价格</div>
                <div class="price-right">
                    <div class="price-right-top"></div>
                    <div class="price-right-bottom"></div>
                </div>
                </div>
                
            </div>
            <div class="main-left-top-right">
                <img src="../assets/search.png" alt="">
                <div class="search">课程搜索</div>
                </div>
        </div>

        <div class="main-left-content">
            <div class="pic"><img src="../assets/courseContent-pic.png" alt=""/></div>
            <div class="bookInfo">
                <div class="title">
                    <div class="title-left"></div>
                    <div class="title-right">基于Vite的组件库工程化实战</div>
                </div>
                <div class="dis">1:1还原开源前端组件库搭建全过程</div>
                <div class="userInfo">
                    <div class="userImg"></div>
                    <div class="userName">全栈然叔</div>
                    <div class="leverImg"><img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-6.b69935b.png" alt=""></div>
                    <div class="vipImg"><img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/ffdbad884aa0e7884cbcf924226df6ce.svg" alt=""></div>
                    <div class="userFrom">公众号：前端大班车</div>
                </div>
            </div>
        </div>
        <div class="main-right-content">

        </div>
    </div>
    <div class="main-right"></div>
  </div>
 </div>
</template>

<script>
export default {

}
</script>

<style scoped>
html{
    font-size: 10px;
}
.page{
    padding: 0 20%;
    box-sizing: border-box;
}
.main{
    width: 100%;
    margin-top: 1rem;
}
.main-left{
    width: 75%;
    background: #fff;
}
.main-left-top{
    height: 6rem;
    color: #8a919f;
    display: flex;
    justify-content: space-between;
    padding: 0 2.2rem;
    box-sizing: border-box;
}
.main-left-top-left{
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    line-height: 6rem;
}
.all{
    margin-right: 2.8rem;
}
.newest{
    margin-right: 2.8rem;
}
.hottest{
    margin-right: 2.8rem;
}
.price{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.price-left{
    margin-right: 0.2rem;
}
.price-right{
    height: 1.4rem;
}
.price-right-top{
   width: 0;
   height: 0;
   border: 0.3rem solid transparent;
   border-bottom-color: #c4c4c4;
   margin-bottom: 0.15rem;
}
.price-right-bottom{
   width: 0;
   height: 0;
   border: 0.3rem solid transparent;
   border-top-color: #c4c4c4;
}
.main-left-top-right{
    display: flex;
    color: black;
    font-size: 1.4rem;
    line-height: 6rem;
    align-items: center;
}
.main-left-top-right img{
    width: 1.7rem;
    height: 1.7rem;
    margin-right: 0.4rem;
}
.main-left-content{
    height: 19rem;
    background: #fff;
    padding: 2.5rem;
    box-sizing: border-box;
}
.pic{
    width: 10rem;
    height: 14rem;
}
.pic img{
    width: 100%;
    height: 100%;
}
.main-left-content{
    display: flex;
}
</style>