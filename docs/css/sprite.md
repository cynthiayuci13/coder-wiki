---
title: CSS-Sprite
date: 2021-01-26
---

<style>
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
</style>

## 為什麼要使用 Sprite

1. 圖片屬於網頁中的外部資源，外部資源都需要瀏覽器單獨發送請求加載，瀏覽器加載外部資源時是按需求加載，用則加載，不用則不加載。
2. 使用 Sprite 的好處是可以將多個小圖片統一保存到一個大圖片中，然後通過調整 background-position 來顯示圖片，這樣圖片會同時加載到網頁中，就可以有效的避免出現圖片閃爍的問題(因為在讀取圖片)。這個技術在網頁中應用十分廣泛，被稱為 CSS-Sprite，也稱為雪碧圖。
3. 一次性將多個圖片加載進頁面，降低請求的次數，加快訪問速度，提升用戶的體驗。

```sass
 .box2{
    width: 42px;
    height: 30px;
    background-image: url('./img/sprite.png');
    background-position: -58px -338px;
}
```

## 雪碧圖使用步驟

1. 先確定要使用的圖標。
2. 測量圖標的大小。
3. 根據測量結果創建一個元素。
4. 將雪碧圖設置為元素的背景圖片。
5. 設置一個偏移量以顯示正確的圖片。

<div class="center-img">
  <img src="/doc-img/2021-01-26-12-44-56.png" />
  <p>amozon網站使用sprite範例</p>
</div>

```sass
.box1{
  height: 271px;
  width: 132px;
  background-image: url(./img/11/bigtap-mitu-queue-big.png);
  background-position: 0 0;
  transition: 0.3s steps(4); //看有幾張動圖就幾個step
}
.box1:hover{
   background-position: -528px 0;  //整張圖的總寬度
}
```

## Sprite+transtion 動畫方法

可以將多張小圖合成一張大圖，製造成類似 gif 動圖那種效果。

<div class="center-img">
  <img src="/doc-img/2021-01-26-12-52-40.png" />
</div>

```sass
.box1{
    width: 256px;
    height: 256px;
    margin: 0 auto;
    background-image: url('./img/12/bg2.png');
    animation: run 1s steps(6) infinite; //step(6) 代表圖片影格有6格
}

/* 創建關鍵幀 */
@keyframes run {
  from{
      background-position: 0 0;
  }

  to{
      background-position: -1536px 0; //量好圖片總寬度
  }
}
```
