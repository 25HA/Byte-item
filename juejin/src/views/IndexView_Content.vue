<template>
  <div class="IndexView_Content">
    <!-- 首页/综合内容区 -->
    <div class="content_wrap">
      <!-- 中间内容区 -->
      <div class="content_main">
        <div class="topbar">
          <router-link to="/" class="item item_active">推荐</router-link>
          <div class="line">|</div>
          <router-link to="/" class="item">最新</router-link>
          <div class="line">|</div>
          <router-link to="/" class="item">热榜</router-link>
        </div>
        <!-- 文章列表 -->
        <div class="article_wrap" v-for="(item,index) in articleList" :key="index" @click="handleDetail">
          <div class="article_content">
            <div class="article_info">
              <div class="article_topbar">
                <router-link to="/" class="item username">{{item.username}}</router-link>
                <div class="item line">|</div>
                <div class="item">{{item.date?'1月前':'28天前'}}</div>
                <div class="item line">|</div>
                <router-link to="/" class="item label">{{item.articleLabel}}</router-link>
              </div>
              <div class="article_title">{{item.articleTitle}}</div>
              <div class="article_breif">{{item.articleBreif}}</div>
              <div class="article_show">
                <div class="show_eyes">
                  <div class="iconfont icon-eye"></div>
                  <span>{{item.articleViews}}</span>
                </div>
                <div class="show_thumbs" v-on:click="handleThumbs($event,index)">
                  <div class="iconfont" :class="thumbedArticle.indexOf(index)==-1?'icon-zan':'icon-dianzan_kuai-copy'" ></div>
                  <span>{{item.articleThumbs}}</span>
                </div>
                <div class="show_comments">
                  <div class="iconfont icon-comment"></div>
                  <span>{{item.articleComments}}</span>
                </div>
              </div>
            </div>
            <div v-if="item.article_cover" class="article_image">
              <img :src="item.articleCover" alt="cover" />
            </div>
            <div v-else class="article_image"></div>
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
                <img src="../assets/IndexView_canlindar.png" alt="日历" />
              </div>
              <div class="top_hello">
                <span>{{sometime}}</span>好!
              </div>
              <div class="top_result" v-if="!isPresent" @click="handlePresent">去签到</div>
              <div class="top_result" v-else>已签到</div>
            </div>
            <div class="attendance_bottom">
              你已经连续签到
              <span>{{totalDay}}</span> 天
            </div>
          </div>
        </div>

        <!-- 掘金相关活动以及掘金app -->
        <div class="list_about_wrap" :class="isShow==true?'ShowDetail':''" >
          <div class="about_activity_wrap">
            <img src="../assets/IndexView_activity.webp" alt />
          </div>
          <div class="about_books_wrap">
            <img src="../assets/IndexView_books.webp" alt />
          </div>
          <div class="about_app_wrap">
            <router-link to="/" class="app_left_wrap">
              <img src="../assets/IndexView_QRcode.png" alt />
            </router-link>
            <div class="app_right_wrap">
              <router-link to="/" class="app_title">下载稀土掘金APP</router-link>
              <router-link to="/" class="app_info">一个帮助开发者成长的社区</router-link>
            </div>
          </div>
        </div>

        <!-- 作者榜 -->
        <div class="list_author_wrap">
          <div class="author_title">🎖️作者榜</div>
          <router-link
            :to="item.author_details"
            class="author_list"
            v-for="(item,index) in authorList"
            :key="index"
          >
            <div class="author_icon">
              <img :src="item.author_icon" />
            </div>
            <div class="author_info">
              <div class="info_nickname">
                {{item.author_nickname}}
                <span class="info_level">
                  <img :src="item.author_level" />
                </span>
              </div>
              <div class="info_status">{{item.author_status}}</div>
            </div>
          </router-link>

          <router-link to="/" class="author_more">
            完整榜单
            <span></span>
          </router-link>
        </div>

        <!-- 稀土掘金指南 -->
        <div class="list_introduce_wrap" >
          <router-link
            :to="item.related_details"
            class="introduce_juejin"
            v-for="(item,index) in relatedList"
            :key="index"
          >
            <img :src="item.related_img" />
            <span>{{item.related_title}}</span>
          </router-link>
        </div>

        <!-- 掘金详细信息 -->
        <div class="list_detail_wrap" id="wrap">
          <div class="item_wrap">
            <router-link class="item" to="/">用户协议</router-link>
            <router-link class="item" to="/">营业执照</router-link>
            <router-link class="item" to="/">隐私政策</router-link>
            <router-link class="item" to="/">关于我们</router-link>
            <router-link class="item" to="/">站点地图</router-link>
            <router-link class="item" to="/">使用指南</router-link>
            <router-link class="item" to="/">友情链接</router-link>
            <router-link class="item" to="/">更多文章</router-link>
            <router-link class="item" to="/">京ICP备18012699号-3</router-link>
            <router-link class="item police" to="/">
              <span>
                <img src="../assets/IndexView_police.png" alt />
              </span> 京公网安备11010802026719号
            </router-link>
            <div class="text">版权所有：北京北比信息技术有限公司</div>
            <div class="text">公司地址：北京市海淀区信息路甲28号13层B座13B-5</div>
            <div class="text">公司座机：010-83434395</div>
            <div class="text">举报邮箱： feedback@xitu.io</div>
            <router-link class="item" to="/">©2022 稀土掘金</router-link>
          </div>

          <div class="detail_icon">
            <div class="weibo_icon">
              <img src="../assets/IndexView_weibo.png" alt="微博" />
            </div>
            <div class="weixin_icon">
              <img src="../assets/IndexView_weixin.png" alt="微信" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="other_wrap">
      <div class="toTop" v-show="isDisplay">
        <router-link to="/" class="iconfont icon-back-top1_fill"></router-link>
      </div>

      <div class="faceback">
        <router-link to="/" class="iconfont icon-pishijieguofankui"></router-link>
      </div>
    </div>
  </div>
</template>

<!--axios发接口请求-->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
// 调用请求的开始
import axios from 'axios'
import {getArticles} from '@/api'
export default {
  // 定义全局数据
  data() {
    return {
      // 文章列表数组
      articleList: [],
      Articles:[],
      // 作者榜
      authorList: [],
      // 掘金指南相关
      relatedList: [],
      // 上午中午晚上
      sometime: "上午",
      // 是否签到
      isPresent:false,
      // 我点赞的文章
      thumbedArticle:[],
      totalDay:0,
      isShow:false,
      times:0,
      isDisplay:false
    };
  },
  // 调用ajax请求方法
  created() {
    // this.getArticleList();
    this.getAuthorList();
    this.getRelatedList();
    this.handleSometine();

    getArticles({
      times: this.times+1
    }).then(res=>{
      // console.log(res);
      this.articleList=this.articleList.concat(res);
      // console.log(this.articleList);
      this.times+=1;
    })
  },
  mounted(){
    // 监听滚轮事件
    addEventListener('scroll',this.handleScroll);
    window.addEventListener('scroll',(e)=>{
      let wrapHeigth=document.getElementById('wrap').offsetHeight;
      let wrapTop=document.getElementById('wrap').offsetTop;
      //滚动条距离顶部的距离
			let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      if(wrapHeigth+wrapTop<=scrollTop){
        this.isShow=true
      }else{
        this.isShow=false
      }
    });
    window.addEventListener("scroll",(e)=>{
      //滚动条距离顶部的距离
			let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      //可视区的高度
			let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      //滚动条的总高度
			let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
      if(scrollTop+scrollHeight>windowHeight){
        this.isDisplay=true;
      }else{
        this.isDisplay=false;
      }
    })
  },
  // 绑定方法的执行函数的聚集池
  methods: {
    // 发接口请求
    getArticleList: function() {
      axios
        .get(
          "https://www.fastmock.site/mock/726ff1264270a66fb14cd2981c00b6f6/article/articleList"
        )
        .then(res => {
          // console.log(res);
          this.articleList =this.articleList.concat(res.data) ;
          // console.log(this.articleList);
        });
    },
    // 发接口请求
    getAuthorList: function() {
      axios
        .get(
          "https://www.fastmock.site/mock/726ff1264270a66fb14cd2981c00b6f6/article/authorList"
        )
        .then(res => {
          // console.log(res);
          this.authorList = res.data;
          // console.log(this.authorList);
        });
    },
    // 发接口请求
    getRelatedList: function() {
      axios
        .get(
          "https://www.fastmock.site/mock/726ff1264270a66fb14cd2981c00b6f6/article/relatedList"
        )
        .then(res => {
          // console.log(res);
          this.relatedList = res.data;
          // console.log(this.relatedList);
        });
    },
    // 点赞
    handleThumbs(event,index) {
      // 阻止冒泡
      //阻止冒泡需要stopPropagation()方法
        var e = event || window.event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else {
            e.cancelBubble = true;    //IE兼容
        }
      // console.log(this.thumbedArticle.indexOf(index));
      if(!this.thumbedArticle.indexOf(index)){
        this.thumbedArticle=this.thumbedArticle.filter(i=>i!=index);
        this.articleList[index].articleThumbs-=1;
      }else{
        this.thumbedArticle.push(index);
        this.articleList[index].articleThumbs=+this.articleList[index].articleThumbs+1

      }
    },
    // 上午中午晚上
    handleSometine() {
      let time =new Date()
        .toLocaleString()
        .split(" ")[1]
        .split(":")[0];
        // console.log(time);

      switch(time){
        case '00':
        case '01':
        case '02':
        case '03':
        case '04':
        case '05':
          this.sometime='深夜';
          break;
        case '06':
        case '07':
        case '08':
        case '09':
        case '10':
        case '11':
        case '12':
           this.sometime='上午';
           break;
        case '13':
        case '14':
        case '15':
        case '16':
        case '17':
        case '18':
           this.sometime='下午';
           break;
        case '19':
        case '20':
        case '21':
        case '22':
        case '23':
          this.sometime='晚上';
          break;
      }
     
    },
    // 签到
    handlePresent(){
      this.isPresent='true';
      this.totalDay++;
      localStorage.setItem('totalDay',this.totalDay)
    },
    // 滚动到底部再次发送请求
    handleScroll(){
       //滚动条距离顶部的距离
			 let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
			 //可视区的高度
			 let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
			 //滚动条的总高度
			 let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
			 //滚动条到底部的条件
			 if(scrollTop+windowHeight == scrollHeight){
          // console.log('到底啦~');
          // this.getArticleList();
          // console.log(this.times);
          getArticles({
            times: this.times
          }).then(res=>{
            // console.log(res);
            this.articleList=this.articleList.concat(res);
            // console.log(this.articleList);
          })
          this.times++;
			 }
    },
    // 跳转到文章详情
    handleDetail(){
      this.$router.replace('/Content')
    }
  }
};
</script>

<style lang="less" scoped>
/* 引入iconfont所需图标 */
@import 'https://at.alicdn.com/t/c/font_3595625_5n6jw02sv0o.css';
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
  // background-color: red;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
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
      cursor: pointer;
      width: 100%;
      padding: 1.5rem 1.5rem 0 1.5rem;
      box-sizing: border-box;
      // background-color: #ff6700;
      position: relative;
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
            .username:hover ,
            .label:hover {
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
              // background-color: #bfa;
              margin-right: 1rem;
              display: flex;
              align-items: center;
              justify-content: space-between;
              .iconfont {
                width: 1.5rem;
                margin-right: 0.3rem;
              }
              .icon-dianzan_kuai-copy{
                color: #1d8bff;

              }
              span {
                color: #868686;
              }
            }
            .show_thumbs:hover span,
            .show_thumbs:hover .icon-zan,
            .show_comments:hover .icon-comment,
            .show_comments:hover span {
              color: #1d8bff;
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
    .article_wrap:hover {
      background-color: rgba(250, 250, 250, 0.9);
    }

    .article_wrap:hover.article_wrap::after {
      content: "×";
      width: 2rem;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      // background-color: red;
      position: absolute;
      top: 1rem;
      right: 1rem;
      color: #cbcbcb;
      font-size: 1.4rem;
    }
  }
  //   右侧列表
  .content_list {
    width: 25rem;
    padding: 0 0 0 1rem;
    box-sizing: border-box;
    // background-color: #bfa;
    .list_attendance_wrap {
      width: 24rem;
      padding: 1.5rem;
      box-sizing: border-box;
      margin-bottom: 1rem;
      background-color: #fff;
      .list_attendance {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .attendance_top {
          display: flex;
          align-items: center;
          position: relative;
          // background-color: #bfa;
          .top_logo {
            width: 2rem;
            margin-right: 1rem;
            img {
              width: 100%;
            }
          }
          .top_hello {
            font-size: 2rem;
            color: #17181a;
          }
          .top_result {
            position: absolute;
            right: 0;
            width: 6rem;
            height: 3rem;
            background-color: #dbeaff;
            color: #5f8ef6;
            text-align: center;
            line-height: 3rem;
            border-radius: 1rem;
          }
          .top_result:hover {
            cursor: pointer;
            background-color: #bfd6fe;
          }
        }
        .attendance_bottom {
          margin-top: 1rem;
          width: 100%;
          // background-color: #bfa;
          text-align: center;
          color: #63686c;
          span {
            font-size: 1.4rem;
            color: #5f8ef6;
          }
        }
      }
    }
    .list_about_wrap {
      width: 100%;
      height: 5rem;
      display: flex;
      flex-direction: column;
      .about_activity_wrap,
      .about_books_wrap,
      .about_app_wrap {
        width: 24rem;
        height: 20rem;
        margin-bottom: 1rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .about_app_wrap {
        width: 24rem;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        .app_left_wrap {
          width: 5rem;
          height: 5rem;
          margin-right: 1rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .app_right_wrap {
          flex: 1;
          // background-color: red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          line-height: 1.5;
          .app_title {
            color: #343539;
            font-size: 1.4rem;
            font-weight: 500;
          }
          .app_info {
            font-size: 1.2rem;
            color: #abafb2;
          }
        }
      }
    }
    .list_author_wrap {
      width: 24rem;
      background-color: #fff;
      margin-top: 43rem;
      margin-bottom: 1rem;
      .author_title {
        font-size: 1.5rem;
        padding: 1rem;
        box-sizing: border-box;
        border-bottom: 1px solid #f5f5f5;
      }
      .author_list {
        display: flex;
        align-items: center;
        padding: 1rem;
        box-sizing: border-box;
        border-bottom: 1px solid #f5f5f5;
        // background-color: red;
        .author_icon {
          width: 4.6rem;
          height: 4.6rem;
          // margin-right: 1rem;
          border-radius: 50%;
          overflow: hidden;
          // background-color: #ff6799;

          img {
            width: 4.6rem;
            height: 4.6rem;
          }
        }
        .author_info {
          flex: 1;
          // background-color: #ff6799;
          margin-left: 1rem;
          .info_nickname {
            font-size: 1.4rem;
            color: #2b2b2b;
            .info_level {
              display: inline-block;
              width: 3.5rem;
              height: 1.6rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
          .info_status {
            font-size: 1.2rem;
            color: #8f8f8f;
            line-height: 2;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
      .author_more {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
        color: #1d8bff;
        line-height: 2;
        span {
          width: 0.8rem;
          height: 0.8rem;
          border: 0.1rem solid #1d8bff;
          border-left: none;
          border-top: none;
          transform: rotate(-45deg);
        }
      }
    }
    .list_introduce_wrap {
      width: 24rem;
      padding: 1.5rem;
      box-sizing: border-box;
      margin-bottom: 1rem;
      background-color: #fff;
      .introduce_juejin {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        img {
          width: 3.6rem;
          height: 3.6rem;
          margin-right: 1rem;
        }
        span {
          font-size: 1.5rem;
          color: #282828;
        }
      }
    }
    .ShowDetail{
      position: fixed;
      top: 5rem;
    }
    .list_detail_wrap {
      background-color: #fff;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 1rem 0 0 0;
      box-sizing: border-box;
      .item,
      .text {
        margin-right: 1rem;
        color: #959595;
      }
      .item:hover {
        color: #1d8bff;
      }
      .police {
        display: flex;
        align-items: center;
        span {
          margin-right: 0.5rem;
        }
      }
      .detail_icon {
        display: flex;
        align-items: center;
        // .weibo_icon{
        //   background-color: #D81E06;
        // }
        // .weixin_icon{
        //   background-color: #1AFA29;
        // }
        .weibo_icon,
        .weixin_icon {
          width: 2.6rem;
          height: 2.6rem;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 2.4rem;
            height: 2.4rem;
          }
        }
      }
    }
    
  }
}
.other_wrap{
  width: 10rem;
  height: 10rem;
  // background-color: red;
  position: fixed;
  right: 10rem;
  bottom: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .toTop,.faceback{
    width: 3rem;
    height: 3rem;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    border: 0.2rem solid #eee;
    .iconfont{
      font-size: 1.5rem;
    }
    .icon-back-top1_fill{
      color: #666;
    }
    .icon-pishijieguofankui{
      color: #1e80ff;
    }
  }
}
</style>



