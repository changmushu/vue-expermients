<template>
  <h3>附件的美食</h3>
  <ul>
    <li v-for="(shop, index) in shops" :key="index">
      <router-link :to="shop.link">{{ shop.name }} {{ shop.code }}</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { listShop } from "../date/index";

const shops = listShop();
</script>

<style>
ul {
  list-style: none;
}
</style>