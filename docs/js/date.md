---
title: JS-Date 日期
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

## Date 基本使用

- 在 JS 中使用 Date 對象來表示一個時間。
- 如果直接使用構造函數創建一個 Date 對象，則會封裝為`當前時間`。
- 創建一個指定對象需要在構造函數中傳遞一個表示時間的字符串作為參數。
  > 日期的格式 月份/日/年 時:分:秒

```javascript
/* 顯示當前時間 */
var time = new Date(); //記得D是大寫
console.log(time);
結果=>Wed Feb 24 2021 21:31:35 GMT+0800 (台北標準時間)


/* 創建一個指定時間 */
var time = new Date('02/23/2021');
console.log(time);
結果=>Tue Feb 23 2021 00:00:00 GMT+0800 (台北標準時間)
```

### 使用 getMonth()獲取月

- 獲取當前日期對象是幾月
- 會返回一個 0-11 的值，`0` 表示 1 月，1 表示 2 月、`11` 表示 12 月。
- 假若需要顯示正確月份文字，則+1 計算即可。

```javascript
/* 顯示當前時間的「月」 */
var time = new Date();
var month = time.getMonth();
console.log(month);
(結果) => 1; //代表2月
```

### 使用 getDate()獲取日

- 獲取當前日期對象是幾日

```javascript
/* 顯示當前時間的「日」 */
var time = new Date();
var date = time.getDate();
console.log(date);
(結果) => 24;
```

### 使用 getDay()獲取週幾

- 獲取當前日期對象時週幾。
- 會返回一個 0-6 的值，`0` 表示週日。

```javascript
/* 顯示當前時間的「週幾」 */
var time = new Date();
var day = time.getDay();
console.log(day);
(結果) => 3;
```

### 使用 getFullYear()獲取年

- getYear()已廢除。
- 獲取當前日期對象的年份。

```javascript
/* 顯示當前時間的「年」 */
var time = new Date();
var year = time.getFullYear();
console.log(year);
(結果) => 2021;
```

### 使用 getTime()獲取總時間

- 獲取當前日期對象的時間戳。
- 時間戳，指的是從格林威治標準時間的 1970 年 1 月 1 日，0 時 0 分 0 秒到當前日期所花費的`毫秒數`（1 秒 = 1000 毫秒）。
- 計算機底層在保存時間時使用都是時間戳。

```javascript
/* 顯示當天總時間(單位：毫秒數)」 */
var time = new Date();
var ms = time.getTime();
console.log(ms);
(結果) => 1614175693923;
```

### 使用 Date.now()當下點擊時間

```javascript
/* 顯示當前點擊總時間(毫秒數) */
var now = Date.now();
console.log(now);
(結果) => 1614175773449;
```

範例：利用時間戳來測試代碼的執行的性能

```javascript
var start = Date.now();

for (var i = 0; i < 100; i++) {
  console.log(i);
}

var end = Date.now();

console.log('執行了：' + (end - start) + '毫秒');
```
