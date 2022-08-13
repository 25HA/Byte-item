<template>
  <div class="bigBox">
    <div class="subsidiary">
      <div class="fabulous icon">
        <img
          src="../assets/content-fabulous-light.png"
          v-on:click="changeFabulous"
          v-if="fabulous==false"
        />
        <img src="../assets/content-fabulous-duck.png" v-on:click="changeFabulous" v-else />
      </div>
      <div class="comment icon">
        <img
          src="../assets/content-comment-light.png"
          v-on:click="changeComment"
          v-if="comment==false"
        />
        <img src="../assets/content-comment-duck.png" v-on:click="changeComment" v-else />
      </div>
      <div class="collection icon">
        <img
          src="../assets/content-Collection-light.png"
          v-on:click="changeCollection"
          v-if="collection==false"
        />
        <img src="../assets/content-Collection-duck.png" v-on:click="changeCollection" v-else />
      </div>
      <div class="forward icon">
        <img
          src="../assets/content-forward-light.png"
          v-on:click="changeForward"
          v-if="forward==false"
        />
        <img src="../assets/content-forward-duck.png" v-on:click="changeForward" v-else />
      </div>

      <div class="bar"></div>

      <div class="warn icon">
        <img src="../assets/content-warn-light.png" v-on:click="changeWarn" v-if="warn==false" />
        <img src="../assets/content-warn-duck.png" v-on:click="changeWarn" v-else />
      </div>
      <div class="read icon">
        <img src="../assets/content-read-light.png" v-on:click="changeRead" v-if="read==false" />
        <img src="../assets/content-read-duck.png" v-on:click="changeRead" v-else />
      </div>
    </div>
    <div class="content">
      <div class="article">
        <div class="title">
          <h1>Turborepo 高性能 monorepo方案,前端的构建未来还得开go</h1>
        </div>
        <div class="user">
          <div class="userInfo">
            <div class="head-photo">
              <img src="../assets/content-head-photo.jpg" />
            </div>
            <div class="user-information">
              <div class="user-information-top">
                <div class="user-information-top-name">墨香</div>
                <div class="user-information-top-jy">
                  <img
                    src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-4.a78c420.png"
                    width="34"
                    height="16"
                  />
                </div>
              </div>
              <div class="user-information-time">
                <span>2022年08月11日 18:37</span>
                <span>·阅读 622</span>
              </div>
            </div>
          </div>
          <div class="follow">
            <div class="follow-box">
              <span>+</span>
              <span>关注</span>
            </div>
          </div>
        </div>
        <div class="text">
          <div class="text-titleImg">
            <img
              src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/145caab699224349a34070770dc659d9~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp?"
            />
          </div>
          <p>对于作用域和作用域链，想必大家都很熟悉了，那算是javascript中的一个小山，虽然小路崎岖，但也还能理解，可是对比原型以及原型链来说，那它还不够资格称为“崎岖”。可尽管如此，我们仍然要去揭开javascript中原型以及原型链那神秘的面纱。</p>
          <h3>本文涉及的知识点</h3>
          <p>
            <pre v-highlightjs>
              <code class="javascript">
  · __proto__和prototype
  · constructor
  · 构造函数
  · 原型链</code>
            </pre>
          </p>
          <h2>原型及原型链的定义</h2>
          <h3>原型</h3>
          <p><span>原型链</span>是一个<span>对象</span>的查找机制，比如查找对象arr中的toString方法，会先在自己的<span>私有属性</span> 中找，如果没有，就沿着__proto__去原型对象中找，如果还没有，就继续沿着__proto__去它原型对象中的原型对象中找，直到找到Object中的<span>原型对象</span>（Object原型对象中的__proto__指向null），如果还没找到，那么结果就是undefined；</p>
          <h1>原型</h1>
          <h2>什么是原型</h2>
          <p>讲到原型，我们通常讲的一般都是<span>显式原型</span>，也就是函数原型。而在通俗的角度上我们可以理解为显式原型是函数对象的“爹”，函数对象是能够<span>继承</span>到显式原型的属性，也可以理解为继承到它“爹”的血脉。</p>
          <p><span class="light">如:</span></p>
          <pre v-highlightjs>
            <code class="javascript">
              Person.prototype.name = '爹'
              function Person(){

              }
              var person = new Person()
              console.log(person.name);
            </code>
          </pre>
          <p>通常的情况下，我们new的这个函数对象里面是空的，没有任何属性，所以我们这console.log(person.name)理应是undefined.</p>
          <p>然而，事实是，打印出来的却是Person.prototype中的name属性“爹”.</p>
          <p>
            <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44f3d91ce4a746f5a51d94e64d5fe92c~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?">
          </p>
          <p>......</p>
          <!-- <pre v-highlightjs><code class="javascript">const s = new Date().toString()</code></pre> -->
        </div>
        <div class="article-label">
          <div class="laber-type label-two">
            <span>分类:</span>
            <div class="type-content">
              前端
            </div>
          </div>
          <div class="label-label label-two">
            <span>标签:</span>
            <div class="label-content">
              javaScript
            </div>
          </div>
        </div>
        <div class="article-special">
          <div class="article-special-title">
            <span>文章被收录于专栏:</span>
          </div>
          <div class="article-special-box">
            <div class="article-special-box-detail">
              <div class="article-special-box-img">
                <img src="../assets/content-zhuanlan.webp">
              </div>
              <div class="article-special-box-info">
                <span style="font-size:1.6rem;">JS的学习</span>
                <br>
                <span style="font-size:1.2rem;" class="ooo">记录js学习的过程</span>
              </div>
            </div>
            <div class="article-special-box-to">
              进入专栏
            </div>
          </div>
        </div>
      </div>
      <div class="comment">
        
      </div>
      <div class="recommend"></div>
    </div>
    <div class="list"></div>
  </div>
</template>

<script>
// const Prism = (window as any).Prism;
// import "prismjs";
// import "prismjs/themes/prism-okaidia.css";
export default {
  props: [],
  data() {
    return {
      fabulous: false,
      comment: false,
      collection: false,
      forward: false,
      warn: false,
      read: false
    };
  },
  methods: {
    changeFabulous() {
      console.log(this.fabulous);
      this.fabulous = !this.fabulous;
    },
    changeComment() {
      this.comment = !this.comment;
    },
    changeCollection() {
      this.collection = !this.collection;
    },
    changeForward() {
      this.forward = !this.forward;
    },
    changeWarn() {
      this.warn = !this.warn;
    },
    changeRead() {
      this.read = !this.read;
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
body,
html {
  width: 100%;
}
.bigBox {
  margin-top: 2rem;
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 2.1fr 1fr;
  column-gap: 2rem;
  .subsidiary {
    position: fixed;
    top: 14rem;
    left: 18rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 3rem;
      img {
        width: 1.7rem;
        height: 1.7rem;
      }
    }
    .bar {
      width: 2.6rem;
      border-top: 0.1rem solid rgba(184, 183, 183, 0.7);
      margin-bottom: 3rem;
    }
  }
  .content {
    margin-left: 24%;
    width: 76%;
    // height: 800rem;
    background-color: #ffffff;
    .article {
      width: 100%;
      padding: 3rem 3rem;
      overflow: hidden;
      box-sizing: border-box;
      .title {
        font-size: 1.4rem;
        width: 100%;
      }
      .user {
        margin-top: 3rem;
        width: 100%;
        display: flex;
        position: relative;
        .userInfo {
          margin-left: 0.5rem;
          display: flex;
          .head-photo {
            width: 3.7rem;
            height: 3.7rem;
            border-radius: 50%;
            overflow: hidden;
            img {
              width: 3.7rem;
              height: 3.7rem;
              border-radius: 50%;
            }
          }
          .user-information {
            margin-left: 1.3rem;
            .user-information-top {
              display: flex;
              font-size: 1.6rem;
              font-family: -apple-system, system-ui, Segoe UI, Roboto, Ubuntu,
                Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
                "Helvetica Neue", "PingFang SC", "Hiragino Sans GB",
                "Microsoft YaHei", Arial !important;
              .user-information-top-jy {
                margin-left: 0.4rem;
              }
            }
            .user-information-time {
              font-size: 1.3rem;
              color: #918f8f;
            }
          }
        }
        .follow {
          position: absolute;
          right: 3rem;
          .follow-box {
            width: 6rem;
            height: 3rem;
            line-height: 3rem;
            text-align: center;
            border: 0.1rem solid rgb(149, 220, 246);
            border-radius: 0.5rem;
            background-color: rgba(162, 211, 247, 0.18);
            color: #1e80ff;
            font-size: 1.4rem;
          }
        }
      }
      .text {
        margin-top: 2rem;
        width: 100%;
        line-height: 3rem;
        font-size: 1.35rem;
        font-family: -apple-system, system-ui, BlinkMacSystemFont,
          Helvetica Neue, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial,
          sans-serif;
        .text-titleImg {
          width: 100%;
          img {
            width: 100%;
            height: 40rem;
          }
        }
        span{
          font-weight: 700;
          color: #1e80ff;
        }
        p,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin-bottom: 2.7rem;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #1e80ff;
        }
        h1,h2{
          position: relative;
          margin-bottom: 3.5rem;
        }
        h1::before{
          content: '';
          width: 0.5rem;
          height: 3.7rem;
          background: #1e80ff;
          position: absolute;
          left: -1rem;
        }
        h2::before{
          content: '';
          width: 0.4rem;
          height: 3rem;
          background: #1e80ff;
          position: absolute;
          left: -1rem;
        }
        .light{
          background: rgba(245, 207, 178, 0.233);
          color: red;
          font-weight: 300;
          padding: 0.1rem 0.7rem;
          box-sizing: border-box;
        }
        img{
          width: 100%;
          height: 30rem;
        }
      }
      .article-label{
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        .laber-type{
          .type-content{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 1rem;
            margin-right: 1rem;
            padding: 0.3rem 1rem;
            border-radius: 0.3rem;
            background-color: rgb(223, 222, 222);
            box-sizing: border-box;
          }
        }
        .label-label{
          .label-content{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 1rem;
            margin-right: 1rem;
            padding: 0.3rem 1rem;
            border-radius: 0.3rem;
            color: #1e80ff;
            background-color: rgba(175, 207, 245, 0.314);
            box-sizing: border-box;
          }
        }
        .label-two{
          display: flex;
          align-items: center;
        }
      }
      .article-special{
        margin-top: 3rem;
        width: 100%;
        padding: 2rem 1rem;
        background-color: rgb(243, 242, 242);
        border-radius: 0.3rem;
        box-sizing: border-box;
        .article-special-box{
          display: flex;
          align-items: center;
          margin-top: 2rem;
          position: relative;
          .article-special-box-detail{
            display: flex;
            img{
              width: 8rem;
              height: 5rem;
              border-radius: 0.3rem;
            }
            .article-special-box-info{
              margin-left: 1.5rem;
              .ooo{
                line-height: 3rem;
                color: #a5a4a4;
              }
            }
          }
          .article-special-box-to{
            padding: 0.5rem 1.3rem;
            background-color: #a5ddfb24;
            border: 1px solid #9cddf7;
            color: #1e80ff;
            border-radius: 0.3rem;
            position: absolute;
            right: 3rem;
          }
        }
      }
    }
  }
}
</style>