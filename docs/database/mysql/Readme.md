---
title: MySQL数据库
---

[mysql8 交流网站](https://dev.mysql.com/doc/refman/8.0/en/)

[数据结构演示图](https://www.cs.usfca.edu/~galles/visualization/about.html)

[数据库最新排名](https://db-engines.com/en/ranking)

## 为什么要使用数据库？
<font style="color:#DF2A3F;">持久化 </font><font style="color:#000000;">将内存中的数据存储到关系型数据库中</font>

<font style="color:#000000;">一张表可以存储，几千万，上亿条数据。</font>

<font style="color:#000000;">类型多种多样，图片，大文本</font>

<font style="color:#000000;">使用成本低，性能卓越，服务稳定，软件体积小，社区活跃</font>

<font style="color:#000000;">概念：</font>

1. <font style="color:#000000;">DB 数据库   实际文件</font>
2. <font style="color:#000000;">DBMS 数据库管理系统</font>
3. <font style="color:#000000;">SQL 结构化查询语言</font>

Mysql <font style="color:#DF2A3F;">开放源代码的关系型数据库管理系统</font>

+ 2008 sun 收购，2009 oracle 收购sun   mariadb  是mysql的分支项目
+ 6.x 后分社区版和商业版
+ GPL 协议，修改源码来开发自己的mysql系统
+ mysql 支持上千万条大型数据库
+ mysql 在32系统下支持表文件4GB的存储，64位系统下支持表文件8TB的存储
+ 标准的SQL 标记语言
+ mysql5.5 innodb 引擎作为默认存储引擎
+ mysql5.7 比较多 2015年
+ 2016年 8.0

oracle 适用于大型跨国企业，性能和安全性要求高，收费

mysql 中小型网站，互联网公司首选

## RDBMS和非RDBMS
1. RDBMS 二维关系 行和列 构成表
2. 非RDBMS 阉割版  性能非常高
+ redis 键值型  内存缓存
+ mongodb 文档型  xml json
+ 搜索引擎数据库  ES  solr 数据量大
+ 列式数据库 HBase 降低IO   分布式文件系统
+ 图形数据库 存储实体对象之间的关系

## ER与表记录
实体集，属性，联系集

### 一对一关联
1. 一对一可以创建成一张表
+ 外键唯一，外键是主键
2. 一对多
+ 主表的主键是从表的非主键字段
3. 多对多
+ 需要关联关系表
4. 自我引用
+ 自己对应自己，自我引用



## Mysql卸载
```xml
mysql --version  // 数据库版本
mysql -uroot -p   // 后面接上密码
show databases;  // 数据库
use atguigudbl // 使用数据库
show tables;   // 展示表
select version();// 查询版本
mysql -uroot -pabc123 -hlocalhost -P3307  // 主机端口号
net start 服务名 // 启动服务
net stop 服务名 // 停止服务
```

+ 控制面板卸载
+ msi 卸载
+ 电脑管家或者360卸载
+ ![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1700581511083-e88cd0a7-5a46-4f19-9676-f0e44e82674a.png)
+ 清除注册表  regedit

```sql
show databases;
information_schema; -- 系统信息，数据库名称，表名称，存储权限
mysql   -- 运行时系统信息。文件夹，字符集
performance_schema; -- 性能指标
sys -- 性能指标，开发人员监控性能
create database bdtest1; // 创建数据库
use bdtest1; // 使用数据库
create table employees(id int,name varchar(15));// 创建表
show tables;// 展示表
select * from employees;// 查看数据
insert into employees values(1002,'Tom'); // 插入数据

show create table employees; // 查看表信息

5.7 不能插入中文  数据库默认字符集 latin1 不包含汉字

show variables like 'character_%'; // 显示字符集
show variables like 'collation_%'; // 比较规则

drop database dbtest1;// 删除数据库


5.7 my.ini
[mysql]
default-character-set=utf8 #默认字符集
[mysqld]
character-set-server=utf8
collation-server=utf8_general_ci

8.0 默认 utf8mb4 4个字节表示一个字符


5.7默认是mysql_native_password
8.0默认是caching_sha2_password加密方式，需要更改加密规则

use mysql；

alter user 'root'@'localhost' IDENTIFIED with mysql_native_password by '123456'

flush privileges;


skip-grant-tables 忽略密码金融

```

## SQL分类
```sql
DDL: 数据定义语言  create  alter drop  rename  truncate 

DML: 数据操纵语言  insert  delete  update  select 

DCL: 数据控制语言  commit  rollback savepoint grant revoke 

windows 不区分大小写
linux 区分大小写
数据库名，表名，表的别名，变量名 区分大小写
关键字，函数名，列名，列的字段名忽略大小写

规范
数据库名，表名，表别名，字段名，字段别名都小写
sql关键字，函数名，绑定变量都大写

# 单行注释
/*
 多行注释
*/
-- 必需有空格
导入数据
source 文件的全路径名  cmd导入
基于图形化工具导入

别名 可以用双引号括起来 解决空格问题

去除重复行
distinct 关键字 只能整体不重复

空值参与运算
null 和 0 '' 是不一样的
null 参与运算的结果都是null
IFNULL(commission_pct,0)

着重号 `` 
解决order 是关键字

常数
每一行都会匹配

显示表结构
DESCRIBE 表名;
DESC 表名;

sql 在windows下是不区分大小写  字符串也不区分 ANSI 标准 是mysql放水了
oracle 字符串区分大小写  
过滤数据
where 

sql 中 + 没有连接作用。
和字母相加会当0处理

/ 除法是默认浮点型，除法自动保留小数位
100 div 0 结果为null
mod 模数的符号 和被模数有关  为偶数 %2

比较运算符
=   字符串存在隐式转换，如果转换不成功，则看做是0

两边都是字符串，通过ASNI的比较规则比较

只要有null参与运算结果就是null

<=>  安全等于 没有null 参与是一样的  null可以参与运算
一样为1 不一样为0  is null   is not null  isnull函数

select commission_pct
from employees
where not commission_pct <=> null; 也可以

LEAST 最小  GREATEST 最大 LENGTH 长度

BETWEEN AND 区间 左右都包含 要求条件1是下限 条件2是上限 

and && 且  

in 区间   not in

or 或 非零就是1  条件要完整

like 模糊查询  %a%  %不确定个数的字符

last_name like '%a%e%' or last_name like '%e%a%'

_ 代表一个不确定的字符

转义字符 \
ESCAPE '$' 告诉数据库这个是转义字符

REGEXP  RLIKE 正则
^ 开头
$ 结尾
. 任意一个字符
[...] [abc] 有a 或b 或c  -代表范围
* 匹配任意多个字符可以是零个

XOR 异或  不同为真，相同为假

and 比 or 的优先级高



默认存储顺序，先后添加的顺序 ORDER BY

使用 ORDER BY 默认升序 ASC

可以使用列的别名进行排序

列的别名只能在 ORDER BY 中使用
WHERE 不可以使用别名

二级排序 逗号分割就可以了 第一列相同
，再考虑第二列

分页节省资源 limit 偏移量 显示条目数

第二页  limit 20 20;

公式 (pageNo-1)*pageSize,pageSize

声名顺序 
1. where
2. order by
3. limit

limit 位置偏移量为0 可以省略这个0

偏移量从开始 注意一下

Mysql 8.0 新特性

OFFSET 颠倒一下原来的顺序

limit 必须在最后！！！ PGSQL，SQLITE，MARIABD

扩展： sqlserver 使用top
DB2 FETCH FIRST 5 ROWS ONLY
oracle rownum 统计 隐藏字段
前10条记录 rownum<=10

length(email) desc 邮箱字节数降序


拆表  解决冗余 IO次数变多，影响效率，粒度小的方面考虑 并发的角度

笛卡尔积：员工和部门都匹配了一遍。交叉连接
缺少连接条件  cross join  连接条件没写对
所有可能都出现一遍，元素个数的乘积

-- 关联查询
SELECT employee_id,department_name
FROM employees,departments
where employees.department_id = departments.department_id

-- 建议多表查询每个字段前都指明所在的表
SELECT employee_id,department_name,employees.department_id
FROM employees,departments
where employees.department_id = departments.department_id

-- 可以给表起别名。在select 和 where 中使用  原名和别名不能混用，用了别名就不能用原名·

n个表至少要有n-1个连接条件，否则会出现笛卡尔积


多表查询的分类
1. 等值连接和非等值连接
2. 自连接和非自连接
3. 内连接和外连接

#非等值连接
SELECT e.last_name,e.salary,j.grade_level
FROM employees e,job_grades j
where e.salary between j.lowest_sal and j.highest_sal

#自连接 查询员工id，员工姓名及其管理者的id和姓名
SELECT a.employee_id,a.last_name,b.employee_id,b.last_name
FROM employees a,employees b
WHERE a.manager_id = b.employee_id

内连接  合并具有同一列的两个以上的表的行

外连接 合并具有同一列的两个以上的表的行，与另一个表匹配的行

左外 右外  满连接

sql92 sql99 sql经典标准

sql92 外连接  使用+ 在裤子短的位置
mysql 不支持sql92   (+)

SQL99 是支持的
mysql 不支持 满外连接  FULL OUTER JOIN 
JOIN ON

INNER JOIN ON 内连接 INNER 可以省略
LEFT OUTER JOIN 外连接 OUTER 可以省略

SQL99 7种JOIN实现方式

union 合并查询结果 去重重复数据  列必须一样
union all 合并查询结果 不去重   效率高  最好用union all

使用IS NULL  去掉对应的中间部分

自然连接
两个连接条件  NATURAL JOIN  它回自动帮我查询两张连接表中的所有相同字段的，进行等值连接

USING
替换连接条件  当两张表的名字是一样的 里面是相同的字段名
USING(department_id)

阿里巴巴 规范 禁止超过三个表进行join操作

```

## 函数
1. 将代码进行封装，提高了代码效率，提高了维护性，提高用户对数据库的关联效率
2. SQL代码移植性比较差。

### 单行函数（可以嵌套）
一行出来一行

```sql
数值函数
ABS 绝对值
SIGN 返回符号i
PI 圆周率
CEIL 和 CEILING 天花板
FLOOR 地板
LEAST 一列最小
GREATEST 一列最大
MOD 取余
RAND 随机值 0~1
RAND（x） 随机值0~1  x值会产生相同的随机数
ROUND 四舍五入  后面的参数可以是负数，抹零
TRUNCATE（x,y）  x截取y位小数
SQRT(x) x的平方根

角度和弧度的互换
RADIANS   角度变弧度
DEGREES   弧度变角度
SIN
ASIN
COS
ACOS
TAN
ATAN
ARAN2
COT

指数和对数
pow power
exp  e的x次方  e位常数2.718128182859045
ln log
log10  log2

进制转换
BIN  二进制
HEX  16进制
OCT   8进制
CONV 机制转换  conv(x,f1,f2)


字符串函数
ASCII 第一个字符有关系
CHAR_LENGTH 字符长度
LENGTH UTF8 汉字三个字节 字节长度
CONCAT 连接字符串
CONCAT_WS 指定连接字符
INSERT 字符串的索引是从1开始的    替换 从索引位置 替换多少个
REPLACE 替换
UPPER 大写
LOWER 小写
LEFT 最左面的几个字符
RIGHT 最右面的几个字符 
LPAD 左补充 一共多少位  以什么补齐
RPAD 右补充 一共多少位  以什么补齐
TRIM 去除空格
LTRIM 左去除
RTRIM 右去除
TRIM（s1 FROM S）指定去除什么
TRIM(LEADING s1 FROM S) 去除头部的S1
TRIM(TRAILING s1 FROM S) 去除尾部的S1
REPEAT 重复n次结果
SPACE 返回几个空格
STRCMP 比较ASCII码
SUBSTR 截取字符串
LOCATE 返回首次出现的位置
ELT 返回指定位置的字符串
FIELD  返回字符串s在字符串列表中首次出现的位置
FIND_IN_SET 返回字符串s1在字符串s2出现的位置
REVERSE 反转
NULLIF 相等返回NULL，不想等返回前面的

日期函数
CURDATE() 当前时间   年月日
CURTIME() 当前时间   时分秒
NOW()   当前时间
UTC_DATE()  格林威治时间 年月日
UTC_TIME()  格林威治时间 时分秒

日期转时间戳
UNIX_TIMESTAMP(date)
UNIX_TIMESTAMP()
FROM_UNIXTIME()

年，月，日，星期，时分秒的获取
YEAR MONTH DAY
HOUR MINUTE SECOND
MONTHNAME  英文月数
DAYNAME 英文周几
WEEKDAY 第几周
QUARTER 季节
WEEK 这一年的第几周
DAYOFYEAR 这一年的多少天
DAYOFMONTH 这个月的第几天
DAYOFWEEK 周几

日期的操作函数  提取日期
EXTRACT(type from date)
type 可以是对应的类型  

时间和秒数的转换
TIME_TO_SEC()
SECT_TO_TIME()

计算日期和时间的函数
DATE_ADD(dateTIME,INTERVAL expr type) 新增时间
DATE_SUB(dateTIME,INTERVAL expr type) 减去时间
ADDTIME(time1,time2)   数字值时是秒
SUBTIME(time1,time2)   数字值时是秒
DATEDIFF(date1,date2)  间隔多少天
TIMEDIFF(time1,time2)  间隔时间
FROM_DAYS(N) 从0000年1月1日。N天以后的日期
TO_DAYS(date)  返回日期date日期距离0000年1月1日所在天数
LAST_DAY()  所在年份最后一天
MAKEDATE(year,n)  根据年和日创建时间
MAKETIME(hour,minute,second) 分解小时，分，秒。计算时间返回
PERIOD_ADD(time,n) 返回time加上n后的时间

日期的格式化和解析
DATE_FORMAT(date,fmt)   
TIME_FORMAT(time,fmt)
GET_FORMAT(date_type,format_type) 获取格式化
STR_TO_DATE(str,fmt) 
```

![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1702226252050-f799ecfe-7574-4a12-819c-30f99f3c0d8c.png)



![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1702226310501-cb8c5425-8731-4883-8d42-98abb6c71221.png)

![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1702226615440-7deca405-a522-4849-9a31-08e76824711b.png)

![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1702227555063-26b4ffb3-9e15-4cb7-98a1-fb4e732ebfe2.png)

![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1702227642841-537deee1-8e90-4410-806a-3c3823389a95.png)

![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1702227721960-bf59b782-7225-412c-a556-a0c75f2d5762.png)

![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1702228133320-34a083aa-1326-4a4f-9149-fd3d8e77f5a0.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1708500299115-0f839a05-0804-47a4-a616-6e256657c722.png)

### 聚合函数
一行出来多行



### 流程控制函数
![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1702526490028-9674fe39-59f8-4ebd-8a42-7d312edddbf0.png)

+ 第一个有些像三元表达式
+ 第4个 expr  是字段名   when 后面是常量值  起别名要在END 后



## 加密和解密的操作
![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1702529156552-04a0c933-62da-47a0-a34d-ae53c2fe99f1.png)

password ENCODE  DECODE 8.0 的版本不支持，已弃用。

![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1702529516091-5b03d7aa-3260-478d-9b62-4b87704e4060.png)![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1702529652572-943712aa-0443-4f5b-a3d2-6b9a683248c8.png)![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1702529809553-4b40f110-9fd0-423c-8527-e88ed98980dc.png)

char_length  字符多少

length 字节多少

```sql
AVG 平均值  里面是字符串是没有意义的
SUM  和   里面是字符串是没有意义的
MAX 最大  可以是字符串或者日期
MIN 最小  可以是字符串或者日期
COUNT 作用 计算指定字段在查询结果中的作用   记录数
COUNT(1) 把每一行当成1
COUNT(*)  也可以
COUNT(具体字段) 不一定对的  不计算空值的
sum 计算不考虑null值   avg 计算也不考虑null值  里面使用ifnull(字段值，0)处理

MyISAM 存储引擎  三者效率相同 O1
Innodb 存储引擎 count(*) = count(1) > count(字段)  效率高是因为使用了二级索引 找key_len 小的

GROUP BY
SELECT 中出现一下的非组函数的字段必须声明在GROUP BY 中，反之，GROUP by 中声名的字段可以不出现在SELECT中



WITH ROLLUP 整体的分组  慎重和order by 使用 会报错

如何过滤条件中使用了聚合函数，则必须使用having来替换where，否则报错

having 必须声名在group by 的后面

开发中使用的前提是sql中，使用了group by，针对分组进行过滤的

当过滤条件中有聚合函数时候，则此过滤条件必须声名在HAVING中。
没有聚合函数声名在where中，where效率高于having

```

![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1702800945058-dd000dff-5563-4379-923b-6dcabbf78ef0.png)

## SQL执行原理
![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1702801660795-99333ba3-a35b-473c-a1e8-75dbe9a383f7.png)

1. FROM 交叉连接
2. ON 过滤
3. 左外还是右外
4. WHERE
5. GROUP BY
6. HAVING
7. SELECT 列上的过滤
8. DISTINCT 去重
9. ORDER BY
10. LIMIT

每一个步骤都会产生一个虚拟表

## 子查询
谁的工资比Abel 高

![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1702827864201-b2abe253-ac22-4efd-a2fa-f34b93d74bdd.png)



```sql
SELECT last_name,salary
FROM employees
WHERE salary > (
			SELECT salary
			FROM employees
			WHERE last_name = 'Abel'
);

外查询（主查询）  内查询（子查询）

内查询先计算
子查询在括号内
放在比较条件的右侧 可读性比较好

单行子查询和多行子查询

```

分类

1. 单行子查询和多行子查询   根据查询出来的条目数去辨别
2. 内查询是否被执行多次，相关子查询和非相关子查询

相关子查询  子查询的结果是变化的

![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1702828841983-f560e4f9-8f11-4364-b733-01e5fc7ab188.png)

子查询有空值，不返回任何行

单行子查询  =  !=> < >= <=



多行子查询  in  any  some   all



any 和 some 是同一个    all和 any 经常和单行运算符一起用



聚合函数 不能嵌套   mysql 不可以   oracle 可以



子查询作为表用的时候要有别名



查询平均工资最低的部门id



![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1703000365421-344f599a-7ba2-48a8-aa9d-be63f36dab1a.png)

内查询有null值，not in 就不会有结果



关联子查询

![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1703004015527-5e1fc126-7e3a-4290-ac11-5203e3f959e2.png)![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1703004282580-317a8f20-7e20-4fc3-8c28-7fd0d171b18a.png)

结论：在SELECT 除了GROUP BY 和 LIMIT 之外其他位置，都可以声名子查询。



EXISTS 和 NOT EXISTS

![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1703005447089-93119a2f-0e54-48ee-bc3d-2edc5f51a045.png)

自连接 效率高于子查询



相关子查询 比较简单 从外往里面写





## 标识符命名规则
1. 数据库和表名不能超过30个字符，变量名限制为29个
2. 必须只能包含A-Z，a-z，0-9，_
3. 中间不能有空格
4. 数据库中表不能重名，表中字段不能重名
5. 字段没有保留字，如果要用就加上着重号
6. 表和表直接的字段名和类型要保持一致

![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1703173994897-fa1d3e65-5597-44cb-869d-4e1a39a78ae8.png)

```sql
create database if not exist 数据库名  character set 字符集
// 查看当前使用的数据库
SELECT DATABASE() FROM DUAL;
// 查看指定数据库下的表
SELECT TABLES FROM mysql;
// 查看数据库的创建信息
SHOW CREATE DATABASE 数据库名;
// 修改数据库字符集
ALTER DATABASE 数据库名 character set 字符集
可视化工具 改库名都是创建一个新的库，把数据复制过去，成本比较高
// 删除数据库
DROP DATABASE IF EXISTS 数据库名
```

![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1703175264471-2451e662-6d4a-4bdf-93f7-7dcf724da73a.png)![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1703175391001-1d82e6b8-0091-4bff-bbf9-152120621fec.png)

```sql
CREATE TABLE IF NOT EXIST 表名(
字段名  字段类型  字段长度
)

desc 表名   // 查看表结构
show create table 表名 // 查看表结构

// 数据也会带过来 需要用where 1 =2 过滤数据  别名也可以用就是字段名  也可以关联表
create table 表名
as
select 字段名
FROM 表名 

```

![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1703175967153-a4279748-6110-451d-a579-b0618927aea6.png)![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1703176149732-a3af5ebf-5520-4819-8819-b1cc6e3ad2da.png)

```sql
// 修改表  alter table
1， 添加字段  默认添加到表的最后一个字段 
ALTER TABLE 表名  ADD 字段名 字段类型  [FIRST|AFTER 字段名]
2. 修改字段 数据类型 长度
ALTER TABLE 表名 MODIFY 字段名 字段类型 [default 'aaa']
3. 重命名一个字段 有MODIFY行为
ALTER TABLE 表名 CHANGE  字段名 字段类型 新字段名 字段类型 
4. 删除一个字段
ALTER TABLE 表名 DROP COLUMN 字段名
// 重命名表
RENAME TABLE 原数据库名 TO 新数据库名
ALTER TABLE 原数据库名 RENAME TO 新数据库名
// 删除表 不能回滚  日志文件 触发器 备份 释放表空间
DROP TABLE IF EXISTS 表名
// 清空表 清空数据，表结构还在
TRUNCATE TABLE 表名
```

## COMMIT和ROLLBACK
commit  提交数据  一旦执行，数据永久保存  不可以回滚

rollback  可以实现数据的回滚，回滚到最近一次commit

```sql
// 相同点  都是对数据的删除，同时保留表结构
// 不同点
TRUNCATE 数据不可以回滚，表数据全部清除
DELETE 可以全部清除，数据可以回滚

// DDL 和 DML 的说明
DDL 一旦执行，就不可以回滚，自动COMMIT 不受我们的SET autocommit = false操作影响
DML 默认情况下，一旦执行，也不可以回滚，通过修改参数可以回滚，如在执行DML之前
SET autocommit = false 就可以回滚
// DELETE
COMMIT;
SET autocommit = false;
DELETE FROM 表名
ROLLBACK;
// TRUNCATE
COMMIT;
SET autocommit = false;
TRUNCATE TABLE 表名
ROLLBACK;
```



mysql8.0 的原子性  要么全部成功，要么不成功   区别于5.7   体现在进行DDL 操作的时候，执行成功的效果



## DML 添加数据
```sql
INSERT INTO emp1 values (字段值,字段值); // 一定要知道声名字段的先后顺序
INSERT INTO emp1(字段名) VALUES(字段值); // 推荐这种  里面的值可以少，但是要一一对应
可以使用逗号同时插入记录  插入多条记录  效率高 比单行一条一条添加快

// 将查询结果插入到表中
INSERT INTO emp1(字段名)
SELECT 查询   查询的字段名要与添加到的字段一一对应  数据范围不一样可能会报错 数据长度不够的风险
```

### 更新/删除数据
```sql
update 表名 set ... where ...
可以实现批量修改

修改同一数据的多个字段 逗号分割   可能存在不成功的情况 收到约束影响

DELETE FROM ... WHERE ...  删除也可能存在不成功的情况，表之间存在外键

回滚可以使用set autocommit = FALSE
```

### MYSQL 8.0 计算列
```sql
CREATE TABLE test(
  a INT,
  b INT,
  c INT GENERATED ALWAYS AS (a+b) VIRTUAL
)
```

### 去掉字符串中间的空格
```sql
replace(字段值,' ','')
```

### 插入/删除新方法
```sql
insert into  表名
select 字段值... union all

DELETE 表1别名，表2别名
FROM 表1 JOIN 表2 ON 条件 WHERE 过滤条件
```

## 数据类型
![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1703175264471-2451e662-6d4a-4bdf-93f7-7dcf724da73a.png?x-oss-process=image%2Fresize%2Cw_1125%2Climit_0)    1. 创建数据库，表和字段都可以知道字符集 character set 'utf8'

![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1703695330489-739ec2d8-eef0-4c08-ba06-bec7e38953d0.png)'![](https://cdn.nlark.com/yuque/0/2023/png/33708367/1703835292378-14715472-906f-44be-b58b-10a9c79491dd.png)

ZEROFILL 零填充

INT(5)  显示宽度  配合 ZEROFILL 使用 当显示宽度不足五位用0填充  自动加上unsigned



8.0.17 以后不要使用显示宽度了



TINYINT   设置取值范围的时候

SMALLINT  统计工厂的固定资产库存数量

MEDIUMINT  客流量

INT  商品编号

BIGINT 双十一的交易量，大型门户网站点击量



存储空间和可靠性

确保数据不会超过取值范围

### 浮点类型
REAL 默认就是double，可以改成float

REAL_AS_FLOAT

浮点数格式：符号，尾数，阶码

非标准写法 FLOAT（M,D）M是标度，D是精度

UNSIGNED 只有一半的

超过整数，报错

超过小数，四舍五入

建议不要使用等号去判断是否相等。

场景：计算化学，分子建模，流体动力学

### 定点数
decimal 最大的取值范围和DOUBLE 一样（注意不是有效取值范围）

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1704850413476-9849076a-5019-431f-a0a8-e5104913511f.png)

底层使用字符串方式去存储

默认decimal (10,0)

场景：金额计算



### 位类型
BIT  2进制  默认是1位

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1704853334879-26b22a4a-44eb-4493-acd1-269dd3f194ab.png)

BIN（）  HEX（） 读取方式 2进制16进制

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1704853718732-e3771023-7086-4408-9818-0880bf175229.png)

10进制



### 时间类型
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1704855778317-1794b11b-1a81-4fe2-bd53-1c2d257906e9.png)

year

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1704856353769-deadcf43-24fe-4d2a-8aa5-8e00526e09d6.png)

TIME

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1704861472832-e7779221-d4c5-41c3-861e-c4d8d1c0afdf.png)

DATETIME 和 TIMESTAMP 区别

```sql
set time_zone='+9:00'
```

TIMESTAMP 存储空间小，时间范围小

TIMESTAMP 底层是毫秒值

两个日期比较大小或日期计算时，TIMESTAMP更快

TIMESTAMP和时区有关，用户所处不同时区显示不同结果

DATETIME只能反应插入时候的时区



<font style="color:#DF2A3F;">DATETIME 使用最多</font>

<font style="color:#DF2A3F;">注册时间，商品发布时间不建议使用，最好使用时间戳，因为DATETIME不方便计算。  
</font>

### 字符串类型
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1704936681037-f3e2fe97-1a7e-4a13-8b4f-acff33c8b1d4.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1704936702045-98de466a-72cc-4d70-b1c9-fa3f93dd0afb.png)

char 默认1   右侧填充空格

varchar 必须指定 M  长度

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1704937305466-ad17187c-6508-4d27-a21c-a650426985f6.png)

存储很短 用char

固定长度 用char

十分频繁的改字段  用char

存储引擎

MYISAM  建议用char 长度固定，静态化，数据检索更快

MEMORY 不管定义什么都是char

INNODB 推荐使用varchar  主要影响因素是数据行存储的总量



### TEXT 类型
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1704937978038-3bf03ec0-ba1d-4fbd-a531-6e7da82d7e69.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1704938471115-94978aff-70ce-428f-b709-ed3b2d1edbc1.png)

### ENUM类型
忽略大小写

可以使用索引进行调用

可以添加null，没有限制非空

只能选一个



### SET类型
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1704939048530-069b9f32-0366-48d7-bec7-dd2d341447c4.png)

可以写多个，不可以写不存在的，多个会去重



### 二进制字符串
BINARY 和 VARBINARY 和 char VARCHAR类似   VARBINARY 必须指定长度   BINARY 不指明是1

BIOB 二进制大对象  图片，音频，视频

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1705134934691-dd87cdbd-0037-488c-922d-0a68c1c3590d.png)

开发中很少把文件存到数据库，都是存路径

OPTIMIZETABLE 功能对表进行碎片整理，空洞

前缀索引 少去检索大文本

分离单独表去做，减少主表碎片



### JSON类型
数据交互格式

js  JSON可以将JS对象表示一组数据转换成字符串。 js -> $.字段名

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1705136750679-261ba031-5a37-4f44-a805-c15b330f6d9c.png)

### 空间类型
单值和集合类型 用的比较少  地理特征的生成存储和分析



### 数据类型小结 可靠性
整数 INT

小数 DECIMAL

日期和时间 DATETIME

非负数 UNSIGNED

小数 超出 分开存储

定长用char

长度不超过5000用VARCHAR，超出就用text

## 为什么需要约束
1. 保证数据的完整性

### 考虑方面
+ 实体完整性
+ 域完整性
+ 引用完整性
+ 用户自定义完整性

## 约束
创建表时规定的约束，表创建之后通过语句规定约束   表级的强制规定

```sql
CREATE TABLE 添加约束
ALTER TABLE 增加约束/删除约束
```

### 约束的分类
+ 跟进约束数据列的限制
1. 单列约束: 每个约束只约束一列
2. 多列约束: 每个约束可约束多列数据
+ 约束的作用
1. 列级约束： 只能作用一个列跟在列的后面
2. 表级约束：可以作用在多个列上，不与列一起，而是单独定义

### 约束的种类
+ NOT NULL 非空约束
+ UNIQUE 唯一约束
+ PRIMARY  主键约束
+ FOREIGN KEY 外键约束
+ CHECK 检查约束
+ DEFAULT 默认值约束

```sql
SELECT * FROM information_schema.table_constraints
where table_name = 'employees'
```

#### 非空约束
NOT NULL   默认都可以为NULL  列级约束

#### 唯一约束
```plain
UNIQUE KEY unique_key (column1, column2) 夹在创建表里面
UNIQUE key 单个唯一约束
UNIQUE key(...,...) 复核唯一约束  会自动添加索引
```

#### 删除约束
```plain
删除唯一索引，删除指定唯一索引名
单列就是列名，多列可以是第一个字段名
ALTER TABLE USER DROP INDEX uk_name_pwd
// 查看表索引
show index from 表名称
```

#### 主键约束
```plain
primary key 标识表中的一条记录  唯一加非空
一个表只能有一个主键约束
主键名 primary
primary key  (column1, column2) 要求均不为空NULL
ALTER TABLE 表名	ADD primary key （字段名）
ALTER TABLE 表名 DROP primary key  删除主键
```

#### 自增列 AUTO_INCREMENT
```plain
一个表里面只能有一个自增长列
必须是整型的
列必须有主键约束或者唯一约束
当我们向主键的字段，添加0或者null 会自动往上添加

ALTER TABLE 表名 modify 主键名 主键类型 AUTO_INCREMENT
// 删除
ALTER TABLE 表名 modify 主键名 主键类 
MYSQL 5.7 
AUTO_INCREMENT 内存中维护一个值 重启就会重新计算

MYSQL 8.0
自增主键的持久化到重做日志中，每次计数器变化都会写入重做日志， redo日志读取记录
```

#### FOREIGN KEY 约束
限制某个表的某个字段的引用完整性

```plain
关联字段在主表，必须有主键约束或者唯一约束
默认不是列名，自动生成的
创建 先主后从
删除 先从后主
名可以不一样，数据类型要一样
外键约束也会建索引，只不过是普通索引
删除约束，要手动删除索引
// 表级约束
CONSTRAINT 约束名 FOREIGN KEY （字段名） REFERENCES 主表（主表字段）
ALTER TABLE 表名 ADD CONSTRAINT 约束名 FOREIGN KEY （字段名） REFERENCES 主表（主表字段）
```

##### 约束等级
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1708496049521-8e79cfec-a031-418b-8150-09bf1abe31c2.png)

```plain
ON UPDATE CASCADE ON DELETE SET NULL

// 删除外键约束
ALTER TABLE 从表名 DROP FOREIGN KEY 外键的约束名
// 删除外键索引
ALTER TABLE 从表名 DROP INDEX 外键的约束名
```

外键约束有成本，因为外键约束的系统开销而变得非常慢

<font style="color:#DF2A3F;">阿里开发规范</font>

不得使用外键和级联，一切外键必须在应用层面去解决

外键 适合单机，低并发

不适合 分布式和高并发集群 级联更新强阻塞，更新风暴，影响插入速度

#### CHECK 约束  5.7不支持
检查某个字段的值，是符合要求

```plain
check(salary > 2000)
```

#### DEFAULT 约束
默认值

## 面试题
1. not null default  '' 或 default 0  不想让表中出现默认值
2. 效率不高，影响提高索引的效果。
3.  AUTO_INCREMENT跟第一条有关
4. 外键约束不能跨引擎使用

## 数据库对象
1. 数据字典：系统表，存放数据库信息的表
2. 存储过程，没有返回值
3. 存储函数，有返回值，用户自定义
4. 触发器，事件的监听器，比如数据备份

## 视图（虚拟表）
更改视图，原表中的数据也会更改，创建视图的根据表叫<font style="color:#DF2A3F;">基表</font>

<font style="color:#000000;">存储起来的select 语句</font>

<font style="color:#000000;">小型项目 不推荐使用   控制数据访问</font>

```plain
create view 视图名 as select 语句
show tables;// 查看表和视图
desc 视图名
show table status like '视图名'
show create view vu_emp1
// 删除
drop view 视图名
```

可以利用视图对数据进行格式化

不能更新视图里面带聚合函数的字段

只有存在1对1的关系的数据才能更新

看表约束

JOIN 了  不支持delete ，insert

主要是方便查询使用的，不建议更新，有可能会失败

<font style="color:#DF2A3F;">操作简单</font>

<font style="color:#DF2A3F;">减少数据冗余</font>

<font style="color:#DF2A3F;">数据安全</font>

<font style="color:#DF2A3F;">灵活多变的需求</font>

<font style="color:#DF2A3F;">分解复杂的查询逻辑</font>

<font style="color:#DF2A3F;">视图和表息息相关，需要维护，可读性不好</font>

## 触发器
1. 原子性 创建一个触发器，商品信息插入自动触发插入库存数据插入
2. 5.0 支持触发器  由事件（行为）触发  增删改 触发

```sql
CREATE TRIGGER 触发器名称
{BEFORE | AFTER }{INSERT | UPDATE | DELETE } ON 表面
FOR EACH ROW
触发器执行语句柄
单条/多条  都可以  复合语句块BEGIN END
```

```sql
NEW 关键字  新插入的数据
SIGNAL SQLSTATE 'HY000' SET MESSAGE_TEXT = '报错信息'
OLD 关键字 老数据
```

```sql
SHOW TRIGGERS;
```

```sql
SHOW CREATE TRIGGER 触发器名;
```

```shell
SELECT * FROM information_schema.TRIGGERS
```

```shell
DROP TRIGGER IF EXISTS 触发器名
```

### 优点：数据完整性，记录日志，数据合法性进行校验
### 缺点：可读性差，相关数据的变更可能会导致出错
外键不会触发触发器，比如删除父亲，影响儿子
## 存储过程
1. 参数类型  IN  参数 OUT  返回  INOUT

```shell
CREATE PROCEDURE 存储过程名(IN | OUT | INOUT 参数名  参数类型)
[characteristics] 
BEGIN  一条可以省略


END
```

characteristics

1. LANGUAGE SQL   执行体是SQL
2. NOT  DETRMINISTIC 是否确定执行的结果  随机数
3. CONTAINS SQL  包含SQL    NO SQL 没有SQL   READS SQL DATA  包含读数据的SQL    MODIFIES  SQL DATA  包含写数据的SQL
4. SQL SECURITY  {DEFINER | INVOKER}  DEFINER 默认有访问权限的用户可以用  INVOKER 创建者和定义者可以用
5. COMMENT 'String'    注释信息

DELIMITER  指定什么什么结束  $

DELIMITER ;  改回去



### 优点
1. 存储过程可以一次编译多次使用
2. 可以减少开发工作量
3. 连接一次即可，良好的封装性
4. 安全性比较强
5. 可以减少网络的数据传输量

### 缺点
1. 可移植性差 不能跨库移植
2. 调试困难
3. 存储过程的版本管理很困难
4. 它不适合高并发的场景

## 创建存储过程
```shell
 CREATE DATABASE dbtest15;

 USE dbtest15;

 CREATE TABLE employees
 AS 
 SELECT *
 FROM atguigugb.`employees`

  CREATE TABLE departments
 AS 
 SELECT *
 FROM atguigugb.`departments`
```

```sql
DELIMITER  $

CREATE PROCEDURE select_all_data()
BEGIN
		SELECT * FROM employees;
END $

DELIMITER ;
```

调用  CALL select_all_data()

```sql
DELIMITER  $
CREATE PROCEDURE avg_employee_salary()
BEGIN 
SELECT AVG(salary) FROM employees;
END $
DELIMITER ;
```

```sql
DELIMITER  $
CREATE PROCEDURE show_min_salary(OUT ms   DOUBLE)
BEGIN 
SELECT MIN(salary) INTO ms
FROM employees;
END $
DELIMITER ;

CALL show_min_salary(@ms)

SELECT @ms;
```

```sql
DELIMITER  $
CREATE PROCEDURE show_someone_salary(IN empname VARCHAR(20))
BEGIN 
SELECT salary
FROM employees
WHERE last_name = empname;
END $
DELIMITER ;

CALL show_someone_salary('Abel')

SET @empname := 'Abel';

CALL show_someone_salary(@empname);
```

@@系统变量       @ 用户自定义变量     :=  赋值符号

```sql
DELIMITER  $
CREATE PROCEDURE show_someone_salary2(IN empname VARCHAR(20),OUT empsalary decimal(10,2))
BEGIN 
SELECT salary INTO empsalary
FROM employees
WHERE last_name = empname;
END $
DELIMITER ;


SET @empname := 'Abel';
CALL show_someone_salary2(@empname,@empsalary);

SELECT @empsalary;
```

INOUT empname VARCHAR(25)   先后改变变量的值

调试非常麻烦，逐步排错。



## 存储函数的使用
```shell
CREATE FUNCTION 函数名(参数名 参数类型)
RETURNS 返回值类型
[characteristics] 
BEGIN

函数体 肯定有return 语句

END

SEKECT 函数名（参数列表）
```

只有IN类型 （可省略不写）

```shell
DELIMITER  $
CREATE FUNCTION email_by_name()
RETURNS VARCHAR(25)
DETERMINISTIC
CONTAINS SQL
READS SQL DATA
BEGIN

RETURN(SELECT email FROM employees WHERE last_name = 'Abel');

END $

DELIMITER ;
```

特性不加会报错

```shell
SET GLOBAL log_bin_trust_function_creators = 1
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1709613629090-471f8775-591a-4835-aa85-1311c1230134.png)

## 存储过程和函数的查看、修改、删除
```shell
SHOW CREATE PROCEDURE 存储过程名
SHOW CREATE FUNCTION 函数名

// 查看存储过程/函数的状态  
SHOW PROCEDURE STATUS [LIKE 'show_max_salary']
SHOW FUNCTION STATUS [LIKE 'show_max_salary']

// 从information_schema.Routines表中查看存储过程和函数信息
SELECT * FROM information_schema.Routines
WHERE ROUTINE_NAME = '存储过程或者函数名' AND ROUTINE_TYPE = 'FUNCTION' // FUNCTION 区分大小写
```

```shell
ALTER FUNCTION|PROCEDURE 存储过程或者函数名 [characteristics]
```

```shell
DROP FUNCTION IF EXISTS 函数名
DROP PROCEDURE IF EXISTS 函数名
```

1.  INTO  后面不要加括号 逗号拼接
2. date_diff  相隔天数
3. SET 给变量赋值

## 变量
存储查询或计算的中间结果，或者输出最终的结果数据。

系统变量和用户自定义变量

### 系统变量(重启失效)
服务器，编译MySQL时参数，配置文件

[查看系统变量](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)

全局 global   max_connections 最大连接数

会话 session  默认

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1709776572883-a26b7caa-239d-4260-88d1-c12c7125448b.png)



character_set_client  设置字符集  变量的作用域只能时会话级别的还是全局级别的

pseudo_thread_id  标记当前会话的Mysql连接id

```shell
// 查看所有或部分系统变量
SHOW GLOBAL VARIABLES;
// 查看会话系统变量
SHOW SESSION VARIABLES; 或者 SHOW VARIABLES;

SHOW GLOBAL VARIABLES LIKE '';

SHOW GLOBAL SESSION LIKE '';

// 查看指定的全局系统变量
SELECT @@global.max_connections;
// 查看指定的会话系统变量
SELECT @@session.max_connections;

// 修改系统变量  配置文件my.ini   
SET @@global.max_connections = 161;//重启失效
SET GLOBAL max_connections = 171;

// 会话系统变量
SET @@session.character_set_client = 'gbk';
SET SESSION character_set_client = 'gbk';
```

### 用户变量
会话用户变量和局部变量

+ 会话用户变量  当前连接生效  @ 开头
+ 局部变量        存储过程和函数

```shell
// 定义和赋值
SET @用户变量 = 值;
SET @用户变量 ：= 值;
SELECT @用户变量 := 表达式[FROM 等子句]
SELECT 表达式 INTO @用户变量 [FROM 等子句]

// 查看
SELECT @用户变量;

// 局部变量 定义 DECLARE 声名 DECLARE 必须在BEGIN 中的首行,顺序往下排
DECLARE 变量名 类型 [default值] 可以合并
DECLARE a,b INT DEFAULT 0;

// 使用差不多
SET 变量名 = 值;
SET 变量名 ：= 值;
 
SELECT 表达式 INTO 变量名 [FROM 等子句]

// 使用
SELECT a,b,c;
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1709880343026-477058ac-f7e1-4af7-bfcd-4aa9efb04443.png)

## 程序出错的处理机制
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1710816698802-6d4bc893-d097-4cdc-a26a-e4c683c1a961.png)

1048 是MySQL_error_code   数值类型错误码

23000 是sqlstate_value 是长度为5的字符串类型错误代码

```yaml
DECLARE 错误名称 CONDITION FOR 错误码（错误条件）
DECLARE Field_Not_Be_NULL CONDITION FOR 1048;
DECLARE Field_Not_Be_NULL CONDITION FOR SQLSTATE '23000';
```

```yaml
DECLARE 处理方式 HANDLER FOR 错误类型 处理语句
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1710817987972-766a231e-23e1-4fc3-ab8f-d96d53aad5de.png)

## 条件判断语句
```shell
IF 表达式1 THEN 操作1
[ELSEIF 表达式2 THEN 操作2]
[ELSE 操作N] 这个可以没有
END IF
```

```shell
CASE 表达式
WHEN 值1 THEN 结果1或语句1(如果是语句需要加分号)
WHEN 值2 THEN 结果2或语句2(如果是语句需要加分号)

ELSE  结果n或语句n(如果是语句需要加分号)
END [case] (如果是放在begin end中需要加上case，如果放在select后面不需要)
```

```shell
CASE 表达式
WHEN 条件1 THEN 结果1或语句1(如果是语句需要加分号)
WHEN 条件2 THEN 结果2或语句2(如果是语句需要加分号)

ELSE  结果n或语句n(如果是语句需要加分号)
END [case] (如果是放在begin end中需要加上case，如果放在select后面不需要)
```

```sql
# LEAVE 跳出循环 [标签名]
标签名 LOOP 
循环执行的语句
END LOOP 标签名

call 存储函数名(@参数名);
```

```sql
标签名 WHILE 循环条件 DO
循环执行的语句
END WHILE [标签名]

1. 初始化条件
2. 循环条件
3. 循环体
4. 迭代条件

DROP 存储过程名 后面没有括号

循环条件 TRUE 不做限制
```

```sql
标签名 REPEAT 
循环执行的语句
UNTIL 结束循环的条件表达式
END REPEAT [标签名]

类似do while 先执行一次  至少执行一次
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1710949514702-68b95308-0525-437f-9a0e-deaecd93e929.png)

```shell
LEAVE 标签名  
相当于break
```

```shell
ITERATE 标签名
相当于continue; 
```

## 游标
随意定位到某一条记录，面向过程的能力，指针，变量声明的后面

```shell
DECLARE 游标名 CURSOR FOR 查询语句
```

```shell
DECLARE 游标名 CURSOR IS 查询语句
```

```shell
OPEN 游标名
```

```shell
FETCH 游标名 INTO 变量名
```

```shell
CLOSE 游标名
```

会加锁，消耗系统资源。

## MySQL8.0 全局变量的持久化
set persist 设置全局变量

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1711444372722-a23033b1-3e33-44a7-97a7-ad25d1630778.png)

## 窗口函数
1. 更简单支持NoSQL,不依赖chema
2. 隐藏索引/降序索引
3. JSON支持更完善 增加了聚合函数
4. 安全和账户管理  sha2 插件
5. Innodb 优化
6. 事务数据字典
7. 原子数据定义语句
8. 资源管理 分配合理
9. 字符集 utf8mb4 之前是latin1
10. 优化器增强
11. 公用表表达式  替换子查询
12. 窗口函数
13. 正则表达式 优化
14. 内部临时表
15. 日志记录 过滤和写入
16. 备份锁
17. 增强Mysql复制  二进制节省空间
18. 去掉查询缓存  命中率太低了
19. 只保留 AES_ENCRYPT 和 AES_DECRYPT
20. \N 不再是NULL

## 窗口函数（将结果置于每一条数据记录中）
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1711696711952-3a779fa4-2348-49ea-91ca-3bd5004a09a1.png)

```sql
CREATE TEMPORARY TABLE 表名  后面是查询语句
```

<font style="color:#DF2A3F;">分组统计，对每一天记录进行计算。   对分区数据进行统计和分析  不改变原来的数据</font>

1. 静态窗口：窗口大小固定，不会随着记录的不同而不同
2. 动态窗口:  窗口大小不固定，随着记录的不同而不同

```sql
函数 OVER(PARTITION BY 字段名 ORDER BY 字段名 ASE|DESC)
函数 OVER 窗口名 WINDOW 窗口名 AS (PARTITION BY 字段名 ORDER BY 字段名 ASE|DESC)  简洁写法
```

OVER 窗口范围

PARTITION BY 分组字段 可以省略

ORDER BY  排序字段

FRAME 子句 定义规则，滑动窗口

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1711697480212-21807301-0f7e-41fc-af94-8cb572371013.png)

+ ROW_NUMBER()  行号
+ RANK() 排序字段一样 行号则一样，跳过重复编号
+ DENSE_RANK() 排序字段一样 行号则一样，不跳过重复编号
+ PERCENT_RANK() 等级值百分比  rank-1/rows-1  rank 序号数  rows 总记录数
+ CUME_DIST()  函数  小于或者等于的比例
+ LAG（expr，n）前n个值   LAG（price，1）
+ LEAD（expr，n）后n行值
+ FIRST_VALUE(expr)  第一个值
+ lAST_VALUE(expr) 最后一个值
+ NTH_VALUE(expr)  指定第一个的值
+ NTILE（n）分几组  尽量均分，均分不了，前面多

## 公用表表达式
可以复用的子查询

```sql
WITH CTE名称
AS (子查询)
SELECT | DELETE | UPDATE 语句
```

```sql
WITH RECURSIVE
AS (子查询)
SELECT | DELETE | UPDATE 语句
```

替代子查询，多次被引用

## mysql优化
## suo'yisuoyi克隆虚拟机
1. 修改mac地址  右键虚拟机，找到mac地址点生成
2. 主机名

```sql
vim /etc/hostname
reboot # 重启虚拟机
```

3. ip地址  动态ip 不需要修改

```sql
vim /etc/sysconfig/network-scripts/ifcfg-ens33
systemctl restart network
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1711951126435-414b6a4a-791b-4fc6-9e66-ca190ac4a2ed.png)

4. UUID 调整

## centos6 和 centos7 的区别
1. 6是iptables   7是firewalld
2. 启动服务 6是service   7是systemctl

## mysql卸载的一些命令
rpm安装

```sql
rpm -qa | grep -i mysql # -i 忽略大小写
sytemctl status mysqld.service # 查看运行状态
sytemctl stop mysqld.service # 停止运行状态
yum remove 查看到的包名
find / -name mysql # 全局搜索mysql
最后删除etc下面的my.cnf
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712051120057-0b915df7-af5d-4a8b-8a48-6b84bce3be56.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712051341148-6e61578e-3d3e-4f42-9498-cf08a1866a89.png)\

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712051432028-264f670a-485a-4b95-a167-14247236a23c.png) 有依赖顺序

```sql
rpm -ivh  i 是install  v 是提示信息  h hash 进度条
```

```sql
cat /var/log/mysqld.log
systemctl enable mysqld # 开机自启
alter user 'root'@'localhost' identified by 'abc123' #8.0
```

```sql
ALTER USER 'root'@'%' INDENTIFIED WITH mysql_native_password By '新密码'
```

mysql8.0 校验密码插件

```sql
install plugin validate_password SONAME 'validate_password.so'
```

## 字符集（CHARSET）
```sql
show variables like '%character%';
character_set_server=utf8  # 设置字符集 在my.cnf
show create table 表名
表的字符集都和数据库保持一致
alter database dbtest1 character set 'utf8'   数据库字符集修改
alter table 表名 convert to character set 'utf8'  表字符集修改
保证数据是可改的
```

1. 服务器级别
2. 数据库级别
3. 表级别
4. 列级别

uft8 3个字节   utf8mb4  4个字节

## 比较规则（COLLATE）
```sql
SHOW CHARSET;
```

比较大小，排序操作

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712218783325-2f1f6715-22b5-48dd-890c-718ab0e6ff13.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712218834947-6583fb64-c739-4e95-8e27-8e1ecb2edf0c.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712219064419-051af4b5-da5f-4610-8678-3957c54f4e9e.png)

```sql
show table status from 表名 
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712219307702-55fe04e1-0e8c-4794-be39-99dc52d50b3a.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712219419101-0d1d577b-8b29-450d-b34f-96687310d2a3.png)

只要保证发送的和client 一样   返回的和results 一样就行

```sql
set names utf8; # 三个都设置成一样的
[client]
default-character-set=utf8 # 配置文件里面
```

## SQL大小写规范
windows系统默认大小写不敏感

linux系统默认大小写敏感

```sql
show variables like '%lower_case_table_name%';
0 大小写敏感  1大小写不敏感   2 只有查找是小写
```

1. 数据库名，表名，表的别名，变量名区分
2. 关键字和函数不区分
3. 列和列的别名不区分

```sql
lower_case_table_name=1
```

mysql 8 要先删除数据/var/lib/mysql

### 建议
1. 关键字，函数名大写
2. 数据库名，表名，表别名，字段名，字段别名小写
3. SQL语句分号结束

## sql_mode 合理设置
sql语法，数据验证检查

5.7 宽松模式

8.0 严格模式 不允许零日期 0000-00-00 00:00:00

```sql
select @@session.sql_mode;

SET SESSION sql_mode = ''; # 清空

```

临时设置和永久设置   在my.ini

```sql
sql_mode=ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
```

## MYSQL数据目录
表ibd 格式

bin目录 可执行文件

linux 下不一样

1. 数据目录  /var/lib/mysql

```sql
show variables like 'datadir';
```

2. 相关命令 /usr/bin 或者 /usr/sbin  客户端程序和服务端程序的命令
3. 配置文件 /usr/share/mysql-8.0 或 /etc/my.cnf
4. 存储引擎 把表存在磁盘上

### 默认数据库
1. mysql 用户账户和权限信息
2. information_schema  维护其他数据库的信息  表，视图，触发器，列，索引
3. performance_schema 服务的各类性能指标
4. sys 监控mysql性能，视图描述



### 5.5.7~5.6.8 表数据
1. ibdata1 系统表空间  或者 ibd 独立表空间
2. db.opt 是字符集或者关联关系   frm 表结构信息

```sql
[server]
innodb_file_per_table=0   0系统表空间  1 独立表空间
```

### 8.0 表数据
1. 表结构和表数据合一  只有ibd 方便关联

证明：ibd2sdi 工具

```sql
ibd2sdi --dump-file=文件.txt 文件.ibd
```

视图只有frm

### 5.7 MyISAM
1. frm  MYD MYI  数据和索引分开存储

### 8.0 MyISAM
1. sdi MYD MYI  数据和索引分开存储

## 用户与权限关联
root用户创建普通用户，保证安全性。

```sql
mysql -h 主机地址 -P 3306 -p 密码 数据库 -e "sql语句"
```

```sql
create user '用户名' identified by '密码';
user 和 host 作为联合主键
权限有限
update user set user = '用户名' where user = '用户名';
flush privileges;
drop user '用户名'; # 不需要flush
@ 用于指定host的用户
不推荐使用delete，容易有残留
```

## 密码
```sql
SET PASSWORD = PASSWORD('123456'); # 8.0 不支持
```

```sql
alter user user() identified by '新密码';
SET PASSWORD = '新密码';
alter user '用户名'@'host' identified by '新密码'; # DDL操作
SET PASSWORD FOR '用户名'@'host'= '新密码';
```

8.0

1. 密码过期

```sql
ALTER USER user PASSWORD EXPIRE; # 过期能登录，不能查询
# 配置文件
default_password_lifetime = 0  不过期  N单位天
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712477060525-9ae30b68-2a65-4ed6-9078-f71f24e3b4ac.png)

2. 密码重用设置

数量和时间指定

```sql
SET PERSIST password_history = 6; # 6次
SET PERSIST password_reuse_interval = 365;  一年
```

3. 密码强度评估

## 权限管理
分内的事  创建的用户没有给别人赋予权限的能力 如需要 添加WITH GRANT OPTION

权限：表，列，过程

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712477453001-b1ecb9a5-1541-4de8-b019-dafa9891bb56.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712477472382-b489f173-bc93-48b9-bdb2-bc7330c0d55d.png)

授予权限2种

1. 授予角色权限，再授予角色
2. 直接授予用户

```sql
grant select,update on 数据库名.* to '用户名'@'host';
grant delete on 数据库名.* to '用户名'@'host'; 权限叠加
grant all privileges on *.* to '用户名'@'host'; # 所有权限
show grants;
show grants for '用户名'@'host';
REVOKE 权限 ON 数据库名.* FROM '用户名'@'host';
```

横向 能看见哪个表

纵向  能操作哪个表

### 权限表
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712541703043-aff9074c-6686-47c9-91d4-4f6555e6ec0c.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712541824684-a2a4f6c4-1eca-4f7c-90cc-073101d6ed14.png)

## 角色管理（mysql8.0）
```sql
create ROLE '角色名'@'%' 默认为%;
GRANT 权限 ON 数据库名.* to '角色名';
GRANT all privileges ON 数据库名.* to '角色名';
SHOW GRANTS for '角色名';
REVOKE 权限 ON 数据库名.* FROM '角色名';
DROP ROLE '角色名';

GRANT '角色名' TO '用户名'; # 需要激活
SELECT CURRENT_ROLE(); # 查看
SET default role '角色名' TO '用户名'; # 激活 需要退出

SET GLOBAL activate_all_roles_on_login=ON # 设置所有角色登陆自动激活

REVOKE '角色名' FROM '用户名'; # 回收角色，需要退出

# 强制角色 不能回收或者删除
[mysqld]
mandatory_roles = '角色名'
```

## 配置文件
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712559273296-f1f675aa-7239-40d5-a600-9beee2ef806a.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712559283785-8cc95848-f476-48f8-a2c8-89c9ec26d582.png)

最后声明生效，如果配置一样，命令行大于启动命令

## 逻辑架构
1. 服务端程序使用mysqld

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712559667881-77d21c87-3e7f-4bab-a7a9-9a647decc2cb.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712560575732-de53e24b-9f31-4c97-8ce4-3ca5ff2011f6.png)

连接池分TCP连接池和线程连接池，TCP连接池控制连接数，线程连接池用来做认证和授权，长连接模式复用TCP连接

解析器，生成语法树

优化器，生成执行计划，计算成本，选取，投影，连接

查询缓存，8.0去掉了

引擎，负责了mysql中的数据进行提取和存储，对物理服务器的底层进行操作。show engines；

## SQL执行流程
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712561444535-4eac1f70-61d9-4ebb-9519-b822e2c83bdc.png)

<font style="color:#DF2A3F;">查询缓存 </font> key-value 形式存于内存  鸡肋  命中率低  必须完全相同操作才能命中缓存。

1. now函数不缓存
2. 更新压力大，最好在静态表中，极少更新  query_cache_type=2  按需使用
3. SQL_NO_CACHE 不查询缓存

```java
show status like '%Qcache%';
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712590057771-d576e789-a43a-413a-8fbe-6230ebde495c.png)

<font style="color:#DF2A3F;">解析器 </font>  词法分析，语法分析

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712590222921-ab0b394a-48d2-4d9a-b0b3-2d5839c08b75.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712590374023-458ad564-f58e-43f8-a933-a5721b9689e3.png)

<font style="color:#DF2A3F;">优化器  </font> 确定SQL语句的执行路径  全表检索   索引检索    选择最好的执行计划

逻辑优化  等价变换

物理优化  索引 表连接方式



<font style="color:#DF2A3F;">执行器 </font>判断是否有权限   调用存储引擎API



![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712590792660-fbf594c4-05b4-455f-a090-a4f655b29511.png)

## 执行原理（区别就是有没有查询缓存）
开启profiling 默认不执行

```sql
select @@profiling;
SET @@SESSION.profiling;
SET profiling = 1;
show profiles; # 全部的
show profile profilefile; # 最近的
show profile for query 6;  # 指定某次
show profile cpu,block io for query 6; # 指定某次 cpu和iO的开销
```

## oracle SQL执行流程
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712591981146-4b012563-392b-453a-9c86-09a237aa397d.png)

缓存了执行计划，和mysql不一样，数据字典缓冲区，绑定变量来提高命中率，sql优化比较困难



Innodb存储引擎是以页为单位管理存储空间，占用内存来作为数据缓冲池，减少硬盘IO

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712592476661-1da7c885-4810-43e0-8b80-926f26f47ddf.png)

会对频次高的热数据进行加载，每次都是完整的页加载，预定去多加载前后页

### 缓冲池读取数据
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712592618377-776cfdeb-e35a-4a57-acd6-3b83c7ac2f2c.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712592736695-bd29adfd-18e2-479e-9b50-283ecc319122.png)



```sql
show variables like 'innodb_buffer_pool_size'; // 8.0 查看缓存池大小
SET global innodb innodb_buffer_pool_size = 268435456; // 设置缓存池大小
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712592962178-f4c71e86-b644-4460-b88a-9d7b0217912a.png)

```sql
show variables like 'innodb_buffer_pool_instances'; // 数据缓存池实例  多个人就会分区降低了性能
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712593069291-3c779967-baa1-469b-98f3-5d3fa3872677.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712593130306-2d621faa-d594-4427-87d7-f4efb3308ddb.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712593308858-18fd318a-3db4-4d40-845f-2a45b1535971.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712593386248-add15b4f-8bbf-4e46-9404-5872753b25cf.png)

## 存储引擎
存储引擎就是指<font style="color:#DF2A3F;">表的类型</font>，表处理器，不同存储引擎，文件的结构不一样

接收指令，对表的数据进行提取和写入

```sql
show engines; # 支持的引擎   8.0 默认innodb  XA 分布式事务  Savepoints 保存点 部分事务回滚
show @@default_storage_engine; # 查看默认的存储引擎  5.5 之后改成innodb  
SET default_storage_engine=MyISAM; # 临时修改
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712629420929-ce76c904-cf17-4592-9c03-691f5bafcf68.png) 修改配置文件

innodb 支持外键，支持事务，行级锁，崩溃恢复功能，适用于更新和删除 ，适用于巨大数据量，效率差一些，内存要求高，索引即数据，8.0都在ibd中

MyISAM 5.5 不支持外键，不支持事务，适用于新增和查询，适用于小数据量，表锁，数据统计有额外的常数存储，查询效率很高。

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712630880588-d48fd291-9f21-4dc2-984d-ef3b33f92ee9.png)

阿里巴巴，淘宝 Xtradb   性能更好 替代了innodb

<font style="color:#DF2A3F;">Archive</font> 数据存档  插入之后不能修改，只能插入和查询，支持索引，行级锁。AUTO_INCREMENT,ZLib压缩库

.ARZ文件<font style="color:#DF2A3F;">  历史记录的存储</font>

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712641872539-601ef4d4-b477-45be-9d18-123acbc5945c.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712641881869-010a27e7-a133-46cb-8899-e7d68c391acc.png)

<font style="color:#DF2A3F;">BlackHole</font> 引擎  丢弃写操作，读操作返回空，记录一个BlackHole表日志

<font style="color:#DF2A3F;">CSV</font> 引擎  以逗号分割各个数据项  数据交换机制   .csv文件，excel和文本编辑器读取

<font style="color:#DF2A3F;">Memory </font>引擎， 数据存储到内存里面，响应快，数据会丢失，长度要不可变，hash索引和B+树索引

hash索引等值比较快，范围比较慢，表的大小受到限制，目标数据小，频繁访问。丢了也无所的数据。

<font style="color:#DF2A3F;">Federated</font>引擎，访问远程表，默认是禁用的

<font style="color:#DF2A3F;">Merge</font>集合，管理多个MyISAM的表集合

<font style="color:#DF2A3F;">NDB</font>引擎，MySQL集群专用引擎，MySQL CLuster 分布式集群

## 索引
目录，页码，快速定位，二叉树 log2为底n的对数，减少IO次数

数据结构  排好序的数据结构  跟存储引擎有关 innodb是b+树，索引最多16个，长度256字节

1. 降低IO
2. 数据的唯一性
3. 加速表与表之间的连接
4. 减少查询中分组和排序的时间
5. 创建索引和维护索引耗费时间  数据量太大
6. 占磁盘空间 存储在磁盘上
7. 降低更新表的速度

先删除索引，再更新，再创建索引  小技巧



数据存储的底层是<font style="color:#DF2A3F;">数据页</font>，默认大小16KB

1. 主键有序，二分法
2. 其他列，最小记录开始依次遍历的单链表
3. 多个页，从第一页双向链表   索引应运而生

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712678093510-9e5089fb-def5-41ac-bf64-dcefb5106b65.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712677997227-9cd183f4-f537-4571-b753-9f22800dd341.png)

数据页之间是双向链表，伴随着记录移动，页分类，主键值递增

出现目录项  key是最小的主键值

目录页出现了 数据页  页目录出现了  数据页也有页目录 目的是使用二分法

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712678913064-a362643c-0f51-489a-9759-b0e48c0d7fb0.png)

目录页也可以是多个  再生成上层目录页

B+树  叶子节点  根节点  非叶子节点  树的层次越低IO次数越少![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712679627034-7f89d27c-63c4-42fa-93a1-2912ded9537a.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712679874496-9e4bb979-3c36-4f94-9bf8-04b7a8916b74.png)

compact行格式

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712677678918-bc8011f8-7e19-4661-802b-d53e9ff39c89.png)

## 聚簇索引
针对于主键构建的b+树

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712763576475-232e0030-1f42-4c47-a27f-f8847bfa7d46.png)

数据存储方式 叶子节点（完整的用户记录）  索引即数据，数据即索引  数据和索引是一个整体

页内 单项链表

页和页 之间双向链表

目录项记录的页 双向链表

不需要create index

数据访问快  排序查找和范围查找快省IO操作

主键是自增的 插入速度跟插入顺序有关  主键不可更新  二级索引需要访问两次索引查找

只能有一个聚簇索引     非空的唯一索引替代主键 隐藏列  选用有序的顺序id

## 非聚簇索引（二级索引/辅助索引）
针对于非主键构建的b+树   c2 加主键

可以有多个

找c3 回 聚簇索引 查找要进行回表

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712764129344-c80cb5df-0ee3-45b8-8f92-a4afca388f3c.png)

非聚簇索引  更新/删除/新增 效率高  聚簇索引还需要维护<font style="color:#DF2A3F;">数据行的物理顺序</font>，而非聚簇索引只需要更改索引

联合索引   两个字段进行索引 先c2再c3

注意事项

1. 根页面的位置万年不变 从上往下   下沉
2. 内节点中目录项记录是唯一的  二级索引内节点也保存了主键
3. 一个数据页最少要存两个

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712765191761-1976817e-14be-477b-b460-53cbc76eef84.png)

MyISAM 索引和数据分开存储  不排序   全是非聚簇索引   主键加数据记录地址

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712765455307-5a18672e-5f65-4a09-ae0b-8b79b5d8c565.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712765580981-e71c2880-defe-444c-a6d4-eeb586c2b8c5.png)

主键不建议过长，会导致树过长   自增主键最好

缺点

1. 空间上   16kb的数据页  存储空间大
2. 时间上  增/删/改  记录移位，页分裂，页面回收  索引从小到大的顺序

<font style="color:rgb(51, 51, 51);">InnoDB使用了多种策略来决定淘汰哪些页：</font>

1. <font style="color:rgb(51, 51, 51);">LRU（最近最少使用）列表：InnoDB维护一个LRU列表，其中包含所有当前缓冲的页。最近使用的页在LRU列表的前端，而最少使用的页在列表的尾端。当空间不足时，将尾端页淘汰。</font>
2. <font style="color:rgb(51, 51, 51);">页面脏页检查：在可用空间不足时，InnoDB还会检查LRU列表中的页面是否是脏页（已修改但未写入磁盘的页）。如果是脏页，则会优先进行检查点操作，将脏页写入磁盘，然后再进行页面淘汰。</font>
3. <font style="color:rgb(51, 51, 51);">合并插入缓冲（Change Buffer）：对于非唯一索引页，如果插入或更新不会造成页的直写（直接将改动写入磁盘），可以使用合并插入缓冲区来减少I/O操作。</font>
4. <font style="color:rgb(51, 51, 51);">自适应哈希索引：InnoDB还会利用自适应哈希索引来更快地访问频繁使用的页。</font>

<font style="color:rgb(51, 51, 51);">如果遇到页面淘汰频繁或发生错误，可能需要调整InnoDB的缓冲池大小，优化工作负载，或考虑增加服务器的物理内存。</font>

## 数据结构的合理性
磁盘IO的操作次数

### 全表遍历
最差

### Hash结构
相同的输入可以得到相同的输出

hashmap  操作是O1级别  key进行hash

从效率上是hash快

hash碰撞 产生链表

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712766730962-355d23e4-8fed-469d-8a01-78c99480a075.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712766865581-c0c8e500-3b4e-4c71-9bec-c3376ba045cc.png)

Redis核心就是hash表

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712766966231-911fad13-b443-41d8-87c2-4fde7d301774.png)

memory 等值查询用

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712767013646-9a5c1121-b8b7-4e58-8393-50e1cdc4d444.png)

8.0 默认开启

### 二叉搜索树
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712798154016-e74868bb-b695-4e7c-a979-820bc19cc099.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712798172021-4e425f39-52e7-42ca-ab99-10e189c6cdf5.png)  不太理想

### AVL树
二叉平衡搜索树，它的左右两个树的高度差不会超过1，高度较高

M叉树  高度变小

### B-树
多路平衡查找树

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712798994558-f1ba5e76-23b9-46c8-9e13-682d313f388a.png)

关键字和叶子节点的信息都放在磁盘块2

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712799877863-a54a5dba-0e06-4565-85b2-f8f2715bd52b.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712799923169-4d757ee4-dafe-427f-a264-6fb4bcd580af.png)

### B+树
多路搜索树   适合索引系统 mysql官网看见b树就是b+树

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712800320088-9d01021e-3f55-4938-b77b-2117ff4585e2.png)

<font style="color:#DF2A3F;">B+树的查询效率更稳定   b树不稳定</font>

<font style="color:#DF2A3F;">B+树的查询效率更高 B+树目录项的不存数据，更加矮胖，叉多</font>

<font style="color:#DF2A3F;">范围查找  B+树链表遍历 B树要树进行遍历</font>

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712800626898-c43c442a-d0bc-4f06-8d94-fa45b018c645.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712800661664-6e908789-a2b8-4998-800c-47ddb43b3f6a.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712800892121-53546124-392d-4127-9cb2-203287d3926b.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712800958496-2227a46e-320e-4c4b-ad2e-9938d3e20690.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712801101414-4eed210d-4d87-4250-9403-80f25d3a95e9.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712801126960-e9ed7ec9-d04c-42a0-8a43-3f4346b4143e.png)

### R树
geometry 数据类型   空间  解决高维空间的搜索问题

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712801209890-3a685e39-08a0-4c57-ab30-0a826a287c07.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712801224995-9d076f8f-b3dd-4b0a-b697-ba4e46b6b679.png)

## InnoDB数据存储结构
索引是在存储引擎中的，存放格式不同  Memory 内存级别的 不用磁盘

### 页
默认大小16KB

在数据库，不论读一行，还是多行，都是将这些行所在的页进行加载，也就是说，数据库管理存储空间的基本单位是页(Page)，数据库IO操作的最小单位是页

```java
show variables like '%innodb_page_size%';
```

不在物理结构上相连，页之间双向链表，数据页内容单向链表，每个数据页都会生成一个页目录，为了用二分法

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712891496424-150873fa-3246-4d15-aec9-7ce1fe77ebc3.png)

一个区会分配64个连续的页,区是1M空间

段是数据库中的分配单位，不同类型的数据库对象以不同的段形式存在。

表空间是逻辑容器，系统表空间和独立表空间

#### 页的内部结构
数据页，系统页，Undo页，事务数据页  16KB

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712892288159-215e2cbc-7b1d-4a80-b5e6-0ed01675be7b.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712892300123-3d0c9264-60ba-49b2-980e-3227a9f730fd.png)

#### File Header
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712892596286-08edcb38-5db4-4f46-b6fa-415c9d425329.png)

FIL_PAGE_TYPE

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712892686820-13f2c56a-c39b-4ab1-9095-940fa83c6fca.png)

校验和

比较两个页相等，根据算法算出来一个较短的值，节省比较的时间

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712898063431-6331d545-3dad-46df-82f0-ebac5812d71b.png)

头部和尾部不相等，回滚或继续写入

FIL_PAGE_LSN

页面被最后修改时的日志位置

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712898538263-f9453c33-9909-48e3-a1eb-7d96e91b0ee4.png)

#### 空闲空间
剩下空间，越来越小

#### 用户记录
指定行格式，形成单链表   数据如何记录   记录头信息

记录头信息

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712901002238-3a598ac2-078a-4861-a3a2-dd5c92fa93c8.png)

delete_mask   0 没删除   1 删除   重新排序消耗性能   垃圾链表 可重用空间  删除新增时会重用

min_rec_mask 非叶子节点最小记录  标记为1   自己插入的都是0

record_type 记录类型

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712901982762-d1515ace-36ac-4889-a6c4-460fa5e6ef60.png)

heap_no  当前记录在本页中的位置

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712902045479-7ba8ee73-b171-4dd5-adf9-d01e15abd4e1.png)

n_owned   页目录每个组，存储了多少记录

next_record 地址偏移量  最小记录指向了第一条记录   最大记录是 0

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712902777355-846a7b1d-cfb8-4d93-a045-f4430a3ce4e9.png)

#### 最小和最大记录
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1712902291793-7a49d8c2-74a4-450a-b482-fd55e274e521.png)

#### Page Directory 页目录
分成几个组，包括最小和最大，不包括已删除

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713021946676-dc45089f-0424-4ee7-8725-7ce7e85e3be2.png)

页目录用来存储每组最后一条记录的地址偏移量

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713022140857-ca765e1f-28b7-481d-b498-91c02fe2a4ca.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713022381161-ed0ee310-cf89-4f1b-8a78-2cf5c2571721.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713022521477-281a320c-58f7-42f5-8638-946eb02b9cb0.png)

#### 页面头部
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713022578170-f329922a-134d-4694-a6ed-46c0b856e8fa.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713022857753-0ae083ac-1463-46d4-846f-5e8e0b170e89.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713022919680-d9c6ddf1-ff3b-4f33-82e1-7734b16b3964.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713023095282-4e073abe-235a-4bda-94ef-3a42aba97a58.png)

### Innodb行格式
```java
SELECT @@innodb_default_row_format; # dynatic
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713023310866-a9c321ea-db31-4262-ada3-63ad8830e812.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713023395198-d0e318b4-eddd-44e9-adc1-dae7df89c08b.png)

#### 变长字段长度列表
存储到底存了多大的数据，顺序反过来

#### NULL值列表
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713023698184-650a2c8a-475b-439f-8398-cdfe1360a884.png)

不考虑非空和主键

#### 记录的真实数据
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713023784535-8b3b4ecb-0192-451a-9d43-8ebe2c432fea.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713023863143-3104348c-dd48-46a9-ae8a-7e32c8268811.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713024432152-a893a360-df14-4f29-808b-5d52b5812446.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713024648344-96c97ce7-51a9-40c9-a394-c0437ae969ef.png)

#### Dynamic和Compressed行格式
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713024956466-9128bfa1-073a-4626-8a76-5bf1e8bf6172.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713024985883-36c1c626-914e-4771-be28-99e0dd4e8dff.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713025012366-ce282c23-f860-4fbe-8483-e5ab9bb7fb28.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713025104814-4cdf8d47-0834-4cc1-9423-e20f270394e6.png)

#### Redundant行格式
字段长度偏移列表

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713025324067-06987f2f-c602-4106-a7e5-ee69fcdebaff.png)

记录头信息

不一样

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713025415676-a98be097-e696-4b59-b8ff-6b13e37cfb9f.png)

## 区,段,碎片区
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713025642304-1c211333-75ee-49df-ab28-cd0b67880f25.png)

保证一段是顺序存储，不是所有

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713025961211-23513ac3-0eba-4a5d-a8d9-d96586976a02.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713026045616-2594b2c8-9297-4fb5-93eb-7b02d12133a7.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713026465587-d0435af8-49c0-48a3-8878-ca74f6c9b73a.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713026964272-87b4f39c-2dc6-4d31-9d8b-7509dbc98655.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713027136928-8832ea5a-2e30-432f-8f60-a3385244376a.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713027193358-cf812c7c-51e9-4640-aab6-0361f5aa7153.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713027246938-46629c60-bec9-4730-998c-6903cfac7129.png)

5.7 默认6个页 idb  96k

8.0 不是 有表结构 多了一个页

```java
show variables like 'innodb_file_oer_table';
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713027522539-f1a2f31f-3e83-4f1a-8604-67e91f538059.png)

内部系统表  数据字段

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713027592858-1497aa82-62fa-4f1d-aea4-54ee191064e6.png)

不能访问，information_schema 提供查看接口

## 索引
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713080337844-7393ef20-31e2-47d2-b8f4-3b74ac661be2.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713080764809-fa9836f5-85e8-4822-9a07-b5fe1a1816d6.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713080831178-54c7f585-45d1-4963-b615-115670975313.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713080912419-eedf87ab-6807-4573-a634-5fcf14925cba.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713080987776-70b419b6-3afc-4b90-94a2-c64f258e7e6a.png)

<font style="color:rgb(25, 27, 31);">nnoDB 中的哈希索引其实也就是</font><font style="color:rgb(25, 27, 31);"> </font><font style="color:rgb(25, 27, 31);background-color:rgb(248, 248, 250);">自适应哈希索引（Adaptive Hash Index）</font>

<font style="color:rgb(25, 27, 31);">InnoDB 会自动检测某些索引值是否使用的非常频繁</font>

<font style="color:rgb(25, 27, 31);">通过自动创建 </font><font style="color:rgb(25, 27, 31);background-color:rgb(248, 248, 250);">自适应哈希索引</font><font style="color:rgb(25, 27, 31);"> 来提高查对热点数据的访问速度，特别是在频繁执行等值查询的情况下</font>

### <font style="color:rgb(25, 27, 31);">创建索引</font>
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713081608652-50c1bc4e-f5fd-4961-bbd4-62cf25c9c835.png)

普通索引

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713081648378-c1da40e3-3656-4685-8c31-356961e61faf.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713082269670-08f22513-039a-4e64-841c-399f2dca3fe1.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713082914950-4941904c-1586-4a62-92c8-eca3a78eab8e.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713083289400-3e1ab981-c257-41bb-96d6-85865195e749.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713083564313-a9847421-f0c2-411b-99a9-f70e4fe4c2dc.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713083652814-8e34cefc-da6e-4b06-9204-cf300f9fb30e.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713083706008-3637c1d4-2f57-4dbc-8abd-da5664ae72c0.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713083927915-dad70ea6-8120-4cb3-a57b-7754bec82c21.png)

最左前缀原则

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713084152490-85e3f919-729a-490d-a9f0-681aa287a039.png)



![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713084230339-f424d9bb-ba79-4102-a2cf-7d8d0478574f.png)

不精准，速度快

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713084299618-cca88484-8719-4b84-99f5-576345fd5f4c.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713084510360-b7050fad-fc9f-4d3b-808c-b6e9a1ced002.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713084573167-64af4fd1-b97f-4dec-8e3c-3d5f660482fa.png)

### 删除索引
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713084688999-7f100189-229d-4f9f-8261-7c055302b6d4.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713084741702-90d8a053-5088-4183-9e16-3612ec8fd17e.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713084800212-f997e738-7545-4894-8b49-15574cd3030e.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713084916424-166fa54b-71fd-45cb-9a08-483cce4717f2.png)

### 降序索引（8.0）
支持降序排列

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713085118600-114c1fd2-9c88-4927-90eb-35b7292f85be.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713085275681-232d08d1-f2b3-4000-9fb2-f1057f773bd2.png)  这样就不推荐了 799了 正常就是5

### 隐藏索引（8.0）
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713085377460-3a62a941-b467-4183-a6b9-3f4e3d560929.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713085570551-0d37bb4d-0579-40e9-84ad-fb3078ac5b8d.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713085659870-29836f2e-c2a5-4144-9ad8-7068cf0b7126.png)



![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713085686185-d167da1c-3206-4f16-a60a-9caed95b1cc7.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713085786891-380f2326-1852-4fa6-b1ec-faf7a2f46094.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713085986309-edbb4124-0812-4a41-bd89-3d6ef8e0e1d9.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713085973724-227c9d08-7886-4032-9387-b9e9d830db75.png)

## 索引的设计原则
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713086473328-7b7a5d09-d7b2-4d06-9ad6-8fb2ffadcc87.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713086772969-6f48e497-defd-4ebd-95eb-a273ed633746.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713086781085-395d0b5f-0f6d-4b32-af5b-515423d2e066.png)

### 适合创建
1. 字段的数值有唯一性限制

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713087010874-6d822fcd-0d53-4c3e-8836-284e15def377.png)

2. 频繁作为WHERE 查询条件的字段

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713087150749-f59603e4-5113-4c96-b094-bf3e7ac3f348.png)

3. 经常group by 和 order by 的字段

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713087323239-3b0b44ae-de10-4945-a2b8-69c0811fa2d7.png)

<font style="color:rgba(0, 0, 0, 0.75);">group by或者order by后面的字段添加索引，由于索引是排好序的，所以建立索引就等同于在查询之前已经是排好序了</font>

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713088096425-97c8ae6a-3e19-4e02-879e-458d14791a48.png)

4. UPDATE、DELETE的WHERE 条件列

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713088510082-c93bb764-8610-4ddb-83dc-fcc0d08057d2.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713090005969-e8682cb2-0dd3-4553-8b9a-25d2f7c94d6d.png)

5. DISTINCT字段需要创建索引

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713111145188-ff44c3d1-c1d6-4468-b62c-8bbd62eb9797.png)

6. 连接表的数量尽量不要超过三张，对where 条件创建索引，对用于连接的字段创建索引，类型必须一致
7. 使用列的类型小的，创建索引

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713111892610-bc1231fb-119f-4c1e-8de2-c39c078516fc.png)

8. 使用字符串前缀创建索引

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713112154533-03e90ada-26ad-493a-8781-9ffc2f372e32.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713112258569-4211f0e8-e49a-47f7-8afb-3e29677219ba.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713112437587-567a1c41-7463-46f1-9077-90d9061cc3d4.png)

9. 区分度高(散列性高)的列适合作为索引

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713112511442-2dbe5db4-f155-4728-b807-a597ec6fcf4c.png)

10. 使用最频繁的列放到联合索引的左侧

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713112925637-24b13e2d-6913-4c16-b7ef-b2501ace7115.png)

11. 在多个字段都要创建索引的情况下，联合索引优于单值索引

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713113006687-f34c247e-aa26-44d2-b73a-fb726ea358b2.png)

### 不适合创建
1. where中使用不到的字段，不要设置索引
2. 数据量小的表最好不要使用索引

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713113260041-03db4e3f-9113-4782-afc7-51d473b084ad.png)

3. 有大量重复数据的列上不要建立索引

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713113308238-c9c277b7-7489-4cd6-b704-a10b8bad3f32.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713113391223-8662e08d-e933-4d3a-97aa-6a163d96fe7f.png)

4. 避免对经常更新的表创建过多的索引

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713113494115-eb561d24-bd60-464b-a3d0-13449b4e01f4.png)

5. 不建议无序的值作为索引

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713113636515-81194c2b-e369-4411-b2f7-938a578da751.png)

6. 删除不再使用或者很少使用的索引

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713113704008-c85ac976-a347-4c5f-aee2-c11b8bf1ab28.png)

7. 不要定义冗余或者重复的索引

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713113824027-d9e620db-1262-4650-aab4-07b026ff90c3.png)

## 性能分析工具
响应时间更快，吞吐量更大 explain 和 show profiling

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713150547631-ff4af028-a347-43c5-9034-876be552c25a.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713150644143-789b5590-60c4-4796-b6c0-30708d62e430.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713150676714-0bfe1b53-89b8-4af9-b362-ee061409c8e9.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713150754163-34a632bf-a049-4475-9b92-f55b35a03d5b.png)

### 查看系统参数
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713150835505-d74bd258-9167-482c-9b03-9f175aefb24b.png)

### 统计sql查询的成本
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713151209091-b8bb1d71-c066-4e37-8371-4e94405cb67e.png)

```java
show status like 'last_query_cost';
```

1 就是一个数据页

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713151530002-666a1305-ad10-4a66-a765-734a669b4762.png)

### 定位执行慢的SQL：慢查询日志
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713171796928-b28fac34-046c-4fe8-bde2-7e3c547402e2.png)

```shell
show variables like '%slow_query_log%';// 查看是否开启慢查询
set global slow_query_log = ON;
show variables like '%long_query_time%';// 查看慢查询的时间阈值
set global long_query_time=1;// 新建会话生效
set session long_query_time=1;// 当前会话生效
show global status like '%slow_queries%';// 查看有多少
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713172299762-450c9f76-a251-47e4-add1-27c0d7b8d670.png)文件配置写法

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713198538732-c4e8c105-efb9-4231-ba5c-a8b6c52d2df7.png)

```shell
mysqldumpslow -help
mysqldumpslow -a -s t -t 5 文件位置/文件
-a 不模糊参数
-s t 根据时间排序
-t 5 top5
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713198805624-9ff73047-e786-4ec8-b6b6-3fce11e109e9.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713199125720-ec8dea9e-f798-448f-9c63-9a1dad6a973a.png)

### SHOW PROFILE  查看SQL执行成本
```shell
set profiling= ON;
show variables like 'profiling';
show profiles;
show profile cpu,block io for query 3;
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713199570778-419ff37b-c7c2-439f-b6a7-9da35542aa8a.png)

### EXPLAIN 分析查询语句
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713200007325-112522ec-b1ef-4965-a4fb-7b4ad821786f.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713276012212-7ee36b09-dfd0-40f7-9bfb-d0385d365914.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713276034116-82c0c035-d1c1-4502-9ef1-0ea2f4f48fc3.png)

查询优化器可能对涉及的子查询的语句进行重新，转变为多表查询的操作

union 有临时表     union all 没有

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713277138641-2c3dec0b-6cbd-4bb3-901b-30cb813d6355.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713277837377-a03cb934-16e4-46ec-8b8b-de4d3e507401.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713278130200-7f28f042-042a-4f6a-9998-e1329dd64c05.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713365973115-2c38ff36-687f-4ee4-b1c6-331c97874111.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713366689388-964cacee-9d6a-4e9b-8819-b4d27a8b532c.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713367231177-0083e406-1469-4c5c-9947-85464eb7ad7c.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713428592387-1c5acf69-23b1-4428-be34-5d404ad78831.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713428639917-c5e501b8-f973-4db4-871e-08ed334e850e.png)

```shell
show warnings // 优化器优化后的结果
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713452069975-60947ed1-aa4b-4b91-9f96-6c67056e30b4.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713452153373-fca8cd22-5a94-42ae-a31c-315b49922a38.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713452320637-18422d9c-3b9b-455f-a734-610f0205b01c.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713452401045-ff643ea2-5411-442b-84e1-96844e108712.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713452437370-66f27b65-37f8-48db-93f4-510a921604d0.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713452490133-d3bdd585-0e07-4497-bc08-bee8a44a4f9d.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713452525512-3940b428-6d05-40e6-9e0b-c26360fe4d28.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713452566578-f9b791d2-bc6f-460e-b329-625b2dbe9dc6.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713452591908-12bcc743-eb75-41da-b135-7b04b0747aca.png)

## 索引优化与查询优化
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713452675381-e8939b92-9970-43f4-9f5a-8ec6af31392d.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713453900949-7f8ba726-4a34-43e8-9a71-40b652a29ff7.png)

1. 全值匹配我最爱
2. 最佳左前缀法则

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713454924378-e3780ce1-1515-4ed4-95e2-0a02760eefca.png)

3. 主键插入顺序

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713454981176-ca3e8068-ebfc-4070-885f-0d197d8e0894.png)

4. 计算、函数、类型转换导致索引失效
5. 类型转换导致索引失效
6. 范围条件右边的列导致索引失效
7. 不等于索引失效
8. is null 可以使用索引，in not null 不可以
9. like 以 %开头失效
10. or前后出现非索引列
11. 数据库的字符要统一使用utf8mb4

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713797924349-36c9aabe-5a58-4e3c-bbc3-844eb1f400dc.png)

内连接是可以决定谁作为驱动表，谁作为被驱动表出现的

被驱动表有索引，成本低

小表驱动大表

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713889997076-5549b7c2-1a93-47d4-8081-34011bc18e50.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713890108492-26976bdc-114e-45e1-a60f-0d492a607c85.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713890418242-92f84360-48c4-440d-a4ba-c76040f3d8a9.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1713890741306-b50b13c4-cdcf-4103-8b94-ef7c720b6f77.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1714009823064-a928a5b3-2f24-42f6-afc9-9b37eb210182.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1714015286398-dad56407-1929-4ed5-8242-98ba5085ac43.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1714015963206-1d27015b-87bd-4ba5-a77a-930c9298fb89.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1714024109740-7f53ff44-6bde-4082-b105-10ecefc01a78.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1714024164207-9fcd3403-9601-497b-984c-857de246f67f.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1714024213782-112a09b4-ee02-4b45-98bf-ee2639c67144.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1714024347762-7e6ca12d-9064-4f09-9ef0-a84d78700b1d.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1714035301144-72e9c3a4-c34a-4eaf-ad32-8bf43b90d0cc.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1714035479684-ca2d6360-c38a-4274-8db9-2c5c8458a9df.png)

### 覆盖索引
<font style="color:#DF2A3F;">一个索引包含了满足查询结果的数据</font>就叫做覆盖索引。

索引列+主键  =  SELECT 到 FROM 的查询列

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1715070730550-fdffdebb-41e3-4388-9ea8-216278167206.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1715070752479-a9e2951b-c716-4269-9b73-242b7550e982.png)

## 索引下推
减少了回表的次数，针对于联合索引，过滤完再回表，有字段 ICP

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1715072847346-f22a36a8-a321-43cf-ac3a-904ee1b7fad9.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1715073018862-5cd8a246-695f-4e7e-8334-9d5047486259.png)    不使用索引下推

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1715073146156-88c9b428-bab3-48c4-9a26-41a0cb9c947a.png)

## 补充优化
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1715073376718-4bd11760-2b1c-4fbf-b7b2-214c0c063678.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1715073703535-f05a0649-9ce0-4f97-bb56-7e6827d0a575.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1715073753228-78c013d1-7265-4eb7-8739-d1c0168e087c.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1715073856250-83b98d17-db83-4a1b-81e2-644c200f695f.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1715073874358-eb838bc4-56b4-4156-b4ff-f98ca40d507a.png)

## 数据库设计

## 主键设计
1. 自增id
+ 可靠性不高  自增回溯问题
+ 安全性不高   可以猜测用户数量
+ 性能差 服务器端生成
+ 交互多    last_insert_id()   多一次交互
+ 局部唯一
2. 业务主键

推荐 全局唯一，单调递增。

UUID  在8.0 推荐  因为可以时间的高低换位

淘宝订单号    时间+ 去重字段 + 用户id 后几位

## 数据库设计
1. 节省数据的存储空间
2. 能够保证数据的完整性
3. 方便进行数据库应用系统的开发

冗余度较小、结构合理

## 范式
数据库设计的基本原则

阶数越高冗余度

一般也就巴斯-科德范式

### 第一范式
原子性，字段值不可再次拆分，主观性的

### 第二范式
满足数据表里面得有主键，非主键字段完全依赖于主键，不能只依赖于主键的一部分，一张表只表达一个意思。

### 第三范式
非主键字段不能依赖于其他非主键字段。  他们之间必须相互独立。直接相关，消除冗余。

范式  表关联多了，降低了查询效率。冗余可以反范式化。

### 反范式化
业务优先，增加冗余字段。

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1716370554380-f3e18ebf-4063-4ae8-aab0-afbd7f977949.png)

浪费空间，修改部门，全部的冗余字段也要修改。要不然会数据不一致。而且存储过程去更新会消耗，系统资源。并且数据量小，会使得数据库设计变复杂。

1. 不需要经常更改的字段
2. 查询的时候不可或缺

历史快照，订单收货信息。

数据库设计的目的是捕获数据，数据仓库是分析数据。 数据仓库因为是历史数据，可以考虑反范式化。

### 巴斯-科德范式
只有一个候选键，或者每个候选键都是单属性。不存在部分依赖

仓库名，管理员，物品名，数量  这个就不是BCNF

主键和候选建有依赖关系不行

学生、导师、学科、CPA

### 第四范式（很少了）
平凡的多值依赖   整个表就是一组一对多的关系。

### 第五范式（完美范式）
消除不是由候选键所蕴含的连接依赖。理论中

<font style="color:#DF2A3F;">技术服务于业务</font>

### <font style="color:#000000;">ER模型三要素</font>
实体，属性，关系

可以独立存在的叫实体，不可再分的是属性。



### 数据表的设计原则
1. 数据表的个数越少越好
2. 数据表的字段个数越少越好
3. 数据表中联合主键的字段个数越少越好
4. 主键和外键越多越好

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1716448751979-7cab9df4-d307-4d2b-acd3-d4036bac34c6.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1716448847016-65bd766c-57da-4d3a-94a6-e8ee278ec7dc.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1716452501868-0247e487-5670-4837-837a-fb93c3b3fcc3.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1716453170806-d98f9213-fc6d-4d81-a187-ede24628fdf7.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1716453184529-bc87fe3f-2938-4bed-80ee-321151b01b35.png)

## 结构设计
1. 冷热数据分离，减少磁盘IO，增加热数据内存缓存的命中率，更有效的利用缓存，避免读入无用的冷数据。
2. 增加中间表，经常联合表查询，增加查询效率。不是频繁更新。
3. 增加冗余字段
4. 优化数据类型，最小的数据类型。字段大，空间大，每一页索引存储的数量就少，IO次数也就越多。
5. LOAD DATA INFILE 比insert 导入快。

分析表/检查表/优化表

```shell
ANALYZE TABLE 表名; -- 更新表的分享，比如show index from 表名;里面的区分度。
CHECK TABLE 表名; -- 查看表有没有问题，损毁。
OPTIMIZE TABLE 表名; -- 优化表 varchar blob text 优化
```

mysqlcheck -o 数据库 表名 -uroot -p

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1716778824595-98433eff-b8fe-43cf-a7b5-0f41096252cb.png)

服务器语句超时处理

创建全局通用表空间

8.0 隐藏索引进行调优  看查询参数。

## 事务
InnoDB 支持事务

要么都成功，要么都失败

原子性 无中间状态

一致性 合法性 符合现实

隔离性 不能被其他事务干扰

持久性 事务一旦提交数据就是永久性的

## 状态
1. 活动的
2. 部分提交的
3. 失败的
4. 中止的
5. 提交的

## 事务基础知识
1. 开启事务
2. 一系列DML操作
3. 事务结束的状态  提交commit / 中止 rollback

### 显式事务
1. 开启事务 start transaction;  begin;
2. start transaction 后面 read only，read write（默认），with consistent snapshot
3. 保存点 savepoint

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1716797235525-8a298b8d-2acb-437e-88d6-236fdec5873b.png)

### 隐式事务
1. autocommit 自动提交 默认是ON
2. SET autocommit = OFF; 关闭自动提交    DDL无效

## 事务分类
1. 扁平事务
2. 带有保存点的扁平事务
3. 链事务   set @@completion_type= 1；
4. 嵌套事务
5. 分布式事务

## 事务的隔离性
脏写   事务A 修改了 事务B未提交的数据

脏读   事务A 读取了 事务B未提交的数据

不可重复读  事务A 读取了2次 数据不一样    少了可以算这里面

幻读  事务A  读取了2次 行数多了                删除不算

1. 读未提交  最差  不怎么选
2. 读已提交  解决了脏读  oracle 默认
3. 可重复读
4. 串行化

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1716948135749-832addf1-7600-4db3-a561-f4e5f579765b.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1716948927761-88af3092-3cac-429d-ae42-5d89d1ded1b9.png)

### MySQL支持的隔离级别
```shell
show variables like 'tx_isolation';
show variables like 'transaction_isolation';
select @@transaction_isolation;
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1716951624841-13396cc7-3bd2-4d4c-a267-489465054e23.png)

## 事务日志
重做日志 redo日志  保证持久性

回滚日志 undo日志  保证一致性

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1716965260748-e313592a-9df9-4baf-ba1a-bc71350a9de0.png)

redo 日志 降低了刷盘频率

redo 日志 占用空间小

redo 日志 是顺序写入磁盘的。

redo 日志 在事务执行过程中，不断的写入  和 binlog 并不相同 binlog只有在事务提交才记录。

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1716991328593-8c1db232-602e-439a-9af4-c671714c61a3.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1716992803264-29c3297f-62a3-4af9-bd91-d9849e7071d7.png)

时间花费从小到大 0 < 2 < 1

Innodb的更新操作采用的是 Write Ahead Log 预先日志持久化 先写日志，再写入磁盘，中间经过redo log buffer

## Undo日志
更新数据的前置操作，写入undo log  撤销日志  回滚日志

1. 回滚数据    只是逻辑层面的，物理层面的不会改变，不会删除创建的数据页
2. MVCC 多版本并发控制

回滚段，一个回滚段1024个 undo log  segment

insert undo log 直接删除

update undo log 不能直接删除，undo log 链表中，等待清除线程删除

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1717123506533-8858157c-d878-46d9-8da3-4c5bfca771a2.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1717125623698-bacb57e4-e515-4b03-b77b-17ec3856fd9e.png)

## 锁
保证事务的隔离性，保证数据的一致性和完整性。

相同记录

锁结构 和事务相关   排队

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1717142227691-5dc08e87-22f3-4ae3-9464-bad0808606ea.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1717144552948-7ae4adec-b5e6-46fb-b103-aad5751d7c92.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1717506309180-1dd28844-8c14-4f5a-b21a-736ad5870a05.png)

```shell
lock tables 表名 write; // 写锁
lock tables 表名 read; // 读锁
unlock tables; // 解锁
show open tables where in_use > 0;// 查看锁
```

+ 意向锁 行级锁和表级锁 共存

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1717507157955-22c985db-da43-4308-8964-a006280f56b0.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1717507198894-4da8f6c3-5381-42e7-84a0-f3b29835e30a.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1717508223951-8fa7c411-39fb-46a8-9b2e-58a7b72833b5.png)

意向锁 排外不排内  相当于表级阻塞  给整个表加了一个标识

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1717508483827-ee17bd11-6c6f-4d31-a9a7-e5a2d6a52722.png)

自增锁  表级锁

1. 单行添加
2. 批量添加
3. 混合添加

对应三种模式  innodb_auto_lock_mode 0 1 2

元数据锁

1. 表结构变更
2. crud MDL 读锁   变更操作 MDL 写锁

## 记录锁（行锁）
## 间隙锁  gap锁
1. 防止幻影记录，取区间加锁，在两个数值之间。  大于最大的值，到正无穷

```shell
select * from performance.schema.data_locks;
```



聚簇索引 有个无穷小和无穷大 指向前面和最后的数据   有可能出现死锁。

<font style="color:#DF2A3F;">临建锁</font> 结合了记录锁和间隙锁   Innodb默认是临建锁

<font style="color:#DF2A3F;">插入意向锁 </font><font style="color:#000000;">Innodb规定事务在等待的时候也需要在内存中生成一个锁结构。并不阻止别的事务继续获取该记录上任何类型的锁。</font>

## 页锁
介于表锁和行锁之间，也会出现表锁和锁升级。

## 悲观锁
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1718035110010-0709fe9d-e512-4beb-9d92-4d822dd1a716.png)

## 乐观锁
版本号或者时间戳

读写分离 强制读取主机

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1718036269042-6b0afa56-7bff-4b81-a229-7608d92a5257.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1718036292871-abc06eff-b73b-46ef-945b-38f72c54955e.png)

## 显式锁/隐式锁
插入一条数据，保护这条数据叫隐式锁。

事务2看事务1是否是活跃状态，如果是的话，帮助事务1构建一个锁结构。自己阻塞一下。

非聚簇索引 page headers 里面有个最大事务id，这个id和事务二比较，小的话就全部都提交了

延迟加锁   隐式锁转成显式锁

## 全局锁
整个数据库实例加锁，当你需要让整个库处于只读，全库逻辑备份。

```shell
Flush tables with read lock
```

## 死锁
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1718124561030-7b788dd6-d18c-4f69-9fc6-bb61310f8c6e.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1718124869125-e7d7ad4d-51ca-4a84-a174-983778bde29c.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1718125095243-81e48d2f-49e9-4486-abbc-66b1689debb1.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1718125201838-85c36a3f-f7c6-43bc-ba46-574024d45652.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1718125276128-8c637e48-cd8a-401a-a920-b2a3d7881a73.png)

## 锁的内存结构
![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1718125750686-bd2affb9-76b3-4b5b-b61f-75c72de0a88d.png)

```shell
show status like '%innodb_row_lock%';
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1718126361752-8eb89fa4-ba4e-4cbf-8826-bc6de687cc0d.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1718126425921-14d789d6-9b7a-4979-91f9-381968d02a10.png)

## MVCC
多版本并发控制 依赖于隐藏字段、Undo log 和 Read View

一致性读 快照读  看见被事务更改之前的值

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1718172975149-5325701f-e270-4585-8e25-935c6bef36b3.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1719291385783-9924c1d1-0904-45fd-aec7-7a4b699bf6ed.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1719291467070-e335fff2-de0a-453d-bc31-eac8b4100733.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1719291707917-22b32b7c-9d38-4024-8f63-4219d3d45a74.png)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1719376350374-5666b669-078a-4195-8b96-61248debb492.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1719376368800-27ae4b61-b6fe-478d-8ee7-b7407104a44b.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1719376945525-e3b2f14b-3981-49f7-a21e-7286b5081348.png)![]()

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1719377584525-ed6fc235-e174-40b9-a99f-17c00848e71d.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1719377632251-1b04e3b8-f2e0-4821-81b4-510975e910da.png)

## 日志
![](https://cdn.nlark.com/yuque/0/2024/jpeg/33708367/1719817415009-cd50f7c9-2750-48c7-b16d-f4598f75b629.jpeg)

![](https://cdn.nlark.com/yuque/0/2024/jpeg/33708367/1719817422127-3dcf6131-5a35-4745-ad0c-502a687346ae.jpeg)

![](https://cdn.nlark.com/yuque/0/2024/jpeg/33708367/1719817437806-8563b8b6-679c-4d42-84d4-bdac1fc846d5.jpeg)![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1719898164013-f2e84656-4566-4387-853d-6a721f6d3db0.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1719898171373-1e8b66df-b3ec-4842-b0ef-94011cff8802.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1719898180173-b76f2b97-23fe-4a73-a649-6bfe4bb0745c.png)

```shell
flush logs; // 重新生成binlog日志
```

```shell
mysqlbinlog -v "/var/lib/mysql/binlog/atguigu-bin.000002"
```

```shell
show variables like '%log_bin%';
```

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1719930430344-387f321e-10f7-48ab-80e3-ffb320f73f1d.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1719930498781-d8c6b31a-672b-42e3-b6c4-df30bf447f91.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1719931369840-49f4b4ff-d141-4393-9608-af32c141a740.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33708367/1719931442570-ea89df3c-5f3d-4fb4-a24a-cdb19690a840.png)

![](https://cdn.nlark.com/yuque/0/2024/jpeg/33708367/1721278612549-bdb2b680-5993-40f9-ac3f-51abdbf35072.jpeg)

![](https://cdn.nlark.com/yuque/0/2024/jpeg/33708367/1721278614424-f76b1b58-06bf-4340-8cd5-1c07dae1785a.jpeg)

![](https://cdn.nlark.com/yuque/0/2024/jpeg/33708367/1721278616045-2dc06414-908e-433b-b0c3-0a2a89425b87.jpeg)

![](https://cdn.nlark.com/yuque/0/2024/jpeg/33708367/1721278617717-117098e7-259b-499b-be14-cc370844f2a9.jpeg)

![](https://cdn.nlark.com/yuque/0/2024/jpeg/33708367/1721278619360-d1f61447-e2d8-4d39-b4b2-b48a1d833e0e.jpeg)

![](https://cdn.nlark.com/yuque/0/2024/jpeg/33708367/1721278621058-302402cd-57c7-45fc-ae0e-e8e019f6dc4e.jpeg)




