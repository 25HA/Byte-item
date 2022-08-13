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
              <div
                class="article_breif"
              >本篇,带你读懂async~await间的浪漫。关于异步处理问题,ES5的回调让我们陷入回调地狱轮回,后来ES6的Promise带我们走向光明。</div>
              <div class="article_show">
                <div class="show_eyes">
                  <img src="../assets/IndexView_dark_eye.png" alt="浏览" />
                  <span>4855</span>
                </div>
                <div class="show_thumbs">
                  <img src="../assets/IndexView_dark_thumb.png" alt="点赞" />
                  <span>100</span>
                </div>
                <div class="show_comments">
                  <img src="../assets/IndecView_shallow_comment-o.png" alt="评论" />
                  <span>评论</span>
                </div>
              </div>
            </div>

            <div class="article_image">
              <img src="../assets/IndexView_article_cover.webp" alt="cover" />
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧列表 -->
      <div class="content_list">
        <!-- 签到信息 -->
        <div class="list_attendance_wrap">
          <div class="list_attendance">
            <div class="attendance_top">
              <div class="top_logo">
                <img src alt />
              </div>
              <div class="top_hello">
                <span>中午</span>好
              </div>
              <div class="top_result">已签到</div>
            </div>
            <div class="attendance_bottom">
              你已经连续签到
              <span>27</span> 天
            </div>
          </div>
        </div>

        <!-- 掘金相关活动以及掘金app -->
        <div class="list_about_wrap">
          <div class="about_activity_wrap"></div>
          <div class="about_books_wrap"></div>
          <div class="about_app_wrap"></div>
        </div>

        <!-- 作者榜 -->
        <div class="list_author_wrap">
          <div class="author_title">
            <img src alt />
            <span>作者榜</span>
          </div>

          <div class="author_list">
            <div class="author_icon">
              <img src alt />
            </div>
            <div class="author_info">
              <div class="info_nickname">
                大鸡腿同学
                <span class="info_level">
                  <img src alt />
                </span>
              </div>
              <div class="info_status">Java架构师</div>
            </div>
          </div>

          <div class="author_more">
            完整榜单
            <span>></span>
          </div>
        </div>

        <!-- 稀土掘金指南 -->
        <div class="list_introduce_wrap">
          <div class="introduce_juejin">
            <img src alt />
            稀土掘金漫游指南
          </div>
        </div>

        <!-- 掘金详细信息 -->
        <div class="list_detail_wrap"></div>
      </div>
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
// 之间内容
.content_wrap {
  width: 50%;
  margin-left: 30rem;
  // background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  //   中间内容区
  .content_main {
    width: 60%;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    margin-right: 3rem;
    .topbar {
      width: 100%;
      height: 4.8rem;
      padding-left: 2rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e5e5e5;
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
      // background-color: #ff6700;
      .article_content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e5e5e5;
        .article_info {
          // width: 75%;
          flex: 1;
          // background-color: #ff6799;
          margin-right: 1rem;
          display: flex;
          flex-direction: column;
          .article_topbar {
            width: 100%;
            display: flex;
            align-items: center;
            .item {
              font-size: 1.4rem;
              color: #4e5969;
              margin-right: 1rem;
            }
            .line {
              color: #eaeaea;
            }
            .username:hover {
              cursor: pointer;
              color: #1e80ff;
            }
          }
          .article_title {
            width: 100%;
            font-size: 1.8rem;
            font-weight: 600;
            // background-color: #fff;
            color: #1d2129;
            line-height: 2;
            // 超过一行打点
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .article_breif {
            width: 100%;
            // background-color: #fff;
            font-size: 1.4rem;
            color: #86909c;
            line-height: 2;
            // 超过两行打点
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            /* 指定行 */
            -webkit-line-clamp: 1;
          }
          .article_show {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
            .show_eyes,
            .show_thumbs,
            .show_comments {
              width: 4.5rem;
              // background-color: #bfa;
              margin-right: 1rem;
              display: flex;
              align-items: center;
              justify-content: space-between;
              img {
                width: 1.5rem;
                margin-right: 0.3rem;
              }
              span {
                color: #868686;
              }
            }
          }
        }
        .article_image {
          position: relative;
          transform: translateY(18%);
          img {
            width: 12rem;
          }
        }
      }
    }
  }
  //   右侧列表
  .content_list {
    background-color: #fff;
    height: 100%;
  }
}
</style>

