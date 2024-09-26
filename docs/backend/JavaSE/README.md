
# hava

构建用户界面的<font style="color:#E8323C;">渐进式框架</font>

**<font style="color:#E8323C;">vue CLI </font>**vue.js开发的标准工具

**<font style="color:#E8323C;"> </font>**

```xml
cnpm install -g @vue/cli
vue --version
vue create vue-demo // 名字不能大写
```

![](https://cdn.nlark.com/yuque/0/2022/png/33708367/1669394769477-09391ddd-597c-462a-bbf8-6653d827649a.png)

![](https://cdn.nlark.com/yuque/0/2022/png/33708367/1669394939871-428ce38e-6d22-4317-994a-fa88c84f1110.png)![](https://cdn.nlark.com/yuque/0/2022/png/33708367/1669394958834-c77e4268-0883-4e3d-9084-9bf04836f33a.png)



+ 插件高亮 vue2 vetur，vue3 volar

## 模板语法
```xml
<template>
  <div class="hello">
    <h3>学习模板语法</h3>
    <p>{{msg}}</p>
    <div v-html="rawHtml"></div>
    <div v-bind:id="dynamicId"></div>
    <p>{{ num + 10}}</p>
    <p>{{ flag ? "浩浩":"婷婷"}}</p>
    <p>{{message.split('').reverse().join("")}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      msg: "测",
      rawHtml: "<a href='http://www.baidu.com'>百度</a>",
      dynamicId: 10001,
      num: 10,
      flag: true,
      message: "123"
    }
  }
}
</script>
```

+ {{}}文本
+ v-html 绑定标签
+ v-bind 绑定属性 可以简写成 ：
+ vue支持JS表达式 不支持语句和流程控制

## 条件渲染
```vue
<template>
  <div v-if="flag">haha</div>
  <div v-else>hhh</div>
</template>


<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      flag: true
    }
  }
}
</script>
```

+ <font style="color:rgb(33, 53, 71);">一个 </font>v-else<font style="color:rgb(33, 53, 71);"> 元素必须跟在一个 </font>v-if<font style="color:rgb(33, 53, 71);"> 或者 </font>v-else-if<font style="color:rgb(33, 53, 71);"> 元素后面，否则它将不会被识别。</font>

v-if<font style="color:rgb(33, 53, 71);"> 是“真实的”按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被</font><font style="color:#E8323C;">销毁与重建。</font>

v-if<font style="color:rgb(33, 53, 71);"> 也是</font>**<font style="color:#E8323C;">惰性</font>**<font style="color:rgb(33, 53, 71);">的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染。</font>

<font style="color:rgb(33, 53, 71);">相比之下，</font>v-show<font style="color:rgb(33, 53, 71);"> 简单许多，</font><font style="color:#E8323C;">元素无论初始条件如何，始终会被渲染</font><font style="color:rgb(33, 53, 71);">，只有 CSS </font>display<font style="color:rgb(33, 53, 71);"> 属性会被切换。</font>

<font style="color:rgb(33, 53, 71);">总的来说，</font>v-if<font style="color:rgb(33, 53, 71);"> 有更高的切换开销，而 </font>v-show<font style="color:rgb(33, 53, 71);"> 有更高的初始渲染开销。因此，如果需要</font><font style="color:#E8323C;">频繁切换</font><font style="color:rgb(33, 53, 71);">，则使用 </font>v-show<font style="color:rgb(33, 53, 71);"> 较好；如果在运行时</font><font style="color:#E8323C;">绑定条件很少改变</font><font style="color:rgb(33, 53, 71);">，则 </font>v-if<font style="color:rgb(33, 53, 71);"> 会更合适。</font>

## 列表渲染
```vue
<template>
  <ul>
    <li v-for="item in newLists" :key="item.id">
      {{item.title}}
    </li>
  </ul>
</template>


<script>
export default {
  data(){
    return {
      newLists:[
        {
          id:1001,
          title: "今日新闻1"
        },
        {
          id:1002,
          title: "今日新闻2"
        },
        {
          id:1003,
          title: "今日新闻3"
        }
      ]
    }
  }
}
</script>
```

<font style="color:rgb(33, 53, 71);">Vue 默认按照“就地更新”的策略来更新通过</font><font style="color:rgb(33, 53, 71);"> </font>v-for<font style="color:rgb(33, 53, 71);"> </font><font style="color:rgb(33, 53, 71);">渲染的元素列表。当数据项的顺序改变时，Vue 不会随之移动 DOM 元素的顺序，而是就地更新每个元素，确保它们在原本指定的索引位置上渲染。</font>

<font style="color:rgb(33, 53, 71);">默认模式是高效的，但</font>**<font style="color:rgb(33, 53, 71);">只适用于列表渲染输出的结果不依赖子组件状态或者临时 DOM 状态 (例如表单输入值) 的情况</font>**<font style="color:rgb(33, 53, 71);">。</font>

<font style="color:rgb(33, 53, 71);">为了给 Vue 一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，你需要为每个元素对应的块提供一个唯一的</font><font style="color:rgb(33, 53, 71);"> </font>key<font style="color:rgb(33, 53, 71);"> </font><font style="color:rgb(33, 53, 71);">attribute：</font>

```xml
<div v-for="item in items" :key="item.id">
  <!-- 内容 -->
</div>
```

## 事件处理
```vue
<template>
  <div>
    <button @click="counter += 1">点击counter = {{  counter  }}</button>
    <button @click="clickHandle">按钮</button>
    <p>{{ message }}</p>
    <button @click="say('hi')">say hi</button>
    <button @click="say('what')">say what</button>
    <ul>
      <li @click="clickItemhandle(item)" v-for="(item,index) in names" :key="index">{{item}}</li>
    </ul>
  </div>


</template>


<script>
export default {
  data() {
    return {
      counter: 1,
      message: "消息通知",
      name:[
        "iwen",
        "ime",
        "frank"
      ]
    }
  },
  methods: {
    clickHandle(event) {
      //this.message = "消息被撤回了";
      // event 是原生dom event
      console.log(event);
      console.log(event.target);
      if (event) {
        event.target.innerHTML = "点击之后";
      }
    },
    say(data){
      console.log(data);
    },
    clickItemhandle(item){
      console.log(item);
    }


  }
}
</script>
```

## 表单输入绑定
v-model 指令在表单元素上进行双向绑定input，textarea，select

.lazy ,默认情况下，v-model在每次input事件触发后将输入框的值与数据进行同步。，会转成change事件之后进行同步。

.trim 去掉首尾空格

```vue
<template>
  <div>
   <input type="text" v-model.lazy="username">
   <input type="text" v-model.trim="password">
   <p>{{username}},{{password}}</p>
   <button @click="clickGetUserName">获取用户名</button>
  </div>


</template>


<script>
export default {
  data() {
    return {
      username:"",
      password:""
    }
  },
  methods: {
    clickGetUserName(){
      console.log(this.username);
    }
  }
}
</script>
```

## 组件基础
```vue
<template>
    <h3>单文件主键</h3>
</template>
<script>
export default{
    name: "mycomponents"
}
</script>
<style>
h3{
    color: red;
}
</style>
```

```xml
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <MyComponents></MyComponents>
  <my-components></my-components>
</template>

<script>
import MyComponents from './components/MyComponents.vue';
export default {
  name: 'App',
  components: {
    MyComponents
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```

+ 组件名不能使用单字母，驼峰命名可以使用-来使用组件。
+ 通常一个应用会以一颗嵌套的组件树的形式来组织。
+ 组件之前会相互隔离的，一定程度上防止问题的发生

## 组件交互
```vue
<template>
    <h3>prop传递数据</h3>
    <p>{{title}}</p>
    <ul>
        <li v-for="(item,index) in names" :key="index">{{item}}</li>
    </ul>
</template>
<script>
export default{
    name: "Mycomponent",
    props:{
        title:{
            type:String,
            default: ""
        },
        names:{
            type:Array,
            // 数组和对象必须使用函数进行返回
            default:function(){
                return []
            }
        }
    }
}
</script>
<style>
h3{
    color: red;
}
</style>
```

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <MyComponents :title="title" :names="names"></MyComponents>
</template>


<script>
import MyComponents from './components/MyComponents.vue';
export default {
  name: 'App',
  data(){
    return{
      title: "我是一个标题",
      names:["iwen","ime","frank"]
    }
  },
  components: {
    MyComponents
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

+ String
+ Number
+ Boolean
+ Array
+ Object
+ Function
+ 对象或者数组要用工厂模式。

## 自定义事件的组件交互
```vue
<template>
    <h3>自定义事件传递关系</h3>
    <button @click="sendClickhandle">点击传递</button>
</template>
<script>
export default {
    name: "Mycomponent",
    data() {
        return {
            message: "我是MyComponent数据"
        }
    },
    methods:{
        sendClickhandle()
        {
            // 参数1：字符串： 理论上是随便的，但是需要具有意义
            // 参数2：传递的数据
            this.$emit("onEvent", this.message)
        }
    }
}
</script>
<style>
h3 {
    color: red;
}
</style>
```

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <MyComponents @onEvent="getDataHandle"></MyComponents>
  <p>{{message}}</p>
</template>


<script>
import MyComponents from './components/MyComponents.vue';
export default {
  name: 'App',
  components: {
    MyComponents
  },
  data(){
    return {
      message: ""
    }
  },
  methods:{
    getDataHandle(data){
      console.log(data);
      this.message = data;
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

## 组件的生命周期（8个）
创建 beforeCreate 、 created

渲染 beforeMount 、 mounted

更新 beforeUpdate、updated

卸载 beforeUnmount、unmounted

```vue
<template>
    <h3>生命周期函数</h3>
    <p>{{message}}</p>
    <button @click="message='数据'">点击</button>
</template>
<script>
export default {
    name: "Mycomponent",
    data() {
        return {
            message: ""
        }
    },
    beforeCreate(){
        console.log("beforeCreate: 组件创建之前");
    },
    created(){
        console.log("created: 组件创建之前");
    },
    beforeMount(){
        console.log("beforeMount:渲染之前");
    },
    mounted(){
        console.log("mounted:组件渲染完成");
        // 把网络请求放到这里


    },
    beforeUpdate(){
        console.log("beforeUpdate: 组件更新之前");
    },
    updated(){
        console.log("beforeUpdate: 组件更新之后");
    },
    beforeUnmount(){
        console.log("beforeUnmount: 组件卸载之前");
        // 卸载之前，把消耗性能的处理都干掉
        // 定时器
    },
    unmounted(){
        console.log("unmounted: 组件卸载之后");
    }


}
</script>
<style>
h3 {
    color: red;
}
</style>
```

## vue引入第三方
<font style="background-color:#FADB14;">npm i swiper@版本号</font>

Swiper 轮播图

github寻找

vue2的好的第三方资源

```vue
<template>
    <swiper :modules="modules"  :pagination="{ clickable: true }">
        <swiper-slide>
            <img src="../assets/1.jpg">
        </swiper-slide>
        <swiper-slide><img src="../assets/1.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/1.jpg"></swiper-slide>
    </swiper>
</template>


<script>
import { Swiper, SwiperSlide } from 'swiper/vue';


import {Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Pagination],
        };
    },
};
</script>
<style>
img {
    width: 80%;
    height: 600px;
}
</style>
```

## Axios网络请求
基于promise的网络请求库

<font style="background-color:#FADB14;">npm install axios 安装</font>

<font style="background-color:#FADB14;">npm install -save querystring 转换格式</font>

[https://www.kancloud.cn/yunye/axios/234845/](https://www.kancloud.cn/yunye/axios/234845/)

```vue
<template>
    <div>
        <p>{{ chengpin.title }}</p>
    </div>
</template>


<script>
// import axios from "axios"
// import querystring from "querystring"
export default {
    data() {
        return {
            chengpin: {}
        }
    },
    mounted() {
        // axios(
        //     {
        //         method: "get",
        //         url: "http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php"
        //     }
        // ).then(
        //     res =>{
        //         this.chengpin = res.data.chengpinDetails[0];
        //     }
        // )


        // axios(
        //     {
        //         method: "post",
        //         url: "http://iwenwiki.com/api/blueberrypai/login.php",
        //         data: querystring.stringify({
        //             user_id: "iwen@qq.com",
        //             password: "iwen123",
        //             verification_code: "crfvw"
        //         })
        //     }
        // ).then(
        //     res =>{
        //         console.log(res.data);
        //     }
        // )


        // 快捷方案
        this.$axios.get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php").then(res => {
            console.log(res.data);
        });


        this.$axios.post("http://iwenwiki.com/api/blueberrypai/login.php", this.$querystring.stringify(
            {
                user_id: "iwen@qq.com",
                password: "iwen123",
                verification_code: "crfvw"
            }
        )).then(res => {
            console.log(res.data);
        })



    }
};
</script>
<style>
img {
    width: 80%;
    height: 600px;
}
</style>
```

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios"
import querystring from "querystring"
import './registerServiceWorker'


const app =  createApp(App)
app.config.globalProperties.$axios = axios
app.config.globalProperties.$querystring = querystring
app.mount('#app')
```

## 网络请求封装
```javascript
const base = {
    baseUrl: "http://iwenwiki.com",
    chengpin: "/api/blueberrypai/getChengpinDetails.php"
}


export default base;
```

```javascript
import axios from "../utils/request"
import path from './path'


const api = {
    // 诚品详情地址
    getChengpin(){
        return axios.get(path.baseUrl+path.chengpin)
    }
}


export default api
```

```javascript
import axios from 'axios'
import querystring from "querystring"


const errorHandle = (status,info)=>{
    switch(status){
        case 400:
            console.log("语音有误");
            break;
        case 401:
            console.log("服务器认证失败");
            break;
        case 403:
            console.log("服务器拒绝访问");
            break;         
        case 404:
            console.log("地址错误"); 
            break;   
        case 500:
            console.log("服务器遇到意外");
            break;
        case 502:
            console.log("服务器无响应");
            break;
        default:
            console.log(info);
            break;
    }
}


const instance = axios.create(
    {
        // 网络请求的公共配置
        timeout: 5000
    }
)
// 拦截器使用
// 发送数据
instance.interceptors.request.use(
    config =>{
        if(config.method === "post"){
            config.data = querystring.stringfy(config.data)
        }
        // config 包含网络请求的所有信息
        return config;
    },
    error =>{
        return Promise.reject(error)
    }
)


// 获取数据之前
instance.interceptors.response.use(
    response =>{
        return response.status === 200 ? Promise.resolve(response) : Promise.reject(error)
    },
    error =>{
        const {response} = error;
        // 错误的处理才是重点
        errorHandle(response.status,response.info)


    }
)


// 发送数据之前
export default instance;
```

## 网络请求跨域解决方案
js 同源策略

同源策略就是浏览器的一项安全策略，浏览器只允许js代码请求和当前所在服务器域名，端口，协议相同的数据接口上

<font style="color:#E8323C;">协议，域名，端口</font>任意一个不相同，就跨域。

后台解决：cors

前台解决：proxy

```javascript
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api':{
        target: 'http://iwenwiki.com',
        changeOrigin: true
      }
    }
  }
})
```

## vue引入路由配置
在vue中，我们可以通过vue-router路由管理页面之间的关系

vue Router 构建单页面应用轻而易举

<font style="background-color:#FADB14;">cnpm install --save vue-router</font>

```javascript
import {createRouter,createWebHashHistory,createWebHistory} from "vue-router"
import HomeView from "../views/HomeView"
import AboutView from "../views/AboutView"
// 配置信息中需要页面的相关配置


const routes =[
    {
        path:"/",
        component: HomeView
    },
    {
        path:"/about",
        component: AboutView
    }


]



const router = createRouter(
    {   
        // createWebHashHistory 原理： a标签的锚点链接
        // createWebHistory 此种方式需要后台做重定向，否则会出现404问题  h5 的 pushState()
        history: createWebHashHistory(),
        routes
    }
)


export default router;
```

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios"
import querystring from "querystring"
import './registerServiceWorker'
import router from "./router"


const app =  createApp(App)
app.config.globalProperties.$axios = axios
app.config.globalProperties.$querystring = querystring
app.use(router)
app.mount('#app')
```

```vue
<template>
  <router-link to="/">首页</router-link> |
  <router-link to="/about">关于</router-link>
 <router-view></router-view>
</template>


<script>


export default {
  name: 'App',
  components: {
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

```xml
location / {
    try_files $uri $uri/ /index.html;
}
```

## 路由传递参数
```javascript
import {createRouter,createWebHashHistory,createWebHistory} from "vue-router"
import HomeView from "../views/HomeView"
import AboutView from "../views/AboutView"
// 配置信息中需要页面的相关配置


const routes =[
    {
        path:"/",
        name: 'home',
        component: HomeView
    },
    {
        path:"/about",
        name: 'about',
        component: AboutView
    },
    {
        path:"/news",
        name: 'news',
        // 异步加载方式 页面多容易造成卡顿
        component: () => import("../views/NewsView.vue")
    },
    {
        path:"/newsdetails/:name",
        name: 'newsdetails',
        // 异步加载方式 页面多容易造成卡顿
        component: () => import("../views/NewsDetailsView.vue")
    }


]



const router = createRouter(
    {   
        // createWebHashHistory 原理： a标签的锚点链接
        // createWebHistory 此种方式需要后台做重定向，否则会出现404问题  h5 的 pushState()
        history: createWebHashHistory(),
        routes
    }
)


export default router;
```

```vue
!<template>
      <div class="">
        <h3>新闻</h3>
        <ul>
            <li><router-link to="/newsdetails/中国">中国新闻</router-link></li>
            <li><router-link to="/newsdetails/百度">百度新闻</router-link></li>
            <li><router-link to="/newsdetails/头条">头条新闻</router-link></li>
        </ul>
      </div>
    </template>
    
    <script>
    export default {
      name: '',
      props: {},
      data () {
        return {}
      },
      components: {
        
      },
      computed: {
        
      },
      mounted: {
        
      },
      watch: {
        
      },
      methods: {
        
      },
      created () {
        
      },
      mounted () {
        
      },
    }
    </script>
    
    <style scoped>
      
    </style>
```

```vue
!<template>
  <div class="">
    <h3>新闻详情</h3>
    <p>{{$route.params.name}}</p>
  </div>
</template>


<script>
export default {
  name: '',
  props: {},
  data () {
    return {}
  },
  components: {
    
  },
  computed: {
    
  },
  mounted: {
    
  },
  watch: {
    
  },
  methods: {
    
  },
  created () {
    
  },
  mounted () {
    
  },
}
</script>


<style scoped>
  
</style>
```

## 嵌套路由配置
```javascript
import {createRouter,createWebHashHistory,createWebHistory} from "vue-router"
import HomeView from "../views/HomeView"
import AboutView from "../views/AboutView"
// 配置信息中需要页面的相关配置


const routes =[
    {
        path:"/",
        name: 'home',
        component: HomeView
    },
    {
        path:"/about",
        name: 'about',
        redirect: "/about/us",
        component: AboutView,
        children:[
            {
                path: "us",
                component: () => import("../views/AboutSub/AboutUS.vue")
            },
            {
                path: "info",
                component: () => import("../views/AboutSub/AboutInfo.vue")
            }
        ]
    },
    {
        path:"/news",
        name: 'news',
        // 异步加载方式 页面多容易造成卡顿
        component: () => import("../views/NewsView.vue")
    },
    {
        path:"/newsdetails/:name",
        name: 'newsdetails',
        // 异步加载方式 页面多容易造成卡顿
        component: () => import("../views/NewsDetailsView.vue")
    }


]



const router = createRouter(
    {   
        // createWebHashHistory 原理： a标签的锚点链接
        // createWebHistory 此种方式需要后台做重定向，否则会出现404问题  h5 的 pushState()
        history: createWebHashHistory(),
        routes
    }
)


export default router;
```

```vue
<template>
    <div>
        <router-link to="/about/us">关于我们</router-link> |
        <router-link to="/about/info">关于信息</router-link>
    <router-view></router-view>
    </div>
    
    
</template>
```

## Vuex 状态管理
更方便的管理组件之间的数据交互，提供了一个集中式的管理方案，任何组件都有可以指定的方式进行读取和改变数据。解决组件嵌套传递数据问题。

<font style="background-color:#FADB14;">cnpm install --save vuex</font>

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios"
import querystring from "querystring"
import './registerServiceWorker'
import router from "./router"
import store from './store'


const app =  createApp(App)
app.config.globalProperties.$axios = axios
app.config.globalProperties.$querystring = querystring
app.use(router)
app.use(store)
app.mount('#app')
```



```vue
<template>
    <router-link to="/">首页</router-link> |
    <router-link to="/about">关于</router-link> |
    <router-link to="/news">新闻</router-link>
   <router-view></router-view>
   <p>counter = {{$store.state.counter}}</p>
   <p>{{counter}}</p>
</template>


<script>
// vuex提供的快捷读取方式
import {mapState} from "vuex"
export default {
  name: 'App',
  components: {
  },
  computed:{
    ...mapState(["counter"])
  }
}
</script>


<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
```

```javascript
import{createStore} from 'vuex'


export default createStore({
    state:{
        counter: 0
    }
})
```

## Vuex 常用核心概念
state，getter，Mutation，Action

Getter 过滤数据

Mutation 修改数据

Action 类似不过可以是异步操作，类似于网络请求

```vue
<template>
    <router-link to="/">首页</router-link> |
    <router-link to="/about">关于</router-link> |
    <router-link to="/news">新闻</router-link>
   <router-view></router-view>
   <p>counter = {{$store.state.counter}}</p>
   <p>{{counter}}</p>
   <p>count = {{$store.getters.getCounter}}</p>
   <button @click="addClickHandle">点击</button>
   <button @click="addAsyncClickHandle">点击</button>
</template>


<script>
// vuex提供的快捷读取方式
import {mapActions, mapMutations, mapState} from "vuex"
import {mapGetters} from "vuex"
export default {
  name: 'App',
  components: {
  },
  computed:{
    ...mapState(["counter"]),
    ...mapGetters(["getCounter"])
  },
  methods:{
    ...mapMutations(["addCounter"]),
    ...mapActions(["asyncAddCounter"]),
    addClickHandle(){
      // this.$store.commit("addCounter",15)
      this.addCounter(20)
    },
    addAsyncClickHandle(){
      //this.$store.dispatch("asyncAddCounter")
      this.asyncAddCounter()
    }
  }
}
</script>


<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
```

```javascript
import{createStore} from 'vuex'
import axios from "axios"
export default createStore({
    state:{
        counter: 10
    },
    getters:{
        getCounter(state){
            return state.counter > 0 ? state.counter : "counter数据异常"
        }
    },
    mutations:{
        addCounter(state,num){
            state.counter += num;
        }
    },
    actions:{
        asyncAddCounter({commit}){
            axios.get("http://iwenwiki.com/api/generator/list.php").then(
                res =>{
                    commit("addCounter",res.data[0])
                }
            )
        }
    }
})
```

## Vue3新特性
1. 性能比2强
2. 打包体积更小，可以删除无用模块
3. 组合API
4. 碎片
5. TS支持
6. 暴露了自定义渲染API

```vue
!<template>
    <div class="">
      <p>{{message}}</p>
      <ul>
        <li v-for="(item,index) in names.lists" :key="index">{{item}}</li>
      </ul>
      <p>{{message}}</p>
      <button @click="clickHandle">点击</button>
      <p>{{msg}}</p>
    </div>
</template>


<script>
import {ref,reactive} from "vue"
export default {
  name: '',
  props:{
    msg: String
  },
  setup(props,ctx){
    // setup 没有this 关键字
    console.log(props.msg);
    console.log(ctx);
    const message = ref("我是消息");
    const names = reactive(
        {
          lists:["iwen","ime","frank"]
        }
    )


    function clickHandle(){
      console.log("我是新的消息");
      message.value = "我是新的消息";
    }
    const msg = props.msg;


    return{
      message,
      names,
      clickHandle,
      msg
    }
  }
}
</script>


<style scoped>
 
</style>
```

生命周期函数 都加上<font style="color:#E8323C;"> on</font>，去掉了组件创建的两个。

生命周期函数可以有多个按照生命周期函数

Provide 和 Inject 必须是父和子，不限层级

Fragment 以前只是单个根节点，现在允许多个

```vue
!<template>
    <div class="">
      <p>{{message}}</p>
      <ul>
        <li v-for="(item,index) in names.lists" :key="index">{{item}}</li>
      </ul>
      <p>{{message}}</p>
      <button @click="clickHandle">点击</button>
      <p>{{msg}}</p>
      <p>{{mess}}</p>
    </div>
</template>


<script>
import {ref,reactive, onMounted, inject} from "vue"
export default {
  name: '',
  props:{
    msg:String
  },
  setup(props,ctx){
    // setup 没有this 关键字
    console.log(props.msg);
    console.log(ctx);
    const message = ref("我是消息");
    const names = reactive(
        {
          lists:["iwen","ime","frank"]
        }
    )


    onMounted(()=>{
      console.log("挂载了");
    })


    onMounted(()=>{
      console.log("挂载了1");
    })


    function clickHandle(){
      console.log("我是新的消息");
      message.value = "我是新的消息";
    }
    const msg = props.msg;


    const mess = inject("message");


    return{
      message,
      names,
      mess,
      clickHandle,
      msg
    }
  }
}
</script>


<style scoped>
 
</style>
```

```vue
<template>
    <router-link to="/">首页</router-link> |
    <router-link to="/about">关于</router-link> |
    <router-link to="/news">新闻</router-link>
   <router-view></router-view>
   <p>counter = {{$store.state.counter}}</p>
   <p>{{counter}}</p>
   <p>count = {{$store.getters.getCounter}}</p>
   <button @click="addClickHandle">点击</button>
   <button @click="addAsyncClickHandle">点击</button>
   <div>
    <HelloWorldVue msg="hhhh"></HelloWorldVue>
   </div>
</template>


<script>
import HelloWorldVue from "./components/HelloWorld.vue"
// vuex提供的快捷读取方式
import {mapActions, mapMutations, mapState} from "vuex"
import {mapGetters} from "vuex"
import {provide} from "vue"
export default {
  name: 'App',
  components: {
    HelloWorldVue
  },
  setup(){
    provide("message","我是消息消息")
  },
  computed:{
    ...mapState(["counter"]),
    ...mapGetters(["getCounter"])
  },
  methods:{
    ...mapMutations(["addCounter"]),
    ...mapActions(["asyncAddCounter"]),
    addClickHandle(){
      // this.$store.commit("addCounter",15)
      this.addCounter(20)
    },
    addAsyncClickHandle(){
      //this.$store.dispatch("asyncAddCounter")
      this.asyncAddCounter()
    }
  }
}
</script>


<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
```

## Vue3 加载Element-plus
<font style="background-color:#FADB14;">cnpm install element-plus --save </font>

### 完整引入
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios"
import querystring from "querystring"
import './registerServiceWorker'
import router from "./router"
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app =  createApp(App)
app.config.globalProperties.$axios = axios
app.config.globalProperties.$querystring = querystring
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
```

### 按需引入
<font style="background-color:#FADB14;">cnpm install -D unplugin-vue-components unplugin-auto-import</font>

```xml
const { defineConfig } = require('@vue/cli-service')
        const AutoImport = require('unplugin-auto-import/webpack')
        const Components = require('unplugin-vue-components/webpack')
        const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

        module.exports = defineConfig({
        transpileDependencies: true,
        configureWebpack: {
        plugins: [
        AutoImport({
        resolvers: [ElementPlusResolver()]
        }),
        Components({
        resolvers: [ElementPlusResolver()]
        })
        ]
        }
        })
```

## Element-plus字体图标
<font style="background-color:#FADB14;">cnpm install @element-plus/icons-vue</font>

<font style="color:rgb(51, 51, 51);">在项目根目录下，创建</font><font style="color:rgb(51, 51, 51);">plugins</font><font style="color:rgb(51, 51, 51);">文件夹，在文件夹下创建文件</font><font style="color:rgb(51, 51, 51);">icons.js</font><font style="color:rgb(51, 51, 51);">文件</font>

```xml
import * as components from "@element-plus/icons-vue";
        export default {
        install: (app) => {
        for (const key in components) {
        const componentConfig = components[key];
        app.component(componentConfig.name, componentConfig);
        }
        },
        };
```

### <font style="color:rgb(51, 51, 51);">引入文件</font>
<font style="color:rgb(51, 51, 51);">在</font><font style="color:rgb(51, 51, 51);">main.js</font><font style="color:rgb(51, 51, 51);">中引入</font><font style="color:rgb(51, 51, 51);">icons.js</font><font style="color:rgb(51, 51, 51);">文件</font>

```xml
import elementIcon from "./plugins/icons";
        app.use(elementIcon)
```

