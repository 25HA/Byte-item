<template>
  <div class="bigBox">
    <div class="subsidiary">
      <div class="fabulous icon">
        <img src="../assets/content-fabulous.png" v-on:click="changeFabulous" v-if="fabulous==false" />
        <img src="../assets/content-fabulous-duck.png" v-on:click="changeFabulous" v-else />
      </div>
      <div class="comment icon">
        <img src="../assets/content-comment-light.png" v-on:click="changeComment" v-if="comment==false" />
        <img src="../assets/content-comment-duck.png" v-on:click="changeComment" v-else />
      </div>
      <div class="collection icon">
        <img src="../assets/content-Collection-light.png" v-on:click="changeCollection" v-if="collection==false" />
        <img src="../assets/content-Collection-duck.png" v-on:click="changeCollection" v-else />
      </div>
      <div class="forward icon">
        <img src="../assets/content-forward-light.png" v-on:click="changeForward" v-if="forward==false" />
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
    <div class="content"></div>
    <div class="list"></div>
  </div>
</template>

<script>
export default {
  props() {

  },
  data() {
    return{
      fabulous:false,
      comment:false,
      collection:false,
      forward:false,
      warn:false,
      read:false
    }
  },
  methods:{
    changeFabulous(){
      console.log(this.fabulous)
      this.fabulous=!this.fabulous
    },
    changeComment(){
      this.comment=!this.comment
    },
    changeCollection(){
      this.collection=!this.collection
    },
    changeForward(){
      this.forward=!this.forward
    },
    changeWarn(){
      this.warn=!this.warn
    },
    changeRead(){
      this.read=!this.read
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
  width: 100%;
  height: 100%;
  .subsidiary {
    position: fixed;
    top: 10rem;
    left: 23rem;
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
  }
}
</style>