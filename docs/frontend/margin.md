---
title: CSS-Margin
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

## Margin 說明

1. 元素在頁面中是按照自左向右的順序排列的，所以默認情況下如果我們設置的左(margin-left)和上(margin-top)外邊距則會移動元素自身。
2. 設置下(margin-bottom)和右(margin-right)外邊距會移動其他元素。
3. margin 也可以設置負值，如果是負值則元素會向相反的方向移動。
4. 外邊距會影響盒子的位置，但不會影響 box-modal 本身的大小。

## Margin 重疊現象問題

1. 相鄰的垂直方向外邊距會發生重疊現象。
2. 父子元素間相鄰外邊距，子元素的會傳遞給父元素(上外邊距)，父子外邊距的重疊會影響到頁面的佈局，必須要進行處理。
3. 兄弟元素間的相鄰垂直外邊距會取兩者之間的較大值(兩者都是正值)，兄弟元素之間的外邊距的重疊，對於開發是有利的，所以我們不需要進行處理。
4. 特殊情況：<br>如果相鄰的外邊距一正一負，則取兩者的和。<br>
   如果相鄰的外邊距都是負值，則取兩者中絕對值較大的。

## 使用 Margin 水平置中

經常利用這個特點來使一個元素在其父元素中水平居中

```scss
width: 1200px;
margin: 0 auto;
```
