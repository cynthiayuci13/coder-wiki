---
title: CSS-White Space
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

設置網頁如何處理空白

| 用法   | 說明     | 備註 |
| ------ | -------- | ---- |
| normal | 正常     |      |
| nowrap | 不換行   |      |
| pre    | 保留空白 |      |

## 製作省略號(...)小技巧

但限制單行技巧

```scss
.box {
  white-space: nowrap; //1.設定不換行
  width: 200px; //2.設定寬度
  overflow: hidden; //3.將多出的文字隠藏起來
  text-overflow: ellipsis; //4.加上省略號...
}
```
