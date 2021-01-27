---
title: CSS-Vercital Align
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

## 使用說明

設置元素垂直對齊的方式

| 用法     | 說明             | 備註 |
| -------- | ---------------- | ---- |
| baseline | 默認值，基線對齊 |      |
| top      | 頂部對齊         |      |
| bottom   | 底部對齊         |      |
| middle   | 居中對齊         |      |

## 圖片空隙問題解決技巧

當圖片底下出現一個小空隙時，因為圖片也為基線對齊，所以使用 vertical-align 即可解決這個問題。

```scss
img {
   vertical-align: top;
}
```
