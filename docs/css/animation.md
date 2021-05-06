---
title: CSS-Animation
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


1. 動畫和過渡類似，都是可以實現一些動態的效果，不同的是過渡需要在某個屬性發生變化時才會觸發，動畫可以自動觸發動態效果。
2. 設定動畫效果，必須先要設定一個關鍵幀，關鍵幀設定了動畫執行每一個步驟

| 用法 <div style="width:200px"></div> | 說明 <div style="width:200px"></div> | 屬性                                                                                                                                                                                                                   |
| ------------------------------------ | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| animation-name                       | 要對當前元素生效的關鍵幀的名字       |                                                                                                                                                                                                                        |
| animation-duration                   | 動畫的執行時間                       |                                                                                                                                                                                                                        |
| animation-delay                      | 動畫的延遲                           |                                                                                                                                                                                                                        |
| animation-timing-function            | 動畫函式                             |                                                                                                                                                                                                                        |
| animation-iteration-count            | 動畫執行的次數                       | 數字、infinite(無限執行)                                                                                                                                                                                               |
| animation-direction                  | 指定動畫運行的方向                   | normal：預設值從 from 向 to 運行，每次都是這樣<br> reverse：從 to 向 from 運行，每次都是這樣<br>alternate：從 from 向 to 運行，重複執行動畫時反向執行<br>alternate-reverse：從 to 向 from 運行，重複執行動畫時反向執行 |
| animation-play-state                 | 設定動畫的執行狀態                   | running(預設值，動畫執行)<br>paused(動畫暫停)                                                                                                                                                                          |
| animation-fill-mode                  | 動畫的填充模式                       | none：預設值，動畫執行完畢元素回到原來位置<br> forwards：動畫執行完畢元素會停止在動畫結束的位置<br> backwards：動畫延時等待時，元素就會處於開始位置<br> both：結合了 forwards 和 backwards                             |

#### 基本寫法
```scss
animation-name: test;
animation-duration: 4s;
animation-delay: 2s;
animation-timing-function: ease-in-out;
animation-iteration-count: 1;
animation-direction: alternate-reverse;
animation-play-state: paused;
animation-fill-mode: both;
```

#### 關鍵幀
```scss
@keyframes test {
  /* from表示動畫的開始位置 也可以使用0% */
  from {
    margin-left: 0;
    background-color: orange;
  }

  /* to動畫的結束位置，也可以使用100%*/
  to {
    background-color: red;
    margin-left: 700px;
  }
}
```

#### animation 簡寫

```scss
animation: test 2s 2 1s alternate;
```
