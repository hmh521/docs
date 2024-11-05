--- 
title: SpringMVC框架
---

# SpringMVC 学习笔记

## 什么是 MVC（模型视图控制器）
MVC（模型视图控制器）是一种软件设计模式，目的是降低视图与业务逻辑之间的双向耦合。通过这种模式，开发者可以将应用的主要功能划分为三个核心部分：
1. **模型 (Model)**: 主要包含数据和行为（如DAO层、Service层）。
2. **视图 (View)**: 负责展示数据，通常是JSP页面。
3. **控制器 (Controller)**: 负责接收用户请求，调用模型层进行处理，最终将结果传递给视图。

## 什么是 Servlet
Java Servlet 是运行在 Web 服务器或应用服务器上的程序，作为来自 Web 浏览器或其他 HTTP 客户端的请求和 HTTP 服务器上的数据库或应用程序之间的中间层。Servlet 主要的任务包括：
1. 获取请求数据
2. 处理请求
3. 完成响应

### Servlet 工作模式
Servlet 的工作模式通常是：接收请求并生成响应内容，再将响应返回客户端。

```java
package com.hao.servlet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class HelloServlet extends HttpServlet {
   @Override
   protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
       String method = req.getParameter("method");
       if (method.equals("add")) {
           req.getSession().setAttribute("msg", "执行了add方法");
       }
       if (method.equals("delete")) {
           req.getSession().setAttribute("msg", "执行了delete方法");
       }
       req.getRequestDispatcher("/WEB-INF/jsp/test.jsp").forward(req, resp);
   }

   @Override
   protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
       doGet(req, resp);
   }
}
```

## SpringMVC 特点
SpringMVC 是一个轻量级的、基于请求响应的 MVC 框架，具有以下特点：
* 轻量级，简单易学
* 高效，支持请求响应式 MVC 结构
* 与 Spring 集成良好
* 功能强大，支持 RESTful、数据验证、格式化、本地化、主题等
* 支持注解驱动
### DispatcherServlet
DispatcherServlet 是 SpringMVC 的核心，负责请求的分发。它会根据请求的 URL，调用对应的控制器进行处理。
## SpringMVC 控制器
SpringMVC 控制器可以通过接口或注解进行定义。最常见的方式是使用 @Controller 注解和 @RequestMapping 注解。
### 使用接口实现控制器
```java
package com.hao.controller;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HelloController implements Controller {

    public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
        ModelAndView mv = new ModelAndView();
        mv.addObject("msg", "HelloSpringMVC!");
        mv.setViewName("hello"); // /WEB-INF/jsp/hello.jsp
        return mv;
    }
}

```
### 使用注解实现控制器
```java
package com.hao.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {

   @RequestMapping("/hello")
   public String Hello(Model model){
       model.addAttribute("msg", "Hello,SpringMVCAnnotation!");
       return "hello"; // 会被视图解析器处理;
   }
}

```
## SpringMVC 配置
springmvc-servlet.xml 是 SpringMVC 的配置文件，用于配置 SpringMVC 的核心组件，如控制器、视图解析器、拦截器等。
### 视图解析器配置
```xml
<bean class="org.springframework.web.servlet.view.InternalResourceViewResolver" id="InternalResourceViewResolver">
    <property name="prefix" value="/WEB-INF/jsp/"/>
    <property name="suffix" value=".jsp"/>
</bean>

```
### DispatcherServlet 配置
```xml
<servlet>
    <servlet-name>springmvc</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>classpath:springmvc-servlet.xml</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
    <servlet-name>springmvc</servlet-name>
    <url-pattern>/</url-pattern>
</servlet-mapping>
```
## 常见的返回方式
1. **ModelAndView**: 通过 ModelAndView 对象设置数据和视图。
```java
ModelAndView mv = new ModelAndView();
mv.addObject("msg", "HelloSpringMVC!");
mv.setViewName("hello");
return mv;
```
2. 重定向和转发
```java
// 重定向
return "redirect:/index.jsp";
// 转发
return "forward:/index.jsp";
```
## JSON 数据格式
JSON（JavaScript Object Notation）是一种轻量级的数据交换格式，非常适合于网络传输。JSON 格式类似于 JavaScript 对象字面量，广泛用于前后端数据交互。
```json
{
   "name": "John",
   "age": 30,
   "city": "New York"
}

```
## SpringMVC 与 RESTful 风格
SpringMVC 支持 RESTful 风格的请求映射，使用 @RequestMapping 注解进行路径映射。例如：
```java
@RequestMapping("/add/{a}/{b}")
public String test1(@PathVariable int a, @PathVariable String b, Model model) {
   String res = a + b;
   model.addAttribute("msg", "结果为" + res);
   return "test";
}

```
::: tip 总结
SpringMVC 提供了一个基于请求响应的轻量级框架，具有高度的灵活性和可扩展性，能够与 Spring 其他功能模块无缝集成，广泛应用于 Web 开发中。
:::
