<!--
 * @Author: your name
 * @Date: 2022-02-12 15:53:45
 * @LastEditTime: 2022-02-26 15:46:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vitecamp\src\views\home\index.vue
-->
<template>
  <div class="container max-w-3xl mx-auto mt-40">
    <childVue :data="myTheme.$state" @change="childFn" />
  </div>
</template>

<script setup lang="ts">
import childVue from './child.vue';
import theme from '@/store/theme';
// const { proxy } = getCurrentInstance() as any; // 获取挂载全局的变量 和 方法
const myTheme = theme();
// pinia 获取 数据
console.log(myTheme.$state);
const childFn = (msg: string) => {
  console.log(msg);
};
</script>

<style lang="scss" scoped></style>
