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
        <div class="text" id="text">
          <div class="text-titleImg">
            <img
              src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/145caab699224349a34070770dc659d9~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp?"
            />
          </div>
          <p>对于作用域和作用域链，想必大家都很熟悉了，那算是javascript中的一个小山，虽然小路崎岖，但也还能理解，可是对比原型以及原型链来说，那它还不够资格称为“崎岖”。可尽管如此，我们仍然要去揭开javascript中原型以及原型链那神秘的面纱。</p>
          <span>本文涉及的知识点</span>
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
        <p class="comment-title"><span>评论</span></p>
        <div class="comment-input">
          <!-- <vue-editor id="editor"
                useCustomImageHandler
                @imageAdded="handleImageAdded"
                v-model="content"></vue-editor> -->
          <div class="comment-input-one">
            <img src="../assets/content-head-photo.jpg">
            <textarea name="textinput" placeholder="输入评论~（Enter换行，ctrl+Enter）"></textarea>
          </div>
          <div class="comment-input-two">
            <div class="comment-input-two-bq">
              <img src="../assets/content-biaoqing.png">
              <span>表情</span>
            </div>
            <div class="comment-input-two-img">
              <img src="../assets/content-img.png">
              <span>图片</span>
            </div>
            <div class="comment-input-two-scanf">
              <span>发表评论</span>
            </div>
          </div>
        </div>
        <div class="comment-title">
          <span>热门</span>
          <img src="../assets/content-hot.png">
        </div>
        <div class="comment-place">

        </div>
      </div>
      <div class="recommend">
        <div class="recommend-title">
          <span>相关推荐</span>
        </div>
        <div class="recommend-item" v-for="(item,index) in recommendDetail" :key="index">
          <div class="recommend-item-bar"></div>
          <div class="recommend-item-detail">
            <p class="recommend-item-detail-one"><span class="nickname">{{item.nickname}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>{{item.publicTime}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>{{item.type}}</span></p>
            <p class="recommend-item-detail-two">{{item.title}}</p>
          </div>
          <div class="recommend-item-icon">
            <div class="recommend-item-icon-one icon">
              <img src="../assets/content-eye-duck.png">
              <span>{{item.see}}</span>
            </div>
            <div class="recommend-item-icon-two icon">
              <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/7fe16de62924e291ba2f0a4ce34ea67a.svg" v-if="item.happyLight">
              <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/315aced81d853a0cac8326a9a7e38ae3.svg" v-else>
              <span>{{item.happy}}</span>
            </div>
            <div class="recommend-item-icon-three icon">
              <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/a9532d230b98d8920a987aafa22e9059.svg">
              <span>{{item.comment}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="list-part-one">
        <div class="list-part-one-author">
          <img src="../assets/content-head-photo.jpg" class="userPhoto">
          <span>墨香</span>
          <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-4.a78c420.png" class="jyIcon">
        </div>
        <div class="list-part-one-bar">
        </div>
        <div class="list-part-one-fd">
          <div class="list-part-one-icon">
            <img src="../assets/content-fabulous-blue.png">
          </div>
          <span>获得点赞3337</span>
        </div>
        <div class="list-part-one-fd">
          <div class="list-part-one-icon">
            <img src="../assets/content-eye-blue.png">
          </div>
          <span>文章被阅读9997</span>
        </div>
      </div>
      <div class="list-part-two">
        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/article.9d13ff7.png">
        <div class="list-part-two-text">
          <p class="list-part-two-text-one">下载稀土掘金APP</p>
          <p class="list-part-two-text-two">一个帮助开发者成长的社区</p>
        </div>
      </div>
      <div class="list-part-three">
        <div class="list-part-three-title">
          <span>相关文章</span>
        </div>
        <div class="list-part-three-bar"></div>
        <div class="list-part-three-item" v-for="(item,index) in relevant" :key="index">
          <p class="list-part-three-item-title">{{item.title}}</p>
          <p class="list-part-three-item-relevant">{{item.fabulous}}点赞&nbsp;·&nbsp;{{item.comment}}评论</p>
        </div>
      </div>
      <div class="list-part-four">
        
      </div>
    </div>
  </div>
</template>

<script>
// const Prism = (window as any).Prism;
// import "prismjs";
// import "prismjs/themes/prism-okaidia.css";

// import { VueEditor } from "vue2-editor/dist/vue2-editor.core.js";
export default {
  props: [],
  data() {
    return {
      fabulous: false,
      comment: false,
      collection: false,
      forward: false,
      warn: false,
      read: false,
      recommendDetail:[
        {
          nickname:'杨俊威胁论',
          publicTime:'1年前',
          type:'javascript',
          title:'不得不懂的原型链',
          see:'9.3w',
          happyLight:true,
          happy:'7277',
          comment:'332'
        },
        {
          nickname:'杨俊威胁论',
          publicTime:'1年前',
          type:'javascript',
          title:'不得不懂的原型链',
          see:'9.3w',
          happyLight:true,
          happy:'7277',
          comment:'332'
        },
        {
          nickname:'杨俊威胁论',
          publicTime:'1年前',
          type:'javascript',
          title:'不得不懂的原型链',
          see:'9.3w',
          happyLight:true,
          happy:'7277',
          comment:'332'
        },
        {
          nickname:'杨俊威胁论',
          publicTime:'1年前',
          type:'javascript',
          title:'不得不懂的原型链',
          see:'9.3w',
          happyLight:true,
          happy:'7277',
          comment:'332'
        },
        {
          nickname:'杨俊威胁论',
          publicTime:'1年前',
          type:'javascript',
          title:'不得不懂的原型链',
          see:'9.3w',
          happyLight:true,
          happy:'7277',
          comment:'332'
        },
        {
          nickname:'杨俊威胁论',
          publicTime:'1年前',
          type:'javascript',
          title:'不得不懂的原型链',
          see:'9.3w',
          happyLight:true,
          happy:'7277',
          comment:'332'
        },
      ],
      relevant:[
        {title:'2020面试收获 - js原型及原型链',fabulous:428,comment:52},
        {title:'十分钟带你了解javascript里的面试“常客”——Event-Loop，async-await',fabulous:45,comment:7},
        {title:'轻松理解JS 原型原型链',fabulous:428,comment:52},
        {title:'2019 面试准备 - JS 原型与原型链',fabulous:1151,comment:85},
        {title:'再解 JavaScript 原型与原型链',fabulous:160,comment:7}
      ],
      dom:[]
      // content: "<h1>请输入评论</h1>"
    };
  },
  // components:{
  //   VueEditor
  // },
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
    },
    // handleImageAdded () {
    //   console.log('upload image');
    // }
  },
  mounted(){
    window.addEventListener('scroll', (e) => {
      var m = [
        {
          nickname:'杨俊威胁论',
          publicTime:'1年前',
          type:'javascript',
          title:'不得不懂的原型链',
          see:'9.3w',
          happyLight:true,
          happy:'7277',
          comment:'332'
        },
        {
          nickname:'杨俊威胁论',
          publicTime:'1年前',
          type:'javascript',
          title:'不得不懂的原型链',
          see:'9.3w',
          happyLight:true,
          happy:'7277',
          comment:'332'
        },
        {
          nickname:'杨俊威胁论',
          publicTime:'1年前',
          type:'javascript',
          title:'不得不懂的原型链',
          see:'9.3w',
          happyLight:true,
          happy:'7277',
          comment:'332'
        },
        {
          nickname:'杨俊威胁论',
          publicTime:'1年前',
          type:'javascript',
          title:'不得不懂的原型链',
          see:'9.3w',
          happyLight:true,
          happy:'7277',
          comment:'332'
        },
        {
          nickname:'杨俊威胁论',
          publicTime:'1年前',
          type:'javascript',
          title:'不得不懂的原型链',
          see:'9.3w',
          happyLight:true,
          happy:'7277',
          comment:'332'
        },
        {
          nickname:'杨俊威胁论',
          publicTime:'1年前',
          type:'javascript',
          title:'不得不懂的原型链',
          see:'9.3w',
          happyLight:true,
          happy:'7277',
          comment:'332'
        },
      ]
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop + document.documentElement.clientHeight);
      // console.log(document.body.scrollHeight)
      if(scrollTop + document.documentElement.clientHeight>=document.body.scrollHeight){
        this.recommendDetail = this.recommendDetail.concat(m)
      }
    },
    true)

    let structure = document.getElementById('text').childNodes
    for(let i=0;i<structure.length;i++){
      if(structure[i].nodeName=='H1' || structure[i].nodeName=='H2' || structure[i].nodeName=='H3' || structure[i].nodeName=='H4' || structure[i].nodeName=='H5' || structure[i].nodeName=='H6'){
        // console.log(structure[i])
        var obj = {}
        obj.index = i;
        obj.text = structure[i].innerHTML;
        obj.label = structure[i].nodeName.slice(1,2);
        this.dom.push(obj)
      }
    }
    console.log(this.dom)
    // console.log(structure[4].nodeName)
  }
};
</script>

<style lang="less" scoped>

// @import "~vue2-editor/dist/vue2-editor.css";
// /* Import the Quill styles you want */
// @import "~quill/dist/quill.core.css";
// @import "~quill/dist/quill.bubble.css";
// @import "~quill/dist/quill.snow.css";
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
    .icon:hover{
      cursor:pointer;
    }
    .bar {
      width: 2.6rem;
      border-top: 0.1rem solid rgba(184, 183, 183, 0.7);
      margin-bottom: 3rem;
    }
  }
  .content{
    margin-left: 24%;
    width: 76%;
    // height: 200rem;
    border-radius: 0.5rem;
    .article {
      width: 100%;
      padding: 3rem 3rem;
      overflow:hidden;
      box-sizing: border-box;
      border-radius: 0.5rem;
      background-color: #ffffff;
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
              cursor:pointer;
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
          cursor:pointer;
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
    .comment{
      margin-top: 2rem;
      width: 100%;
      padding: 3rem 3rem;
      overflow:hidden;
      box-sizing: border-box;
      background: #ffffff;
      border-radius: 0.5rem;
      .comment-title{
        font-size: 1.6rem;
        font-weight: 700;
        margin-bottom: 3rem;
        display: flex;
        align-items: center;
        img{
          margin-left: 0.45rem;
          width: 2.2rem;
          height: 2.2rem;
        }
      }
      .comment-input{
        width: 100%;
        margin-bottom: 2rem;
        .comment-input-one{
        width: 100%;
        display: flex;
        align-items:flex-start;
        img{
          width: 3.4rem;
          height: 3.4rem;
          border-radius: 50%;
        }
        textarea{
          margin-left: 2rem;
          width: 85%;
          height: 5rem;
          background: rgb(243, 241, 241);
          border-radius: 0.5rem;
          border:none;
          padding: 1rem;
        }
        textarea:focus {
          outline: none !important;
          border: 1px solid #719ECE;
          border-color: #719ECE;
          // box-shadow: 0 0 3px #719ECE;
        }
        }
        .comment-input-two{
          margin-top: 1.3rem;
          display: flex;
          align-items: center;
          position: relative;
          div{
            display: flex;
            align-items: center;
            img{
            width: 2rem;
            height: 2rem;
            }
          }
          .comment-input-two-bq{
            margin-left: 5rem;
            margin-right: 1.5rem;
          }
          .comment-input-two-scanf{
            position: absolute;
            right: 4rem;
            padding: 0.8rem 1.5rem;
            box-sizing: border-box;
            border-radius: 0.4rem;
            background: rgb(16, 162, 215);
            color: #ffffff;
          }
        }
      }
      
    }
    .recommend{
      margin-top: 2rem;
      padding: 2rem;
      border-radius: 0.2rem;
      background: #ffffff;
      margin-bottom: 2rem;
      box-sizing: border-box;
      .recommend-title{
        font-size: 1.6rem;
        font-weight: 700;
        margin-bottom: 2rem;
      }
      .recommend-item{
        width: 100%;
        .recommend-item-bar{
          width: 100%;
          height: 0.1rem;
          background: rgb(198, 198, 198);
          margin-bottom: 1.3rem;
        }
        .recommend-item-detail{
          .recommend-item-detail-one{
            font-size: 1.3rem;
            color: #7f7f7f;
            margin-bottom: 1.3rem;
            .nickname{
              color: black;
            }
          }
          .recommend-item-detail-two{
            font-size: 1.5rem;
            color: black;
            font-weight: 700;
            margin-bottom: 1.3rem;
          }
        }
        .recommend-item-icon{
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          img{
            width: 1.6rem;
            height: 1.6rem;
          }
          .icon{
            display: flex;
            align-items: center;
            margin-right: 1.5rem;
          }
        }
      }
      .recommend-item:hover{
        background-color: rgb(248, 248, 248);
        cursor:pointer;
      }
    }
  }
  .list{
    width: 28rem;
    .list-part-one{
      padding:2rem 2rem;
      box-sizing: border-box;
      background-color: #fff;
      border-radius: 0.2rem;
      margin-bottom: 2rem;
      .list-part-one-author{
        display: flex;
        align-items: center;
        font-size: 1.6rem;
        .userPhoto{
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          margin-right: 1.5rem;
        }
        .jyIcon{
          margin-left: 1rem;
          width: 3.4rem;
          height: 1.7rem;
        }
      }
      .list-part-one-bar{
        margin-top: 1.3rem;
        width: 100%;
        height: 0.02rem;
        background-color:#dadada;
        margin-bottom: 2rem;
      }
      .list-part-one-fd{
        margin-top: 1rem;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        .list-part-one-icon{
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 50%;
          background-color: rgba(123, 188, 231, 0.274);
          margin-right: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      }
    }
    .list-part-two{
      padding:2rem 2rem;
      background-color: #fff;
      box-sizing: border-box;
      border-radius: 0.2rem;
      margin-bottom: 2rem;
      display: flex;
      img{
        width: 4.5rem;
        height: 4.5rem;
      }
      .list-part-two-text{
        margin-left: 1rem;
        .list-part-two-text-one{
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .list-part-two-text-two{
          font-size: 1.3rem;
          color: rgb(186, 186, 186);
        }
      }
    }
    .list-part-three{
      padding:1.6rem 1.6rem;
      background-color: #fff;
      box-sizing: border-box;
      border-radius: 0.2rem;
      margin-bottom: 2rem;
      .list-part-three-title{
        font-size: 1.4rem;
      }
      .list-part-three-bar{
        margin-top: 1.3rem;
        width: 100%;
        height: 0.02rem;
        background-color:#dadada;
        margin-bottom: 2rem;
      }
      .list-part-three-item{
        .list-part-three-item-title{
          margin-top: 1.5rem;
          font-size: 1.3rem;
          margin-bottom: 0.7rem;
        }
        .list-part-three-item-relevant{
          font-size: 1.3rem;
          color: #a6a6a6;
        }
      }
      .list-part-three-item:hover{
        cursor:pointer;
        .list-part-three-item-title{
          color:#1e80ff;
        }
      }
    }
  }
}
</style>