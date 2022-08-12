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
          <h1>Turborepo  高性能 monorepo方案,前端的构建未来还得开go</h1>
        </div>
        <div class="user">
          <div class="userInfo">
            <div class="head-photo">
              <img src="../assets/content-head-photo.jpg">
            </div>
            <div class="user-information">
              <div class="user-information-top">
                <div class="user-information-top-name">墨香</div>
                <div class="user-information-top-jy"></div>
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
        <div class="text"></div>
      </div>
      <div class="comment"></div>
      <div class="recommend"></div>
    </div>
    <div class="list"></div>
  </div>
</template>

<script>
export default {
  props() {},
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
  height: 100%;
}
.bigBox {
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
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
    margin-left: 16%;
    width: 49%;
    height: 80rem;
    background-color: #ffffff;
    .article{
      width: 100%;
      padding: 3rem 3rem;
      overflow: hidden;
      box-sizing: border-box;
      .title{
        font-size: 1.4rem;
        width: 100%;
      }
      .user{
        margin-top: 3rem;
        width: 100%;
        display: flex;
        position: relative;
        .userInfo{
          margin-left: 0.5rem;
          display: flex;
          .head-photo{
            width: 3.7rem;
            height: 3.7rem;
            border-radius: 50%;
            overflow: hidden;
            img{
              width: 3.7rem;
              height: 3.7rem;
              border-radius: 50%;
            }
          }
          .user-information{
            margin-left: 1.3rem;
            .user-information-top{
              font-size: 1.6rem;
              font-family: -apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Helvetica Neue","PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial!important;
            }
            .user-information-time{
              font-size: 1.3rem;
              color: #918f8f;
            }
          }
        }
        .follow{
          position: absolute;
          right: 3rem;
          .follow-box{
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
    }
  }
}
</style>