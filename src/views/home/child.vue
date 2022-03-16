<!--
 * @Author: your name
 * @Date: 2022-02-26 15:18:05
 * @LastEditTime: 2022-02-26 15:44:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts_demo\src\views\home\child.vue
-->
<template>
  <!-- vue3页面 -->
  <div>
    我是child组件
    <p>我是来自父组件的值：{{ data }}</p>
  </div>
</template>

<script setup lang="ts">
// 接收父组件的数据
const props = defineProps({
  data: Object,
});
console.log(props.data);
// 给父组件传参
const emit = defineEmits(['change']);

emit('change', '啦啦啦，我是子组件的数据！！！');
</script>

<!-- <style lang="scss" scoped>
</style> -->
