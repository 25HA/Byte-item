<template>
  <div class="home">
    <div>{{msg}}</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import axios from 'axios'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: 'hello'
    }
  },
  beforeCreate() {},
  created() {
    axios.get('https://www.baidu.com').then(res => {
      console.log(res);
    })
  },
  beforeMount() {},
  // 能获取到dom
  mounted() {},
  methods: {
    // 页面上的各种事件放这里
  }
}
</script>


<style lang="less" scoped>
  .wrap{
    width: 100px;

    .child{
      width: 100%;
    }
  }
</style>
