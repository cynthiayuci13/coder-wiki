---
title: CSS-Flex
date: 2021-01-25
---

<style>
.page .side-bar{
  width:15rem !important;
}
.level-3{
  padding-top:0 !important;
  padding-bottom:0 !important;
}
</style>

## Flex 彈性盒

1. CSS 另一種佈局手段，主要用來代替浮動來完成頁面佈局。
2. 可以使元素具有彈性，讓元素可跟隨頁面的大小改變。
3. 使用 display 來設定彈性容器，放在彈性容器裡面的子元素稱之為彈性元素。

```scss
display: flex; //塊彈性容器
display: inline-flex; //行內彈性容器
```

### flex-direction

使用 fiex-direction 指定容器中彈性元素的排列方式。
| 用法 <div style="width:200px"></div> | 說明 <div style="width:200px"></div> | 備註 |
| ------------------------------------ | ------------------------------------------ | ---- |
| row | 預設值，彈性元素在容器中水平排列（左向右） | |
| row-reverse | 彈性元素在容器中水平反相排列（右向左） | |
| column | 彈性元素垂直排列（自上向下） | |
| column-reverse | 彈性元素垂直反相排列（自下向上） | |

### flex-wrap

設定彈性元素是否在彈性容器中自動換行。
| 用法 <div style="width:200px"></div> | 說明 <div style="width:200px"></div> | 備註 |
| ------------------------------------ | ------------------------------------------ | ---- |
| nowrap | 預設值，元素不會自動換行 | |
| wrap | 元素沿著輔軸方向自動換行 | |
| wrap-reverse | wrap-reverse 元素沿著輔軸反方向換行 | |

### flex-flow

wrap 和 direction 的簡寫屬性

```scss
flex-flow: row wrap;
```

### justify-content

如何分配主軸上的空白空間（主軸上的元素如何排列）
| 用法 <div style="width:200px"></div> | 說明 <div style="width:200px"></div> | 備註 |
| ------------------------------------ | ------------------------------------------ | ---- |
| flex-start | 預設，元素沿著主軸起邊排列 | |
| flex-end | 元素沿著主軸終邊排列 | |
| center | 元素居中排列 | |
| space-around | 空白分佈到元素左右兩側 | |
| space-between | 空白均勻分佈到元素間 | |
| space-evenly | 空白分佈到元素的單側(支援性較差) | |

### align-items

元素在輔軸上如何對齊，以及與元素間的關係
| 用法 <div style="width:200px"></div> | 說明 <div style="width:200px"></div> | 備註 |
| ------------------------------------ | ------------------------------------------ | ---- |
| stretch | 預設值，將元素的長度設定為相同的值 | |
| flex-start | 元素不會拉伸，沿著輔軸起邊對齊 | |
| flex-end | 沿著輔軸的終邊對齊 | |
| center | 居中對齊 | |
| baseline | 基線對齊(較少用) | |

### align-content

輔軸空白空間的分佈，同 align-items 用法。

### align-self

用來覆蓋當前彈性元素上的 align-items，同 align-items 用法。

## 彈性元素的屬性

### flex-grow

指定彈性元素的伸展數值，當父元素有多餘空間的時，子元素如何伸展，父元素的剩餘空間，會按照比例進行分配。

### flex-shrink

指定彈性元素的收縮數值，父元素中的空間不足以容納所有的子元素時，如果對子元素進行收縮。

```scss
flex-grow: 0; //預設
flex-grow: 1; //讓flexbox自動伸展
flex-shrink: 1; //預設
flex-shrink: 0; //不強制收縮
```

### flex-basis

1. 指定的是元素在主軸上的基礎長度。
2. 如果主軸是橫向的，則該值指定的就是元素的寬度。
3. 如果主軸是縱向的，則該值指定的是就是元素的高度。
4. 預設值是 auto，表示參考元素自身的高度(width)或寬度(height)。
5. 如果傳遞了一個具體的數值，則以該值為準。

```scss
flex-basis: auto;
```

### flex 簡寫

flex 可以設定彈性元素所有的三個樣式。

```scss
flex: 增長(flex-grow) 縮減(flex-shrink) 基礎(flex-basis);
flex: 0 1 auto; //flex: initial;
flex: 1 1 auto; //flex:auto;
```

### order

決定彈性元素的排列順序。

```scss
li:nth-child(1) {
  order: 2;
}

li:nth-child(2) {
  order: 3;
}

li:nth-child(3) {
  order: 1;
}
```
