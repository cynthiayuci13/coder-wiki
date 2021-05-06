---
title: CSS-Display／Visibility
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

## display 說明

用來設置元素顯示的類型

| 用法         | 說明                                                       | 備註 |
| ------------ | ---------------------------------------------------------- | ---- |
| inline       | 將元素設置為行內元素                                       |      |
| block        | 將元素設置為塊元素                                         |      |
| inline-block | 將元素設置為行內塊元素，既可以設置寬度和高度又不會獨占一行 |      |
| table        | 將元素設置為一個表格                                       |      |
| none         | 元素不在頁面中顯示                                         |      |

### block 塊元素

1. 塊元素會在頁面中獨占一行(自上向下垂直排列)。
2. 默認寬度是父元素的全部(會把父元素撐滿)。
3. 默認高度是被內容撐開(子元素)。

### inline 行內元素

1. 行內元素不會獨占頁面的一行，只佔自身的大小。
2. 行內元素在頁面中左向右水平排列，如果一行之中不能容納下所有的行內元素則元素會換到第二行繼續自左向右排列(書寫習慣一致)。
3. 行內元素的默認寬度和高度都是被內容撐開。

## visibility 說明

用來設置元素的顯示狀態

| 用法    | 說明                                           | 備註 |
| ------- | ---------------------------------------------- | ---- |
| visible | 默認值，元素在頁面中正常顯示                   |      |
| hidden  | 元素在頁面中隱藏不顯示，但是依然佔據頁面的位置 |      |
