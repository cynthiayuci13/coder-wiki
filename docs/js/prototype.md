---
title: JS-prototype 原型對象
date: 2021-02-08
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

## 函數寫在全局缺點

將函數定義在全局作用域，汙染了全局作用域的命名空間，而且定義在全局作用域中也很不安全。萬一別人也寫了相同的函數，就很有可能你寫的會被覆蓋過去。

```javascript
function fun() {
  alert('Hello大家好，我是:' + this.name);
}
```

## 解決方法

當創建構造函數時，將這些對象共有的屬性和方法，統一添加到構造函數的`原型對象`中，這樣不用分別為每一個對象添加，也不會影響到全局作用域，就可以使每個對象都具有這些屬性和方法了。

## 什麼是原型對象

- 我們所創建的每一個函數，解析器都會向函數中添加一個屬性 `prototype`，這個屬性對應著一個對象，這個對象就是我們所謂的原型對象。
- 如果函數作為普通函數調用 prototype 沒有任何作用，當函數以構造函數的形式調用時，它所創建的對象中都會有一個隱含的屬性，指向該構造函數的原型對象，我們可以通過`__proto__`來訪問該屬性。
- 原型對象就相當於一個`公共區域`，所有同一個類的實例都可以訪問到這個原型對象，我們可以將對象中共有的內容，統一設定到原型對象中。
- 當我們訪問對象的一個屬性或方法時，它會先在對象自身中尋找，如果有則直接使用，如果沒有則會去原型對象中尋找，如果找到則直接使用。

```javascript
/* 每一個構造函數都有自己的prototype */
function Person() {}
function Myclass() {}
console.log(Person.prototype == Myclass.prototype);
結果==>false

/* 使用構造函數調用時，每創建一個實例都會含有一個__proto__，而且一樣指向原型對象中 */
var mc = new Myclass();
console.log(mc.__proto__==Myclass.prototype);

/* 創建Myclass原型對象的屬性 */
Myclass.prototype.a=123;
console.log(mc.a);
結果=>123

/* 若自身有屬性則優先找，若沒，再找原型屬性123 */
mc.a="設計自身的屬性"
console.log(mc.a);
結果=>設計自身的屬性

/* 創建Myclass原型對象的方法 */
Myclass.prototype.sayHello=function(){
  alert('hello');
}
console.log(mc.sayHello());
```

### 使用 in 檢查問題

使用 in 檢查對象中是否含有某個屬性時，如果對象中沒有但是原型中有，也會返回 true。如果今天只想確認本身是否含有屬性，則需要使用到`hasOwnProperty()`

```javascript
var mc = new Myclass();

//原型屬性
Myclass.prototype.a = 123;

//本身屬性
//mc.a = '設計自身的屬性';

//in檢查是否含有屬性，確發現如果本身沒有屬性，但原型有
console.log('a' in mc);
(結果) => true;

//若只想檢查本身是否有屬性
console.log(mc.hasOwnProperty('a'));
(結果) => flase;
```

## 原型對象也有原型

- 原型對象也是對象，所以它也有原型。
- 當我們使用一個對象的屬性或方法時，會現在自身中尋找，如果有，則直接使用；如果沒有則去原型對象中尋找，如果原型對象中有，則使用。
- 如果連原型的 object 的原型都沒有，則返回 undefined。
