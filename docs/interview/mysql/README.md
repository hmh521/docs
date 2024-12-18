---
title: Mysql
---
# Mysql
## 如何定位慢查询

::: tip 产生原因
表象：页面加载过慢、接口响应时间过长（超过1s）
1. 聚合查询 2. 多表查询 3.表数据量过大 4. 深度分页查询
:::

### 方案一：开源工具
* 调试工具：Arthas（阿里）
* 运维工具: Prometheus、Skywalking

### 方案二：Mysql自带慢查询日志
1. 开启慢查询日志 <br>
慢查询日志 查询的是超过指定时间的数据（long_query_time） <br>
在 MySQL 的配置文件（通常是 my.cnf 或 my.ini）中，添加或修改以下配置项：
```shell
[mysqld]
slow_query_log = 1              # 开启慢查询日志 1 表示开启慢查询日志，0 表示关闭。
slow_query_log_file = /path/to/slow_query.log  # 慢查询日志文件路径
long_query_time = 2             # 设置慢查询的阈值（单位为秒，默认10秒）
log_queries_not_using_indexes = 1  # 记录未使用索引的查询，1 表示记录，0 表示不记录。
```
## 如何分析执行速度很慢的SQL语句
1. 使用**explain**分析SQL语句
```sql
explain select * from sys_user where id = 1;
```
![explain](../../.vuepress/public/assets/mysql/explain.png)
* possible_keys: 可能使用的索引
* key: 实际使用的索引
* key_len: 索引占用的大小
* Extra: 额外信息

| Extra                   | 含义                              | 
|-------------------------|---------------------------------| 
| Using where;Using Index | 查找使用了索引，需要的数据都在索引列中能找到，不需要回表查询数据| 
| Using index condition   | 查找使用了索引，但需要回表查询数据 |

* type: 查询类型  性能从好到差
    * system > const > eq_ref > ref > range > index > all
    * system: 表只有一行记录（等于系统表）
    * const: 根据主键查询
    * eq_ref: 主键或唯一索引查询
    * ref: 普通索引
    * range: 索引范围扫描
    * index: **索引树扫描**
    * all: **全表扫描**

## 什么是索引

::: tip 索引
索引是帮助MySQL高效获取数据的数据结构，Innodb特定查找算法B+树，以某种方式指向表中的数据。
:::

### 简单说一下B树
1. B树：多叉路平衡查找树，每一个节点有多个分支，5阶的B树，每个节点最多有4个子节点，最少有2个子节点。
2. B+树：B树的变种，非叶子节点只存储索引，叶子节点存储索引和数据，叶子节点之间有指针相连，叶子节点形成一个链表。
B树和B+树的区别：
* 磁盘读写代价B+树更低，因为非叶子节点不存储数据，数据都在叶子节点，叶子节点形成链表，可以顺序读取。
* 查询效率：B+树查询效率更稳定，因为非叶子节点存储更多的索引，可以减少树的高度，减少磁盘IO次数。
* B+树适合范围查询，因为叶子节点之间有指针相连，可以快速找到范围内的数据。（双向链表）

### 什么是聚簇索引/非聚簇索引
1. 聚簇索引：数据和索引存储在一起，Innodb的主键索引就是聚簇索引。 只能有一个聚簇索引。
2. 非聚簇索引：数据和索引分开存储，索引只存储索引列的值和指向数据的指针。 可以有多个非聚簇索引。

#### 选取规则
* 如果表中有主键，Innodb会自动选择主键作为聚簇索引。
* 如果表中没有主键，Innodb会选择第一个非空唯一索引作为聚簇索引。
* 如果表中没有主键和唯一索引，Innodb会生成一个隐藏的6字节的rowid作为聚簇索引。

### 什么是回表查询
::: tip 回表查询
当通过非聚簇索引查询数据时，需要通过索引找到数据的主键，再通过主键找到数据，这个过程就是回表查询。
:::

```sql
SELECT user_id FROM users WHERE username = 'exampleUser';
SELECT * FROM users WHERE user_id = 123;
```
* 使用索引：数据库首先会利用索引来快速找到匹配的记录。例如，在users表的username字段上创建了索引，数据库可以快速定位到对应的user_id。
* 回表查询：数据库通过user_id找到对应的记录，然后返回给客户端。

### 什么是覆盖索引
::: tip 覆盖索引
当查询的列都在索引中时，不需要回表查询，直接从索引中获取数据，这个过程就是覆盖索引。
:::
* 使用id查询数据，直接走聚集索引，不需要回表查询，直接查询到数据，性能最高。
* 避免使用select *，会导致回表查询。聚集索引的叶子节点存储了所有的列，不需要回表查询。

### MySQL超大分页问题
1. MySQL的limit分页是先查询出所有的数据，再进行分页，如果数据量很大，会导致性能问题。
#### 优化思路
1. 使用覆盖索引查询，只查询需要的列。覆盖索引加子查询提升性能。
```sql
select * 
from tb_sku t
left join (
    select id from tb_sku limit 1000000, 10
) t1 on t.id = t1.id;
```

### 索引的创建原则
1. <font style="color:#E8323C;">针对于数量大的表，查询比较频繁的表，单表超过10万行数据，可以考虑创建索引。</font>
2. <font style="color:#E8323C;">针对于查询频繁的字段，需要创建索引。where条件中的字段，排序字段，分组字段。</font>
3. 尽量选择区分度高的字段作为索引，尽量创建唯一索引。区分度越高，索引效果越好。
4. 如果字符串字段长度较大，可以使用前缀索引，减少索引占用空间。
5. <font style="color:#E8323C;">尽量使用联合索引，因为很多时候可以覆盖索引，减少索引数量，提升查询效率。</font>
6. <font style="color:#E8323C;">控制索引的数量，索引越多，维护成本越高，建议不超过5个。</font>
7. 索引不能存在空值，否则索引失效。

### 什么情况下索引会失效
1.  <font style="color:#E8323C;">违反索引最左前缀原则。</font>
2. <font style="color:#E8323C;">范围查询右面的列，不能使用索引。</font>
3. <font style="color:#E8323C;">不要在索引列上进行运算操作，会导致索引失效。</font>
4.  <font style="color:#E8323C;">字符串不加引号，会导致索引失效。</font>
5. <font style="color:#E8323C;">以%开头的like查询，会导致索引失效。</font>
6. 使用or连接条件，会导致索引失效。
7. 使用函数，会导致索引失效。
8. 使用is null，is not null，会导致索引失效。
9. 使用!=，<>，会导致索引失效。
10. 使用not in，not exists，会导致索引失效。

## 谈谈Sql优化的经验
### 表的设计优化
1. <font style="color:#E8323C;">设置合理的字段类型，尽量使用小的数据类型，减少存储空间。</font>
2. <font style="color:#E8323C;">设置合适的字符串类型，char定长字符串效率比较高，varchar效率比较低。</font>
3. <font style="color:#E8323C;">设置合理的字段长度，不要设置过长的字段，会浪费存储空间。</font>
4. 设置合理的字段默认值，减少空值的存储。
5. 设置合理的字段注释，方便维护。
6. <font style="color:#E8323C;">设置合理的字段约束，减少错误数据的插入。</font>
7. 设置合理的字段命名，方便维护。
8. 设置合理的表名，方便维护。
9. 设置合理的表注释，方便维护。
10. <font style="color:#E8323C;">设置合理的表引擎，Innodb支持事务，Myisam不支持事务。</font>
### SQL语句的优化
1. <font style="color:#E8323C;">尽量减少查询的字段，不要使用select *。</font>
2. SQL语句要避免索引失效的写法。
3. 尽量用union all代替union。因为union all不会去重，效率更高。
4. 避免在where子句中对字段进行表达式操作，会导致索引失效。
5. <span style="color:#E8323C;"> Join 优化，尽量使用inner join，避免使用外连接。如果一定要使用，一定要以小表驱动大表。</span>

## 事务的四大特性
1. 原子性：事务是一个不可分割的工作单位，要么都成功，要么都失败。
2. 一致性：事务执行前后，数据的完整性保持一致。
3. 隔离性：多个事务之间互不干扰，一个事务的执行不会影响其他事务。
4. 持久性：事务一旦提交，对数据的修改是永久性的。
### 事务的并发问题
1. 脏读：一个事务读取到另一个事务未提交的数据。
2. 不可重复读：一个事务读取到另一个事务已提交的数据。
3. 幻读：一个事务读取到另一个事务插入的数据。

| 事务隔离级别 | 脏读 | 不可重复读 | 幻读 |
| --- | --- | --- | --- |
| 读未提交 | 是 | 是 | 是 |
| 读已提交 | 否 | 是 | 是 |
| 可重复读 | 否 | 否 | 是 |
| 串行化 | 否 | 否 | 否 |

<span style="color:#E8323C;">Mysql默认的事务隔离级别是可重复读。</span>

## undoLog和redoLog的区别
1. undoLog是逻辑日志，记录的是数据修改前的内容，用于回滚操作。（一致性和原子性）
2. redoLog是物理日志，记录的是数据修改后的内容，用于恢复操作。（持久性）
* 缓冲池：缓冲池是内存中的一块区域，用于存放数据页，减少磁盘IO。
* 数据页：数据页是磁盘上的一块区域，用于存放数据。 每个数据页默认大小为16KB。存储的数据是行记录。

> 在执行更新操作时，会先将数据页中的数据拷贝到undoLog中，然后再将数据页中的数据修改，修改后的数据会记录到redoLog中。如果事务回滚，会先根据undoLog中的数据恢复数据页中的数据，然后再将redoLog中的数据恢复到数据页中。如果数据库宕机，会根据redoLog中的数据恢复数据页中的数据。

<span style="color:#E8323C;">总之，undoLog是用于回滚操作，redoLog是用于恢复操作。</span>

undoLog还会用于MVCC多版本并发控制，用于读已提交和可重复读隔离级别。

### 隔离性是如何保证的
1. 锁机制：排他锁
2. 多版本并发控制：MVCC

## 解释一下MVCC
> <span style="color:#E8323C;">MVCC是多版本并发控制，用于解决事务并发问题。</span>
* 维护一个数据的多个版本，使得读写操作没有冲突。
主要实现方式：
1. 隐式字段

| 隐藏字段 | 含义                                    |
| --- |---------------------------------------|
| DB_TRX_ID | 最近修改事务ID，记录插入这条数据的最后一次修改该记录的事务ID      |
| DB_ROLL_PTR | 回滚指针,指向这条记录的上一个版本，用于配合undoLog,指向上一个版本 |
| DB_ROW_ID | 隐藏主键，如果表结构没有指定主键，将会生成该隐藏字段            |

2. undoLog
* 当insert一条记录时，会生成一条undoLog，事务提交时，会立即删除undoLog。
* 当update/delete一条记录时，会生成一条undoLog，事务提交时，不会立即删除undoLog，MVCC需要使用undoLog来获取数据的历史版本。
* undoLog 不同事务/相同事务对同一条记录的修改，会生成版本链。头部是最新版本，尾部是最旧版本。
3. readview
> readview（读视图），是快照读SQL执行时的一个视图，用于读取数据，记录了事务开始时的活跃事务的事务（未提交）ID。

* 当前读：读取数据时，数据不能被其他事务修改，会加锁，保证数据的一致性。
* 快照读：读取数据时，不加锁，读取的是快照数据，保证数据的一致性。
    * 读已提交：每次读取数据时，会生成一个readview，记录当前活跃事务的ID，只能读取已提交的数据。
    * 可重复读：开启事务时，第一次select会生成一个readview，记录当前活跃事务的ID，事务执行过程中，不会更新readview，只能读取事务开始时的数据。

### 包含4个核心字段：

#### 参数说明

- **trx_ids**：当前活跃事务ID列表。
- **min_limit_id**：最小事务ID（通常是一个提交过的事务ID）。这个值是所有事务的最小范围。
- **max_limit_id**：预分配事务ID（当前最大的事务ID + 1）。表示下一个事务ID，它通常是尚未使用的事务ID。
- **creator_trx_id**：创建当前readview的事务ID。

####  事务ID 读取数据权限规则

1. **`trx_id == creator_trx_id`**：
  - 如果当前事务ID等于创建 `readview` 的事务ID，说明当前事务是自己创建了readview，**可以读取自己的数据**。
  - 该规则允许事务能够读取自己创建的事务内容。

2. **`trx_id < min_limit_id`**：
  - 如果当前事务ID小于 `min_limit_id`，则说明该事务已被提交，并且其状态是已提交的，**可以读取数据**。
  - 因为已提交事务的数据是可见的，不会受到隔离。

3. **`trx_id > max_limit_id`**：
  - 如果当前事务ID大于 `max_limit_id`，说明该事务尚未开始执行，事务ID是预分配的未来ID，**不可以读取数据**。
  - 因为这些事务还未开始，因此其数据不可见。

4. **`min_limit_id <= trx_id <= max_limit_id`**：
  - 如果当前事务ID在 `min_limit_id` 和 `max_limit_id` 之间，说明该事务尚未提交，且仍在执行中，**不可以读取数据**。
  - 因为该事务处于执行过程中，数据状态尚未确定，读取它的数据可能会导致不一致。

#### 总结

- **可以读取数据**：
  - 如果事务ID小于 `min_limit_id`（已提交）。
  - 如果事务ID等于 `creator_trx_id`（自己创建的readview）。

- **不可以读取数据**：
  - 如果事务ID大于 `max_limit_id`（尚未开始）。
  - 如果事务ID在 `min_limit_id` 和 `max_limit_id` 之间（未提交或正在执行）。

::: tip MVVC的总结
1. MVCC是通过隐藏字段、undoLog、readview实现的。 维护一个数据的多个版本，使得读写操作没有冲突。
2. 隐藏字段 事务id和回滚指针，用于配合undoLog，指向上一个版本。
3. undoLog 用于回滚操作，不同事务/相同事务对同一条记录的修改，会生成版本链。
4. readview 读取数据时，不加锁，读取的是快照数据，保证数据的一致性。 RR/RC RR只会生成一次readview，RC每次select都会生成readview。
5. 事务ID读取数据权限规则：creator_trx_id、min_limit_id、max_limit_id。
:::

## mysql主从复制原理
核心原理：**binlog日志** ，记录了所有的DDL和DML操作，通过binlog日志实现主从复制。

步骤：
1. 主库执行操作后记录到binlog；
2. 从库通过 IO 线程 拉取 binlog，写入中继日志；
3. 从库通过 SQL 线程 执行中继日志中的 SQL，保持数据同步。

## 分库分表
> 什么情况下需要分库分表？

1. 数据量大，单表数据量超过1000W或者20G;
2. 优化解决不了性能问题；(主从读写分离，索引)
3. IO瓶颈（磁盘IO，网络IO），CPU瓶颈（聚合查询，连接数太多）

### 垂直拆分
> 垂直拆分是指按照业务模块将表拆分到不同的数据库中，每个数据库中的表都是不同的业务模块。

#### 垂直分库
1. 按照业务模块将表拆分到不同的数据库中；

- 特点：实现业务的分级管理，高并发场景下，提高磁盘IO和数据库连接数；

#### 垂直分表
1. 以字段为依据，将表中的字段拆分到不同的表中；

拆分规则：冷热数据分离
- 不常用的字段单独放到一个表中；
- 把text，blob字段放到附表中；

### 水平拆分
> 水平拆分是指按照表的行进行拆分，将表中的数据按照某种规则拆分到不同的数据库中。

#### 水平分库
1. 按照某种规则将表中的数据拆分到不同的数据库中；
2. 水平分库的规则：hash取模、范围分片、一致性hash；

- 特点：单库性能瓶颈，提高系统的稳定性和可用性；

#### 水平分表
1. 将一个表的数据按照某种规则拆分到不同的表中；

- 特点：单表性能瓶颈，减少锁表的概率，提高系统的稳定性和可用性；

### 分库问题
1. 分布式事务的一致性问题；
2. 跨节点关联查询问题；
3. 跨节点分页/排序问题；
4. 主键避重问题；

::: tip 分库分表总结
1. 水平分库：将一个库的数据拆分到多个库中，解决海量数据存储和高并发问题；
2. 水平分表：将一个表的数据拆分到多个表中，解决单表存储和性能的问题；
3. 垂直分库：按照业务进行拆分，提高磁盘IO和数据库连接数；
4. 垂直分表：冷热数据分离，多表互不影响，提高查询性能；
:::
