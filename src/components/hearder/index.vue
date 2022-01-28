<template>
  <div class="hearder">
    <span>这是页面头部</span>
  </div>
  <div class="body_wrapper">
    <router-view />
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.hearder {
  height: 45px;
  line-height: 45px;
  color: azure;
  width: 100%;
  background: #002c5f;
}
.body_wrapper {
  height: calc(100vh - 45px);
}
</style>
