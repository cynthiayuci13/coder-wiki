---
title: CSS-Box Modal
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

## Box Modal 組成要素

每一個盒子都由一下幾個部分組成：

- 內容區(content)

- 內邊距(padding)

- 邊框(border)

- 外邊距(margin)

盒子的可見框的大小，由內容區(content)、內邊距(padding)和邊框(border)共同決定，所以在計算盒子大小時，需要將這三個區域加在一起計算。

### 行內元素的盒模型

1. 行內元素不支持設置寬度和高度。
2. 行內元素可以設置 padding，但是垂直方向 padding 不會影響頁面的佈局。
3. 行內元素可以設置 border，垂直方向的 border 不會影響頁面的佈局。
4. 行內元素可以設置 margin，垂直方向的 margin 不會影響佈局。
5. 使用 display:block or inline-block 就可以改成塊元素。

## Box-Sizing 盒子計算方式

1. 用來設置盒子尺寸的計算方式(設置 width 和 height 的作用)。
2. `默認情況`盒子可見框的大小由內容區、內邊距和邊框共同決定。

| 用法<div style="width:100px"></div> | 說明                                   | 備註                                                      |
| ----------------------------------- | -------------------------------------- | --------------------------------------------------------- |
| content-box                         | 默認值，寬度和高度用來設置內容區的大小 |                                                           |
| border-box                          | 寬度和高度用來設置整個盒子可見框的大小 | 差別是 width 和 height 指的是內容區和內邊距和邊框的總大小 |
