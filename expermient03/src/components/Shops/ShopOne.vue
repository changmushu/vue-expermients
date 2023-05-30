<template>
  <h2>必胜客</h2>
  <ul>
    <li v-for="(food, index) in foods" :key="index">
      <div>{{ food.name }}</div>
      <div>价格：{{ food.price }}</div>
      <div>月销售量：{{ food.code }}</div>
      <button @click="decrement(index)">-</button>
      {{ store.count[index] }}
      <button @click="increment(index)">+</button>
      <br />
    </li>
  </ul>
  <ul>
    <li v-for="(index, i) in store.selected" :key="i">
      {{ foods[index].name }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { listFoodOne } from "../../date/index";
import { useFoodsStore } from "../../stores/index";
import { watch } from "vue";
const foods = listFoodOne();
const store = useFoodsStore();
const { increment, decrement } = store;

function updateSelected(index: number) {
  const selected = store.selected;
  if (store.count[index] === 0) {
    const idx = selected.indexOf(index);
    if (idx !== -1) {
      selected.splice(idx, 1);
    }
  } else {
    if (!selected.includes(index)) {
      selected.push(index);
    }
  }
  console.log(selected);
}

// 监听count属性的变化，更新selected数组
watch(store.count, (newCount, oldCount) => {
  for (let i = 0; i < newCount.length; i++) {
    if (newCount[i] !== oldCount[i]) {
      updateSelected(i);
    }
  }
});
</script>

<style>
</style>