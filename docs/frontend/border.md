---
title: CSS-Border
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

## Border 外框線

1. outline 用來設置元素的輪廓線，用法和 border 一模一樣。
2. 輪廓和邊框不同的點，就是輪廓不會影響到可見框的大小，但 border 會影響 box modal。
3. 屬性值
   | 用法 | 說明 | 備註 |
   | -------------------------- | ---- | ---- |
   | border | 所有四邊框線| |
   | border-top | 上框線| |
   | border-bottom |下框線 | |
   | border-left |左框線 | |
   | border-right | 右框線| |

```scss
.box1:hover {
  outline: 10px red solid; //輪廓線
    border: 1px solid red; //邊框線，會被列入計算
}
```

## Border-radius 圓角效果

1. 用來設置圓角的半徑大小。
2. border-radius 可以分別指定四個角的圓角。
   | 用法 | 說明 |
   | -------------------------- | ---- |
   | 四個值 | 左上 右上 右下 左下 |
   | 三個值 | 左上 右上/左下 右下|
   | 兩個值 | 左上/右下、右上/左下|
3. 屬性值
   | 用法 | 說明 | 備註 |
   | -------------------------- | ---- | ---- |
   | border-top-left-radius |左上圓角 | |
   | border-top-right-radius |右上圓角 | |
   | border-bottom-left-radius |左下圓角 | |
   | border-bottom-right-radius | 右下圓角| |

```scss
border-raidus: 20px / 40px;
border-raidus: 10px 10px 10px 10px;
border-top-left-radius: 50px;
border-radius: 50%; //也可以將元素設置為一個圓形
```

## 使用 border 製作三角形技巧

當寬高有設定時，加上 border 後，會發現上下左右顯示為梯形，若把寬高設計為 0 時，就會發現只剩三角形。這次只要使用 transparent 將所有顏色設為透明，並開啟你想要的箭頭方向，設定箭頭顏色即可。

下方為顯示向上箭頭範例：

```scss
width: 0;
height: 0;

/* 設置四個方向的邊框*/
border: 8px solid transparent;

/* 去除上邊框 */
border-top: none;

/* 單獨设置下邊框的颜色 */
border-bottom-color: #fff;
```
