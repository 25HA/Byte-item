<template>
  <nav>
    <ul type="none">
      <li>
        <div><img src="../assets/juejin.png" style="border:none; "></div>
      </li>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/">沸点</router-link>
      </li>
      <li>
        <router-link to="/">课程</router-link>
      </li>
      <li>
        <router-link to="/">直播</router-link>
      </li>
      <li>
        <router-link to="/">活动</router-link>
      </li>
      <li>
        <router-link to="/">商城</router-link>
      </li>
      <li>
        <router-link to="/">APP</router-link>
      </li>
      <li>
        <router-link to="/">插件</router-link>
      </li>
    </ul>
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <a href="/content" target="_blank">3333</a> -->
    <div class="search">
      <input type="text" placeholder="搜索稀土掘金">
      <div><img src="../assets/search.png"></div>
    </div>
    <div class="author">
      <div class="author-left">
        <span>创作者中心</span>
      </div>
      <div class="author-right">
        <div class="author-right-icon"></div>
      </div>
    </div>
    <div class="vip">
      <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg">
      <span>会员</span>
    </div>
    <div class="lingling">
      <img src="../assets/lingling.png">
    </div>
    <div class="user">
      <img src="../assets/userphoto.png">
    </div>
  </nav>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }

nav {
  background: #ffffff;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1.5rem 8rem;
  font-size: 1.3rem;

  .search {
    margin-left: 20rem;
    width: 35rem;
    height: 2.8rem;
    border-radius: 0.5rem;
    border: 1px solid rgb(176, 175, 175);
    display: flex;
    align-items: center;

    input {
      margin-left: 1rem;
      height: 95%;
      width: 87%;
      border: none;
      outline: none;
    }

    div {
      height: 96%;
      width: 3.5rem;
      background-color: rgb(229, 230, 231);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.3rem;

      img {
        background-color: rgb(229, 230, 231);
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }

  ul {
    display: flex;
    align-items: center;

    li {
      white-space: nowrap;
      margin-left: 1rem;
      margin-right: 1.5rem;

      img {
        margin-top: 0.2rem;
        width: 9rem;
        height: 2rem;
      }

      a {
        text-decoration: none;
        color: black;
      }

      a::after:hover {
        border-bottom: 1rem solid rgb(68, 156, 215);
      }

      a:hover {
        color: rgb(68, 156, 215);
      }
    }
  }

  .author {
    margin-left: 2rem;
    width: 10rem;
    height: 3.2rem;
    background-color: rgb(53, 125, 202);
    border-radius: 0.4rem;
    display: flex;
    align-items: center;

    .author-left {
      color: #ffffff;
      width: 85%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 0.01rem solid #d5d5d5;
      white-space: nowrap;
    }

    .author-right {
      display: flex;
      justify-content: center;
      align-items: center;

      .author-right-icon {
        border-top: 0.5rem solid #ffffff;
        border-left: 0.5rem solid rgb(53, 125, 202);
        border-right: 0.5rem solid rgb(53, 125, 202);
        border-bottom: 0.5rem solid rgb(53, 125, 202);
        margin-top: 0.5rem;
        margin-left: 0.1rem;
      }
    }
  }

  .vip {
    margin-left: 2rem;
    display: flex;
    align-items: center;

    img {
      width: 2rem;
      height: 2rem;
    }

    span {
      white-space: nowrap;
      margin-left: 0.6rem;
      font-size: 1.3rem;
      color: #7d7c7c;
    }
  }

  .lingling {
    margin-left: 2rem;

    img {
      width: 2.2rem;
      height: 2.2rem;
    }
  }

  .user {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-left: 2rem;
    background-color: #d5d5d5;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      // border-radius: 50%;
    }
  }
}
</style>
