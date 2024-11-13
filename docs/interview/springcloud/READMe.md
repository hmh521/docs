---
title: SpringCloud
---

# 微服务

## SpringCloud的五大常用组件
### 通常情况下，SpringCloud的五大常用组件是指以下五个组件：
1. Eureka：服务注册与发现
2. Ribbon：负载均衡
3. Feign：声明式服务调用
4. Hystrix：服务熔断与降级
5. Zuul：API网关

### 随着SpringCloud的发展，我们项目中使用了一些阿里巴巴的组件，如：
1. Nacos：服务注册与发现/配置中心
2. Ribbon：负载均衡
3. Feign：声明式服务调用
4. sentinel：服务熔断与降级
5. Gateway：API网关

## 服务注册与发现
### 服务注册与发现的核心组件是Eureka和Nacos
#### Eureka：服务注册与发现
* 服务注册：服务提供者需要把自己的信息注册到Eureka Server上，以便服务消费者能够找到。
* 服务发现：服务消费者从Eureka Server上获取服务提供者的信息，以便能够调用服务。 
* 服务监控：服务提供者会每隔30s定时向Eureka Server发送心跳，以保证服务的可用性。如果90s内没有收到心跳，则Eureka Server会将该服务实例从注册表中删除。

#### Nacos：服务注册与发现/配置中心
* 服务注册：服务提供者需要把自己的信息注册到Nacos Server上，以便服务消费者能够找到。
* 服务发现：服务消费者从Nacos Server上获取服务提供者的信息，以便能够调用服务。
* 配置中心：Nacos Server还可以作为配置中心，用于统一管理配置文件。

#### Eureka和Nacos的区别
* Eureka是Netflix公司开源的组件，Nacos是阿里巴巴公司开源的组件。
* Eureka只能用于服务注册与发现，Nacos既可以用于服务注册与发现，也可以用于配置中心。
* Nacos提供服务端主动检测提供者状态；临时实例采用心跳检测，非临时实例采用主动检测模式。
* 临时实例在心跳不正常时，会被删除；非临时实例不会被剔除。
* Nacos支持服务列表变更的消息推送模式，Eureka不支持。
* Nacos集群默认采用AP模式，当存在非临时实例，采用CP模式。Eureka集群默认采用AP模式。

## Ribbon负载均衡策有哪些
### Ribbon负载均衡策略有以下几种：
1. **轮询策略：依次轮询选择服务实例。**
2. **随机策略：随机选择服务实例。**
3. **权重策略：根据服务实例的权重选择服务实例。**
4. 最小并发策略：选择并发量最小的服务实例。
5. 重试策略：在一定次数内重试选择服务实例。
6. 可用性敏感策略：先过滤非健康的服务实例，再选择连接数最少的服务实例。
7. 区域感知策略：根据区域选择服务实例。

### 自定义负载均衡策略
1. 自定义负载均衡策略需要实现IRule接口。（全局）
```java
public class MyRule implements IRule {
    @Override
    public Server choose(Object key) {
        // 自定义负载均衡策略
        return null;
    }
}
```
2. 自定义负载均衡策略 @Bean注入。（局部）
```java
@Bean
public IRule myRule() {
    return new MyRule();
}
```

## 什么是服务雪崩
::: tip 定义
服务雪崩是指当一个服务出现故障时，由于服务之间的调用关系，可能会导致多个服务出现故障，最终导致整个系统不可用。
:::

### 如何解决服务雪崩
1. 熔断降级 （解决）
2. 限流 （预防）

### 服务降级
::: tip 定义
服务降级是服务自我保护的一种方式,或者保护下游服务的一种方式，用于确保服务不会收到请求突增影响变得不可用，确保服务不会崩溃。
:::
```java 
@FeignClient(value = "service-provider", fallback = MyFallback.class)
```

### 服务熔断
::: tip 定义
服务熔断用于监控某个服务的调用情况，当调用10s失败次数达到50%时，会触发熔断器，之后每隔五秒会尝试调用一次，如果调用成功，则关闭熔断器，否则继续等待。
:::
```java
// 开启服务熔断
@EnableCircuitBreaker
// 服务熔断
@HystrixCommand(fallbackMethod = "fallbackMethod")
// 配置规则
@HystrixCommand(commandProperties = {
    @HystrixProperty(name = "circuitBreaker.requestVolumeThreshold", value = "10"),
    @HystrixProperty(name = "circuitBreaker.sleepWindowInMilliseconds", value = "10000"),
    @HystrixProperty(name = "circuitBreaker.errorThresholdPercentage", value = "60")
})
// 服务熔断
@HystrixCommand(fallbackMethod = "fallbackMethod", commandProperties = {
    @HystrixProperty(name = "execution.isolation.thread.timeoutInMilliseconds", value = "3000")
})
```

## 微服务监控

### skywalking
::: tip 定义 
SkyWalking是一个开源的分布式APM系统，用于监控微服务架构中的应用性能。提供了完善的链路追踪功能。
:::

1. skywalking主要可以监控接口、服务、物理实例的一些状态。特别是在压测的时候可以看到众多服务中哪些服务和接口比较慢，我们可以针对性的分析和优化。
2. 还可以设置告警规则，项目上线以后，如果报错，我们分别设置了可以给相关负责人发短信和发邮件，第一时间了解项目的bug情况。

## 微服务限流
::: tip 定义
限流是指对系统的访问流量进行限制，防止系统被过多的请求拖垮，导致系统不可用。
:::
### 为什么要限流
1. 并发的确大（突发流量）
2. 防止用户恶意刷接口

## 实现方式
1. Tomcat可以设置最大连接数
2. Nginx 漏桶算法
3. 网关 令牌桶算法
4. 自定义拦截器

### Nginx限流
```nginx
// 漏桶算法 限流 以固定速率处理请求
limit_req_zone $binary_remote_addr zone=mylimit:10m rate=1r/s;
server {
    location / {
        limit_req_zone=mylimit burst=5 nodelay;
    }
}
```
* 语法 limit_req_zone key zone rate;
* key：限流的key，可以是$binary_remote_addr、$server_name等。
* zone：定义共享内存区域，来存储访问信息，10m可以存储16w个ip的访问信息。
* rate：限流的速率，1r/s表示每秒1个请求。
* burst：桶的大小，5表示最大并发数为5。
* nodelay：快速处理请求，不会等待。

```nginx
// 控制并发连接数
limit_conn_zone $binary_remote_addr zone=mylimit:10m;
limit_conn_zone $server_name zone=perserver:10m;
server {
    location / {
        limit_conn mylimit 5; // 限制并发连接数为5
        limit_conn perserver 10; // 限制每个server的并发连接数为10
    }
}
```
* limit_conn mylimit 5; 限制单个IP同时连接数为5
* limit_conn perserver 10; 限制每个虚拟主机的最大并发连接数为10

### 网关限流
```yaml
 // 令牌桶算法 限流 以固定速率处理请求
spring:
  cloud:
    gateway:
      routes:
        - id: rate_limit_route
          uri: http://localhost:8081
          predicates:
            - Path=/rateLimit
          filters:
            - name: RequestRateLimiter
              args:
                key-resolver: "#{@userKeyResolver}"
                redis-rate-limiter.replenishRate: 1
                redis-rate-limiter.burstCapacity: 2
```
* key-resolver 定义限流对象，使用SpEL表达式获取，需要代码实现
* redis-rate-limiter.replenishRate: 1 令牌桶每秒填充速率
* redis-rate-limiter.burstCapacity: 2 令牌桶最大容量

```java 
@Component
public class UserKeyResolver implements KeyResolver {
    @Override
    public Mono<String> resolve(ServerWebExchange exchange) {
        return Mono.just(exchange.getRequest().getRemoteAddress().getAddress().getHostAddress());
    }
}
```
* KeyResolver 限流对象接口
* resolve 限流对象的实现方法
* exchange.getRequest().getRemoteAddress().getAddress().getHostAddress() 获取请求的IP地址
* Mono.just() 将IP地址包装成Mono对象

## 比较令牌桶和漏桶
1. 漏桶：如果一下子来了很多请求，但是请求会被放在池子里面，然后以固定的速率去处理请求。
2. 令牌桶：以固定的速率往桶内放入令牌，一下来很多请求，只要桶内的令牌足够多，请求就会立马被处理，这就是允许突发大量请求进来。

## CAP定理
::: tip 定义
CAP定理是分布式系统中最基本的理论，指的是在一个分布式系统中，一致性（Consistency）、可用性（Availability）、分区容错性（Partition tolerance）三者不可兼得。
:::
1. 可用性：系统提供的服务必须一直处于可用的状态，对于用户的每一个操作请求都必须有响应。
2. 一致性：系统中的数据一旦发生变化，所有的用户都能够立即看到。
3. 分区容错性：系统在遇到网络分区故障时，仍然能够继续提供服务。
### BASE理论
::: tip 定义
BASE理论是对CAP理论的延伸，是对大规模分布式系统的实践总结，核心思想是即使无法做到强一致性，但可以做到最终一致性。
:::
1. 基本可用（Basically Available）：系统保证基本的可用性，允许损失部分可用性。
2. 软状态（Soft state）：允许系统中的数据存在中间状态，不同节点的数据副本可能不一致。
3. 最终一致性（Eventually Consistent）：系统保证在一段时间内，数据一致性最终能够达到。

## 分布式事务
::: tip 定义
分布式事务是指事务的参与者、资源、执行者分布在不同的节点上，分布式事务需要满足ACID特性。
:::

### Seata架构
* TC（Transaction Coordinator）：事务协调器，负责全局事务的协调。
* TM（Transaction Manager）：事务管理器，负责事务的开启、提交、回滚。
* RM（Resource Manager）：资源管理器，负责分支事务的注册、状态汇报、回滚。

#### Seata的XA模式
1. CP，需要互相等待各个分支的事务提交，可以保证强一致性，但是性能较差。（银行业务）
#### Seata的AT模式
1. AP，底层使用数据库的undo log，可以保证最终一致性，性能较好。（电商业务）
#### Seata的TCC模式
1. AP，通过Try-Confirm-Cancel三个操作实现分布式事务，可以保证最终一致性，性能较好。（酒店预订）
#### MQ实现分布式事务
1. 在A服务写数据的时候，需要在同一事务中发送消息到另外一个事务，异步，性能最好

## 分布式服务的接口幂等性
::: tip 定义
接口幂等性是指对于同一个接口的多次调用，对于系统的状态和数据都是一致的，不会因为多次调用而产生副作用。
:::
* 用户重复点击（网络波动）
* MQ消息重复
* 应用使用失败或超时重复机制

### 接口幂等
1. GET请求：幂等性是指对于同一个请求的多次调用，返回的结果是一致的。
2. POST请求：不是幂等的，因为POST请求每次请求都会创建一个新的资源。
3. PUT请求：不是幂等的，因为PUT请求每次请求都会更新一个资源。
4. DELETE请求：幂等性是指对于同一个请求的多次调用，返回的结果是一致的。

### 实现幂等性
1. 如果是新增操作，可以使用唯一索引，保证幂等性。
2. 如果是新增或更改操作
* 分布式锁：使用Redis分布式锁，保证幂等性。
* 使用token+redis实现，性能比较好
  * 第一次请求生成token，存入redis，返回给前端
  * 前端请求携带token，后端校验token，删除token

### 分布式任务调度 XXL-JOB
### XXL-JOB的路由策略
1. 第一种策略：轮询策略，每次调度都是按照顺序轮询调度。
2. 第二种策略：故障转移策略，当某个执行器挂掉的时候，会自动切换到另外一个执行器。
3. 第三种策略：分片广播策略，每个执行器都会执行一次任务。
### XXL-JOB的任务执行失败怎么解决
* 路由策略如果是故障转移策略，使用健康的实例执行任务
* 设置重试次数，如果任务执行失败，会自动重试
* 查看日志+邮件告警来通知相关负责人
### 如果有大数据量的任务同时都需要执行，怎么解决
* 让多个实例一块去执行，路由策略使用分片广播策略
* 在任务执行的代码中可以获取分片总数和当前分片，按照取模的方式分摊到各个实例去执行
