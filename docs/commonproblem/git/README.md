---
title: git常见问题
---

# git常见问题

## github 推送代码报错
```shell
Failed to connect to github.com port 443 after 21102ms: Timed out
```

解决办法：

```shell
ipconfig/flushdns // 刷新DNS解析
```
## .gitgnore 文件不生效
解决办法：

```shell
git rm -r --cached .
```

## 本地ssh到github
问题：本地ssh到github，报错：Permission denied (publickey).
* permission denied (publickey) 没有权限的publickey ，出现这错误一般是以下两种原因
1. 客户端与服务端未生成 ssh key
2. 客户端与服务端的ssh key不匹配

解决办法：

```shell
ls ~/.ssh/ 
sh-keygen -t rsa -b 2048 -C "your_email@example.com" // 生成ssh key
```

## gitee 有readme文件，我推送的报错
问题：gitee 有readme文件，我推送的报错
```shell
! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://gitee.com/xxx/xxx.git'
```
解决办法：

```shell
git pull --rebase origin master
```
## spring实体类字段后端前端大小写不一致解决
* 首先描述我的问题，我的问题是在开发的过程当中，我在实体类中有一个字段：xCoor。 但是我用前端去调用后端接口，返回的是xcoor，变成了小写。 （我猜测可能是因为英文拼写的原因？因为当时还有许多其他的字段都没有出现大小写自动转化的问题，只有这个字段给了警告，说是拼写有问题。最终原因是json返回的时候把第二个字母变小写了，也就是Spring Boot中Jackson的功劳
解决办法：

```java
@JsonProperty("xCoor")
private Integer xCoor;
```
