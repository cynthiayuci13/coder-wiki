---
title: JS-this
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

- 解析器在調用函數每次都會向函數內部傳遞進一個隱含的參數，這個隱含的參數就是`this`。
- this 指向的是一個對象，根據函數的調用方式的不同，this 會指向不同的對象。
  - 以`函數`的形式調用時，this 永遠都是`window`。
  - 以`方法`的形式調用時，this 就是`調用方法的那個對象`。

```javascript
function fun() {
  console.log(this.name);
}

/* 函數形式調用 */
//this指的是window
var name = "我是全域的name";
fun();
結果==>我是全域的name

/* 方法形式調用 */
//this指的是object裡面
var obj ={
  name:"yuci",
  sayName:fun
}
obj.sayName();
```
