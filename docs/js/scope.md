---
title: JS-Scope 作用域
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

在 JS 中一共有兩種作用域：

1.  全局作用域

    - 直接編寫在 script 標簽中的 JS 代碼，都在全局作用域。
    - 在全局作用域中，創建的變數都會作為 window 對象的屬性保存；創建的函數都會作為 window 對象的方法保存。
    - 它代表的是一個瀏覽器的視窗，它由瀏覽器創建我們可以直接使用。

```javascript
var a = 10;
console.log(window.a);

function fun() {
  console.log('我是fun函數');
}

window.fun();
window.alert('hello');
```

2.  函數作用域

- 每調用一次函數就會創建一個新的函數作用域，他們之間是互相獨立的。
- 在函數作用域中可以訪問到全局作用域的變數。
- `在全局作用域中無法訪問到函數作用域的變數`。
- 當在函數作用域操作一個變數時，它會先在自身作用域中尋找，如果有就直接使用；如果沒有則向上一級作用域中尋找，直到找到全局作用域。
- 如果全局作用域中依然沒有找到，則會報錯 ReferenceError。
- 在函數中要訪問全局變數可以使用 window 對象

```javascript
//創建一個變數
var a = 10;

function fun() {
  var a = '我是fun函數中的變數a';
  var b = 20;

  //尋找自身作用域是否有a
  console.log('a = ' + a);

  function fun2() {
    //可以使用window.a來直接找全局作用域
    console.log('a = ' + window.a);
  }

  fun2();
}
```

- `在函數中，不適用 var 宣告的變數都會成為全局變數`。

```javascript
var c = 33;
function fun5() {
  //console.log("c = "+c);
  //c因為沒有使用var關鍵字，則會設定為全局變數
  c = 10;

  //若加上var則只能在自身作用域才能讀得到
  var c = 10;
}

fun5();
console.log('c = ' + c);
```

- 定義形參就相當於在函數作用域中宣告了變數。

```javascript
var e = 23;
function fun6(e) {
  //在函數中定義形式參數，就相當於var e
  //var e;
  alert(e);
}

fun6();

//因為在調用函數時未給予回傳參數，所以undefind
結果==> undefind;
```
