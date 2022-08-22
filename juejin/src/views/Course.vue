<template>
  <div class="app">
      <div class="navigationlist_content">
    <router-link to="/CourseContent" class="list list_active">全部</router-link>
    <router-link to="/" class="list">后端</router-link>
    <router-link to="/" class="list">前端</router-link>
    <router-link to="/" class="list">Android</router-link>
    <router-link to="/" class="list">IOS</router-link>
    <router-link to="/" class="list">人工智能</router-link>
    <router-link to="/" class="list">开发工具</router-link>
    <router-link to="/" class="list">代码人生</router-link>
    <router-link to="/" class="list">阅读</router-link>
    <!-- 陈大佬的 -->
    
  </div>
  <router-view />
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang='less' scoped>
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
.navigationlist_content {
  width: 100%;
  height: 4.8rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding-left: 30rem;
  box-sizing: border-box;
  border-top: 1px solid #f1f1f1;
  .list {
    height: 100%;
    // background-color: #bfa;
    display: block;
    margin-right: 2rem;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #515767;
    white-space: nowrap;
  }
  .list_active {
    color: #1e80ff;
  }
  .list:hover {
    color: #1e80ff;
  }
}
</style>