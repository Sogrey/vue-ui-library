<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import SButton from '@vue3-ui-library/components/button'
</script>

<template>
  <!-- <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <p> Basic Usage </p>
  <p class="row-gap">
    <s-button>默认按钮</s-button>
    <s-button type="primary">主要</s-button>
    <s-button type="success">成功</s-button>
    <s-button type="info">信息</s-button>
    <s-button type="warning">警告</s-button>
    <s-button type="error">错误</s-button>
    <s-button type="text">文本</s-button>
  </p>
  <p> Disabled </p>
  <p class="row-gap">
    <s-button disabled>默认按钮</s-button>
    <s-button type="primary" disabled>主要</s-button>
    <s-button type="success" disabled>成功</s-button>
    <s-button type="info" disabled>信息</s-button>
    <s-button type="warning" disabled>警告</s-button>
    <s-button type="error" disabled>错误</s-button>
    <s-button type="text" disabled>文本</s-button>
  </p>
  <p> Round </p>
  <p class="row-gap">
    <s-button round>默认按钮</s-button>
    <s-button type="primary" round>主要</s-button>
    <s-button type="success" round>成功</s-button>
    <s-button type="info" round>信息</s-button>
    <s-button type="warning" round>警告</s-button>
    <s-button type="error" round>错误</s-button>
    <s-button type="text" round>文本</s-button>
  </p>  
  <p> Cricle </p>
  <p class="row-gap">
    <s-button cricle>默认按钮</s-button>
    <s-button type="primary" cricle size="mini">1</s-button>
    <s-button type="success" cricle size="small">2</s-button>
    <s-button type="info" cricle size="medium">3</s-button>
    <s-button type="warning" cricle size="large">4</s-button>
    <s-button type="error" cricle>错误</s-button>
    <s-button type="text" cricle>文本</s-button>
  </p>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.row-gap{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0 10px;
}
</style>
