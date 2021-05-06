---
title: CSS-Font
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

## 單位

### em

1. em 是相對於元素的字體大小來計算的，1em=1font-size。
2. em 會根據字體大小的改變而改變。

### rem

rem 是相對於根目錄(root)的字體大小來計算

## @font-face

font-face 可以將服務器中的字體直接提供給用戶去使用

```scss
@font-face {
  /* 指定字體的名字 */
  font-family: 'myfont';

  /* 服務器中字體的路徑 */
  src: url('./font/ZCOOLKuaiLe-Regular.ttf') format('truetype');
}
```

## 如何使用 iconfont

一、增加`<i>`標籤加入 html，引用相關 css

```html
<i class="fas fa-bell-slash"></i>
```

二、使用偽元素加入 css

```scss
content: '\f1b0'; //每一個圖示都有一個代碼
font-family: 'Font Awesome 5 Free'; //這邊是用font awesome為範例
font-weight: 900;
```
