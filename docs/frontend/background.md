---
title: CSS-Background
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

## background-image

1. 用來設置背景圖片。
2. 可以同時設置背景圖片和背景顏色，這樣背景顏色將會成為圖片的背景色。
3. 如果背景的圖片小於元素，則背景圖片會自動在元素中平鋪將元素鋪滿。
4. 如果背景的圖片大於元素，將會一個部分背景無法完全顯示。
5. 如果背景圖片和元素一樣大，則會直接正常顯示。

```scss
.box {
  background-color: #bfa;
  background-image: url('./img/1.png');
}
```

## background-position

1. 用來設置背景圖片的位置
2. 設置方式通過 top left right bottom center 幾個表示方位的詞來設置背景圖片的位置。
3. 使用方位詞時必須要同時指定兩個值，如果只寫一個則第二個默認就是 center。
4. 通過偏移量來指定背景圖片的位置(水平方向的偏移量,垂直方向變量)

```scss
.box {
  background-position: left center;
  background-position: -50px 300px;
}
```

## background-size

1. 設置背景圖片的大小，第一個值表示寬度，第二個值表示高度。
2. 如果只寫一個，則第二個值默認是 auto。
3. cover 圖片的比例不變，將元素鋪滿
4. contain 圖片比例不變，將圖片在元素中完整顯示

## background-attachment

背景圖片是否跟隨元素移動

| 用法   | 說明                               | 備註 |
| ------ | ---------------------------------- | ---- |
| scroll | 默認值，背景圖片會跟隨元素移動     |      |
| fixed  | 背景會固定在頁面中，不會隨元素移動 |      |

## background-clip

設置背景的範圍

| 用法        | 說明                                       | 備註 |
| ----------- | ------------------------------------------ | ---- |
| border-box  | 默認值，背景會出現在邊框的下邊             |      |
| padding-box | 背景不會出現在邊框，只出現在內容區和內邊距 |      |
| content-box | 背景只會出現在內容區                       |      |

## background-origin

背景圖片的偏移量計算的原點

| 用法        | 說明                                          | 備註 |
| ----------- | --------------------------------------------- | ---- |
| border-box  | 背景圖片的變量從邊框處開始計算                |      |
| padding-box | 默認值,background-position 從內邊距處開始計算 |      |
| content-box | 背景圖片的偏移量從內容區處計算                |      |

## 簡寫方法

1. backgound 背景相關的簡寫屬性，所有背景相關的樣式都可以通過該樣式來設置
2. 並且該樣式沒有順序要求，也沒有哪個屬性是必須寫的
3. background-size 必須寫在 background-position 的後面，並且使用`/`隔開(background-position/background-size)
4. background-origin background-clip 兩個樣式，orgin 要在 clip 的前面

```scss
.box {
  background: background-color background-image background-repeat
    background-position background-size background-origin background-clip
    background-attachment;
}
```

## background 漸變

通過漸變可以設置一些複雜的背景顏色，可以實現從一個顏色向其他顏色過渡的效果，漸變是圖片，需要通過 background-image 來設置。

### linear-gradient 線性漸變

1. 顏色沿著一條直線發生變化
2. 線性漸變的開頭，我們可以指定一個漸變的方向
3. 漸變可以同時指定多個顏色，多個顏色默認情況下平均分佈，也可以手動指定漸變的分佈情況
4. repeating-linear-gradient() 可以平舖的線性漸變

| 用法      | 說明     | 備註 |
| --------- | -------- | ---- |
| to left   |          |      |
| to right  |          |      |
| to bottom |          |      |
| to top    |          |      |
| deg       | 表示度數 |      |
| turn      | 表示圈   |      |

```scss
.box {
  //紅色在開頭，黃色在結尾，中​​間是過渡區域
  background-image: linear-gradient(red, yellow);
  background-image: linear-gradient(red, yellow, #bfa, orange);
  background-image: linear-gradient(
    red 50px,
    yellow 100px,
    green 120px,
    orange 200px
  );
  background-image: repeating-linear-gradient(to right, red, yellow 50px);
}
```

### radial-gradient 放射性漸變

1. 默認情況下徑向漸變的形狀根據元素的形狀來計算的<br>正方形 --> 圓形，長方形 --> 橢圓形
2. 我們也可以手動指定徑向漸變的大小(circle/ellipse)
3. 也可以指定漸變的位置<br>語法：radial-gradient(大小 at 位置, 顏色 位置 ,顏色 位置 ,顏色 位置)

#### 大小-可選值項目

| 用法            | 說明 | 備註 |
| --------------- | ---- | ---- |
| circle          | 圓形 |      |
| ellipse         | 橢圓 |      |
| closest-side    | 近邊 |      |
| closest-corner  | 近角 |      |
| farthest-side   | 遠邊 |      |
| farthest-corner | 遠角 |      |

#### 位置-可選值項目

top right left center bottom

```scss
.box {
  background-image: radial-gradient(farthest-corner at 100px 100px, red, #bfa);
}
```
