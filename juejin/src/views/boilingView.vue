<template>
  <div class="boiling">
    <!-- 沸点页面容器 -->
    <div class="kindsBar">
      <div class="kinds">
        <i class="iconfont icon-shijian"></i>
        <span>最新</span>
      </div>
      <div class="kinds">
        <i class="iconfont icon-remen"></i>
        <span>热门</span>
      </div>
      <div class="kinds">
        <i class="iconfont icon-zhongdianguanzhu"></i>
        <span>关注</span>
      </div>
      <div class="kinds">
        <i class="iconfont icon-quanzi"></i>
        <span>我的圈子</span>
      </div>
      <div class="kinds">
        <i class="iconfont icon-xiangmutuijian"></i>
        <span>推荐圈子</span>
      </div>
      <div class="recCircle">内推招聘广场</div>
      <div class="recCircle">技术交流圈</div>
      <div class="recCircle">掘友请回答</div>
      <div class="recCircle">树洞一下</div>
      <div class="recCircle">上班摸鱼</div>
      <div class="recCircle">更多</div>
    </div>
    <div class="main">
      <div class="content">
        <!-- 输入框 -->
        <div class="input">
          <textarea name="textinput" placeholder="快和掘友一起分享新鲜事！告诉你个小秘密，发布沸点时添加圈子和话题会被更多掘友看到哦~"></textarea>
        </div>
        <!-- 发布 -->
        <div class="release">
          <div class="release-left">
            <div class="element">
              <i class="iconfont icon-biaoqing"></i>
              <span>最新</span>
            </div>
            <div class="element">
              <i class="iconfont icon-charutupian"></i>
              <span>图片</span>
            </div>
            <div class="element">
              <i class="iconfont icon-lianjie"></i>
              <span>链接</span>
            </div>
            <div class="element">
              <i class="iconfont icon-huati"></i>
              <span>话题</span>
            </div>
          </div>
          <div class="release-right">发布</div>
        </div>
      </div>
      <div class="item"></div>
    </div>

    <div class="myself"></div>
  </div>
</template>

<script>
export default {};
</script>~
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 10px;
}
.boiling {
  display: flex;
}
.kindsBar {
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
    color: #96a7b7;
    font-weight: 400;
    display: flex;
    border-radius: 0.5rem;
    padding-left: 1.5rem;
    span {
      margin-left: 0.3rem;
    }
  }
  .kinds:hover {
    color: #237bff;
    background: #eaf2ff;
  }
  .recCircle {
    height: 3rem;
    line-height: 3rem;
    color: #a3aeb7;
    margin: 0.5rem;
    padding-left: 3.4rem;
  }
  .recCircle:hover {
    background: #f7f8fa;
    color: #237bff;
  }
}
.content {
  background: #fff;
  width: 66rem;
  height: 20rem;
  margin: 2rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  .input {
    width: 95%;
    height: 10rem;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #83d5ff;
    border-radius: 0.5rem;
    textarea {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      resize: none;
    }
  }
  .release {
    height: 9rem;
    width: 100%;
    line-height: 9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    //   background: #237bff;
    .release-left {
      display: flex;
      flex: 1;
      color: #605b60;
      font-size: 1rem;
    }
    .element {
      span {
        margin-left: 0.5rem;
        margin-right: 1rem;
      }
    }
    .element:hover{
        color: #237bff;
    }
    .release-right {
      background: #d2e6ff;
      width: 8rem;
      height: 3rem;
      line-height: 3rem;
      text-align: center;
      color: #f3fdff;
      border-radius: 0.5rem;
      margin-right: 0.5rem;
    }
  }
}
</style>

