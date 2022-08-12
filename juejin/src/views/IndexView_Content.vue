<template>
  <div class="IndexView_Content">
    <!-- 首页/综合内容区 -->
    <div class="content_wrap">
      <!-- 中间内容区 -->
      <div class="content_main">
        <div class="topbar">
          <div class="item item_active">推荐</div>
          <div class="line">|</div>
          <div class="item">最新</div>
          <div class="line">|</div>
          <div class="item">热榜</div>
        </div>

        <!-- 文章列表 -->
        <div class="article_wrap">
          <div class="article_content">
            <div class="article_info">
              <div class="article_topbar">
                <router-link to="/" class="item username">来碗盐焗星球</router-link>
                <div class="item line">|</div>
                <div class="item">23天前</div>
                <div class="item line">|</div>
                <div class="item">Javascript</div>
              </div>
              <div class="article_title">消灭异步回调,还得是async-await</div>
              <div class="article_breif">本篇,带你读懂async~await间的浪漫。关于异步处理问题,ES5的回调让我们陷入回调地狱轮回,后来ES6的Promise</div>
              <div class="article_show">
                <div class="show_eyes">
                    <img src="../assets/IndexView_shallow_eye.png" alt="浏览">
                    <span>4855</span>
                </div>
                <div class="show_thumbs">
                    <img src="../assets/IndexView_shallow_thumb.png" alt="点赞">
                    <span>100</span>
                </div>
                <div class="show_comments">
                    <img src="../assets/IndecView_shallow_comment-o.png" alt="评论">
                    <span>31</span>
                </div>
                <div class="show_more">
                    ...
                </div>

              </div>
            </div>

            <div class="article_image">
              <img src="../assets/IndexView_article_cover.webp" alt="cover">
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧列表 -->
      <div class="content_list">右侧列表区</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
html {
  font-size: 10px;
  width: 100%;
}
body {
  width: 100%;
  display: flex;
  justify-content: start;
}
.content_wrap {
  width: 50%;
  margin-left: 30rem;
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  //   中间内容区
  .content_main {
    width: 70%;
    display: flex;
    flex-direction: column;
    background-color: #bfa;
    .topbar {
      width: 100%;
      height: 4.8rem;
      padding-left: 2rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f1f1f1;
      .item {
        font-size: 1.4rem;
        margin-right: 1.5rem;
        color: #909090;
      }
      .line {
        font-size: 1rem;
        margin-right: 1.5rem;
        color: #eaeaea;
      }
      .item_active {
        color: #1e80ff;
      }
      .item:hover {
        cursor: pointer;
        color: #1e80ff;
      }
    }
    .article_wrap {
        width: 100%;
        padding: 1.5rem;
        box-sizing: border-box;
        .article_content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #f1f1f1;
            .article_info{
                width: 70%;
                // background-color: #ff6799;
                display: flex;
                flex-direction: column;
                .article_topbar{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    .item{
                        font-size: 1.4rem;
                        color: #4E5969;
                        margin-right: 1rem;
                    }
                    .line{
                        color: #EAEAEA;
                    }
                    .username:hover{
                        cursor: pointer;
                        color: #1e80ff;
                    }
                }
                .article_title{
                    width: 100%;
                    font-size: 2rem;
                    font-weight: 600;
                    color: #1D2129;
                    line-height: 2;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .article_breif{
                    width: 100%;
                    font-size: 1.4rem;
                    color: #86909C;
                }
            }
        }
    }
  }
  //   右侧列表
  .content_list {
    background-color: #fff;
  }
}
</style>

