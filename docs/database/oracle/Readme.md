---
title: Oracle
---
数据库类型：关系型数据库，非关系型数据库（基于某种结构的存储）

关系型数据：MySQL，PostgreSQL，Microsoft SQL Server，Google Fusion Tables， Oracle，Sybase数据库

非关系型数据库：扩展简单，分布式

+ 面向检索的列式存储（提高检索效率，可扩展性）BigTable（Google）HaBase
+ 面向高并发的缓存存储（key-value）LevelDB（Google）Redis MemcacheDB
+ 面向海量数据访问的文档存储 Document-Oriented  MongoDB CountDB

## 数据库术语
+ 数据，事物的符号
+ 数据库：长期存储在计算机内，结构的，大量的，共享的数据集合
+ 数据库管理系统：DBMS 用户与操作系统之前的一层数据管理软件。
+ 数据库系统：人，DBMS，DB在一起就是数据库系统
+ 数据库管理员：DBA
+ 数据结构化：数据非纯文本，有各种数据类型，以及各种类型的数据规范
+ 数据共享性： 数据面向整个生态系统
+ 数据冗余度：多余的相同数据
+ 数据的一致性：一条记录，在多张表保持同步更新。
+ 物理独立性：用户程序与物理磁盘上的数据独立
+ 逻辑独立性：用户程序与逻辑结构相互独立
+ 数据的安全性： 数据不丢失，非法访问，网络安全(黑客攻击)
+ 数据的完整性：完整的、准确的描述数据自身和数据之前联系的情况。
+ 并发控制：事务管理，多个用户同时操作
+ 数据库恢复：技术手段，进行数据抢救。



## Oracle数据库
<font style="color:#E8323C;">高吞吐量</font>的数据库解决方案

+ 完整的数据管理功能
+ 完备关系的产品（可看，可访问，视图更新准则）
+ 分布式处理功能
+ 数据仓库的操作
1. 可用性
2. 可扩展性
3. 数据安全性
4. 稳定性

劳伦斯.埃里森 创始人

1979发布 第二版

**客户端/服务器模式**

**oracle 实例 类似于进程，客户机请求携带实例信息，实例把数据存到数据库中。**

**实例 在集群可以操作多个数据库。**

**服务器有存在实例。**

**oracle数据库软件：oracle服务器**

**每个实例都会操作一个数据库。**

****

## oracle卸载
+ 如果数据库配置了自动存储管理（ASM），先删除聚集同步服务，DOS命令

```java
localconfig delete
```

+ 关闭oracle所有服务
+ deinstall.bat 双击卸载
+ 删除自动存储管理

```java
oracle-delete-asnsid+asm
```

+ 删除注册表 regedit

![](https://cdn.nlark.com/yuque/0/2022/png/33708367/1669781300235-537e5b2f-00e8-44ae-98c8-9adbed2d129f.png)

+ 删除环境变量中的PATH和CLASSPATH中包含Oracle的值
+ 删除开始下面的oracle图标
+ 删除所有和oracle相关的目录

## oracle数据库实例
运行在oracle服务器端为接受用户请求并提供相应的独立进程（服务）

## 查看数据库
win + R services.msc

Database Configuration Assistant

创建和删除数据库





## 监听程序
+ 运行在Oracle服务器端用于侦听客户端请求的程序。
+ 没有安装实例，需要配置监听程序。
+ Net Configuration Assistant 配置



## Oracle 管理工具
SQL*PLus，是一个DOS界面下操作数据库的管理工具，数据库管理员经常使用的，12c自带

iSQL*Plus ，是一个web页面形式的管理工具

PL/SQL Developer，专门用于开发、测试、调试和优化Oracle PL/SQL 存储程序单元，功能强大。

OEM：管理数据库底层



## SQL*Plus
+ 启动方式
+ 菜单启动
+ DOS命令启动：SQLPlus



+ 用户登录
+ win + R sqlplus
+ 本地管理员 sys/125896HmH as sysdba

![](https://cdn.nlark.com/yuque/0/2022/png/33708367/1669797516904-19000f4e-8f0e-4047-abfc-778f0023f37c.png)system/125896HmH @orcl // 连接指定数据库

regedit 注册表

![](https://cdn.nlark.com/yuque/0/2022/png/33708367/1669798112064-ba9213ed-9400-4789-8df9-aaf799891fb3.png)

oracle文件夹下

![](https://cdn.nlark.com/yuque/0/2022/png/33708367/1669798172963-df0a6e39-a287-40e1-bddc-72345f80a275.png)PL/SQL Developer 商业性的工具，付费，使用人比较多

必须有oracle数据库软件

## 本地网络配置
1. Net Configuration Assistant

![](https://cdn.nlark.com/yuque/0/2022/png/33708367/1669804069205-85a1c2ce-8026-4cd9-b521-e72802678e90.png)

目标主机数据库名称

TCP协议

远程主机ip名

端口名

网络服务名 （自己定义）

## 配置文件配置（网络）
D:\app\product\12.2.0\dbhome_1\network\admin

修改tnsnames文件



## SQL介绍
结构化查询语言，用于存取、查询、更新数据和管理关系数据库系统

oracle使用PL/SQL语言

DDL 数据定义语言

+ 数据库对象（数据库、数据表、视图、索引等）的创建、修改及删除操作

DML 数据操纵语言

+ 用于完成对数据库表中数据的插入、修改及删除操作

DCL 数据控制语言

+ 用于数据库中用户创建删除、用户锁定解锁、权限授予取消等系统管理员权限的操作

DQL 数据查询语言

+ 用于完成对数据表中数据的查询操作



## Oracle数据类型
+ 字符型，用于存储字符序列
+ varchar2，char，nvarchar2，nchar，long

![](https://cdn.nlark.com/yuque/0/2022/png/33708367/1669805843823-8e3e032b-6ea2-4988-b885-ea6e7dde19ac.png)

可变长度字符串与定长字符串的区别  定长字符串会填充

char类型 身份证，手机号

varchar2 可变长度字符串 名字

+ 数值型，用于存储数据（整数和小数）

![](https://cdn.nlark.com/yuque/0/2022/png/33708367/1669806002254-775c14e0-2039-44b9-9d3e-db5f7cccfed3.png)

+ 日期型，存储时间（年 月 日 时 分 秒）

![](https://cdn.nlark.com/yuque/0/2022/png/33708367/1669806064735-f1ca7485-0107-4fc0-83c8-fea0920959d2.png)

+ 大字段类型，存放大数据及文件

![](https://cdn.nlark.com/yuque/0/2022/png/33708367/1669806108568-39cb733b-d1bb-4c35-98d0-8b6cb2e2fad1.png)

## 用户和角色和表空间
表空间是用来存储数据的文件

数据表用来存储数据的

数据表  在表空间中

索引 创建索引 快速查找

视图  虚拟表

序列 实现某一列的自增长

同义词 为一张表起一个别名，对原本的表进行保护

存储过程

函数

触发器

程序包 创建一个包装起来

## 数据库定义语言
创建create，删除drop，修改alter

```plsql
CREATE TABLE table_name{
column_name column_type[not null],
...
[constraint]
}
```

+ 表名 table_name
+ 列名 column_name
+ 数据类型 column_type

[not null] 可有可无

![](https://cdn.nlark.com/yuque/0/2022/png/33708367/1669807040377-73e4d16d-0cb5-4de0-84fb-0135ee32c426.png)

```plsql
-- 创建学生信息表
create table tb_students(
stu_num char(1) not null,
stu_name varchar2(10) not null,
stu_sex char(2) not null,
stu_age number(2),
stu_tel char(11)
);
```

### 增加列
```plsql
ALTER TABLE table_name ADD column_name column_type
ALTER TABLE table_name modify column_name column_type
ALTER TABLE table_name DROP COLUMN column_name
```

```plsql
-- 修改数据表： 新增列,修改列，删除列
alter table tb_students ADD stu_email char(50)
alter table tb_students modify stu_email varchar2(50)
alter table tb_students drop column stu_email
```

## 数据库表删除
```plsql
-- 删除数据表
DROP TABLE tb_students
-- 删除数据
truncate table tb_students
delete tb_students
```

## 主键约束
+ 主键就是数据库表中一个或多个字段，用于唯一标识数据表中的一条记录。

```plsql
CREATE TABLE table_name{
column_name column_type[not null] primary key,
...
[constraint]
}
```

```plsql
-- 创建学生信息表
create table tb_students(
stu_num char(1),
stu_name varchar2(10) not null,
stu_sex char(2) not null,
stu_age number(2),
stu_tel char(11),
primary key(stu_num)
);
```

```plsql
-- 新增主键
alter table tb_students ADD CONSTRAINTS pk_student primary key(stu_num)
```



## 联合主键
两个或两个以上的字段作为主键

```plsql
create table tb_grades(
course_id char(3),
course_name varchar2(50),
stu_num char(5),
stu_name varchar2(10),
score number(3),
primary key(course_id,stu_num)
)

drop table tb_grades

create table tb_grades(
course_id char(3),
course_name varchar2(50),
stu_num char(5),
stu_name varchar2(10),
score number(3)
)

alter table tb_grades ADD constraints pk_grades primary key(course_id,stu_num)
```

## check约束
检查约束，限定每一列能够输入的值，以保证数据的正确性

```plsql
create table tb_students(
stu_num char(1) primary key,
stu_name varchar2(10) not null,
stu_sex char(2) not null,
stu_age number(2),
stu_tel char(11),
constraint ck_student_sex check(stu_sex='男' or stu_sex='女'),
constraint ck_student_age check(stu_age between 6 and 30)
);
// 添加
alter table tb_students ADD CONSTRAINTS ck_student_sex check(stu_sex='男' or stu_sex='女')
// 删除
alter table tb_students drop CONSTRAINTS ck_student_sex

```

## UINQUE 约束
用于限定数据表中字段值的唯一性

```plsql
create table tb_students(
stu_num char(1) primary key,
stu_name varchar2(10) not null,
stu_sex char(2) not null,
stu_age number(2),
stu_tel char(11),
constraint uq_student_tel unique (stu_tel)
);

alter table tb_students add constraints up_stu_tel unique(stu_tel)
// 删除
alter table tb_students drop CONSTRAINTS up_stu_tel
```

## NOT NULL约束
字段必须输入

```plsql
create table tb_students(
stu_num char(5) primary key,
stu_name varchar2(10) not null,
stu_sex char(2)not null,
stu_age number(2) not null,
stu_tel char(11) not null
);
// 非空
alter table tb_students modify stu_tel not null
// 取消
alter table tb_students modify stu_tel  null
```

## 添加数据
```plsql
insert into tb_students(stu_num,stu_name) values ('10001','张三')

insert into tb_students(stu_num,stu_name,stu_sex,stu_age,stu_tel) values ('10002','李四','男',20,'13644039788')

```

```plsql
insert into tb_students(stu_num,
stu_name,
stu_tel) select member_snum,member_name,member_tel from tb_members;
```

```plsql
create table tb_test AS select member_snum,member_name,member_tel from tb_members;
```

+ 新表名
+ 创建新表的来源

## 修改数据
```plsql
update tb_students SET stu_sex = '男',stu_age='21' where stu_num='10003'
update tb_students SET stu_sex = '男',stu_age='21'
```



## 删除数据（待复习）


## Oracle内置函数
+ 系统提供（无需定义）

单行函数

+ 当查询数据表，数据有多行，每行处理都会返回一个结果

集合函数

+ 查询多行记录返回一个结果

DUAL 表

+ 系统表，包含一个DUMMY字段，select没有目标，多用户访问不可以山北侧

## 数值函数
+ abs （n）绝对值
+ mod （m，n）取余
+ sign （n）判断数组正负
+ sin sinh asin cos cosh acos tan tanh atan
+ ceil（n）不舍floor （n）不入round（n）四舍五入
+ sort 平方根
+ power（m，n）此幂运算
+ log（m，n） ln（n）对数

```plsql
select user from dual;

select sysdate from dual;
select to_char(sysdate,'yyyy-mm-dd hh24:mi:ss') from dual;


select abs(-3) from dual;

select MOD(10,3) from dual;
-- -1 0 1
select sign(4),sign(-4) from dual;

-- 三角函数

select cos(3.1415926) from dual;

-- 数值取整
select ceil(1.02),round(2.49),Floor(2.99)from dual;

-- 平方根
select SQRt(-9) from dual;


-- 次幂运算
select power(4,3) from dual;

-- 对数
select log(10,100) from dual;
-- 自然对数
select ln(5) from dual;



```

## 字符函数
+ ASCII 与 字符的转换 chr(n) ASCII(char)
+ 获取字符串长度 length(char)
+ 截取字符串 substr(char,pos,len)
+ 字符串拼接 concat(char1,char2)
+ 字符串搜索 instr(char1,char2,[pos],[n])
+ 大小写转换 upper(char),lower(char),INITcap(char)
+ 替换字符串 replace(char1,char2,char3)
+ 字符串填充 LPAD（char1，n，char2），RPAD（char1，n，char2）
+ 删除首尾空格 trim（char）

```plsql
select chr(97) from dual;

select ASCII('b') from dual;


select stu_name,length(stu_name) from tb_students;
// 第一个截取，截取几个

select substr('ABCD',1,3) from dual;

select concat('AAA','BBB') from dual;
// 返回存在的位置
select Instr('www.QFEDU.com','.') from dual;
// 5 位置 2 第几次出现
select Instr('www.QFEDU.com','.',2,2) from dual;
// 大小写转换
select upper('hello') from dual;
// 首字母大写
select initcap('hello') from dual;

// 替换字符串
select Replace('www.QFEDU.com','com','cn')from dual;

// 字符串的填充  字符串 8 时多长 * 补充  8小于字符串 截取
select lpad('hello',8,'*'),RPAD('hello',8,'*')from dual;

select trim(' 123test ') from dual;

select Rtrim(' 123test ') from dual;

select Ltrim(' 123test ') from dual;
// 从字符串中删除后面的字符
select trim(trailing 't' from 'test') from dual;

-- 查询学生的姓名和电话号码，电话号码中间4位使用*表示
select stu_name,concat(substr(stu_tel,1,3),LPAD(SUBSTR(stu_tel,8,4),8,'*')))stu_tel from tb_students
```

## 日期函数
## 转换函数
## NULL函数
## 集合函数




