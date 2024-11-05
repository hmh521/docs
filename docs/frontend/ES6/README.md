--- 
title: ES6
---

# ES6
## ES6简介
::: tip 定义
Node.js 是 JavaScript 的服务器运行环境,Babel 是一个广泛使用的 ES6 转码器
:::
## let 和 const 命令
1. let代码块有效
2. for循环的计数器，就很合适使用let命令
3. for循环设置循环变量的那部分是一个父作用域
4. 必须声明后使用，否则报错
5. 使用let命令声明变量之前，该变量都是不可用的。（暂时性死去区）
6. typeof不再是一个百分之百安全的操作
7. 变量一定要在声明之后使用，否则就报错。！！！

```js
function bar(x = y, y = 2) {
  return [x, y];
}

bar(); // 报错


// 报错
let x = x;

// 浏览器的 ES6 环境
function f() { console.log('I am outside!'); }

(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f();
}());
//允许在块级作用域内声明函数。
//函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
//同时，函数声明还会提升到所在的块级作用域的头部。
```
8. let不允许在相同作用域内，重复声明同一个变量。
9. const声明一个只读的常量,立即初始化.
10. 一旦声明，常量的值就不能改变。
11. const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。
12. 数值、字符串、布尔值 是简单数据类型
13. 对象和数组是 复杂数据类型
```js
Object.freeze() // 对象冻结
```
14. 浏览器里面，顶层对象是window
15. Node 里面，顶层对象是global
16. ES6 模块中this返回的是undefined
17. 全局环境中，this会返回顶层对象。
## 字符串
* ==String.fromCodePoint()== 可以识别大于0xFFFF的字符

```
String.fromCodePoint(0x20BB7)
```

* ==String.raw()== 还原字符串 处理模板字符串的基本方法，它会将所有变量替换，而且对斜杠进行转义，方便下一步作为字符串来使用

```
String.raw `foo${1 + 2}bar`
```

==codePointAt()== 能够正确处理 4 个字节储存的字符，返回一个字符的码点。


```
let s = '𠮷a';

s.codePointAt(0) // 134071
s.codePointAt(1) // 57271

s.codePointAt(2) // 97
```
==normalize()== 有语调符号和重音符号
这两种表示方法，在视觉和语义上都等价，但是 JavaScript 不能识别。Ǒ

==includes()== 返回布尔值，表示是否找到了参数字符串。
==startsWith()==：返回布尔值，表示参数字符串是否在原字符串的头部。
==endsWith()==：返回布尔值，表示参数字符串是否在原字符串的尾部。

==repeat==方法返回一个新字符串，表示将原字符串重复n次。

==padStart==用于头部补全
==padEnd==用于尾部补全。

==trimStart==和==trimEnd==这两个方法。它们的行为与trim()一致，trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格。

==matchAll==方法返回一个正则表达式在当前字符串的所有匹配

==replaceAll== 全部替换 返回一个新字符串，不会改变原字符串。前面为配置的字段，后面为要修改的字段
```js
// $& 表示匹配的字符串，即`b`本身
// 所以返回结果与原字符串一致
'abbc'.replaceAll('b', '$&')
// 'abbc'

// $` 表示匹配结果之前的字符串
// 对于第一个`b`，$` 指代`a`
// 对于第二个`b`，$` 指代`ab`
'abbc'.replaceAll('b', '$`')
// 'aaabc'

// $' 表示匹配结果之后的字符串
// 对于第一个`b`，$' 指代`bc`
// 对于第二个`b`，$' 指代`c`
'abbc'.replaceAll('b', `$'`)
// 'abccc'

// $1 表示正则表达式的第一个组匹配，指代`ab`
// $2 表示正则表达式的第二个组匹配，指代`bc`
'abbc'.replaceAll(/(ab)(bc)/g, '$2$1')
// 'bcab'

// $$ 指代 $
'abc'.replaceAll('b', '$$')
// 'a$c'
```

==at==方法接受一个整数作为参数,返回参数指定位置的字符，支持负索引（即倒数的位置）。

## 数值
前缀0b 代表二进制
前缀0o 代表八进制
Number 可以把 二进制或者八进制进行十进制的转换。
ES2021，允许 JavaScript 的数值使用下划线（_）作为分隔符。
Number.isFinite() 判断数值是都为有限
Number.isNaN()用来检查一个值是否为NaN
Number.parseInt() 转换为整数
Number.parseFloat() 转换为浮点数
Number.isInteger()用来判断一个数值是否为整数。
如果一个数值的绝对值小于Number.MIN_VALUE（5E-324），即小于 JavaScript 能够分辨的最小值，会被自动转为 0。
如果对数据精度的要求较高，不建议使用Number.isInteger()判断一个数值是否为整数。
Number.EPSILON实际上是 JavaScript 能够表示的最小精度。误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了。
JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值
Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内。

## Math
Math.trunc方法用于去除一个数的小数部分，返回整数部分。
内部使用Numer进行数值转换。
```js
Math.trunc(NaN);      // NaN
Math.trunc('foo');    // NaN
Math.trunc();         // NaN
Math.trunc(undefined) // NaN
```
1. Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
2. Math.cbrt()方法用于计算一个数的立方根。
3. Math.clz32()方法将参数转为 32 位无符号整数的形式，然后返回这个 32 位值里面有多少个前导 0。
4. Math.imul() 乘法
5. Math.fround方法返回一个数的32位单精度浮点数形式。
6. Math.hypot方法返回所有参数的平方和的平方根。
7. expm1() Math.expm1(x)返回 ex - 1，即Math.exp(x) - 1。
8. Math.log1p(x)方法返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN。
9. Math.log10(x)返回以 10 为底的x的对数。如果x小于 0，则返回 NaN
10. Math.log2(x)返回以 2 为底的x的对数。如果x小于 0，则返回 NaN。
11. Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
12. Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
13. Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
14. Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
15. Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
16. Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）
17. ES2020 引入了一种新的数据类型 BigInt（大整数），来解决这个问题，这是 ECMAScript 的第八种数据类型。BigInt 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。
18. 为了与 Number 类型区别，BigInt 类型的数据必须添加后缀n。
19. 比较运算符（比如>）和相等运算符（==）允许 BigInt 与其他类型的值混合计算
## 箭头函数
普通函数来说，内部的this指向函数运行时所在的对象
箭头函数，内部的this就是定义时上层作用域中的this
apply，call，bind三者的区别

* 三者都可以改变函数的this对象指向。
* 三者第一个参数都是this要指向的对象，如果如果没有这个参数或参数为undefined或null，则默认指向全局window。
* 三者都可以传参，但是apply是数组，而call是参数列表，且apply和call是一次性传入参数，而bind可以分为多次传入。
* bind 是返回绑定this之后的函数，便于稍后调用；apply 、call 则是立即执行 。
## 数组的扩展
* 由于扩展运算符可以展开数组，所以不再需要apply()方法将数组转为函数的参数了。
* 通过push()函数，将一个数组添加到另一个数组的尾部。
* 扩展运算符提供了复制数组的简便写法。
```js
// 写法一
const a2 = [...a1];
// 写法二
const [...a2] = a1;
```
* 扩展运算符提供了数组合并的新写法。
* 扩展运算符可以与解构赋值结合起来，用于生成数组。
* [a, ...rest] = list
* 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
* 扩展运算符还可以将字符串转为真正的数组。
* 能够正确识别四个字节的 Unicode 字符
* 任何定义了遍历器（Iterator）接口的对象，都可以用扩展运算符转为真正的数组。
* NodeList对象实现了 Iterator。
```js
Number.prototype[Symbol.iterator] = function*() {
  let i = 0;
  let num = this.valueOf();
  while (i < num) {
    yield i++;
  }
}

console.log([...5]) // [0, 1, 2, 3, 4]
```
* 只要具有 Iterator 接口的对象，都可以使用扩展运算符，比如 Map 结构。
* Generator 函数运行后，返回一个遍历器对象，因此也可以使用扩展运算符
* Array.from()方法用于将两类对象转为真正的数组
* 字符串和 Set 结构都具有 Iterator 接口，因此可以被Array.from()转为真正的数组。
* 类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。
* 任何有length属性的对象，都可以通过Array.from()方法转为数组
* Array.from()的第一个参数指定了第二个参数运行的次数
* Array.from()的另一个应用是，将字符串转为数组，然后返回字符串的长度。
* Array.of()方法用于将一组值，转换为数组。
* Array.of()基本上可以用来替代Array()或new Array()
* 数组实例的copyWithin()方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员）
* 数组实例的find()方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
* 数组实例的findIndex()方法的用法与find()方法非常类似，返回第一个符合条件的数组成员的位置
* 两个方法都可以发现NaN，弥补了数组的indexOf()
* 但是findIndex()方法可以借助Object.is()方法做到。
* findLast()和findLastIndex()，从数组的最后一个成员开始，依次向前检查，其他都保持不变。
* fill方法使用给定值，填充一个数组。
* entries()，keys()和values()——用于遍历数组
* Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，
* Map 结构的has方法，是用来查找键名的
* Set 结构的has方法，是用来查找值的
* Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。如果原数组有空位，flat()方法会跳过空位。
* flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。
* 数组实例增加了at()方法，接受一个整数作为参数，返回对应位置的成员，并支持负索引。
* Array.prototype.toReversed() -> Array
* Array.prototype.toSorted(compareFn) -> Array
* Array.prototype.toSpliced(start, deleteCount, ...items) -> Array
* Array.prototype.with(index, value) -> Array
* group()的参数是一个分组函数，原数组的每个成员都会依次执行这个函数，确定自己是哪一个组。
* group()的分组函数可以接受三个参数，依次是数组的当前成员、该成员的位置序号、原数组（上例是num、index和array）。分组函数的返回值应该是字符串（或者可以自动转为字符串），以作为分组后的组名。
```js
[6.1, 4.2, 6.3].groupBy(Math.floor)
// { '4': [4.2], '6': [6.1, 6.3] }
```
* groupToMap()的作用和用法与group()完全一致，唯一的区别是返回值是一个 Map 结构，而不是对象。
* ES6 则是明确将空位转为undefined。
* entries()、keys()、values()、find()和findIndex()会将空位处理成undefined。
* Array.prototype.sort()的默认排序算法必须稳定。这个规定已经做到了，现在 JavaScript 各个主要实现的默认排序算法都是稳定的。
## 对象
* 注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]，这一点要特别小心。
* 方法的name属性返回函数名
* 如果对象的方法是一个 Symbol 值，那么name属性返回的是这个 Symbol 值的描述。
* Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。
* Object.keys()：返回对象自身的所有可枚举的属性的键名。对象原型的toString方法，以及数组的length属性，就通过“可枚举性”，从而避免被for...in遍历到。
* ES6 规定，所有 Class 的原型的方法都是不可枚举的。
* ，大多数时候，我们只关心对象自身的属性。所以，尽量不要用for...in循环，而用Object.keys()代替。
* ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象。
* 对象obj.find()方法之中，通过super.foo引用了原型对象proto的foo属性。
* super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。
* 由于解构赋值要求等号右边是一个对象，所以如果等号右边是undefined或null，就会报错，因为它们无法转为对象。
* 解构赋值必须是最后一个参数，否则会报错。
* 解构赋值的拷贝是浅拷贝，即如果一个键的值是复合类型的值（数组、对象、函数）、那么解构赋值拷贝的是这个值的引用，而不是这个值的副本。
* 扩展运算符的解构赋值，不能复制继承自原型对象的属性。解构赋值的一个用处，是扩展某个函数的参数，引入其他操作。
* 对象的扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
* 对象的扩展运算符等同于使用Object.assign()方法。
```js
var nObj = Obkect.assign({},obj,obj1);
```
* AggregateError 在一个错误对象里面，封装了多个错误。如果某个单一操作，同时引发了多个错误，需要同时抛出这些错误，那么就可以抛出一个 AggregateError 错误对象，把各种错误都放在这个对象里面。
* Error 对象用来表示代码运行时的异常情况，但是从这个对象拿到的上下文信息，有时很难解读，也不够充分。ES2022 为 Error 对象添加了一个cause属性，可以在生成错误时，添加报错原因的描述。
* ES6 提出“Same-value equality”（同值相等）算法，用来解决这个问题。Object.is就是部署这个算法的新方法。它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。
```js
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```
