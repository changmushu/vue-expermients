<template>
  <h2>必胜客</h2>
  <ul>
    <li v-for="(food, index) in foods" :key="index">
      <div>{{ food.name }}</div>
      <div>价格：{{ food.price }}</div>
      <div>月销售量：{{ food.code }}</div>
      <br />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { listFoodOne } from "../../date/index";

const foods = listFoodOne();
</script>

<style>
</style>