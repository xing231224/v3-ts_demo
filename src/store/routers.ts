/*
 * @Author: your name
 * @Date: 2022-02-18 11:11:15
 * @LastEditTime: 2022-02-21 11:06:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts_demo\src\store\routers.ts
 */
import { defineStore } from 'pinia';
import { RouteRecordRaw } from 'vue-router';
import asyncRoutes from '@/router/route.async';
import commonRoutes from '@/router/route.common';

interface state {
  routers: RouteRecordRaw[];
  addRouters: RouteRecordRaw[];
}

const routers = defineStore({
  id: 'routers',
  state: (): state => {
    return {
      routers: commonRoutes || [],
      addRouters: [],
    };
  },
  getters: {
    getRouters: (state) => state.routers,
    getAddRouters: (state) => state.addRouters,
  },
  actions: {
    async GenerateRoutes() {
      this.routers = commonRoutes.concat(asyncRoutes);
      this.addRouters = asyncRoutes;
    },
  },
});
export default routers;
