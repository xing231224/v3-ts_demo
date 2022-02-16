<!--
 * @Author: your name
 * @Date: 2022-02-12 15:53:45
 * @LastEditTime: 2022-02-14 15:31:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vitecamp\src\views\exception\401.vue
-->
<template>
  <el-row>
    <el-col>
      <el-result icon="warning" title="页面无权限" sub-title="请联系管理员申请权限">
        <template #extra>
          <el-button type="primary" @click="goBack">Back</el-button>
        </template>
      </el-result>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">

const router = useRouter();


const goBack = () => {
  router.push({
    name: 'home',
  });
};
</script>
