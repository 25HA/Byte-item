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
    <!-- 中间部分主要内容 -->
    <div class="main">
      <div class="content">
        <!-- 输入框 -->
        <div class="input">
          <textarea
            name="textinput"
            v-model="textdata"
            placeholder="快和掘友一起分享新鲜事！告诉你个小秘密，发布沸点时添加圈子和话题会被更多掘友看到哦~"
          ></textarea>
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
          <div class="release-right" ref="public">发布</div>
        </div>
      </div>
      <div class="content-item" v-for="(item,index) in contentList" :key="index" >
        <div class="item">
          <div class="title">
            <img class="user" :src="item.src" />
            <div class="author">
              <div class="username">{{item.username}}</div>
              <div class="professional">{{item.professional}}</div>
            </div>
          </div>
          <div class="detail">{{item.detail}}</div>
        </div>
        <div class="item-footer">
          <div class="foot">
            <i class="iconfont icon-fenxiang"></i>
            <span>分享</span>
          </div>
          <div class="foot" @click="showComment(index)">
            <i class="iconfont icon-pinglun"></i>
            <span>评论</span>
          </div>
          <div class="foot" v-on:click="good(index)" v-bind:class="item.liked ? 'active' : ''">
            <i class="iconfont icon-dianzan"></i>
            <span>点赞</span>
          </div>
        </div>
        <div class="comments" v-show="isindex == index">
            <img class="user" src="https://p26-passport.byteacctimg.com/img/user-avatar/6c364d2da6b72b2b864debe326466bf8~300x300.image" alt="">
            <input type="text" class="commentsContent" placeholder="输入评论(Enter换行，Ctrl + Enter发送)">
        </div>
      </div>
    </div>
    <!-- 右侧边栏 -->
    <div class="myself-detail">
      <div class="myself">
        <div class="title">
          <img
            class="user"
            src="https://p26-passport.byteacctimg.com/img/user-avatar/6c364d2da6b72b2b864debe326466bf8~300x300.image"
          />
          <div class="author">
            <div class="username">寒月十九</div>
            <div class="professional">前端coding学习中 @ 在校大学生</div>
          </div>
        </div>
        <div class="mydata">
          <div class="num-box">
            <div class="num">3</div>
            <div class="num">0</div>
            <div class="num">23</div>
            <div class="num">30</div>
          </div>
          <div class="word-box">
            <div class="word">沸点</div>
            <div class="word">圈子</div>
            <div class="word">关注</div>
            <div class="word">关注者</div>
          </div>
        </div>
      </div>
      <div class="handpick">
        <div class="title">精选沸点</div>
        <div class="item">
          <div class="detail">
            部门新来了一个的同事，性格比较内敛，话比较少，但是和我们相处还算融洽，平时摸鱼聊天他也会跟着笑呵呵的，跟他聊天啊他也会笑着回复，和我们一起聊聊天。我在公司点奶茶啊买零食买饮料，经常是给部门的同事都一起买一份，给大家分享嘛，大家都会笑着的对我说谢谢，唯独这个新同事，不管我给他奶茶还是辣条还是饮料，他都笑呵呵的接受，就是不说谢谢。
            前两天看他搬东西，我路过就顺手帮了一下，他也没说一句话，也没有对我说谢谢
            我心里虽然有点不得劲，但是转头就没纠结这些小事。
            今天中午出去吃饭，排队时我就排他后面，他手机不知道为什么付款码刷不出来，饭店里大家都排队点餐支付，他半天刷不出来付款码，人家店员就等他付钱，我们队伍后面还排了其他人等着点餐支付。我看他尴尬又有点着急，我就给店员说我帮他付钱，然后店员就扫了我的付款码。
            然后我接着扫我自己的饭钱，等我一抬头，这位新同事已经过去接饮料了（饮料是免费的）
            我当时就楞了，合着搞了半天他还是没有对我说谢谢，我就很疑惑他为啥总是不说谢谢
            吃饭的时候，我就笑着问他手机停机了哇？他笑着说没有，就是莫名的网络不好了。然后大家就该吃饭吃饭，该聊天就聊天，气氛依旧融洽
            但是他依旧没说什么谢谢我刚刚帮他付钱，也没有要把饭钱转给我或者下次请回来的意思，就感觉好像没有我帮他付钱的这档子事儿
            但是我不是在乎这么二三十元的饭钱啊，毕竟之前点奶茶这些也不止二三十元了。这个饭钱他如果真的要还我，我肯定会笑着说客气啥，不用还我。关键是他一句谢谢都不说，权当无事发生，这就让我很不得劲了，但是人家笑呵呵的，我总不能上去问他：你刚刚为什么不谢谢我？。。。。害，以后不帮他了
          </div>
          <div class="about">69赞 · 268评论</div>
        </div>
        <div class="item">
          <div class="detail">
            【三分钟阅读挑战 | 碎片时间不浪费 】
            上下班坐地铁太无聊？睡觉前只知道刷短视频？那就来参加我们的三分钟阅读挑战活动吧，随时随地掏出你的手机，打开掘金app阅读文章，发布读书体会，留下你的学习脚印，高效利用一切碎片化时间！和掘友们共同阅读分享，真的不要太快乐！[看]…
          </div>
          <div class="about">278赞 · 274评论</div>
        </div>
        <div class="item">
          <div
            class="detail"
          >抽奖送6本书。都是出版社送我的书，我送给大家且自费邮寄。。。Spring Boot送三本，其他各一本。抽奖规则：必须是我的粉丝。抽奖一定公开公正，我保证。</div>
          <div class="about">273赞 · 1322评论</div>
        </div>
      </div>
      <div class="hotTopic">
        <div class="title">
          <div class="left">热门话题</div>
          <div class="right">
            <i class="iconfont icon-huanyihuan"></i>换一换
          </div>
        </div>
        <div class="item" v-for="(item,index) in topicList" :key="index">
          <div class="left">
            <i class="iconfont icon-tubiao303"></i>{{item.left}}
          </div>
          <div class="right">{{item.right}}</div>
        </div>
        <div class="more">查看更多 ></div>
      </div>
      <div class="howPlay">
        <i class="iconfont icon-manage-circuit-full"></i>
        <div class="text">如何玩转沸点</div>
      </div>
    </div>
  </div>
</template>
<!--axios发接口请求-->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
// 调用请求的开始
import axios from "axios";
export default {
  data() {
    return {
      textdata: "",
      // 沸点内容
      contentList: [],
      // 沸点话题
      topicList: [],
      isindex:''
    };
  },
  // 调用ajax请求方法
  created() {
    this.getContentList();
    this.getTopicList();
  },
  methods: {
    good(index) {
      this.contentList[index].liked = !this.contentList[index].liked;
    },
    showComment(index){
      this.isindex = index
    },
    // 发接口请求
    getContentList: function() {
      axios
        .get(
          "https://www.fastmock.site/mock/a1d68f0efcfef2f683ae62d63d9f06c9/boiling-content/content"
        )
        .then(res => {
          // console.log(res.data.content);
          this.contentList = res.data.content;
          // console.log(this.contentList);
        });
    },
    getTopicList: function() {
      axios
        .get(
          "https://www.fastmock.site/mock/a1d68f0efcfef2f683ae62d63d9f06c9/boiling-content/topic"
        )
        .then(res => {
          // console.log(res.data);
          this.topicList = res.data;
          // console.log(this.topicList);
        });
    },
  },
  mounted() {
    window.Vue = this;
  },
  updated: function() {
    // console.log(Vue.textdata);
    if (Vue.textdata != "") {
      this.$refs.public.style.background = "#1e80ff";
    } else {
      this.$refs.public.style.background = "#d2e6ff";
    }
  }
};
</script>

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
  .kindsBar {
    width: 15rem;
    height: 40rem;
    background: #fff;
    margin-top: 2rem;
    margin-left: 15rem;
    border-radius: 0.5rem;
    position: fixed;
    top: 4.8rem;
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
  .main {
    margin-left: 30rem;
    .content {
      background: #fff;
      width: 66rem;
      height: 20rem;
      margin: 2rem;
      margin-top: 1.2rem;
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
        .element:hover {
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
    .item {
      background: #fff;
      width: 66rem;
      //   height: 20rem;
      margin: 2rem;
      padding: 1.5rem;
      margin-bottom: 0;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
      .title {
        width: 100%;
        height: 5rem;
        display: flex;
        .user {
          width: 5rem;
          height: 5rem;
          border-radius: 50%;
        }
        .author {
          margin-left: 1rem;
          .username {
            margin-top: 0.5rem;
            font-size: 1.2rem;
            color: #557688;
          }
          .professional {
            font-size: 1.2rem;
            color: #c6c7c8;
            margin-top: 0.5rem;
          }
        }
      }
      .detail {
        margin-top: 1rem;
        padding-left: 6rem;
        padding-right: 1rem;

        overflow: hidden;
      }
      .comments {
        width: 100%;
        height: 4rem;
        background: #237bff;
        padding: 0;
      }
    }
    .item-footer {
      width: 69rem;
      height: 4rem;
      margin: 2rem;
      margin-top: 0;
      margin-bottom: 0;
      border-top: 1px solid #e7e7e7;
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      background: #fff;
      display: flex;
      align-items: center;
      .foot {
        flex: 1;
        text-align: center;
        span {
          margin-left: 0.5rem;
        }
      }
      .active{
        color:#147fff !important;
      }
      .commended{
        color:#147fff !important;

      }
    }
    .comments {
      background: #fff;
      height: 6.5rem;
      line-height: 6.5rem;
      margin-left: 2rem;
      margin-right: 2rem;
      padding-left: 2rem;
      padding-right: 2rem;
      border-top:1px solid #eee;
      display: flex;
      align-items: center;
      .user{
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        margin-left: 2rem;
      }
      .commentsContent{
        flex: 1;
        height: 4rem;
        margin-left: 2rem;
        border: none;
        background: #eee;
        font-size: 1.4rem;
      }
      .commentsContent:focus{
        outline: none !important;
      }

    }
  }
  .myself-detail {
    .myself {
      width: 22rem;
      height: 15rem;
      margin-top: 1.2rem;
      padding: 1.5rem;
      border-radius: 5px;
      background: #fff;
      .title {
        width: 100%;
        height: 5rem;
        display: flex;
        .user {
          width: 5rem;
          height: 5rem;
          border-radius: 50%;
        }
        .author {
          margin-left: 1rem;
          .username {
            width: 16rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-top: 0.5rem;
            font-size: 1.2rem;
            color: #557688;
            font-size: 16px;
          }
          .professional {
            font-size: 1.2rem;
            color: #c6c7c8;
            margin-top: 0.5rem;
            width: 16rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
      .mydata {
        width: 95%;
        height: 8rem;
        margin: 2rem auto;
        border-top: 1px solid #99a1b5;
        .num-box {
          height: 4rem;
          width: 100%;
          display: flex;
          .num {
            flex: 1;
            height: 4rem;
            line-height: 4rem;
            font-size: 1.5rem;
            color: #030000;
          }
        }
        .word-box {
          height: 4rem;
          width: 100%;
          display: flex;
          .word {
            flex: 1;
            font-size: 1.5rem;
            color: #767d87;
          }
        }
      }
    }
    .handpick {
      width: 25rem;
      height: 32rem;
      margin-top: 1.2rem;
      // padding: 1.5rem;
      border-radius: 5px;
      background: #fff;
      .title {
        width: 92%;
        height: 4rem;
        line-height: 4rem;
        padding-left: 2rem;
        font-size: 16px;
        border-bottom: 1px solid #99a1b5;
      }
      .item {
        width: 80%;
        margin: 1rem auto;
        padding: 0.8rem;
        border-radius: 0.8rem;
        .detail {
          margin-left: 0.8rem;
          font-size: 14px;
          // max-height: 4rem;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          color: #3d5a71;
        }
        .detail:hover {
          color: #237bff;
        }
        .about {
          font-size: 1.2rem;
          -webkit-transform-origin-x: 0;
          -webkit-transform: scale(0.8);
          margin-top: 0.8rem;
          margin-left: 0.8rem;
          color: #7a8297;
        }
      }
      .item:hover {
        background: #eee;
      }
    }
    .hotTopic {
      width: 25rem;
      height: 46rem;
      margin-top: 1.2rem;
      // padding: 1.5rem;
      border-radius: 5px;
      background: #fff;
      .title {
        width: 92%;
        height: 4rem;
        line-height: 4rem;
        padding-left: 2rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #99a1b5;
        .left {
          font-size: 16px;
        }
        .right {
          margin-right: 1rem;
          font-size: 12px;
          color: #91949a;
        }
      }
      .item {
        width: 80%;
        height: 1rem;
        line-height: 1rem;
        margin: 1rem auto;
        padding: 0.8rem;
        // background: #eee;
        display: flex;
        justify-content: space-between;
        .left:hover {
          color: #237bff;
        }
        .right {
          font-size: 10px;
          -webkit-transform: scale(0.8);
        }
      }
      .more {
        width: 80%;
        height: 4rem;
        line-height: 4rem;
        margin: 1rem auto;
        border-top: 1px solid #3d5a71;
        text-align: center;
        color: #909498;
      }
    }
    .howPlay {
      display: flex;
      width: 25rem;
      height: 6rem;
      line-height: 6rem;
      margin-top: 1.2rem;
      // padding: 1.5rem;
      border-radius: 5px;
      background: #fff;
      font-size: 16px;
      text-align: center;
      justify-content: center;
      .text {
        margin-left: 1rem;
      }
    }
  }
}
</style>

