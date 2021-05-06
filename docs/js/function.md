---
title: JS-Function 函數
date: 2021-01-30
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

## 何謂 function 函數

- 函數也是一個對象
- 函數中可以封裝一些功能（代碼），在函數調用的時候執行。
- 使用 typeof 檢查一個函數對象時，會返回 function。

## 創建函數

### 使用構造函數來創建一個函數對象

可以將要封裝的代碼以字符串的形式傳遞給構造函數，`在實際開發中很少使用`。

```javascript
var fun = new Function("console.log('Hello 這是我的第一個函數');");
```

### 使用函數宣告來創建一個函數

此 function 為`匿名函數`

```javascript
/* 文法 */
function 函數名([參數1,參數2...參數N]){
  語句...
}
```

```javascript
function fun2(a, b) {
  //一般不會直接將結果console.log出來，而會使用return來返回計算結果
  console.log(a + b);
}

//調用函數
fun2(100, 200);
結果==>300
```

#### retrun

- 使用`return` 來設定函數的返回值，return 後的值將會會作為函數的執行結果返回，可以定義一個變數，來接收該結果。
- 在函數中 return 後的語句都不會執行。
- 如果 return 語句後不跟任何值就相當於返回一個`undefined`，如果函數中不寫 return，則也會返回 undefined。

  > return 值

```javascript
function sum(a, b, c) {
  var count = a + b + c;
  //返回計算
  return count;

  //若後面沒跟任何值會返回undefined
  return;
}
//定義一個變數，來接收結果
var result = sum(1, 2, 3);
console.log('result', result);
```

```javascript
function fun() {
  alert('函數要執行了~~~~');

  for (var i = 0; i < 5; i++) {
    if (i == 2) {
      //使用break可以退出當前的循環
      break;
      //continue用於跳過當次循環
      continue;
      //使用return可以結束整個函數
      return;
    }

    console.log(i);
  }

  alert('函數執行完了~~~~');
}
```

### 使用 函數表達式創建一個函數

```javascript
/* 文法 */
var 函數名  = function([參數1,參數2...參數N]){
  語句....
}
```

```javascript
//將匿名函數存放至fun3變數裡面
var fun3 = function() {
  console.log('我是匿名函數中封裝的代碼');
};

//調用函數
fun3();
```

### 創建封裝對象之函數

- 實參可以是任意的數據類型，也可以是一個對象。
- 當我們的參數過多時，可以將參數封裝到一個對象中，然後通過對象傳遞。
- 實參可以是一個對象，也可以是一個函數。

```javascript
function sayhello(o) {
  console.log(o);
  console.log('我是' + o.name + ',今年' + o.age + '歲');
}
var obj = {
  name: 'Yuci',
  age: 18,
};
sayhello(obj);
```

### 練習 1-判斷數字是否是偶數

```javascript
function even(num) {
  return num % 2 == 0;
}
var result = even(4);
console.log('result:', result);
```

### 練習 2-根據半徑計算圓面積

```javascript
function circle(r) {
  return 3.14 * r * r;
}
var result = circle(10);
console.log('圓面積：', result);
```

## 立即執行函數

- 函數定義完，立即被調用。
- 立即執行函數往往只會執行一次。

```javascript
(function() {
  alert('我是一個匿名函數~~~');
})();
```

```javascript
(function(a, b) {
  console.log('a = ' + a);
  console.log('b = ' + b);
  console.log('sum = ' + (a + b));
})(123, 456);
```
