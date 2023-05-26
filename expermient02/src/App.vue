<script setup lang="ts">
import { computed, ref, watch } from "vue";

const courses = [
  { id: 1, name: "Web前端开发技术", code: 2 },
  { id: 2, name: "Java程序设计", code: 2.5 },
  { id: 3, name: "XML与WebService技术", code: 2 },
  { id: 4, name: "算法设计", code: 2 },
  { id: 5, name: "Web开发技术", code: 2.5 },
  { id: 6, name: "服务移动终端", code: 2.5 },
  { id: 7, name: "科学服务与SOA", code: 2 },
  { id: 8, name: "企业资源计划", code: 2 },
  { id: 9, name: "Web系统框架", code: 2.5 },
  { id: 10, name: "大数据开发基础", code: 2.5 },
  { id: 11, name: "Python应用", code: 2.5 },
];

const courseNames = ref([]);
const isActive = ref(false);
// const sum = courseNames.code

const totalCode = computed(() => {
  return courseNames.value.reduce((acc, course) => {
    return acc + course.code;
  }, 0);
});

watch(totalCode, (newValue) => {
  if (newValue > 17.5) {
    isActive.value = true;
  } else {
    isActive.value = false;
  }
});
</script>

<template>
  <span>code:</span>
  <span class="danger" :class="{ active: isActive }">{{ totalCode }}</span>
  <span>/25</span>
  <div class="context">
    <div class="left">
      <div v-for="course in courses" :key="course.id">
        <input type="checkbox" :value="course" v-model="courseNames" />
        <label for="">{{ course.name }} {{ course.code }}</label>
      </div>
    </div>
    <div class="right">
      <ul>
        <li v-for="item in courseNames">{{ item.name }} {{ item.code }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.context {
  border: 1px solid red;
  width: 600px;
  height: 600px;
  display: flex;
}
.left {
  width: 300px;
  border: 1px solid green;
}
.right {
  flex: 1;
  border: 1px solid black;
}

.danger {
  color: red;
}
.active {
  color: green;
}
</style>
