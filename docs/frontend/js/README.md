---
title: JS 基础
---

# JS 基础
* 应用 桌面端应用，app端应用 也可以。
* 1995 出来 js  网景公司
* ES6 2015 年  推出
* JS 好用 ，学习成本高
* 末尾记得加分号，防止压缩报错。
```html
typeof // 检测数据类型
```
> 类型根据值来的，属于弱类型。

## 定义变量
1. 解析器先分析，会存在变量提升。
2. var 会先定义，再赋值。 声明变量提升。
3. var 函数作用域。
4. let 必须声明后再使用，暂时性死区 TDC
5. 新开辟空间服务，就近原则，和之前的没关。
6. 不适用var定义，就是全局变量,会造成全局污染。
```html
"use strict" // 严格模式
必须声明 
关键词不能作为变量
严格模式 作用域 是当前作用域查找
```
* const 常量 不能改变 大写 好区分 不能改变内存地址的引用。对象和数组的值是可以改的。 同一个作用域是不可以改的。
* let 定义的值 不会改变 window     var 会改 window
* var重复声明不会报错   let const 同一作用域不能重复声明。

## 浅拷贝和深拷贝
* 浅拷贝  只复制某个对象的引用,而不复制对象本身,新旧对象还是共享同一块内存
* 深拷贝 深拷贝会创造一个一摸一样的对象,新对象和原对象不共享内存,修改新对象不会改变原对对象。

## null 和 undefined
基本类型 undefined   引用类型  null <br>
* 函数没有返回值 undefined
* 未传参 undefined
* type of  f  f不存在   undefined
* num = num ||  5   不存在就是5   存在就是num 
* n++ 参与表达式是先参加后++；
* 1==true    true
* ||  && 短路运算符
* a ||  b  为真的，赋值给前面变量 顺序很重要 把要判断的放前面
## 遍历
* for in  遍历数组  得到索引，对象 遍历的是键名  
* for of  新版遍历  遍历数组，字符串，必须是迭代对象。
* Object.keys（），该方法返回对象自身属性名组成的数组。

