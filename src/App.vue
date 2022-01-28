<script setup lang="ts">
import AppProvider from '@/components/application/Application.vue'
</script>

<template>
  <div class="page-view">
    <AppProvider>
      <router-view />
    </AppProvider>
  </div>
</template>

<style>
.page-view {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
