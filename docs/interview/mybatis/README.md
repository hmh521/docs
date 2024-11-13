---
title: MyBatis
---

# MyBatis

## MyBatis是什么？
::: tip 简介
MyBatis 是一个优秀的持久层框架，它对 JDBC 的操作数据库的过程进行封装，使开发者只需要关注 SQL 本身，而不需要花费精力去处理加载驱动、创建连接、创建 Statement、手动设置参数、结果集检索等繁杂的过程。
:::

## MyBatis的执行流程是什么？
1. 读取Mybatis配置文件
2. 创造会话工厂SqlSessionFactory
3. 会话工厂SqlSessionFactory创建会话SqlSession
4. 操作数据库的接口，Executor执行器，同时负责查询缓存的维护
5. Executor接口的执行方法中有MappedStatement类型的参数，封装了映射信息
6. 输入参数映射
7. 输出结果映射

## Mybatis是否支持延迟加载？
::: tip 答案
支持，Mybatis支持延迟加载，延迟加载是指在需要使用某个属性时才去查询数据库，而不是在加载对象时就将所有属性都查询出来。
:::

```xml 
fetchType="lazy"
<settings>
    <setting name="lazyLoadingEnabled" value="true"/>
<settings>
```

## 延迟加载的实现原理是什么？
::: tip 答案
Mybatis的延迟加载是通过动态代理实现的，当调用对象的属性时，会触发动态代理的invoke方法，从而执行查询。
:::
1. 使用CGlib动态代理生成代理对象
2. 代理对象调用属性时，触发invoke方法，发现目标对象为空，执行查询
3. 获取数据以后，调用set方法设置属性值，再继续查询目标方法，就有值了

## Mybatis的一级缓存和二级缓存是什么？
### 一级缓存
::: tip 一级缓存
一级缓存是指SqlSession级别的缓存，当在同一个SqlSession中执行相同的SQL语句时，第一次查询数据库后，会将查询结果缓存到一级缓存中，下次再查询相同的SQL语句时，会直接从缓存中获取数据。
:::
1. 一级缓存是SqlSession级别的缓存，当调用SqlSession的修改、添加、删除、commit()、close()等方法时，会清空一级缓存。
2. 一级缓存是默认开启的，可以通过SqlSession的clearCache()方法清空一级缓存。
### 二级缓存
::: tip 二级缓存
二级缓存是指Mapper级别的缓存，多个SqlSession可以共用同一个Mapper的二级缓存，当在同一个Mapper中执行相同的SQL语句时，第一次查询数据库后，会将查询结果缓存到二级缓存中，下次再查询相同的SQL语句时，会直接从缓存中获取数据。
:::
1. 二级缓存是Mapper级别的缓存，多个SqlSession可以共用同一个Mapper的二级缓存。
2. 二级缓存是默认关闭的，需要手动开启，可以通过在Mapper.xml文件中配置<cache/>标签开启。
```xml
<setting>
    <setting name="cacheEnabled" value="true"/>
</setting>
```
注意: 
1. 二级缓存是基于namespace级别的，不同的namespace对应不同的二级缓存。
2. 二级缓存是基于序列化和反序列化实现的，所以需要实现Serializable接口。
3. 二级缓存是存储在SqlSessionFactory中的，所以当调用SqlSession的修改、添加、删除、commit()、close()等方法时，会清空二级缓存。
* spring在开启事务的情况下，sqlsession会存在放ThreadLocal中，所以每次获得的sqlsession都一样，connection也一样。
