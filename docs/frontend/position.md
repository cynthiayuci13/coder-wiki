---
title: CSS-Position
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

## Position 定位說明

1. 定位是一種更加高級的佈局手段。
2. 通過定位可以將元素擺放到頁面的任意位置。
3. 使用 position 屬性來設置定位。

#### 屬性

| 用法     | 說明                     | 備註 |
| -------- | ------------------------ | ---- |
| static   | 元素是靜止的沒有開啟定位 |      |
| relative | 開啟元素的相對定位       |      |
| absolute | 開啟元素的絕對定位       |      |
| fixed    | 開啟元素的固定定位       |      |
| sticky   | 開啟元素的粘滯定位       |      |

#### 偏移量(offset)

當元素開啟了定位以後，可以通過偏移量來設置元素的位置。

| 用法   | 說明                         | 備註                                                                                          |
| ------ | ---------------------------- | --------------------------------------------------------------------------------------------- |
| top    | 定位元素和定位位置上邊的距離 | 1. 定位元素垂直方向的位置由 top 和 bottom 兩個屬性來控制。<br>2. 通常情況下只會使用其中一個。 |
| bottom | 定位元素和定位位置下邊的距離 |                                                                                               |
| left   | 定位元素和定位位置的左側距離 | 1. 定位元素水平方向的位置由 left 和 right 兩個屬性控制。<br>2. 同上，通常情況下只會使用一個。 |
| right  | 定位元素和定位位置的右側距離 |                                                                                               |

## Z-index 層級

1. 對於開啟了定位元素，可以通過 z-index 屬性來指定元素的層級。
2. 可使用一個整數作為參數，值越大元素的層級越高，元素的層級越高越優先顯示。
3. 如果元素的層級一樣，則優先顯示靠下的元素。
4. 祖先的元素的層級再高也不會蓋住後代元素。

```scss
z-index: 99;
z-index: 999;
```

## Relative 相對定位

1. 當元素的 position 屬性值設置為 relative 時則開啟了元素的相對定位。
2. 元素開啟相對定位以後，如果不設置偏移量元素不會發生任何的變化。
3. 相對定位是參照於元素在文檔流中的位置進行定位的。
4. 相對定位會提升元素的 z-index 層級。
5. 相對定位不會使元素脫離文檔流，還是有佔空間。
6. 相對定位不會改變元素的性質為塊、塊行內還是行內。

## Absolute 絕對定位

1. 當元素的 position 屬性值設置為 absolute 時，則開啟了元素的絕對定位。
2. 開啟絕對定位後，如果不設置偏移量元素的位置不會發生變化。
3. 開啟絕對定位後，元素會從文檔流中脫離。
4. 絕對定位會改變元素的性質，行內變成塊，塊的寬高被內容撐開。
5. 絕對定位會使元素提升一個層級。
6. 絕對定位元素是相對於對應之「包含塊」進行定位的。

#### 絕對定位的包含塊

包含塊(containing block)就是離它最近的開啟了定位的祖先元素，如果所有的祖先元素都沒有開啟定位則 html 根元素(初始包含塊)就是它的包含塊。

```html
<div>
  //祖先元素
  <span> //父元素 <em>hello</em> //子元素 </span>
</div>
```

## Fixed 固定定位

1. 將元素的 position 屬性設置為 fixed，則開啟了元素的固定定位。
2. 固定定位也是一種 absolute 絕對定位，所以固定定位的大部分特點都和絕對定位一樣。
3. 唯一不同的是固定定位永遠參照於瀏覽器窗口進行定位。
4. 固定定位的元素不會隨網頁的滾動條滾動(scroll)。

## Sticky 粘滯定位

1. 當元素的 position 屬性設置為 sticky 時，則開啟了元素的粘滯定位。
2. 粘滯定位和 relative 相對定位的特點基本一致，不同的是粘滯定位可以在元素到達某個位置時將其固定。
3. 但 IE 不支援，兼容性不好，所以很少用。

## Position 定位佈局

| 佈局<div style="width:100px"></div> | 說明                                                                                                      |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 水平佈局                            | 包含塊的內容區的寬度＝ left + margin-left/right + border-left/right + padding-left/right +`width` + right |
| 垂直佈局                            | 包含塊的高度＝ top + margin-top/bottom + padding-top/bottom + border-top/bottom + `height`+bottom         |

#### 當發生過度約束

1. 如果 9 個值中沒有 auto 則自動調整其中一值(left 或 right)以使等式滿足，如果有 auto，則自動調整 auto 的值以使等式滿足。
2. 因為 left 和 right 的值默認是 auto，所以如果不指定 left 和 right，則等式不滿足時，會自動調整這兩個值。

#### 可設置 auto 的值

margin、width、left、right

## 使用定位-水平垂直技巧

### 水平垂直置中

```scss
margin: auto;
left: 0;
right: 0;
top: 0;
bottom: 0;
```

### 水平置中

```scss
margin-left: auto;
margin-right: auto;
```

### 垂直置中

```scss
margin-top: auto;
margin-bottom: auto;
```
