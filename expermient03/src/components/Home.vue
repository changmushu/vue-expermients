<template>
  <div class="head">
    <About />
  </div>
  <div class="midle">订单：</div>

  <router-view></router-view>
</template>

<script lang="ts" setup>
import About from "./About.vue";
</script>

<style>
</style>