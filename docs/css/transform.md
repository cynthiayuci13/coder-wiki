---
title: CSS-Transform
date: 2021-01-19
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

## transform 變形

1. 用來設定元素的變形效果，包含形狀或位置。
2. 變形不會影響到頁面的佈局。
3. 平移元素，若是使用百分比(%)，是依據元素本身寬度計算。
4. 要注意多屬性時，先後順序也會影響變形效果

#### Value 值

| 用法 <div style="width:200px"></div> | 說明 <div style="width:200px"></div> | 備註 |
| ------------------------------------ | ------------------------------------ | ---- |
| translateX()                         | 沿著 x 軸方向平移                    |      |
| translateY()                         | 沿著 y 軸方向平移                    |      |
| translateZ()                         | 搭配 perspective                     |
| rotateX()                            | 沿著 x 軸方向旋轉                    |
| rotateY()                            | 沿著 y 軸方向旋轉                    |
| rotateZ()                            | 沿著 z 軸方向旋轉                    |
| scaleX()                             | 水平方向縮放                         |
| scaleY()                             | 垂直方向縮放                         |
| scale()                              | 雙方向的縮放                         |

#### 其它搭配使用

| 用法 <div style="width:150px"></div> | 說明                                                                                                           | 值 <div style="width:250px"></div> |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| transform-style                      | 設定 3d 變形效果，搭配 3D 效果使用                                                                             | preserve-3d                        |
| transform-origin                     | 設定變形的原點                                                                                                 | center(預設)                       |
| backface-visibility                  | 是否顯示元素的背面                                                                                             | hidden                             |
| perspective                          | 人眼距離網頁的距離，屬於立體效果(近大遠小)，預設情況下網頁是不支援透視，如果需要看見效果，必須要設定網頁的視距 | 數值                               |

#### 程式碼撰寫範例

```scss
.box {
  /* 應用-平移(translate)／旋轉(rotate) */
  transform: translateY(-100px);
  transform: translateX(100%);
  transform: translateX(50%) translateY(100px);
  transform: rotateZ(0.25turn); //1trun=360deg
  transform: rotateY(180deg) translateZ(400px);
  transform: translateZ(400px) rotateY(180deg);
  transform: rotateX(-180deg);
  transform: scale(2);

  /* 設計變形的原點-預設值center*/
  transform-origin: 20px 20px;
}
```

#### 如何處理 Z 軸

```scss
html {
  /* 設定當前網頁的視距為800px */
  perspective: 800px;
}
.box1 {
  width: 200px;
  height: 200px;
  background-color: #bfa;
  margin: 200px auto;
  transition: 2s;
}

body:hover .box1 {
  transform: translateZ(100px);
}
```

### transform 排版居中

```scss
.box {
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
```

### [差異]position 排版居中

雖然這個也可以達成居中排版，但這適合於元素的大小當有確定時。

```scss{2-3}
.box {
  width: 200px; //要有這個
  height: 200px; //要有這個
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
```

### [範例]翻牌效果

```html
<div class="box1">
  <img src="image.jpg" alt="翻牌圖片" />
</div>
```

```scss{2,9,13,14}
html {
  perspective: 800px;
}
.box1 {
  width: 320px;
  height: 320px;
  background-color: #bfa;
  margin: 200px auto;
  transition: 2s;
}
body:hover .box1 {
  transform: rotateY(180deg);
  backface-visibility: hidden;
}
```

### [範例]圖片縮放效果

```html
<div class="img-wrapper">
  <img src="image.jpg" />
</div>
```

```scss
.img-wrapper {
  width: 200px;
  height: 200px;
  border: 1px red solid;
  overflow: hidden;
}

img {
  transition: 0.2s;
}

.img-wrapper:hover img {
  transform: scale(1.2);
}
```
