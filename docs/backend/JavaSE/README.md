---
title: Java基础
---
# Java基础
## 注释、标识符、关键字
> 书写注释是一个非常好的习惯，平时写代码一定要注意规范

* 单行注释 //
* 多行注释 /**/
* 多行注释 /** */

## 标识符
* Java所有的组成部分都需要名字。类名、变量名以及方法名都被称为标识符。
* 所有的标识符都应该以字母，美元符（$）、或者下划线开始
* 首字母之后可以是字母，美元符，下划线或数字的任何字符组合
* 不能使用关键字作为变量名或方法名
* 标识符是大小写敏感的
* 合法标识符举例：age、$salary，_value、__1_value
* 非法标识符距离：123abc、-salary、#abc

## 数据类型
* 强类型语言
    * 要求变量的使用要严格符合规定，所有变量都必须先定义后才能使用
    * 好处：安全性高
    * 坏处：速度下降
* 弱类型语言
    * 要求变量的使用不用符合规定
* Java的数据类型分为两大类
    * 基本类型（primitive type）
        * 整数类型
        * byte -128到127
        * short -32768到32767
        * int -2147483648到2147483647
        * long -9223372036854775808到9223372036854775807
* 浮点类型
    * float  4个字节
    * double 8个字节
* 字符类型
    * char 2个字节
    * boolean类型只占一个位（true 或者false）
* 引用类型（reference type）
    * 引用数据类型
        * 类
        * 接口
        * 数组
## 什么是字节
* 位（bit)：是计算机内部数据储存的最小单位，11001100是一个八位二进制数。
* 字节（byte）：是计算机内部数据储存的基本单位，一个字节等于8位二进制数。
* 1KB=1024B
* 1MB=1024KB
* 1GB=1024MB
* 1TB=1024GB
* 1PB=1024TB

```java
/**
 * @program: JavaSE
 * @description:
 * @author: HuMingHao
 * @create: 2021-03-24 16:33
 **/
public class Demo03 {
  public static void main(String[] args) {
    // 整数拓展： 进制  二进制0b  十进制  八进制0 十六进制 0X
    int i = 10;
    int i2 = 010;// 八进制0
    int i3 = 0x10;// 十六进制0x 0~9 A~F 15

    System.out.println(i);
    System.out.println(i2);
    System.out.println(i3);
    System.out.println("==============================================");
    //==================================================
    // 浮点数扩展？ 银行业务怎么表示？ 钱
    // BigDecimal 数学工具类
    // float 有限的 离散的 舍入误差 大约 接近但不等于
    // double
    // 最好避免使用浮点数进行比较
    float f = 0.1f;// 0.1
    double d = 1.0/10;// 0.1

    System.out.println(f==d); // false

    float d1 = 23131312312312313f;
    float d2 = d1 + 1;

    System.out.println(d1==d2);// true

    //==================================================
    // 字符拓展？
    //==================================================
    char c1 = 'A'; // 97
    char c2 = '中';// 20013

    System.out.println(c1);
    System.out.println((int)c1);// 强制转换

    System.out.println(c2);
    System.out.println((int)c2);

    // 所有的字符本质还是数字
    // 编码 Unicode 表 97 = a  2字节  65536 字符
    // excel 2 16 == 65536
    // U0000 UFFFF

    char c3 = '\u0061';

    System.out.println(c3);// a

    // 转义字符
    // \t 制表符
    // \n 换行
    System.out.println("Hello\tworld");

    // true
    String sa = new String("hello world");
    String sb = new String("hello world");
    System.out.println(sa==sb);
    // false
    String sc = "hello world";
    String sd = "hello world";
    System.out.println(sc==sd);

    // 布尔值扩展
    boolean flag = true;
    if(flag == true){

    }
    if(flag){

    }

  }
}
```
## 类型转换
* 由于Java是强类型语言，所以要进行有些运算的时候的，需要用到类型转换。
* 运算中，不同类型的数据先转化为同一类型，然后经行运算
* 强制类型转换
* 自动类型转换
```java
/**
 * @program: JavaSE
 * @description:
 * @author: HuMingHao
 * @create: 2021-03-25 11:06
 **/
public class Demo05 {
  public static void main(String[] args) {
    int i = 128;
    double b = i;// 内存溢出，强制类型转换

    // 强制转换 （类型）变量名  高--低
    // 自动转换  低--高

    System.out.println(i);
    System.out.println(b);

    /*
    注意点：
    1. 不能对布尔值进行转换
    2. 不能把对象类型转换为不相干的类型
    3. 在把高容量转换到低容量的时候，强制转换
    4. 转换的时候可能存在内存溢出，或者精度问题！
    */

    System.out.println("=====================================");
    System.out.println((int)23.7);// 23
    System.out.println((int)-45.89f);// -45

    System.out.println("=====================================");
    char c = 'a';
    int d = c + 1;
    System.out.println(d);
    System.out.println((char)d);
  }
}
/**
 * @program: JavaSE
 * @description:
 * @author: HuMingHao
 * @create: 2021-03-25 13:33
 **/
public class Demo06 {
  public static void main(String[] args) {
    // 操作比较大的数的时候，注意溢出问题
    // JDK7新特性，数字之间可以用下划线分割
    int money = 10_0000_0000;
    int years = 20;
    int total = money*years; // -1474836480,计算的时候溢出了
    long total2 = money*years; // 默认是int，转换之前已经存在问题了？

    long total3 = money*((long)years);// 先把一个数转换为long
    System.out.println(total3);

  }
}
```
## 变量
* Java是一种强类型语言，每个变量都必须声明其类型。
* Java变量是程序中最基本的存储单元，其要素包括变量名，变量类型和作用域。
::: warning 注意事项
每个变量都有类型，类型可以是基本类型，也可以是引用类型,变量名必须是合法的标识符,变量声明是一条完整的语句，因此每一个声明都必须以分号结束。
:::
#### 变量作用域
* 类变量：从属于类的，一起出现，一起消失，加了static，能直接输出
* 实例变量 从属于对象的，
* 局部变量

## 常量
* 类变量：从属于类的，一起出现，一起消失，加了static，能直接输出，常量名一般使用大写字符。
* 实例变量 从属于对象的，
* 局部变量
* 所有变量、方法、类名：见名知意
*  类成员变量：首字母小写和 驼峰原则：monthSalary
*  局部变量：首字母小写和驼峰原则
*  常量：大写字母和下划线：MAX_VALUE
*  类名：首字母大写和驼峰原则，MAN，GoodMan
*  方法名：首字母小写和驼峰命名：run(),runRun()       

## 运算符
* 算术运算符 + - * / % ++ --
* 赋值运算符 = += -= *= /= %=
* 比较运算符 == != > < >= <=
* 逻辑运算符 && || !
* 位运算符 & | ^ ~ << >> >>>
* 三元运算符 ? :

## 包机制
* 为了更好的组织类，Java提供了包机制，用于区别类名的命名空间
* 包语句的语法格式为：
* package pkg1[.pkg2.[pkg3...]]
一般利用公式域名倒置作为报名

## JavaDoc
::: tip 介绍
JavaDoc是Sun公司提供的一个技术，它从程序源代码中抽取类、方法、成员等注释形成一个和源代码配套的API帮助文档。
:::
参数信息：
1. @auther 作者号
2. @version 版本号
3. @since 指明需要最早使用的jdk版本
4. @param 参数名
5. @return 返回值情况
6. @throws 异常抛出情况
命令行生成javaDoc文档 javadoc 参数 Java文件 <br>
或者利用idea 生成JavaDoc文档

## 电脑快捷键
快捷键	作用	快速记忆
* win+E	打开文件管器	explorer(探险者)微软系统的文件管理器就叫这个
* win+D	显示桌面	desktop　桌面
* win+L	锁计算机	lock 锁 (人离开电脑就应该锁屏)
* alt+F4	关闭当前程序	强制关闭　force(音通 f4) alt 是alter
* ctrl+shift+Esc	打开任务管理器（或者ctrl+alt+delete）
* ctrl+F	在一个文本或者网页里面查找，相当实用（退出一般按ESC）	Ｆ = find
* ctrl+A	选中所有文本	A = all

