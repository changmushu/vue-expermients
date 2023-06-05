<script lang="ts" setup>
import { defineComponent } from 'vue';
import { useStore } from 'pinia';
import axios from 'axios';

</script>

<template>
    <div>
        <input type="text" v-model="username" placeholder="请输入用户名" />
        <input type="password" v-model="password" placeholder="请输入密码" />
        <button @click="handleSubmit">登录</button>
    </div>
</template>

<style lang="scss" scoped></style>
