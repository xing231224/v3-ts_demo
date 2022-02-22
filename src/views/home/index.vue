<!--
 * @Author: your name
 * @Date: 2022-02-12 15:53:45
 * @LastEditTime: 2022-02-21 18:15:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vitecamp\src\views\home\index.vue
-->
<template>
  <div class="container max-w-3xl mx-auto mt-40">
    <el-button v-for="route in routerList" :key="route.name" :plain="true" @click="open(route.path)"
      >去 {{ route.name }}</el-button
    >
    {{ myTheme.themeType }}
    <el-button @click="getAll">获取user数据库中的所有数据</el-button>
  </div>
</template>

<script setup lang="ts">
import loginApi from '@/api/modules/login';
import theme from '@/store/theme';

const router = useRouter();
const { getAllInfo } = loginApi;
const { proxy } = getCurrentInstance() as any; // 获取挂载全局的变量 和 方法
const myTheme = theme();
const routerList = router.options.routes.filter((item) => item.name);
// pinia 获取 数据
console.log(myTheme.$state);
// const param = {
//   id: '1981193009',
//   nickname: '@馒头',
//   password: '123456',
// };
// register(param).then(res => {
//   console.log(res);
// })
const getAll = () => {
  getAllInfo().then((res) => {
    console.log(res);
    return res;
  });
};

console.log(myTheme.$state);

const open = (path: string) => {
  proxy.$router.push(path);

  myTheme.setThemeType(path);
};
</script>

<style lang="scss" scoped></style>
