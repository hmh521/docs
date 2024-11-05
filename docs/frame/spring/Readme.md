---
title: Spring框架
---
# Spring框架

## 目的
解决企业应用开发的复杂性，使用JavaBean。

## 范围
任何Java应用（JavaSE中的功能）。

Spring是一个轻量级控制反转（IoC）和面向切面（AOP）的容器框架。

## 历史
- **2002年**：Spring框架的雏形，名为interface21框架。
- **2004年3月24日**：发布Spring 1.0版本。
- **创始人**：Rod Johnson，音乐学博士，提出轮子理论（不要重复造轮子）。

## Spring理念
Spring的理念是使现有的技术更加容易使用，本身是一个大杂烩。

## SSH和SSM

### SSH
SSH框架是指：
- **Struts2**：基于MVC设计模式的Web应用框架。
- **Spring**：轻量级控制反转（IoC）和面向切面（AOP）的容器框架。
- **Hibernate**：开放源代码的对象关系映射框架（全自动化持久层框架）。

### SSM
SSM框架是指：
- **Spring MVC**：属于Spring框架的后续产品，已融合在Spring Web Flow中。
- **Spring**：轻量级控制反转（IoC）和面向切面（AOP）的容器框架。
- **Mybatis**：支持自定义SQL、存储过程以及高级映射（半自动化持久层框架）。

## 优点
- **开源免费**：Spring是一个开源免费的框架（容器）。
- **轻量级**：Spring本身很小，只需下载相关包即可使用。
- **非入侵式**：引入Spring不会改变原来代码的任何部分。
- **支持控制反转（IoC）和面向切面编程（AOP）**。
- **支持事务处理**。
- **支持框架整合**。

## 总结
Spring是一个轻量级的控制反转（IoC）和面向切面编程（AOP）的框架。

## Spring七大模块

1. **核心容器（Spring Core）**  
   提供Spring框架的基本功能。Spring以bean的方式组织和管理Java应用中的各个组件及其关系。Spring使用BeanFactory来产生和管理Bean，支持控制反转（IoC）。

2. **应用上下文（Spring Context）**  
   Spring上下文提供上下文信息，包含企业服务（如JNDI、EJB、电子邮件、国际化、校验和调度功能）。

3. **Spring面向切面编程（Spring AOP）**  
   通过Spring AOP模块将面向方面的编程功能集成到Spring框架中，为基于Spring的应用程序提供事务管理服务。

4. **JDBC和DAO模块（Spring DAO）**  
   提供JDBC、DAO的抽象层，简化错误处理，并减少所需编写的代码。

5. **对象实体映射（Spring ORM）**  
   提供ORM框架工具，包括Hibernate、JDO和IBatis SQL Map等。

6. **Web模块（Spring Web）**  
   基于Web应用程序提供上下文，简化多部分请求的处理并支持将请求参数绑定到域对象。

7. **MVC模块（Spring Web MVC）**  
   提供构建Web应用程序的MVC实现，支持多种视图技术（如JSP、POI）。

## 扩展

现代Java开发基于Spring框架，使用以下技术：

- **Spring Boot**：一个快速开发的脚手架，基于Spring Boot可以快速开发单个微服务。
- **Spring Cloud**：基于Spring Boot实现，处理微服务架构中的各个方面。
- **Spring Cloud Data Flow**：用于连接所有微服务。

## Spring Boot

Spring Boot是基于Spring的一个框架，简化了应用程序的配置，极大提高开发效率。通过最少的Spring配置，使开发人员能够快速启动和运行应用程序。

## Spring Cloud

Spring Cloud是基于Spring Boot构建的，它协调微服务架构中的多个服务。学习Spring Cloud的前提是完全掌握Spring及Spring MVC。

## 弊端

Spring框架发展多年后，违背了原来的轻量级理念，配置变得繁琐，人称“配置地狱”。

## IoC理论推导

控制反转（IoC）是将对象的创建交由容器控制，而不是由程序员手动创建。IoC的本质是外部资源的管理和依赖注入。

## IoC容器

Spring框架的核心是IoC容器，容器通过配置文件（XML或注解）初始化对象并管理它们。依赖注入（DI）是实现IoC的方式。

## Spring配置方式

### 1. 基于构造器的依赖注入
通过构造器注入依赖项。

### 2. 基于Setter方法的依赖注入
通过Setter方法注入依赖项。

### 3. XML配置
通过XML配置文件注入对象。

### 4. 注解方式
通过注解实现IoC，减少了XML配置。

## Maven

Maven用于管理项目依赖，它通过“坐标”（groupId和artifactId）确保项目的唯一性。

## 控制反转（IoC）本质

IoC是将对象的创建和依赖关系交给第三方容器管理，Spring使用依赖注入（DI）实现这一思想。通过这种方式，系统的耦合性大大降低，代码更容易扩展和维护。

## DI依赖注入

### 构造器注入
通过构造函数注入依赖项。

### Set方法注入
通过Setter方法注入依赖项。

### 使用XML注入
可以使用XML配置文件来注入依赖对象。

### 使用注解注入
Spring 通过注解支持依赖注入，实现更加简洁和灵活的配置。

## Spring配置实例

### beans.xml配置示例

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
    <bean id="student" class="com.hao.pojo.Student">
        <property name="name" value="胡明浩"/>
    </bean>
</beans>

```

### 注入复杂类型示例

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
    <bean id="student" class="com.hao.pojo.Student">
        <property name="name" value="胡明浩"/>
        <property name="address" ref="address"/>
        <property name="books">
            <array>
                <value>红楼梦</value>
                <value>西游记</value>
                <value>水浒传</value>
                <value>三国演义</value>
            </array>
        </property>
        <property name="hobbys">
            <list>
                <value>听歌</value>
                <value>敲代码</value>
                <value>看电影</value>
            </list>
        </property>
        <property name="card">
            <map>
                <entry key="身份证" value="11111111111"/>
                <entry key="银行卡" value="22222222222"/>
            </map>
        </property>
        <property name="game">
            <set>
                <value>LOL</value>
                <value>COC</value>
                <value>BOB</value>
            </set>
        </property>
        <property name="wife">
            <null/>
        </property>
        <property name="info">
            <props>
                <prop key="学号">17111800403</prop>
                <prop key="url">男</prop>
                <prop key="username">小浩浩</prop>
                <prop key="password">123456</prop>
            </props>
        </property>
    </bean>
    <bean id="address" class="com.hao.pojo.Address">
        <property name="address" value="大连"/>
    </bean>
</beans>

```
## DI的关键分析

DI的关键是：“谁依赖谁，为什么需要依赖，谁注入谁，注入了什么”，让我们深入分析一下：
- **谁依赖于谁**：当然是应用程序依赖于IoC容器；
- **为什么需要依赖**：应用程序需要IoC容器来提供对象需要的外部资源；
- **谁注入谁**：很明显是IoC容器注入应用程序某个对象，应用程序依赖的对象；
- **注入了什么**：就是注入某个对象所需要的外部资源（包括对象、资源、常量数据）

### p命名空间（set属性注入）

`p`命名要无参构造

```xml
xmlns:p="http://www.springframework.org/schema/p"
<!--p命名空间注入，可以直接注入属性的值：property-->
<bean id="user" class="com.hao.pojo.User" p:name="浩浩" p:age="18"></bean>
```

### C命名空间（构造器注入）
`p`命名要有参构造
```xml
xmlns:c="http://www.springframework.org/schema/c"
<!--c命名空间注入，通过构造器注入：construct-args-->
<bean id="user2" class="com.hao.pojo.User" c:age="18" c:name="浩浩"></bean>
```
注意：需要导入第三方库（xml约束）

## Bean作用域（Scopes）   
1. 单例模式（Spring默认机制）
```xml
<bean id="user2" class="com.hao.pojo.User" c:age="18" c:name="浩浩" scope="singleton"></bean>

```
2. 原型模式（每次从容器中get的时候，都会产生一个新对象）

```xml
<bean id="user2" class="com.hao.pojo.User" c:age="18" c:name="浩浩" scope="prototype"></bean>

```
3. 其他模式
* request：在一次请求中创建，创建一次后失效。
* session：在一次会话中创建，创建一次后失效。
* application：对象在整个应用中都活着。

## Bean的自动装配
::: tip 自动装配
自动装配是Spring满足bean依赖的一种方式！Spring会在上下文中自动寻找，并自动给bean装配属性。
:::
1. 在xml中显示配置
* ByName自动装配
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
   <bean id="cat" class="com.hao.pojo.Cat"/>
   <bean id="dog" class="com.hao.pojo.Dog"/>
   <!-- byName:会自动在容器上下文中查找，和自己对象set方法后面的值对应的beanid！ -->
   <bean id="people" class="com.hao.pojo.People" autowire="byName">
      <property name="name" value="浩浩"/>
   </bean>
</beans>

```
* ByType自动装配
```xml
<bean id="cat" class="com.hao.pojo.Cat"/>
<bean id="dog213" class="com.hao.pojo.Dog"/>
<!-- byName:会自动在容器上下文中查找，和自己对象set方法后面的值对应的beanid！ -->
<!-- byType：会自动在容器上下文中查找，和自己对象属性类型相同的bean！ -->
<bean id="people" class="com.hao.pojo.People" autowire="byType">
    <property name="name" value="浩浩"/>
</bean>
```
2. 在Java中显示配置
注解实现自动装配 <br>
* @Autowired与@Resource异同：
  * @Autowired与@Resource都可以用来装配bean，且都可以写在字段上，或写在setter方法上。
  * @Autowired默认按类型装配（属于spring规范），如果依赖对象不存在，可以设置required=false。
  * @Resource默认按名称装配，名称可以通过name属性指定，找不到时才按类型装配。
```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
      http://www.springframework.org/schema/beans/spring-beans.xsd
      http://www.springframework.org/schema/context
      http://www.springframework.org/schema/context/spring-context.xsd">
   <context:annotation-config/>
</beans>

```
3. 隐式的自动装配bean

@Scope 作用域 <br>
* 单例模式和多例模式：
```java
@Controller("user")
@Scope("prototype")
public class User {
    @Value("浩浩")
    public String name;
}

```
::: warning XML与注解比较
XML：适用任何场景，结构清晰，维护方便。注解：不是自己提供的类使用不了，开发简单方便。
:::

## 代理模式
### 1. 静态代理
静态代理通过手动编写代理类来实现，即为每个被代理的对象创建一个代理类。静态代理通常会有以下角色：<br>
* 抽象角色：定义代理和被代理对象的共同接口或抽象类。
* 真实角色：需要被代理的对象。
* 代理角色：代理类，通过代理类调用真实对象的方法，并在此基础上可以添加附加操作（如日志记录、事务管理等）。
优点：代理模式可以在不修改真实角色代码的前提下，为真实角色增加额外的功能，例如日志、性能监控、事务处理等。
可以将公共的操作（如日志、事务等）交给代理角色来处理，从而使真实角色的代码更加简洁。<br>
缺点：每个真实角色都需要一个对应的代理角色，代码量翻倍，可能影响开发效率。<br>

```java
// 租房接口
public interface Rent {
    void rent();
}

// 真实角色（房东）
public class Host implements Rent {
    public void rent() {
        System.out.println("房东要出租房子");
    }
}

// 代理角色（中介）
public class Proxy implements Rent {
    private Host host;

    public Proxy(Host host) {
        this.host = host;
    }

    public void rent() {
        seeHouse();
        host.rent();
        heTong();
        fare();
    }

    private void seeHouse() {
        System.out.println("中介带你看房");
    }

    private void fare() {
        System.out.println("收中介费");
    }

    private void heTong() {
        System.out.println("签租赁合同");
    }
}

// 客户端
public class Client {
    public static void main(String[] args) {
        Host host = new Host();
        Proxy proxy = new Proxy(host);
        proxy.rent();
    }
}


```
### 2. 动态代理
动态代理是在程序运行时动态生成代理类，无需手动编写代理类。动态代理通常会有以下角色：<br>
* 抽象角色：定义代理和被代理对象的共同接口或抽象类。
* 真实角色：需要被代理的对象。
* 代理角色：代理类，通过代理类调用真实对象的方法，并在此基础上可以添加附加操作（如日志记录、事务管理等）。
动态代理主要有两种实现方式：JDK动态代理和CGLIB动态代理。<br>
* JDK动态代理：基于接口的动态代理，要求被代理类必须实现一个接口。
* CGLIB动态代理：基于继承的动态代理，无需被代理类实现接口，通过生成被代理类的子类来实现代理。<br>
优点：动态代理无需手动编写代理类，可以在运行时动态生成代理类，从而减少代码量，提高开发效率。<br>
缺点：动态代理只能代理实现了接口的类，无法代理未实现接口的类。<br>
```java
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

// 代理处理类
public class ProxyInvocationHandler implements InvocationHandler {
    private Object target;

    public void setTarget(Object target) {
        this.target = target;
    }

    public Object getProxy() {
        return Proxy.newProxyInstance(this.getClass().getClassLoader(), target.getClass().getInterfaces(), this);
    }

    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        log(method.getName());
        return method.invoke(target, args);
    }

    private void log(String msg) {
        System.out.println("执行了" + msg + "方法");
    }
}

// 客户端
public class Client {
    public static void main(String[] args) {
        UserServiceImpl userService = new UserServiceImpl();
        ProxyInvocationHandler pih = new ProxyInvocationHandler();
        pih.setTarget(userService); // 设置要代理的对象

        UserService proxy = (UserService) pih.getProxy(); // 获取代理对象
        proxy.add();
    }
}

```
### Spring中的AOP
Spring AOP（面向切面编程）是基于代理模式的。通过AOP可以在方法执行前后自动插入一些逻辑（如日志记录、权限验证等），而无需修改原始代码。Spring AOP支持两种类型的代理：
* JDK动态代理：当目标对象实现了接口时，Spring会自动使用JDK动态代理。
* CGLIB代理：当目标对象没有实现接口时，Spring会使用CGLIB来生成代理类。
```java
@Aspect // 标注这是一个切面类
public class AnnotationPointCut {
    @Before("execution(* com.hao.service.UserServiceImpl.*(..))")
    public void before() {
        System.out.println("==========方法执行前=========");
    }

    @After("execution(* com.hao.service.UserServiceImpl.*(..))")
    public void after() {
        System.out.println("==========方法执行后=========");
    }

    @Around("execution(* com.hao.service.UserServiceImpl.*(..))")
    public void around(ProceedingJoinPoint jp) throws Throwable {
        System.out.println("环绕前");
        Object proceed = jp.proceed();
        System.out.println("环绕后");
    }
}

```
Spring AOP为开发者提供了强大的功能，可以通过声明式事务、日志记录、性能监控等方式增强应用程序的灵活性和可维护性。
