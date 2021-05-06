---
title: CSS實用技巧
date: 2021-05-03
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

## Background 背景寫法

- 圖片位置(background-position)：left / center / right 及 top / bottom

* 圖片大小(background-size)：cover / contain / size%

```scss
background: url('xxx.jpg') center top / cover;
```

## 水平左右翻轉

- 可使用 transfrom 中的 scaleX

```scss
transform: scaleX(-1);
```

## 要畫直線或橫線

1. 可以透過偽元素::before 或::after 來製作
2. 要注意每一個元素只能使用一次::before 與::after

```scss
content: '';
position: absolute;
width: 1px;
height: 100%;
background-color: #333;

content: '';
position: absolute;
width: 100px;
height: 2px;
background-color: #333;

content: '';
position: absolute;
height: 0;
border: 1px solid #333;
```

## 如何製作滑鼠 hover 底線動畫

1. 若是要製作動畫效果為由中間展開線，思考原理為使用偽元素與定位。
2. 原本為一條線是 left:0 與 right:0，若是要讓他消失，則會變成 left:50%與 right:50%，接下來在搭配動畫即可以顯示效果。

## 如何製作側選單滑出滑入效果

1. 使用 transform 的 transform: translateX(-100%)，即會將側選單的區塊整個滑出視窗外。
2. 在來使用動畫讓他恢復成 transform: translateX(0)即可。

## 如何製作選單文字左側 icon 圖示消失，hover 出現

1. 這個製作原理，則是將文字 margin-left 往左對齊圖示，在讓圖片消失 scale(0)。
2. 然後在透過動畫讓他恢復 margin-left 原有位置，以及讓圖片出現 scale(1)。

## 如何透過 position 來讓區域或文字垂直置中

```scss
top: 0;
bottom: 0;
margin: auto;

top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
```

## 透過 transform 來水平置中或文字水平垂直置中

```scss
left: 50%;
transform: translateX(-50%);

top: 50%;
left: 50%;
transform: translate(-50% -50%);
```

## 製作 box-shadow

- 第一個為 offset-X
- 第二個為 offset-Y
- 第三個為模糊效果
- 第四個為陰影大小
- 第五個為陰影顏色

```scss
box-shadow: 10px 0px 0px 0px #fff;
```

## 文字排版-新學到的 CSS columns 屬性

[https://www.w3schools.com/css/css3_multiple_columns.asp](https://www.w3schools.com/css/css3_multiple_columns.asp)<br>
[https://developer.mozilla.org/zh-CN/docs/Web/CSS/columns](https://developer.mozilla.org/zh-CN/docs/Web/CSS/columns)

1. 可以透過 columns-count 設定欄位，columns-gap 設定欄位間距。
2. 使用在文字排版
3. IE 也有支援

## 文字排版-首字放大

使用:first-letter

## 絕對定位 absolute

通常在偽元素裡面若是設定為 absolute 會相制幫你轉換為 display:block，所以可加可不加都沒關係，瞭解原理即可。

## transform 定位

[https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform-origin](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform-origin)

在使用 transform 時定位是在元素的中心點，若要變更中心點，可以使用 transform-origin 來修正。

## flex 原理

1. flex-grow 是否自動平分空間(1 是自動,0 是不要自動分配)
2. flex-shirk 是否縮放大小(0 是不要被 flex 影響，因為 flex 會自動伸縮)

## flex+margin 多行文字垂直置中技巧

[https://ithelp.ithome.com.tw/articles/10202179](https://ithelp.ithome.com.tw/articles/10202179)<br>
[http://csscoke.com/2018/08/21/css-vertical-align/](http://csscoke.com/2018/08/21/css-vertical-align/)

只要在父層物件設定 `display: flex`，接著在需要垂直置中的物件上設定 `margin: auto` 即可自動置中囉。

## table 等寬比例

在`<table>`設定 width 百分比 100%，然後`<td>`設定固定寬度，它會自動依據百分比分配寬度，也就可以達成你想要的固定寬度分配。

## 幫沒有類別的連結設定一個預設樣式

主要這個是要解決後台 CMS 系統，因為使用者自己透過編輯器插入超連結，通常都不會有 class 屬性，所以我們可以透過這個方式自動替網站這些超連結進行定義。

```scss
a[href]:not([class]) {
  color: #000000;
  text-decoration: underline;
}
```

## 等比例的方塊

使用 `padding-bottom` 設定

```scss
//正方形
.box{
  width:40%;
  height:0;
  padding-bottom:40%;
  background-color:#ccc;
}

//非正方形
父層1200
width:560/1200*100=46.667%
height:315/1200*100=26.25%
```

## 要停用按鈕上的預設指標事件

停止滑鼠與元素進行互動

```scss
.button-disabled {
  pointer-events: none;
  opacity: 0.5;
}
```

## 使用 padding-left 加 text-indent 讓兩邊等固定欄寬

```scss
td {
  padding-left: 6em;
  text-indent: -6em;
}
```
