<template>
  <div class="IndexView_tabbar">
    <!-- 首页导航栏 -->
    <div class="topbar_wrap">
      <div class="topbar">
        <router-link to="/" class="list list_active">综合</router-link>
        <router-link to="/" class="list">后端</router-link>
        <router-link to="/" class="list">前端</router-link>
        <router-link to="/" class="list">Android</router-link>
        <router-link to="/" class="list">IOS</router-link>
        <router-link to="/" class="list">人工智能</router-link>
        <router-link to="/" class="list">开发工具</router-link>
        <router-link to="/" class="list">代码人生</router-link>
        <router-link to="/" class="list">阅读</router-link>
        <router-link to="/" class="list">标签管理</router-link>
      </div>
    </div>
    <!-- 首页页面 -->
    <router-view />
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
}
// 首页导航栏
.topbar_wrap {
  width: 100%;
  height: 4.8rem;
  background-color: #fff;
  border-top: 1px solid #f1f1f1;
  // display: flex;
  // justify-content: center;
  .topbar {
    width: 50%;
    height: 100%;
    // background-color: #bfa;
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 30rem;

    .list {
      height: 100%;
      display: block;
      margin-right: 3rem;
      font-size: 1.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #515767;
      white-space: nowrap;
    }
    .list:last-child {
      margin-right: 0;
      position: absolute;
      right: 0;
    }
    .list_active {
      color: #1e80ff;
    }
    .list:hover {
      color: #1e80ff;
    }
  }
}
</style>



