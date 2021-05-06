---
title: JS-Math 數學運算
date: 2021-02-24
---

<style>
body{
  font-size:1rem !important;
}
.page .side-bar{
  width:20rem !important;
}
.level-3{
  padding-top:0 !important;
  padding-bottom:0 !important;
}
.center-img{
  text-align:center;
  font-size:16px;
}
blockquote{
  color: #5b5b5b !important;
  font-size:1rem !important;
}
.content__default  code{
  color: #b31d28 !important;
  font-weight:bold !important;
}
.content__default pre[class*="language-"] code{
  color:#fff !important;
}
</style>

Math 和其他的對象不同，它不是一個構造函數，它屬於一個工具類不用創建對象，裡面封裝了數學運算相關的屬性和方法。

## Math.PI

- 顯示圓周率

```javascript
console.log(Math.PI);
(結果) => 3.141592653589793;
```

## Math.ceil()

- 取整數，小數位有值就自動進位。

```javascript
console.log(Math.ceil(1.1));
(結果) => 2;
console.log(Math.ceil(3.5));
(結果) => 4;
```

## Math.floor()

- 取整數，完全不取小數。

```javascript
console.log(Math.floor(1.99))
(結果) => 1;
console.log(Math.floor(3.3));
(結果) => 3;
```

## Math.round()

- 數值進行四捨五入。

```javascript
console.log(Math.round(1.99))
(結果) => 2;
console.log(Math.round(3.3));
(結果) => 3;
```

## Math.random()

- 可以用來生成一個 0-1 之間的隨機數，`但不會出現 0 或 1`。

```javascript
console.log(Math.random());
```

- 假若想要生成一個 0-10 之間的隨機數，並且想要直接取整數，這時就可以搭配 round()來四捨五入。
- 生成一個 0-x 之間的隨機數
  > Math.round(Math.random()\*x)

```javascript
for (var i = 0; i < 10; i++) {
  console.log(Math.round(Math.random() * 10));
}
```

- 假若想要生成一個 1-10 之間的隨機數
- 生成一個 x-y 之間的隨機數
  > Math.round(Math.random()\*(y-x)+x)

```javascript
for (var i = 0; i < 10; i++) {
  console.log(Math.round(Math.random() * 9 + 1));
}
```

## Math.max()

- 可以獲取多個數中的最大值

```javascript
var max = Math.max(10, 45, 30, 100);
console.log(max);
(結果) => 100;
```

## Math.min()

- 可以獲取多個數中的最小值

```javascript
var min = Math.min(10, 45, 30, 100);
console.log(min);
(結果) => 10;
```

## Math.pow()

> Math.pow(x,y)

- x 的幾次方(y)

```javascript
//12的3次方
var pow = Math.pow(2, 3);
console.log(pow);
(結果) => 876q1 ;
```

## Math.sqrt()

- 用於對一個數進行開方運算

```javascript
//12的3次方
var sqrt = Math.sqrt(9);
console.log(sqrt);
(結果) => 3;
```
