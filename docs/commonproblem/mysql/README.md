---
title: mysql常见问题
---
# mysql常见问题
## 窗口函数 在分组里面进行排序
```sql
ROW_NUMBER() OVER (PARTITION by i.receive_id ORDER BY i.create_time desc) row_num
```

## Mysql 锁等待问题（断点时间过长）
```sql
show processlist
select * from  information_schema.INNODB_TRX;
kill 线程id
```

## mybatis-plus 自动注入问题（3.4.2）
```java
package com.hao.reggie.handler;

import com.baomidou.mybatisplus.core.handlers.MetaObjectHandler;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.reflection.MetaObject;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

/**
* @program: haohao_take_out
* @description: 创建时间和创建
* @author: HuMingHao
* @create: 2022-11-04 12:13
**/
@Slf4j
    @Component
    public class MyMetaObjectHandler implements MetaObjectHandler {

        @Override
        public void insertFill(MetaObject metaObject) {
            log.info("start insert fill ....");
            this.strictInsertFill(metaObject, "createTime", LocalDateTime.class, LocalDateTime.now());
            this.strictUpdateFill(metaObject, "updateTime", LocalDateTime.class, LocalDateTime.now()); // 起始版本 3.3.0(推荐)// 起始版本 3.3.0(推荐使用)
        }

        @Override
        public void updateFill(MetaObject metaObject) {
            log.info("start update fill ....");
            this.strictUpdateFill(metaObject, "updateTime", LocalDateTime.class, LocalDateTime.now()); // 起始版本 3.3.0(推荐)
        }
    }

```
```java
@ApiModelProperty(value = "创建时间")
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;

@ApiModelProperty(value = "更新时间")
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateTime;
```
## 数据库导入
```sql
create databases reggie set charater utf8mb4; // 创建数据库
source 绝对路径; // 导入数据库 不要放在中文目录下
```
## case when 用法
```sql
(CASE tbbo.BUSI_STATUS WHEN '1' THEN '拟稿中' WHEN '2' THEN '审批中' WHEN '3' THEN '审批通过' ELSE '审批不通过' END)AS billStatus
```
