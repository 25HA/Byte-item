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
                class="article_breif">本篇,带你读懂async~await间的浪漫。关于异步处理问题,ES5的回调让我们陷入回调地狱轮回,后来ES6的Promise带我们走向光明。</div>
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
                class="article_breif">本篇,带你读懂async~await间的浪漫。关于异步处理问题,ES5的回调让我们陷入回调地狱轮回,后来ES6的Promise带我们走向光明。</div>
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
                class="article_breif">本篇,带你读懂async~await间的浪漫。关于异步处理问题,ES5的回调让我们陷入回调地狱轮回,后来ES6的Promise带我们走向光明。</div>
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
                <img src="../assets/IndexView_canlindar.png" alt="日历"/>
              </div>
              <div class="top_hello">
                <span>中午</span>好!
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
          <div class="about_activity_wrap">
            <img src="../assets/IndexView_activity.webp" alt="">
          </div>
          <div class="about_books_wrap">
            <img src="../assets/IndexView_books.webp" alt="">
          </div>
          <div class="about_app_wrap">
            <div class="app_left_wrap">
              <img src="../assets/IndexView_QRcode.png" alt="">
            </div>
            <div class="app_right_wrap">
              <div class="app_title">下载稀土掘金APP</div>
              <div class="app_info">一个帮助开发者成长的社区</div>
            </div>
          </div>
        </div>

        <!-- 作者榜 -->
        <div class="list_author_wrap">
          <div class="author_title">
            🎖️作者榜
          </div>

          <div class="author_list">
            <div class="author_icon">
              <img src="../assets/IndexView_QRcode.png" />
            </div>
            <div class="author_info">
              <div class="info_nickname">
                大鸡腿同学
                <span class="info_level">
                  <img src="../assets/IndexView_status.png" />
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
.content_wrap {
  width: 50%;
  margin-left: 30rem;
  background-color: red;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  overflow: auto;
  //   中间内容区
  .content_main {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #fff;
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
    width: 25rem;
    padding:0 0 0 1rem;
    box-sizing: border-box;
    // background-color: #bfa;
    .list_attendance_wrap{
      width: 24rem;
      padding: 1.5rem;
      box-sizing: border-box;
      margin-bottom: 1rem;
      background-color: #fff;
      .list_attendance{
        display: flex;
        flex-direction: column;
        justify-content: center;
        .attendance_top{
          display: flex;
          align-items: center;
          position: relative;
          // background-color: #bfa;
          .top_logo{
            width: 2rem;
            margin-right: 1rem;
            img{
              width: 100%;
            }
          }
          .top_hello{
            font-size: 2rem;
            color: #17181A;
          }
          .top_result{
            // position: absolute;
            // right: 0;
            width: 6rem;
            height: 3rem;
            background-color: #DBEAFF;
            color: #5F8EF6;
            text-align: center;
            line-height: 3rem;
            border-radius: 1rem;
          }
        }
        .attendance_bottom{
          margin-top: 1rem;
          width: 100%;
          // background-color: #bfa;
          text-align: center;
          color: #63686C;
          span{
            font-size: 1.4rem;
            color: #5F8EF6;
          }
        }
      }
    }
    .list_about_wrap{
      width: 100%;
      height: 5rem;
      display: flex;
      flex-direction: column;
      .about_activity_wrap,.about_books_wrap,.about_app_wrap{
        width: 24rem;
        height: 20rem;
        margin-bottom: 1rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .about_app_wrap{
        width: 24rem;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        .app_left_wrap{
          width: 5rem;
          height: 5rem;
          margin-right: 1rem;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .app_right_wrap{
          flex: 1;
          // background-color: red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          line-height: 1.5;
          .app_title{
            color: #343539;
            font-size: 1.4rem;
            font-weight: 500;
          }
          .app_info{
           font-size: 1.2rem;
            color: #ABAFB2;
          }
        }
      }
    }
    .list_author_wrap{
      width: 24rem;
      background-color: #fff;
      margin-top: 43rem;
      margin-bottom: 1rem;
      .author_title{
        font-size: 1.5rem;
        padding: 1rem;
        box-sizing: border-box;
        border-bottom: 1px solid #F5F5F5;
      }
      .author_list{
        display: flex;
        align-items: center;
        padding: 1rem;
        box-sizing: border-box;
        border-bottom: 1px solid #F5F5F5;
        .author_icon{
            width: 4.6rem;
            height: 4.6rem;
            margin-right: 1rem;
            border-radius: 50%;
            overflow: hidden;
            img{
              width: 4.6rem;
              height: 4.6rem;
            }
          }
        .author_info{
          .info_nickname{
            font-size: 1.6rem;
            color: #2B2B2B;
            .info_level{
              display: inline-block;
              width: 3.5rem;
              height: 1.6rem;
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
          .info_status{
            font-size: 1.4rem;
            color: #8F8F8F;
            line-height: 2;
          }
        }
      }
      .author_more{
        font-size: 1.6rem;
        color: #1D8BFF;
        line-height: 2;
        text-align: center;
      }
    }
    .list_introduce_wrap{
      width: 100%;
      background-color: #fff;
    }
  }
}
</style>

