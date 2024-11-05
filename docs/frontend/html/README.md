---
title: HTML
---

# HTML

## 1.1 超文本标记语言（Hyper Text Markup Language）

* 主流浏览器都支持HTML5
* W3C 万维网联盟（中立性技术标准机构）
* W3C标准包括
    * 结构化标准语言（HTML,XML）
    * 表现标准语言（CSS 美化html的）
    * 行为标准（DOM文档对象原型,ECMAScript（javaScript））已经是6了

```html
<meta charset="UTF-8"> 自闭合标签
```

```html
<body> 开发标签

</body> 闭合标签
```

## 1.2 网页基本信息

```html
<!--DOCTYPE:告诉浏览器，我们要使用什么规范
<html lang="zh">
zh即表示中文
-->

<!DOCTYPE html>
<html lang="en"语言为英文网站>
    


<!-- head 标签代表网页头部-->
<head>

    <!--meta 描述性标签，它用来描述我们网站的一些信息 -->
    <!--meta 一般用来做SEO    -->
    <meta charset="UTF-8">
    <meta name="keywords" content="狂神说Java,西部开源">
    <meta name="description" content="来这个地方可以学习Java">

     <!-- title网页标题  -->
    <title>我的第一个网页</title>
</head>

<!-- body标签代表网页主体-->
<body>

Hello，world！
</body>
</html>
```

## 1.3 网页基本标签

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>基本标签学习</title>
</head>
<body>

<!--标题标签-->
<h1>一级标签</h1>
<h2>二级标签</h2>
<h3>三级标签</h3>
<h4>四级标签</h4>
<h5>五级标签</h5>
<h6>六级标签</h6>

<!--段落标签-->
<p>两只老虎，两只老虎，跑得快，跑得快</p>
<p>一只没有眼睛，一只没有尾巴</p>
<p>真奇怪！真奇怪！</p>
<p>两只老虎，两只老虎，跑得快，跑得快</p>
<p>一只没有眼睛，一只没有尾巴</p>
<p>真奇怪！真奇怪！</p>



<!--水平线标签-->
<hr/>

<!--换行标签-->
两只老虎，两只老虎，跑得快，跑得快</br>
一只没有眼睛，一只没有尾巴</br>
真奇怪！真奇怪！</br>
两只老虎，两只老虎，跑得快，跑得快</br>
一只没有眼睛，一只没有尾巴</br>
真奇怪！真奇怪！</br>

<!--粗体，斜体-->
<h1>字体样式标签</h1>

粗体 ：  <strong>i love you</strong>
粗体 ：  <em>i love you</em>


<!--特殊符号-->
<br/>
空&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格:
<br/>
&gt;
<br/>
&lt;
<br/>
&copy; 版权所有胡明浩

</body>
</html>
```

## 1.4图像标签

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>图像标签学习</title>
</head>
<body>
<!--img学习
src：图片地址
相对地址，绝对地址
../ --上一级目录
alt：图片的替代名字

-->

<img src="../resources/image/1.jpg" alt="媳妇头像" title="悬停文字" width="300" height="300">

</body>
</html>
```

* 绝对地址：互联网上的独立地址，在任何网站通过这个地址可以直接到达目标网页，包含主域名和目录地址。
* 相对地址：相对于网站的地址，当域名改变时，相对地址的“绝对地址”也发生变化。

## 1.5 链接标签

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>链接标签学习</title>
</head>
<body>

<!--使用name作为标记-->
<a name="top">顶部</a>
<!--a 标签
href ： 必填，表示要跳转的那个页面
target: 表示窗口在哪里打开
_blank 在新标签中打开
_self 在自己的网页中打开

-->
<a href="1.我的第一个网页.html" target="_blank">点击我跳转到页面一</a>
<a href="https://www.baidu.com" target="_self">点击我跳转到百度</a>

<br>
<a href="1.我的第一个网页.html">
    <img src="../resources/image/1.jpg" alt="媳妇头像" title="悬停文字" width="300" height="300">
</a>


<!--锚链接
1.需要一个锚标记
2.跳转到标记
-->

<a href="#top">回到顶部</a>

<a name="down">跳转</a>

<!--功能性链接
邮件链接：mailto
qq链接：
-->

<a href="mailto:565105438@qq.com">点击联系我</a>
<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes">
    <img border="0" src="http://wpa.qq.com/pa?p=2:1641232430:53" alt="加我领取动态图" title="加我领取动态图"/>
</a>

</body>
</html>
```

## 1.6 行内元素和块元素

块元素

1.块级元素占据一整行 2.能设置宽高 3.可包含块级元素和行内元素 4.可以设置margin.padding值

行内元素的高度宽度由内部字体大小长度决定

## 1.7 列表标签

### 1.7.1 什么是列表

* 列表就是信息资源的一种展示·形式，它可以使信息结构化和条理化，并以列表的样式展示出来，以便浏览者能更快捷地获得相应的信息。

### 1.7.2 列表的分类

* 无序列表
* 有序列表
* 自定义列表

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>列表学习</title>
</head>
<body>

<!--有序列表
应用范围：试卷，问答。。。
-->
<ol>
    <li>java</li>
    <li>python</li>
    <li>运维</li>
    <li>前端</li>
    <li>C/c++</li>
</ol>

<hr/>
<!--无序列表
用用范围：导航，侧边栏。。。。
-->

<ul>
    <li>java</li>
    <li>python</li>
    <li>运维</li>
    <li>前端</li>
    <li>C/c++</li>
</ul>

<!--自定义列表
dl：标签
dt：列表名称
dd：列表内容
公司网站底部
-->

<dl>
    <dt>学科</dt>
    <dd>java</dd>
    <dd>python</dd>
    <dd>Linux</dd>
    <dd>C</dd>

    <dt>位置</dt>
    <dd>西安</dd>
    <dd>重庆</dd>
    <dd>新疆</dd>
</dl>

</body>
</html>
```



## 1.8 表格标签

### 1.8.1 为什么使用表格

* 简单通用
* 结构稳定

### 1.8.2 基本结构

* 单元格
* 行
* 列
* 跨行
* 跨列

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>表格学习</title>
</head>
<body>

<!--表格table
行 tr
列 td
-->

<table border="1px">
    <tr>
        <!-- colspan 跨行  -->
        <td colspan="4">1-1</td>

    </tr>
    <tr>
        <!-- rowspan  跨列 -->
        <td rowspan="2">2-1</td>
        <td>2-2</td>
        <td>2-3</td>
        <td>2-4</td>
    </tr>
    <tr>
        <td>3-1</td>
        <td>3-2</td>
        <td>3-3</td>
    </tr>
</table>

<!--作业 style=“text-align: center 居中”-->
<table border="1px" style="text-align: center">
    <tr>
        <!-- colspan 跨行  -->
        <td colspan="3">学生成绩</td>

    </tr>
    <tr>
        <!-- rowspan  跨列 -->
        <td rowspan="2">浩浩</td>
        <td>语文</td>
        <td>100</td>
    </tr>
    <tr>
        <td>数学</td>
        <td>100</td>
    </tr>
    <tr>
        <!-- rowspan  跨列 -->
        <td rowspan="2">胡明浩</td>
        <td>语文</td>
        <td>100</td>
    </tr>
    <tr>
        <td>数学</td>
        <td>100</td>
    </tr>

</table>

</body>
</html>
```

## 1.9 视频和音频

* 视频元素
    * video

* 音频元素
    * audio

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>媒体元素学习</title>
</head>
<body>

<!--音频和视频
src : 资源路径
controls ：控制条
autoplay ：自动播放
-->
<video src="../resources/video/AE模板视频素材下载_AE视频模板-摄图网视频库.mp4" controls autoplay></video>

<audio src="../resources/audio/程响%20-%20四季予你.mp3 "controls autoplay></audio>

</body>
</html>
```

## 2.0 页面结构分析

### header 标题头部区域的内容（用于页面或页面的一块区域）

### footer 标记脚部区域的内容（用于整个页面或页面的一块区域）

### section web页面中的一块独立区域

### article 独立的文章内容

### aside 相关内容或应用（常用于侧边栏）

### nav 导航类辅助内容

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>页面结构分析</title>
</head>
<body>

<header><h2>网页头部</h2></header>

<section><h2>网页主体</h2></section>

<footer><h2>网页脚部</h2></footer>

</body>
</html>
```

## 2.1 iframe 内联框架

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<!--<iframe src="//player.bilibili.com/player.html?aid=55631961&bvid=BV1x4411V75C&cid=97257967&page=11"-->
<!--        scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>-->

<!--
iframe内联框架
src：地址
w-h：宽度高度
frameborder 属性规定是否显示 iframe 周围的边框。-->
<iframe src="" name="hello" frameborder="0" width="1000px" height="800px"></iframe>

<a href="1.我的第一个网页.html" target="hello">点击跳转</a>

</body>
</html>
```

## 2.2 表单语法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录注册</title>
</head>
<body>

<h1>注册</h1>

<!--表单form

action: 表单提交的位置，可以收网站，也可以是一个请求处理地址
method：post，get 提交方式
get 方式提交：我们可以在url中看见我们提交的信息，不安全，高效
post : 比较安全，传输大文件.
-->

<form action="1.我的第一个网页.html" method="post">

    <!-- 文本输入框   input type = “text”-->
    <p>名字：<input type="text" name="username"></p>
    <!-- 密码框   input type = “password” -->
    <p>密码：<input type="password" name="pwd"></p>
    <p>
        <input type="submit">
        <input type="reset">
    </p>

</form>


</body>
</html>
```

### 2.2.1 表单元素格式

| 属性      | 说明                                                         |
| --------- | :----------------------------------------------------------- |
| type      | 指定元素的类型。text，password，checkbox，radio，submit，reset，file，hidden，image和button，默认为text |
| name      | 指定表单元素的名称                                           |
| value     | 元素的初始值，type位radio时必须指定一个值                    |
| size      | 指定表单元素的初始宽度，当type为text或password时，表单元素的大小以字符为单位，对于其他类型，宽度以像素为单位 |
| maxlength | type为text或password时，输入的最大字符数                     |
| checked   | type为radio或checkbox时，指定按钮是否被选中                  |

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录注册</title>
</head>
<body>

<h1>注册</h1>

<!--表单form

action: 表单提交的位置，可以收网站，也可以是一个请求处理地址
method：post，get 提交方式
get 方式提交：我们可以在url中看见我们提交的信息，不安全，高效
post : 比较安全，传输大文件.
-->

<form action="1.我的第一个网页.html" method="post">

    <!-- 文本输入框   input type = “text”
    value="浩浩好帅" 默认初始值
     maxlength="8" 最长能写几个字符
     size="30 文本框的长度
    -->
    <p>名字：<input type="text" name="username" value="浩浩好帅" maxlength="8" size="30"></p>
    <!-- 密码框   input type = “password” -->
    <p>密码：<input type="password" name="pwd"></p>
    <!--  单选框标签
    input type=“radio”
    value：单选框的值
    name： 表示组
    -->
    <p>性别：<input type="radio" value="boy" name="sex"/> 男
        <input type="radio" value="girl" name="sex"/> 女</p>
    <p>
        <input type="submit">
        <input type="reset">
    </p>

</form>


</body>
</html>
```

### 2.2.2 按钮和多选框

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录注册</title>
</head>
<body>

<h1>注册</h1>

<!--表单form

action: 表单提交的位置，可以收网站，也可以是一个请求处理地址
method：post，get 提交方式
get 方式提交：我们可以在url中看见我们提交的信息，不安全，高效
post : 比较安全，传输大文件.
-->

<form action="1.我的第一个网页.html" method="post">

    <!-- 文本输入框   input type = “text”
    value="浩浩好帅" 默认初始值
     maxlength="8" 最长能写几个字符
     size="30 文本框的长度
    -->
    <p>名字：<input type="text" name="username" value="浩浩好帅" maxlength="8" size="30"></p>
    <!-- 密码框   input type = “password” -->
    <p>密码：<input type="password" name="pwd"></p>
    <!--  单选框标签
    input type=“radio”
    value：单选框的值
    name： 表示组
    -->
    <p>性别：
        <input type="radio" value="boy" name="sex"/> 男
        <input type="radio" value="girl" name="sex"/> 女
    </p>
    <!-- 多选框
    input type=“checkbox”
    -->
    <p>爱好：
        <input type="checkbox" value="sleep" name="hobby">睡觉
        <input type="checkbox" value="code" name="hobby">敲代码
        <input type="checkbox" value="chat" name="hobby">聊天
        <input type="checkbox" value="game" name="hobby">游戏
    </p>

    <!--按钮
    input type="button" 普通按钮
    input type="image" 图像按钮
    input type="submit" 提交按钮
    input type="reset" 重置按钮
    -->
    <p>按钮：
        <input type="button" name="btn1" value="点击变长">
        <input type="image" src="../resources/image/1.jpg">
    </p>

    <p>
        <input type="submit">
        <input type="reset" value="清空表单">
    </p>

</form>


</body>
</html>
```

### 2.2.3 下拉框和列表框

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录注册</title>
</head>
<body>

<h1>注册</h1>

<!--表单form

action: 表单提交的位置，可以收网站，也可以是一个请求处理地址
method：post，get 提交方式
get 方式提交：我们可以在url中看见我们提交的信息，不安全，高效
post : 比较安全，传输大文件.
-->

<form action="1.我的第一个网页.html" method="get">

    <!-- 文本输入框   input type = “text”
    value="浩浩好帅" 默认初始值
     maxlength="8" 最长能写几个字符
     size="30 文本框的长度
    -->
    <p>名字：<input type="text" name="username" value="浩浩好帅" maxlength="8" size="30"></p>
    <!-- 密码框   input type = “password” -->
    <p>密码：<input type="password" name="pwd"></p>
    <!--  单选框标签
    input type=“radio”
    value：单选框的值
    name： 表示组
    -->
    <p>性别：
        <input type="radio" value="boy" name="sex" checked/> 男
        <input type="radio" value="girl" name="sex"/> 女
    </p>
    <!-- 多选框
    input type=“checkbox”
    -->
    <p>爱好：
        <input type="checkbox" value="sleep" name="hobby">睡觉
        <input type="checkbox" value="code" name="hobby" checked>敲代码
        <input type="checkbox" value="chat" name="hobby">聊天
        <input type="checkbox" value="game" name="hobby">游戏
    </p>

    <!--按钮
    input type="button" 普通按钮
    input type="image" 图像按钮
    input type="submit" 提交按钮
    input type="reset" 重置按钮
    -->
    <p>按钮：
        <input type="button" name="btn1" value="点击变长">
<!--        <input type="image" src="../resources/image/1.jpg">-->
    </p>

    <!-- 下拉框，列表框
    -->
    <p>国家：
        <select name="列表名称">
            <option value="china">中国</option>
            <option value="us">美国</option>
            <option value="eth" selected>瑞士ETH</option>
            <option value="india">印度</option>
        </select>
    </p>

    <!-- 文本域
    cols="50" rows="10" 行 和 列
    -->
    <p>反馈：
        <textarea name="textarea" cols="50" rows="10">文本域</textarea>
    </p>

    <!-- 文件域
     -->
    <p>
        <input type="file" name="files">
        <input type="button" value="上传" name="upload">
    </p>

    <p>
        <input type="submit">
        <input type="reset" value="清空表单">
    </p>

</form>


</body>
</html>
```

### 2.2.4 搜索框滑块和简单验证

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录注册</title>
</head>
<body>

<h1>注册</h1>

<!--表单form

action: 表单提交的位置，可以收网站，也可以是一个请求处理地址
method：post，get 提交方式
get 方式提交：我们可以在url中看见我们提交的信息，不安全，高效
post : 比较安全，传输大文件.
-->

<form action="1.我的第一个网页.html" method="get">

    <!-- 文本输入框   input type = “text”
    value="浩浩好帅" 默认初始值
     maxlength="8" 最长能写几个字符
     size="30 文本框的长度
    -->
    <p>名字：<input type="text" name="username" value="浩浩好帅" maxlength="8" size="30"></p>
    <!-- 密码框   input type = “password” -->
    <p>密码：<input type="password" name="pwd"></p>
    <!--  单选框标签
    input type=“radio”
    value：单选框的值
    name： 表示组
    -->
    <p>性别：
        <input type="radio" value="boy" name="sex" checked/> 男
        <input type="radio" value="girl" name="sex"/> 女
    </p>
    <!-- 多选框
    input type=“checkbox”
    checked 属性规定在页面加载时应该被预先选定的 input 元素。
    -->
    <p>爱好：
        <input type="checkbox" value="sleep" name="hobby">睡觉
        <input type="checkbox" value="code" name="hobby" checked>敲代码
        <input type="checkbox" value="chat" name="hobby">聊天
        <input type="checkbox" value="game" name="hobby">游戏
    </p>

    <!--按钮
    input type="button" 普通按钮
    input type="image" 图像按钮
    input type="submit" 提交按钮
    input type="reset" 重置按钮
    -->
    <p>按钮：
        <input type="button" name="btn1" value="点击变长">
        <!--        <input type="image" src="../resources/image/1.jpg">-->
    </p>

    <!-- 下拉框，列表框
    -->
    <p>国家：
        <select name="列表名称">
            <option value="china">中国</option>
            <option value="us">美国</option>
            <option value="eth" selected>瑞士ETH</option>
            <option value="india">印度</option>
        </select>
    </p>

    <!-- 文本域
    cols="50" rows="10" 行 和 列
    -->
    <p>反馈：
        <textarea name="textarea" cols="50" rows="10">文本域</textarea>
    </p>
    <!-- 邮箱验证   -->
    <p>邮箱：
        <input type="email" name="email">
    </p>
    <!--  url  -->
    <p>url：
        <input type="url" name="url">
    </p>

    <!-- 数字 -->
    <p> 商品数量：
        <input type="number" name="num" max="100" min="0" step="10">
    </p>

    <!-- 滑块   -->
    <p>音量：
        <input type="range" name="voice" min="0" max="100" step="2">
    </p>

    <p>搜索：
        <input type="search" name="search" >
    </p>


    <!-- 文件域
     -->
    <p>
        <input type="file" name="files">
        <input type="button" value="上传" name="upload">
    </p>

    <p>
        <input type="submit">
        <input type="reset" value="清空表单">
    </p>


</form>


</body>
</html>
```

### 2.2.5 表单初级验证

#### 2.2.5.1 为什么要进行表单验证

* 减轻服务器压力
* 保证数据安全

#### 2.2.5.2 常用方式

* placeholder 提示信息
* required 非空判断
* pattern（正则表达式）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录注册</title>
</head>
<body>

<h1>注册</h1>

<!--表单form

action: 表单提交的位置，可以收网站，也可以是一个请求处理地址
method：post，get 提交方式
get 方式提交：我们可以在url中看见我们提交的信息，不安全，高效
post : 比较安全，传输大文件.
-->

<form action="1.我的第一个网页.html" method="get">

    <!-- 文本输入框   input type = “text”
    value="浩浩好帅" 默认初始值
     maxlength="8" 最长能写几个字符
     size="30 文本框的长度
     placeholder 提示信息
     required 非空判断

    -->
    <p>名字：<input type="text" name="username" placeholder="请输入用户名"  required maxlength="8" size="30"></p>
    <!-- 密码框   input type = “password” -->
    <p>密码：<input type="password" name="pwd"></p>
    <!--  单选框标签
    input type=“radio”
    value：单选框的值
    name： 表示组
    -->
    <p>性别：
        <input type="radio" value="boy" name="sex" checked/> 男
        <input type="radio" value="girl" name="sex"/> 女
    </p>
    <!-- 多选框
    input type=“checkbox”
    -->
    <p>爱好：
        <input type="checkbox" value="sleep" name="hobby">睡觉
        <input type="checkbox" value="code" name="hobby" checked>敲代码
        <input type="checkbox" value="chat" name="hobby">聊天
        <input type="checkbox" value="game" name="hobby">游戏
    </p>

    <!--按钮
    input type="button" 普通按钮
    input type="image" 图像按钮
    input type="submit" 提交按钮
    input type="reset" 重置按钮
    -->
    <p>按钮：
        <input type="button" name="btn1" value="点击变长">
        <!--        <input type="image" src="../resources/image/1.jpg">-->
    </p>

    <!-- 下拉框，列表框
    -->
    <p>国家：
        <select name="列表名称">
            <option value="china">中国</option>
            <option value="us">美国</option>
            <option value="eth" selected>瑞士ETH</option>
            <option value="india">印度</option>
        </select>
    </p>

    <!-- 文本域
    cols="50" rows="10" 行 和 列
    -->
    <p>反馈：
        <textarea name="textarea" cols="50" rows="10">文本域</textarea>
    </p>
    <!-- 邮箱验证   -->
    <p>邮箱：
        <input type="email" name="email">
    </p>
    <!--  url  -->
    <p>url：
        <input type="url" name="url">
    </p>

    <!-- 数字 -->
    <p> 商品数量：
        <input type="number" name="num" max="100" min="0" step="10">
    </p>

    <!-- 滑块   -->
    <p>音量：
        <input type="range" name="voice" min="0" max="100" step="2">
    </p>

    <p>搜索：
        <input type="search" name="search" >
    </p>


    <!-- 文件域
     -->
    <p>
        <input type="file" name="files">
        <input type="button" value="上传" name="upload">
    </p>
    <!--
      https://www.jb51.net/tools/regexsc.htm
      -->
    <p>自定义邮箱:
        <input type="text" name="diy" pattern="/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/或\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*">
    </p>

    <p>
        <input type="submit">
        <input type="reset" value="清空表单">
    </p>


</form>


</body>
</html>
```

### 2.2.6 表单的应用

* 隐藏域（hidden）
* 只读（readonly）
* 禁用（disabled）

