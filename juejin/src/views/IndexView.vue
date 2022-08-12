<template>
  <!-- <div class="home">
    <div>{{msg}}</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>-->
  <div class="navigationlist_content">
    <a href="#" class="list list_active">综合</a>
    <a href="#" class="list">后端</a>
    <a href="#" class="list">前端</a>
    <a href="#" class="list">Android</a>
    <a href="#" class="list">IOS</a>
    <a href="#" class="list">人工智能</a>
    <a href="#" class="list">开发工具</a>
    <a href="#" class="list">代码人生</a>
    <a href="#" class="list">阅读</a>
  </div>
</template>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}
html {
  font-size: 10px;
  // background-color: #bfa;
}
.navigationlist_content {
  width: 100%;
  height: 4.8rem;
  /* background-color: red; */
  display: flex;
  align-items: center;
  padding-left: 20rem;
  box-sizing: border-box;
  .list {
    height: 100%;
    background-color: #fff;
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

