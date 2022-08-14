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
      <div class="content-item">
        <div class="item">
          <div class="title">
            <img
              class="user"
              src="https://ts1.cn.mm.bing.net/th/id/R-C.876d98b09f9eb9576dc3d8842a0034f4?rik=SEgYsoyFZQxPPg&riu=http%3a%2f%2ftupian.qqw21.com%2farticle%2fUploadPic%2f2019-1%2f201912319273090791.jpg&ehk=LsHqnjsVSG6v5Ts4Irux9sjNtk4WcVkjdRy%2b98MTeN4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
              alt
            />
            <div class="author">
              <div class="username">蜡笔小新喔</div>
              <div class="professional">前端CV大师 . 2小时前</div>
            </div>
          </div>
          <div class="detail">成都仲裁是不是效果不行啊。感觉好拉杂</div>
        </div>
        <div class="item-footer">
          <div class="foot">
            <i class="iconfont icon-fenxiang"></i>
            <span>分享</span>
          </div>
          <div class="foot">
            <i class="iconfont icon-pinglun"></i>
            <span>评论</span>
          </div>
          <div class="foot">
            <i class="iconfont icon-dianzan"></i>
            <span>点赞</span>
          </div>
        </div>
      </div>
      <div class="content-item">
        <div class="item">
          <div class="title">
            <img
              class="user"
              src="https://ts1.cn.mm.bing.net/th/id/R-C.1eed2de61a172c6ca2d79fc5ea62eb01?rik=c7W7KrSN7xFOIg&riu=http%3a%2f%2fimg.crcz.com%2fallimg%2f202003%2f10%2f1583821081100057.jpg&ehk=q%2f9lt0hQhwZzKFdRKYyG2g4zxQKgTWKJ4gHeelom3Mo%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
              alt
            />
            <div class="author">
              <div class="username">Qinghui</div>
              <div class="professional">50分钟前</div>
            </div>
          </div>
          <div class="detail">日惟东来，山海不阻，晴雨无伤。[给力][红包]</div>
        </div>
        <div class="item-footer">
          <div class="foot">
            <i class="iconfont icon-fenxiang"></i>
            <span>分享</span>
          </div>
          <div class="foot">
            <i class="iconfont icon-pinglun"></i>
            <span>评论</span>
          </div>
          <div class="foot">
            <i class="iconfont icon-dianzan"></i>
            <span>点赞</span>
          </div>
        </div>
      </div>
      <div class="content-item">
        <div class="item">
          <div class="title">
            <img
              class="user"
              src="https://ts1.cn.mm.bing.net/th/id/R-C.af81ac6eee795b8be73ea3108c4c9db4?rik=%2flw9QunpULFmKg&riu=http%3a%2f%2fimg.crcz.com%2fallimg%2f202002%2f11%2f1581388393842131.jpg&ehk=D%2fd0wiF3zd1pSooP7DOKWPOUzJyn9lS%2bZso8ctu3Zao%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
              alt
            />
            <div class="author">
              <div class="username">破风手_自由</div>
              <div class="professional">
                像风一样自由 @ 公众号:我的代码你自由了
                ·
                1小时前
              </div>
            </div>
          </div>
          <div
            class="detail"
          >#搞笑程序员# 之前公司有个大神，大早上的在厕所里睡着了，这还不够，问题是他打呼噜，而且声音贼大，持续大概有二十多分钟吧，感觉到不对，喊人赶紧敲门，也敲了大概3分钟左右他才醒，差点就叫救护车了[我想静静][我想静静][我想静静]</div>
        </div>
        <div class="item-footer">
          <div class="foot">
            <i class="iconfont icon-fenxiang"></i>
            <span>分享</span>
          </div>
          <div class="foot">
            <i class="iconfont icon-pinglun"></i>
            <span>评论</span>
          </div>
          <div class="foot">
            <i class="iconfont icon-dianzan"></i>
            <span>点赞</span>
          </div>
        </div>
      </div>
      <div class="content-item">
        <div class="item">
          <div class="title">
            <img
              class="user"
              src="https://p3-passport.byteacctimg.com/img/user-avatar/5d08c09da9bffd1331bc6220b884a466~300x300.image"
              alt
            />
            <div class="author">
              <div class="username">沸点小助手</div>
              <div class="professional">掘金 . 5天前</div>
            </div>
          </div>
          <div class="detail">
            【三分钟阅读挑战 | 碎片时间不浪费 】
            上下班坐地铁太无聊？睡觉前只知道刷短视频？那就来参加我们的三分钟阅读挑战活动吧，随时随地掏出你的手机，打开掘金app阅读文章，发布读书体会，留下你的学习脚印，高效利用一切碎片化时间！和掘友们共同阅读分享，真的不要太快乐！[看]…
          </div>
        </div>
        <div class="item-footer">
          <div class="foot">
            <i class="iconfont icon-fenxiang"></i>
            <span>分享</span>
          </div>
          <div class="foot">
            <i class="iconfont icon-pinglun"></i>
            <span>评论</span>
          </div>
          <div class="foot">
            <i class="iconfont icon-dianzan"></i>
            <span>点赞</span>
          </div>
        </div>
      </div>
      <div class="content-item">
        <div class="item">
          <div class="title">
            <img
              class="user"
              src="https://ts1.cn.mm.bing.net/th/id/R-C.1eed2de61a172c6ca2d79fc5ea62eb01?rik=c7W7KrSN7xFOIg&riu=http%3a%2f%2fimg.crcz.com%2fallimg%2f202003%2f10%2f1583821081100057.jpg&ehk=q%2f9lt0hQhwZzKFdRKYyG2g4zxQKgTWKJ4gHeelom3Mo%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
              alt
            />
            <div class="author">
              <div class="username">Qinghui</div>
              <div class="professional">50分钟前</div>
            </div>
          </div>
          <div class="detail">日惟东来，山海不阻，晴雨无伤。[给力][红包]</div>
        </div>
        <div class="item-footer">
          <div class="foot">
            <i class="iconfont icon-fenxiang"></i>
            <span>分享</span>
          </div>
          <div class="foot">
            <i class="iconfont icon-pinglun"></i>
            <span>评论</span>
          </div>
          <div class="foot">
            <i class="iconfont icon-dianzan"></i>
            <span>点赞</span>
          </div>
        </div>
      </div>
      <div class="content-item">
        <div class="item">
          <div class="title">
            <img
              class="user"
              src="https://ts1.cn.mm.bing.net/th/id/R-C.af81ac6eee795b8be73ea3108c4c9db4?rik=%2flw9QunpULFmKg&riu=http%3a%2f%2fimg.crcz.com%2fallimg%2f202002%2f11%2f1581388393842131.jpg&ehk=D%2fd0wiF3zd1pSooP7DOKWPOUzJyn9lS%2bZso8ctu3Zao%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
              alt
            />
            <div class="author">
              <div class="username">破风手_自由</div>
              <div class="professional">
                像风一样自由 @ 公众号:我的代码你自由了
                ·
                1小时前
              </div>
            </div>
          </div>
          <div
            class="detail"
          >#搞笑程序员# 之前公司有个大神，大早上的在厕所里睡着了，这还不够，问题是他打呼噜，而且声音贼大，持续大概有二十多分钟吧，感觉到不对，喊人赶紧敲门，也敲了大概3分钟左右他才醒，差点就叫救护车了[我想静静][我想静静][我想静静]</div>
        </div>
        <div class="item-footer">
          <div class="foot">
            <i class="iconfont icon-fenxiang"></i>
            <span>分享</span>
          </div>
          <div class="foot">
            <i class="iconfont icon-pinglun"></i>
            <span>评论</span>
          </div>
          <div class="foot">
            <i class="iconfont icon-dianzan"></i>
            <span>点赞</span>
          </div>
        </div>
      </div>
      <div class="content-item">
        <div class="item">
          <div class="title">
            <img
              class="user"
              src="https://p3-passport.byteacctimg.com/img/user-avatar/5d08c09da9bffd1331bc6220b884a466~300x300.image"
              alt
            />
            <div class="author">
              <div class="username">沸点小助手</div>
              <div class="professional">掘金 . 5天前</div>
            </div>
          </div>
          <div class="detail">
            【三分钟阅读挑战 | 碎片时间不浪费 】
            上下班坐地铁太无聊？睡觉前只知道刷短视频？那就来参加我们的三分钟阅读挑战活动吧，随时随地掏出你的手机，打开掘金app阅读文章，发布读书体会，留下你的学习脚印，高效利用一切碎片化时间！和掘友们共同阅读分享，真的不要太快乐！[看]…
          </div>
        </div>
        <div class="item-footer">
          <div class="foot">
            <i class="iconfont icon-fenxiang"></i>
            <span>分享</span>
          </div>
          <div class="foot">
            <i class="iconfont icon-pinglun"></i>
            <span>评论</span>
          </div>
          <div class="foot">
            <i class="iconfont icon-dianzan"></i>
            <span>点赞</span>
          </div>
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
          <div
            class="detail"
          >早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym</div>
          <div class="about">80赞 · 273评论</div>
        </div>
        <div class="item">
          <div
            class="detail"
          >早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym</div>
          <div class="about">80赞 · 273评论</div>
        </div>
        <div class="item">
          <div
            class="detail"
          >早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym早啊，jym</div>
          <div class="about">80赞 · 273评论</div>
        </div>
      </div>
      <div class="hotTopic">
        <div class="title">
          <div class="left">热门话题</div>
          <div class="right">
            <i class="iconfont icon-huanyihuan"></i>换一换
          </div>
        </div>
        <div class="item">
          <div class="left">
            <i class="iconfont icon-tubiao303"></i>#搞笑程序员#
          </div>
          <div class="right">690</div>
        </div>
        <div class="item">
          <div class="left">
            <i class="iconfont icon-tubiao303"></i>#搞笑程序员#
          </div>
          <div class="right">690</div>
        </div>
        <div class="item">
          <div class="left">
            <i class="iconfont icon-tubiao303"></i>#搞笑程序员#
          </div>
          <div class="right">690</div>
        </div>
        <div class="item">
          <div class="left">
            <i class="iconfont icon-tubiao303"></i>#搞笑程序员#
          </div>
          <div class="right">690</div>
        </div>
        <div class="item">
          <div class="left">
            <i class="iconfont icon-tubiao303"></i>#搞笑程序员#
          </div>
          <div class="right">690</div>
        </div>
        <div class="item">
          <div class="left">
            <i class="iconfont icon-tubiao303"></i>#搞笑程序员#
          </div>
          <div class="right">690</div>
        </div>
        <div class="item">
          <div class="left">
            <i class="iconfont icon-tubiao303"></i>#搞笑程序员#
          </div>
          <div class="right">690</div>
        </div>
        <div class="item">
          <div class="left">
            <i class="iconfont icon-tubiao303"></i>#搞笑程序员#
          </div>
          <div class="right">690</div>
        </div>
        <div class="item">
          <div class="left">
            <i class="iconfont icon-tubiao303"></i>#搞笑程序员#
          </div>
          <div class="right">690</div>
        </div>
        <div class="item">
          <div class="left">
            <i class="iconfont icon-tubiao303"></i>#搞笑程序员#
          </div>
          <div class="right">690</div>
        </div>
        <div class="more">
          查看更多 >
        </div>
      </div>
      <div class="howPlay">
        <i class="iconfont icon-manage-circuit-full"></i> 
        <div class="text">如何玩转沸点</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
      margin-bottom: 2rem;
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
        border-radius: .8rem;
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
        .detail:hover{
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
      .item:hover{
        background: #eee;
      }
    }
    .hotTopic{
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
        .left{
        font-size: 16px;
        }
        .right{
          margin-right: 1rem;
          font-size: 12px;
          color: #91949A;
        }
      }
      .item{
        width: 80%;
        height: 1rem;
        line-height: 1rem;
        margin: 1rem auto;
        padding: 0.8rem;
        // background: #eee;
        display: flex;
        justify-content: space-between;
        .left:hover{
          color: #237bff;
        }
        .right{
        font-size: 10px;
        -webkit-transform: scale(0.8);
        }
      }
      .more{
        width: 80%;
        height: 4rem;
        line-height: 4rem;
        margin: 1rem auto;
        border-top: 1px solid #3d5a71;
        text-align: center;
        color: #909498;
      }
    }
    .howPlay{
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
      .text{
        margin-left: 1rem;
      }
    }
  }
}
</style>

