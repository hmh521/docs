---
title: Docker
---
# Docker
环境配置十分麻烦，费时费力

发布jar包，带着环境(redis,mysql,jdk,es),能不能带着环境

隔离性

通过隔离机制，可以将服务器利用到极致！！！

基于Go语言开发的

![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1679204062244-ccadb5ac-b866-4fc9-908d-7edd95ea71a5.png)

## 历史
dotCloud 公司

LXC 容器技术

容器化技术 docker

2013年开源

2014.4.9 Docker1.0 发布

Docker 十分的小巧 镜像（最核心的环境）秒级启动！

官网：[https://www.docker.com/](https://www.docker.com/)

文档：[https://docs.docker.com/](https://docs.docker.com/)

仓库地址： [https://hub.docker.com/](https://hub.docker.com/)



虚拟机技术缺点：

1. 资源占用十分多
2. 冗余步骤多
3. 启动很慢



容器内的应用直接运行在宿主机的内容，容器是没有自己的内核的，也没有虚拟我们的硬件。

容器间是互相隔离。每个容器内都有一个属于自己的文件系统，互不影响。



DevOps（开发，运维）

应用更快速的交付和部署

更便捷的升级和扩缩容

更简单的系统运维

更高效的计算资源利用

内核级别的虚拟化，可以在一个物理机上运行很多的容器实例。

kernel 内核的名词

## 基本组成
镜像（image）：模板，可以通过模板创建容器服务，tomcat镜像=>run=>tomcat1容器

容器（container）：独立运行一个或者一组应用，通过镜像来创建的，可以理解成一个简易的linux系统

仓库（respository）： 存放镜像的地方，默认是国外的，阿里云-配置镜像加速



docker是一个client-Server结构的系统，Docker的守护进程运行在主机上，通过socket客户端进行访问。

docker-server 接收到Docker-client 的指令，就会执行。



docker 拥有比虚拟机更少的抽象层，不需要重新加载操作系统内核。

![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1679211945358-99329879-3833-4652-bf77-daddd393004c.png)

![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1679216498999-088bbc1f-8465-46c3-9421-746d63c2850a.png)

## 安装命令
```plain
uname -r
# 系统版本
cat /etc/os-release
```

```shell
docker version # 显示docker的版本信息
docker info # 显示docker的系统信息，包括镜像和容器
docker 命令 -- help # 万能命令
docker images 查看所有镜像

REPOSITORY     TAG       IMAGE ID       CREATED         SIZE
halohub/halo   1.5.1     03d06d44c0c4   11 months ago   346MB
mysql          latest    667ee8fb158e   11 months ago   521MB
mysql          8.0.27    3218b38490ce   15 months ago   516MB
ruibaby/halo   latest    caebc1d425f9   20 months ago   326MB

REPOSITORY 镜像的仓库源
TAG 镜像的标签
IMAGE ID 镜像id
CREATED 镜像的创建时间
SIZE 镜像的大小

# 可选项
-a 全部镜像
-q 只显示id

docker search 搜索镜像

docker search mysql
NAME                            DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
mysql                           MySQL is a widely used, open-source relation…   13949     [OK]
mariadb                         MariaDB Server is a high performing open sou…   5317      [OK]
phpmyadmin                      phpMyAdmin - A web interface for MySQL and M…   762       [OK]

docker search mysql --filter=STARS=5000

docker pull 下载镜像 
如果不写tags，默认就是最新的latest
分层下载
联合文件系统
签名
真实地址
docker pull mysql
Using default tag: latest
latest: Pulling from library/mysql
Digest: sha256:e9027fe4d91c0153429607251656806cc784e914937271037f7738bd5b8e7709
Status: Downloaded newer image for mysql:latest
docker.io/library/mysql:latest


docker pull mysql:5.7
5.7: Pulling from library/mysql
72a69066d2fe: Already exists 不需要下载省空间
93619dbc5b36: Already exists
99da31dd6142: Already exists
626033c43d70: Already exists
37d5d7efb64e: Already exists
ac563158d721: Already exists
d2ba16033dad: Already exists
0ceb82207cd7: Pull complete
37f2405cae96: Pull complete
e2482e017e53: Pull complete
70deed891d42: Pull complete
Digest: sha256:f2ad209efe9c67104167fc609cca6973c8422939491c9345270175a300419f94
Status: Downloaded newer image for mysql:5.7

docker rmi -f 容器id 容器id 多个
docker rmi -f ${docker images -aq} 删除全部容器
```

![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1679211333890-91764075-3bf8-4125-9954-b7b3b75f40e6.png)

## 容器命令
```shell
docker run[可选参数] image

--name="name" 容器名字
-d  后台运行
-it 使用交互方式运行，进入容器查看内容
-P 指定容器端口 -p:8080
主机端口:容器端口
-p 随机指定端口

docker run -it centos /bin/bash
docker exec -it 容器ID /bin/bash   根据ID重新进入容器交互
exit 退回
docker ps 运行中的容器
docker ps -a 包括历史运行过的容器
docker ps -n=1 显示最近创建的一个容器
docker ps -q 容器id
ctrl + p + q  退出容器不停止
删除容器
docker rm 容器id 
docker rm -f ${docker ps -aq}
docker ps -a -q | xargs docker rm
启动和停止容器
docker start 容器id  #启动容器
docker restart 容器id
docker stop 容器id
docker kill 容器id
```

## 常用其他命令
```shell
docker run -d centos 容器使用后台运行，必须有前台进程

docker logs -tf --tail 条数 容器id

-t 日志加时间， -f 保留打印窗口，持续打印，--tail 10 显示最后的10行

编写一段脚本
docker run -d centos /bin/sh -c "while true;do echo haohao;sleep 1;done"

docker top 容器id 进程信息
docker inspect 容器id 容器信息
docker inspect a2ebc10c9609 镜像元信息
[
    {
        "Id": "a2ebc10c9609547c2787e37ac5273b7f812d4a5a1d779bb0bba856119aadebc7",
        "Created": "2022-04-05T18:22:54.165777796Z",
        "Path": "/bin/sh",
        "Args": [
            "-c",
            "java -Xms${JVM_XMS} -Xmx${JVM_XMX} ${JVM_OPTS} -Djava.security.egd=file:/dev/./urandom org.springframework.boot.loader.JarLauncher"
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 4736,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2023-03-19T12:03:42.040491767Z",
            "FinishedAt": "2023-03-19T12:03:41.56113272Z"
        },
        "Image": "sha256:03d06d44c0c4140ce9e0858a755617d07ca75100173ab886f460019d6e68d10d",
        "ResolvConfPath": "/var/lib/docker/containers/a2ebc10c9609547c2787e37ac5273b7f812d4a5a1d779bb0bba856119aadebc7/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/a2ebc10c9609547c2787e37ac5273b7f812d4a5a1d779bb0bba856119aadebc7/hostname",
        "HostsPath": "/var/lib/docker/containers/a2ebc10c9609547c2787e37ac5273b7f812d4a5a1d779bb0bba856119aadebc7/hosts",
        "LogPath": "/var/lib/docker/containers/a2ebc10c9609547c2787e37ac5273b7f812d4a5a1d779bb0bba856119aadebc7/a2ebc10c9609547c2787e37ac5273b7f812d4a5a1d779bb0bba856119aadebc7-json.log",
        "Name": "/halo",
        "RestartCount": 1080,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": [
                "/root/.halo:/root/.halo"
            ],
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "halo-net",
            "PortBindings": {
                "8090/tcp": [
                    {
                        "HostIp": "",
                        "HostPort": "8090"
                    }
                ]
            },
            "RestartPolicy": {
                "Name": "unless-stopped",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": null,
            "CapAdd": null,
            "CapDrop": null,
            "CgroupnsMode": "host",
            "Dns": [],
            "DnsOptions": [],
            "DnsSearch": [],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "private",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "ConsoleSize": [
                0,
                0
            ],
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": [],
            "BlkioDeviceReadBps": null,
            "BlkioDeviceWriteBps": null,
            "BlkioDeviceReadIOps": null,
            "BlkioDeviceWriteIOps": null,
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": [],
            "DeviceCgroupRules": null,
            "DeviceRequests": null,
            "KernelMemory": 0,
            "KernelMemoryTCP": 0,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": false,
            "PidsLimit": null,
            "Ulimits": null,
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/asound",
                "/proc/acpi",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/sys/firmware"
            ],
            "ReadonlyPaths": [
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/84f7830e35c9dc3ad36730e53d3c365ad0c41f991994ac9328bf5ee104cb08c6-init/diff:/var/lib/docker/overlay2/f24d91ba4b5cf7dea573af64f6b9aa7260cc863426b8e5b99174d277c111168d/diff:/var/lib/docker/overlay2/3c4ae529c521e83486a4a717d66796d130319db859d579716078f2f053147769/diff:/var/lib/docker/overlay2/cefaf69fa93121e9127e8e04b36e0f6c80ce58c97db159beda164ce7eaa88411/diff:/var/lib/docker/overlay2/bfcac4da832de52ee4b3364ee1a522e6b5d5d53fb755cb2d269c653287737048/diff:/var/lib/docker/overlay2/44df50d21be2d77a17b82e5370efc0a94025c8bb74ac8b915ad9ca136ab0ce76/diff:/var/lib/docker/overlay2/83b0b66e77e5ece0783442ae7f47497fc16d8ab4bf9d3b24732df163cc3e5650/diff:/var/lib/docker/overlay2/18309b8d714979145280799df0d82989866a8e2d893c32df4fd3a3f45a908fe4/diff:/var/lib/docker/overlay2/cbdf7c44ec7924decc7aa083367b49eea5da37f00e3e22e30295f25a693a4cd5/diff:/var/lib/docker/overlay2/6d957257ef6b8cb42ca8453e476d3baa2001d734a3a1a89116538b8ad056e208/diff",
                "MergedDir": "/var/lib/docker/overlay2/84f7830e35c9dc3ad36730e53d3c365ad0c41f991994ac9328bf5ee104cb08c6/merged",
                "UpperDir": "/var/lib/docker/overlay2/84f7830e35c9dc3ad36730e53d3c365ad0c41f991994ac9328bf5ee104cb08c6/diff",
                "WorkDir": "/var/lib/docker/overlay2/84f7830e35c9dc3ad36730e53d3c365ad0c41f991994ac9328bf5ee104cb08c6/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [
            {
                "Type": "bind",
                "Source": "/root/.halo",
                "Destination": "/root/.halo",
                "Mode": "",
                "RW": true,
                "Propagation": "rprivate"
            }
        ],
        "Config": {
            "Hostname": "a2ebc10c9609",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "8090/tcp": {}
            },
            "Tty": true,
            "OpenStdin": true,
            "StdinOnce": false,
            "Env": [
                "PATH=/opt/java/openjdk/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "LANG=en_US.UTF-8",
                "LANGUAGE=en_US:en",
                "LC_ALL=en_US.UTF-8",
                "JAVA_VERSION=jdk-11.0.11+9",
                "JAVA_HOME=/opt/java/openjdk",
                "JVM_XMS=256m",
                "JVM_XMX=256m",
                "JVM_OPTS=-Xmx256m -Xms256m",
                "TZ=Asia/Shanghai"
            ],
            "Cmd": null,
            "Image": "halohub/halo:1.5.1",
            "Volumes": null,
            "WorkingDir": "/application",
            "Entrypoint": [
                "/bin/sh",
                "-c",
                "java -Xms${JVM_XMS} -Xmx${JVM_XMX} ${JVM_OPTS} -Djava.security.egd=file:/dev/./urandom org.springframework.boot.loader.JarLauncher"
            ],
            "OnBuild": null,
            "Labels": {
                "org.opencontainers.image.created": "2022-03-30T10:01:39.477Z",
                "org.opencontainers.image.description": "✍ 一款现代化的开源博客 / CMS 系统。",
                "org.opencontainers.image.licenses": "GPL-3.0",
                "org.opencontainers.image.revision": "ec6df79e7a2762f944e1cc740ef8bc92cc31bde8",
                "org.opencontainers.image.source": "https://github.com/halo-dev/halo",
                "org.opencontainers.image.title": "halo",
                "org.opencontainers.image.url": "https://github.com/halo-dev/halo",
                "org.opencontainers.image.version": "1.5.1"
            }
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "50347fb9c6c1cc7cd5c3ae15c6a6da7b70a21cffc27e11dc5e78b46293efae5d",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {
                "8090/tcp": [
                    {
                        "HostIp": "0.0.0.0",
                        "HostPort": "8090"
                    }
                ]
            },
            "SandboxKey": "/var/run/docker/netns/50347fb9c6c1",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "",
            "Gateway": "",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "",
            "IPPrefixLen": 0,
            "IPv6Gateway": "",
            "MacAddress": "",
            "Networks": {
                "halo-net": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": [
                        "a2ebc10c9609"
                    ],
                    "NetworkID": "b5f9022fc9831bd004e5845de783650c03ae9124df0e633f5774426b7eed6d56",
                    "EndpointID": "19513a155ea030c98649c7bdd3f140ad4d7d2efba219e046cd94bcededf87ba2",
                    "Gateway": "172.19.0.1",
                    "IPAddress": "172.19.0.2",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:13:00:02",
                    "DriverOpts": null
                }
            }
        }
    }
]

docker exex -it 容器id /bin/bash 进入容器 新窗口

docker attach 容器id 依附于当前运行命令行


从容器内拷贝到主机

docker cp 容器id:容器内路径 目的主机路径

当多个窗口同是attach到同一个容器的时候，所有窗口都会同步显示；当某个窗口因命令阻塞时，其他窗口也无法执行操作。
可以使用 docker exec -it 容器id /bin/bash 进入容器并开启一个新的bash终端。 退出容器终端时，不会导致容器的停止。
使用 docker attach 容器id 进入正在执行容器，不会启动新的终端， 退出容器时，会导致容器的停止。

```

## Docker 安装Nginx
```shell
docker run -d --name nginx01 -p 3344:80 nginx
curl localhost:3344
docker images
docker exec -it nginx01 /bin/bash
whereis nginx
cd /etc/nginx
exit
docker stop 容器id
```

## Docker 安装tomcat
```shell
docker run -it --rm tomcat:9.0  一般用来测试，用完就删除
docker pull tomcat:9.0
docker run -d -p 3355:8080 --name tomcat01 tomcat
docker exec -it tomcat01 /bin/bash  
没有linux命令ll webapps
cd webapps.dist/
cd ..
cp -r webapps.dist/* webapps
```

## Docker 安装ES + kibana (通过linux内网链接)
```shell
docker run -d --name elasticsearch02 -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node"
-e ES_JAVA_OPTS="-Xms64m -Xmx512m" elasticsearch:7.6.2
docker ps 卡住了
docker stats

增加内存限制 -e 参数
```

## portainer 图形化管理工具
```shell
docker search portainer
docker pull portainer/portainer
docker volume create portainer_data
docker run -d -p 9000:9000 --restart=always  -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data --name prtainer-test  portainer/portainer
```

CI/CD 用Rancher

## Docker镜像
镜像是一种轻量级，可执行的独立软件包，所有的应用，直接打包docker 镜像，就可以直接跑起来。

如何得到镜像：

1. 远程仓库下载
2. 朋友拷贝
3. 自己制作一个镜像DockerFile

### Docker镜像加载原理（分层）
UnionFS（联合文件系统）

一次同时加载多个文件系统，联合加载会把各层文件系统叠加起来，最终的文件系统会包含所有底层的文件和目录

bootFs 系统需要引导加载

rootFs 在bootFs之上不同操作系统的发行版

只要内核即可

```shell
查看镜像操作  docker image inspect redis:latest
```

Docker镜像都只是只读的，当容器启动时，一个新的可写层被加载到镜像顶部

pull下来的是无法改变的，run起来相当于新加了一层

## Commit镜像
```shell
docker commit 提交容器成为一个新的副本
docker commit -m="提交的描述信息" -a="作者" 容器id 目标镜像名 :[tag]
docker run -it -p 8080:8080 tomcat
docker exec -it 容器id /bin/bash
```

## 容器数据卷
数据可以持久化，删除容器，相当于删库跑路，MySQL 的数据可以存到本地

容器之间可以数据共享

目录的挂载到linux上面

1. 命令

```shell
docker run -it -v 主机目录，容器内目录 centos /bin/bash
docker inspect 容器id
Mounts 挂载   Source 主机
Destination   docker 容器内地址
```

## Mysql同步数据
```shell
docker pull mysql:5.7
// 需要配置密码
docker run -d -p 3310:3306 -v /home/mysql/conf:/etc/mysql/conf -v /home/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql01 mysql:5.7
docker rm -f mysql01 // 删除容器  数据不会丢失
```

## 具名挂载和匿名挂载
```shell
docker run -d -p --name nginx01 -v /etc/nginx nginx// 匿名 只有容器内路径
docker volume --help // 查看卷帮助文档
docker volume ls// 查看所有的卷情况
docker run -d -P --name nginx02 -v juming-nginx:/etc/nginx:ro nginx 具名挂载
docker run -d -P --name nginx02 -v juming-nginx:/etc/nginx:rw nginx 具名挂载
ro 只读 只要看见就只能通过宿主机操作
rw 可读可写
docker volume inspect juming-nginx // 查看具体位置
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1708842341514-d93dc5e9-c146-4cfc-976a-d7b7e771cb07.png)

## Dockerfile
用来构建docker 镜像的构建文件！命令脚本

vim dockerfile1

```shell
FROM centos
VOLUMN ["volume01","volume01"]
CMD echo "----end----"
CMD /bin/bash
```

```shell
docker build -f /home/docker-test-volumn/dockerfile1 -t kuangshen/centos:1.0 .
docker run -it 容器id /bin/bash
docker inspect 容器id
```

## 数据卷容器
两个mysql同步数据

```shell
docker run -it --name docker01 kuangshen/centos:1.0
docker run -it --name docker02 --volumes-from docker01 kuangshen/centos:1.0
docker01 同步 docker02
引用宿主机的地址，同一个目录
数据卷的生命周期一直持续到没有容器使用为止
```

## DockerFile 构建过程
官方镜像都是基础包，很多功能都没有

基础知识

1. 每个保留关键字必须大写
2. 指令从上到下执行
3.  # 表示注释
4. 每一个指令都会创建提交一个新的镜像层，并提交
5. ![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1708872856087-033a3838-51ca-4535-8993-001b100a5d7a.png)

dockerFile 是面向开发的，我们以后要发布项目，做镜像，就需要编写dockerFile文件，这个文件非常简单

DockerFile： 构建文件，定义了一切的步骤，源代码

DockerImages：通过DockerFile构建生成的镜像，最终发布和运行的产品！

Docker容器： 容器就是镜像运行起来提供服务器

```shell
FROM   # 基础镜像，一起从这里开始构建
MAINTAINER # 镜像是谁写的 姓名+ 邮箱
RUN # 镜像构建的时候需要运行的命令
ADD # 步骤，tomcat镜像，tomcat的压缩包
WORKDIR # 镜像的工作目录
VOLUME # 设置卷，挂载的主机目录
EXPOSE # 暴漏端口
CMD # 指定这个容器启动的时候要运行的命令 只有最后一个会生效，可被替代
ENTRYPOINT # 指定这个容器启动的时候要运行的命令 可以追加命令
ONBUILD # 当构建一个被继承DockerFile 这个时候就会运行ONBUILD指令 触发指令
COPY # 类似ADD 将文件拷贝到镜像中
ENV # 构建的时候设置环境变量
```

```shell
FROM centos:centos7
MAINTAINER huminghao<565105438@qq.com>
ENV MYPATH /user/local
WORKDIR $MYPATH
RUN yum -y install vim
RUN yum -y install net-tools

EXPOSE 80

CMD echo $MYPATH
CMD echo "--end--"
CMD /bin/bash
```

```shell
docker build -f mydockerfile-centos -t mycentos:0.1 .
docker history 容器id // 查看构建历史
```

## CMD 和 ENTRYPOINT
```shell
FROM centos
CMD ["ls","-a"]
docker run 容器id -l 报错  -l 替换了 CMD 的命令
```

```shell
FROM centos
ENTRYPOINT ["ls","-a"]
docker build -f docker文件名 -t 镜像名 .
docker run 容器id -l 直接拼接在后面 ls-al
```

## Tomcat 镜像
1. 准备镜像文件JDK，Tomcat
2. 编写dockerFile 文件

```shell
touch readme.txt
vim Dockerfile

FROM centos
MAINTAINER huminghao<565105438@qq.com>

COPY readme.txt /usr/local/readme.txt
// 自动解压
ADD jdk-8ul1-linux-x64.tar.gz /usr/local/
ADD apache-tomcat-9.0.22.tar.gz /usr/local/

RUN yum -y install vim
ENV MYPATH /usr/local/
WORK $MYPATH

ENV JAVA_HOME /usr/local/jdk1.8.0_11
ENV CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
ENV CATALINA_HOME /usr/local/apache-tomcat-9.0.22
ENV CATALINA_BASH /usr/local/apache-tomcat-9.0.22
ENV PATH $PATH:$JAVA_HOME/bin:$CATALINA_HOME/lib:$CATALINA_HOME/bin

EXPOSE 8080

CMD /usr/local/apache-tomcat-9.0.22/bin/startup.sh && tail -F /usr/local/apache-tomcat-9.0.22/bin/logs/catalina.out
```

Dockerfile 不需要-f 去指定就能找到

```shell
docker build -t diytomcat .
// 启动镜像
docker run -d -p 9090:8080 --name haohaotomcat -v 宿主机挂载路径:容器路径 diytomcat
// 一个web.xml 和jsp 即可
```

## 发布自己的镜像
```shell
1. 注册账户
2. 确定账号可以登录
3. 在我们服务器上提交镜像
docker login --help
docker login -u huminghao
Password：密码
docker push 镜像名
docker tag 容器id 更改的名
```

```shell
1.登录阿里云
2. 找到容器镜像服务
3. 创建命名空间
4。创建镜像仓库
5. 浏览
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1708962929515-94d399e5-c53a-4ef2-be79-48e28b1d0a2f.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1708963158030-9da9d371-45ad-42bf-9914-6330fab8587e.png)

## Docker网络
```shell
docker rm -f $(docker ps -aq)
// 清除镜像
docker rmi -f $(docker images -aq)
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1709096057595-858a429c-3e05-412e-bf5c-2229962cebce.png)

eth0 阿里云内网地址

docker0 内网地址

lo 内网回环地址

```shell
// 运行容器
docker run -d -P --name tomcat01 tomcat
// ip addr  eth0 docker 分配的地址
docker exec -it tomcat01 ip addr
// linux 能 ping 通容器吗？可以
ping docker ip 地址
// 我们每启动一个docker 容器，docker 就会给docker容器分配一个ip，我们只要安装了docker，就会有一个网卡
docker0 桥接模式，使用的是evth-pair 技术

一对一对的网卡 就是evth-pair 技术
虚拟设备接口，一段连着协议，一段彼此相连
evth-pair 充当桥梁
openSTack  Docker，OVS 连接都是使用 evth-pair连接

两个docker容器 可以ping 通  最多65535

docker中所有的网络接口都是虚拟的，转发快
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1709096570074-fb871f72-0dea-431e-8c42-03a9a73ad007.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1709096991107-de1d2020-2225-4094-b847-afa34587d405.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1709097028745-c1a76077-5fe2-47e2-babf-b1fc26c13ff0.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1709097191577-af2ecad8-8b3b-47c8-bea9-66222d5cfd5f.png) 16 表示剩多少    evth-pair

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1709097284474-81fee803-d76e-42de-a44d-7b9f49140a2b.png)

## --link
```shell
docker run -d -P --name tomcat03 --link tomcat02 tomcat
反向不能ping 通
docker network ls
docker network inspect 容器id
docker exec -it tomcat03 cat /etc/hosts
--link  就是在hosts配置中增加了一个映射
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1709122101119-dd062850-c08b-4bf9-913f-a596298ab9fd.png)

## 自定义网络（推荐使用）
```shell
docker network ls // 查看所有的docker 网络
1.桥接模式 bridge
2.不配置网络 none
3.和宿主机共享网络 host
4.容器网络互通 contatiner

docker run -d -P --name tomcat01 --net bridge tomcat// 默认启动

docker0 默认，域名不能访问

docker network create --driver bridge --subnet 192.168.0.0/16 --gateway 192.168.0.1 mynet

docker run -d -P --name tomcat01 --net mynet tomcat// 自己搭建的
docker run -d -P --name tomcat02 --net mynet tomcat// 自己搭建的
修复了docker0的缺点，可以通过名称去ping

不同的集群使用不同的网络，保证集群健康
```

## 网络打通
```shell
docker network connect  mynet tomcat01
```

## redis 集群
```shell
docker network create redis --subnet 172.38.0.0/16


for port in $(seq 1 6); \
do \
mkdir -p /mydata/redis/node-${port}/conf
touch /mydata/redis/node-${port}/conf/redis.conf
cat << EOF >/mydata/redis/node-${port}/conf/redis.conf
port 6379 
bind 0.0.0.0
cluster-enabled yes 
cluster-config-file nodes.conf
cluster-node-timeout 5000
cluster-announce-ip 172.38.0.1${port}
cluster-announce-port 6379
cluster-announce-bus-port 16379
appendonly yes
EOF

docker run -p 637${port}:6379 -p 1637${port}:16379 --name redis-${port} \
-v /mydata/redis/node-${port}/data:/data \
-v /mydata/redis/node-${port}/conf/redis.conf:/etc/redis/redis.conf \
-d --net redis --ip 172.38.0.1${port} redis:5.0.9-alpine3.11 redis-server /etc/redis/redis.conf
done

redis-cli --cluster create 172.38.0.11:6379 172.38.0.12:6379 172.38.0.13:6379 172.38.0.14:6379 172.38.0.15:6379 172.38.0.16:6379 --cluster-replicas 1
redis-cli -c

set a b

get a

```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1709134118040-267bd7b3-984a-4e17-9f49-d1443fc8ef5d.png)

```shell
FROM java:8
COPY *.jar /app.jar
CMD  ["--server.port=8080"]
EXPOSE 8080
ENTRYPOINT  ["java","-jar","/app.jar"]
```

```shell
docker build -t 镜像名 .
docker run -d -P --name 容器名 镜像名
```

