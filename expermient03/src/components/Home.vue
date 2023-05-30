<template>
  <div class="head">
    <About />
  </div>
  <div class="midle">订单：{{ store.totalPrice }}</div>

  <router-view></router-view>
</template>

<script lang="ts" setup>
import About from "./About.vue";
import { useFoodsStore } from "../stores/index";
const store = useFoodsStore();
</script>

<style>
</style>