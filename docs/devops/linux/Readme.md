---
title: Linux
--- 
# Linux
<font style="color:#E8323C;">一切皆文件</font>

<font style="color:#E8323C;">很多大型项目都部署到Linux上</font>

林纳斯.托瓦兹

Unix 操作系统，多用户，root

Debian ubuntu

RhEL  cenos 免费版

kali 安全渗透测试使用

RedHat 红帽认证工程师 收费的

LAMP 或者 LNMP

```xml
yum -y install net-tools
ifconfig
ip addr
```

windows 叫服务   linux叫守护进程

登录

1. 命令行登录 <font style="color:rgb(199, 37, 78);background-color:rgb(249, 242, 244);">su - root</font>
2. SSH
3. 图形化界面

## 关机
```shell
sync  # 数据由内存同步到硬盘
shutdown # 关机命令
shutdown -h now # 立即关机
reboot # 重启
```

## 目录
```shell
ls / # 查看根目录
```

+ bin 目录常用命令
+ boot  核心文件
+ dev 外部设备
+ mnt 光驱挂载
+ etc 配置文件
+ home 用户目录
+ lib 基本依赖
+ lost+found 突然关机的一些文件
+ opt 软件安装包
+ proc 虚拟目录
+ root  系统管理员目录
+ tmp 临时文件
+ usr 用户的很多应用程序、
+ var 日志目录
+ www 存放服务器网站相关的资源（宝塔相关的）

## 基本命令
```shell
# 绝对路径 相对路径
cd 切换目录
cd .. 上一级目录
cd / 返回根目录
ls 列出目录
ls -a 全部文件，包括隐藏文件
ls -l 列出所有的文件，包含文件的属性和权限，没有隐藏文件
ls -al 
cd ~ 回到用户目录
pwd 查看当前目录
mkdir 创建目录
mkdir -p 递归创建目录
rmdir 移除文件夹
rmdir -p 递归删除文件夹
cp 当前文件 新的地方
rm （移除文件）
rm -f 强制删除
rm -r 递归删除
rm -i 互动，删除询问是否删除
rm -rf / 删库跑路
mv 移动文件
mv -f 强制
mv 原名 修改名
mv -u 类似于覆盖
```

## 属性
```shell
第一个字符
d 目录
- 文件
l 链接文档
b 外部接口
c 鼠标 键盘
3个一组
r 可读 4
w 可写 2
x 执行 1
root  组权限  其他用户
文件所有者 文件所属组
chgrp 更改文件所有者
chgtp -R root www
chown 更改文件属主 文件名
chmod 更改文件属性
chmod 777 filename
ls -ll 等同于 ll
公司通常是744
```

## 文件内容查看
```shell
cat 第一行开始显示
tac 倒着显示
nl 显示的时候，顺道输出行号
more 一页一页的显示 空格翻页 enter 代表向下看一行 :f 显示行号
less 与 more less可以向前翻页  退出时q命令
head 只看头几行
tail 只看尾巴几行
cd /etc/sysconfig/network-scripts 网络连接配置
ifcfg-eth0 默认网络配置文件
head -n 20 看20行
less 使用 /要搜寻的文件名 向下查询 ？向上查 n 向下寻找  N 向前寻找
nl csh.login | head -n 10
```

## 链接
```xml
// 创建文件
touch 文件名
// ln 硬链接
ln f1 f2
// ln -s 软连接
ln -s f1 f3
// echo 输入字符串
echo "i love haohao" >>f1
```

硬链接：  多个文件名指向同一索引节点，建立硬连接到重要文件，以防止“误删”的功能，只有当最后一个连接被删除后，文件的数据块及目录的连接才会被释放。

软链接(符号链接)：快捷方式



## VIM文本编辑器
+ 查看内容
+ 编辑内容
+ 保存内容

```xml
vim hao.txt // 创建新文件
i 输入模式
: 底线模式
esc 回到命令模式
:wq 保存并退出
:q! 不保存退出
G 最后一行
gg 第一行
n + 回车 向下几行
/寻找的文字
n 往上
N 往下
:set nu 设置行号
ZZ 没动就退出
u 重复动作
```

+ 如果文件存在就是修改这个文件，不存在文件新增。

## 用户组管理
> useradd 命令 添加用户
>

useradd -m 用户名

-G 用户组

+ 自动创建用户在  /home/huminghao 目录

userdel -r 用户名

+ 删除目录

查看记录   cat /etc/passwd

修改用户 usermod 对应修改的内容，修改哪个用户

usermod -d /home/233 huminghao

su huminghao    切换用户

hostname 查看主机名 临时

passwd 修改密码

```plain
passwd huminghao
linux 密码看不见
```

> 锁定账户
>

```plain
passwd -l huminghao
用户将不能登录
passwd -d huminghao
清空密码
```

## 用户组管理
groupadd 组名

cat /etc/group

-g 指定组id  如果不指定就是自增

groupdel 删除用户组

修改用户组的权限信息 名字

```plain
groupmod -g 666 -n newhuminghao huminghao
```

### 用户切换用户组
```plain
$ newgrp root
```

### 文件查看
/etc/passwd

用户名：口令：用户标识号，组标识号，注释性描述，主目录，登录shell

/etc/shadow

查看加密后的密码

## 磁盘管理
> df（列出文件系统整体的磁盘使用量） du（检查磁盘空间使用量）
>

```plain
df -h 查看多少兆/g
du 查看使用内存 也可以看见子集目录
du -a 全部
du -sm /* 检查根目录下所占用的容量
mount 挂载 源目录 目的
unmount -f 挂载位置 卸载
```

![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1679158254728-8db1ef81-a475-44c7-b02b-09841d82b17c.png)

## 进程管理
ps -xx

+ -a 显示当前终端允许的所有的进程信息（当前进程）
+ -u 以用户的信息显示进程
+ -x 显示后台运行进程的参数



```plain
ps -aux | grep java
ps -ef|grep mysql 带着父进程的进程号
pstree -pu
p 父id
u 用户组
kill -9 pid 强制结束进程
```

## Docker-compose（单机）
###基本概念
容器编排就是针对容器生命周期的管理，对容器的生命周期进行快速方便的进行管理。

更加简单的使用容器。

### 需求
+ 依赖管理： 当一个容器必须在另一个容器运行完成后，才能运行。
+ 副本数控制：容器有时候也需要集群，快速的对容器进行弹性伸缩。
+ 配置共享：通过配置文件统一描述需要运行的服务相关信息，自动化的解析配置内容，构建对应的服务。

### 主要文件
docker-compose.yml

描述了容器运行时所需要的配置，比如网络，数据卷，端口等等

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1709738749481-9a3e1d93-de0f-49bd-9cb9-8bd68427d135.png)

```shell
sudo curl -L "http://mirrors.aliyun.com/docker-toolbox/linux/compose/1.21.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
docker-compose --version
```

[命令介绍](https://docs.docker.com/compose/compose-file/compose-file-v2/)

```yaml
version: "2.1"

services:
  nginx-demo:
    image: "nginx"
    # container_name: "nginx_compose"
    restart: "always"
    networks:
      - /www/wolfcode.cn:/usr/share/nginx/html
    volumes:
      - wolfcode_volume
    environment:
      APP_ENV: dev
    dns:
     - 114.114.115.115
    ports:
     # - 80:80
     - 80
networks:
  wolfcode_net:
    driver: bridge
    ipam:
      driver: default
      config:
        - subnet: 188.18.0.0/16
          gateway: 188.18.0.1
```

```yaml
docker-compose config // 检查配置文件

docker-compose ps // 查看

docker-compose create [nginx-demo]// 创建

docker-compose up -d  // 重新运行

docker-compose scale nginx-demo=3 // 启动几个 弹性伸缩

docker-compose logs -f [nginx-demo] // 查看日志
```

