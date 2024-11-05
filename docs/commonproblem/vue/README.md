---
title: vue常见问题
---
# vue常见问题
## 不同域名cookie共享 导致cookie取不到值
通过二级域名打开https://xxx.com/ 打开会新生成一个cookie
我配置跳转到https://www.xxx.com/ 打开网页 从cookie里面取数据报错 null

## vue 更新字段 不立即更新
```vue
if(this.formData.caseCategory==='project'){
 this.$nextTick(()=>{
  this.formData.matterId = proParam.id;
  this.formData.matterName = proParam.projectName;
  this.formData.lesseeName = proParam.lesseeName;
  this.formData.prosecutionAmount = proParam.prosecutionAmount;
 });
}
```
`this.$nextTick()`
* 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
* vue将你对data的更改放到watcher的一个对列中（异步），只有在当前任务空闲时才会去执行watcher队列任务。这就有一个延迟时间了。
