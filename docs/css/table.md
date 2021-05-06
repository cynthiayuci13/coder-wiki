---
title: CSS-Table
date: 2021-01-26
---

<style>
body{
  font-size:1rem !important;
}
.page .side-bar{
  width:15rem !important;
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

## 說明

1. 在 table 中使用 tr 表示表格中的一行，有幾個 tr 就有幾行。
2. 在 tr 中使用 td 表示一個單元格，有幾個 td 就有幾個單元格。
3. colspan 橫向的合併單元格，rowspan 縱向的合併單元格。
4. 可以將一個表格分成三個部分，頭部 thead、主體 tbody、底部 tfoot。
5. th 表示頭部的單元格
6. 預設情況下元素在 td 中是垂直居中的，可以通過 vertical-align 來修改。
7. 如果表格中有使用 tbody 而是直接使用 tr，那麼瀏覽器會自動創建一個 tbody，並且將 tr 全都放到 tbody 中，所以 tr 不是 table 的子元素。

```html
//第3點範例
<td rowspan="2">D2</td>
<td colspan="2">C4</td>
```

```scss
/*其它屬性範例*/
border-spacing: 0px; //指定邊框之間的距離
border-collapse: collapse; //設定邊框的合併
```

```scss
/*第7點範例-這樣才會生效*/
table tbody > tr:nth-child(odd) {
  background-color: #bfa;
}

//不生效，原因tr不是table的子元素
table > tr:nth-child(odd) {
  background-color: #bfa;
}
```
