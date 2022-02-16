/*
 * @Author: your name
 * @Date: 2022-02-12 17:22:34
 * @LastEditTime: 2022-02-14 10:00:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vitecamp\src\utils\mineUtils.ts
 */
import { ElMessage } from 'element-plus';

/**
 * @description: 提示信息
 * @param type  "warning","success","error","info"
 * @param  message  "需要提示的信息"
 * @param  showClose  "添加可关闭按钮 默认不添加"
 * @returns {*} 信息提示
 */
export const tips = (type: any, message: string, showClose = false): void => {
  console.log(type, showClose, message);
  switch (type) {
    case 'error':
      ElMessage.error(message);
      break;
    case 'info':
      ElMessage(message);
      break;
    default:
      ElMessage({ type, message, showClose });
      break;
  }
};
