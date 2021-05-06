---
title: CSS-Box Shadow
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

用來設置元素的陰影效果，陰影不會影響頁面佈局

- 第一個值：水平偏移量，設置陰影的水平位置(正值向右移動／負值向左移動)
- 第二個值：垂直偏移量、設置陰影的水平位置(正值向下移動／負值向上移動)
- 第三個值：陰影的模糊半徑
- 第四個值：陰影的顏色

```scss
box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3);
```
