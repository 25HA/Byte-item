<template>
  <div class="boiling">  <!-- 沸点页面容器 -->
    <div class="kindsBar">
        <div class="kinds">
            <img class="icon" src="../assets/boilingView-newest1.png" alt="">
            最新
        </div>
        <div class="kinds">
            <img class="icon" src="../assets/boilingView-hot.png" alt="">
            热门
        </div>
        <div class="kinds">
            <img class="icon" src="../assets/boilingView-attention.png" alt="">
            关注
        </div>
        <div class="kinds">
            <img class="icon" src="../assets/boilingView-mycircle.png" alt="">
            我的圈子
        </div>
        <div class="kinds">
            <img class="icon" src="../assets/boilingView-recCircle.png" alt="">
            推荐圈子
        </div>
    </div>
    <div class="content"></div>
    <div class="myself"></div>
  </div>
</template>

<script>
export default {
  
};
</script>
<style lang="less">
*{
    margin: 0;
    padding: 0;
}
html{
    font-size: 10px;
}
.boiling{
    display: flex;
}
.kindsBar{
    width: 15rem;
    height: 40rem;
    background: #fff;
    margin-top: 2rem;
    margin-left: 15rem;
    border-radius: 0.5rem;

    .kinds {
    height: 3rem;
    background: #fff;
    margin: 0.5rem;
    line-height: 3rem;
    color: #97A2B2;
    font-weight: 400;
    display: flex;
    border-radius: 0.5rem;
    
    }
    .kinds:hover{
        color: #237BFF;
        background: #EAF2FF;
    }
    .icon{
        width: 1.5rem;
        height: 1.5rem;
        margin: 0.7rem;
    }
   
}


</style>

