---
title: CSS-Overflow
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

子元素是在父元素的內容區中排列的，如果子元素的大小超過了父元素，則子元素會從父元素中溢出。使用 overflow 屬性來設置父元素如何處理溢出的子元素。

| 用法    | 說明                                                   | 備註 |
| ------- | ------------------------------------------------------ | ---- |
| visible | 默認值，子元素會從父元素中溢出，在父元素外部的位置顯示 |      |
| hidden  | 溢出內容將會被裁剪不會顯示                             |      |
| scroll  | 生成兩個滾動條，通過滾動條來查看完整的內容             |      |
| auto    | 自動判斷                                               |      |

```scss
overflow-x: visible;
overflow-y: hidden;
overflow: auto;
overflow: scroll;
```
