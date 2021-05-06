---
title: JS-String 對象方法
date: 2021-02-25
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

- 在底層字符串是以字符數組的形式保存的，所以把字符串當成一個陣列。

```javascript
var str = 'Hello Yuci';
console.log(str.length);
結果=>str長度為10，也包含空格

console.log(str[6]);
結果=>6
```

## indexOf()

- 該方法可以檢索一個字符串中是否含有指定內容。
- 如果字符串中含有該內容，則會返回其`第一次`出現的索引，如果沒有找到指定的內容，則返回`-1`。
- 可以指定一個第二個參數，指定開始查找的位置。

```javascript
var str = 'Hello Yuci';
var result = str.indexOf('l');
console.log(result);
(結果) => 2;

/* 指定位置查找 */
var str = 'Hello Yuci';
var result = str.indexOf('l', 3);
console.log(result);
(結果) => 3;

var str = 'Hello Yuci';
var result = str.indexOf('l', 4);
console.log(result);
(結果) => -1; //找不到返回-1
```

## split()

- 可以將一個字符串拆分為一個數組
- 需要一個字符串作為參數，將會根據該字符串去拆分數組。
- 如果傳遞一個空串作為參數，則會將每個字符都拆分為數組中的一個元素。

```javascript
var str = 'Hello Yuci';
var result = str.split(str[5]);
console.log(result);

/* 確認是否為陣列對象 */
console.log(typeof result);
(結果) => object;

console.log(Array.isArray(result));
(結果) => true;

console.log(result[1]);
(結果) => Yuci;

console.log(result.length);
(結果) => 2;

/* 空字串 */
var str = 'Hello Yuci';
var result = str.split('');
console.log(result);
(結果) => ['H', 'e', 'l', 'l', 'o', ' ', 'Y', 'u', 'c', 'i'];
```

## toUpperCase()

將一個字符串轉換為大寫並返回

```javascript
var str = 'Hello Yuci';
var result = str.toUpperCase();
console.log(result);
(結果) => HELLO YUCI;
```

## toLowerCase()

將一個字符串轉換為小寫並返回

```javascript
var str = 'Hello Yuci';
var result = str.toLowerCase();
console.log(result);
(結果) => hello yuci;
```
