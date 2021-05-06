---
title: CSS-Transition
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

以指定一個屬性發生變化時的切換方式

| 用法<div style="width:200px"></div> | 說明                                                                                                                                                                                                     | 屬性 <div style="width:310px"></div>                                                                                                                                                                                                                                                                                |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| transition-property                 | 1. 指定要執行過渡的屬性。<br>2. 多個屬性間使用逗號(,)隔開。<br>3. 如果所有屬性都需要過渡，則使用 all 關鍵字。<br>4. 大部分屬性都支援過渡效果，注意過渡時必須是從一個有效數值向另外一個有效數值進行過渡。 |                                                                                                                                                                                                                                                                                                                     |
| transition-duration                 | 1. 指定過渡效果的持續時間<br>2. 時間單位可以是秒(s)和毫秒(ms)，1s = 1000ms                                                                                                                               |                                                                                                                                                                                                                                                                                                                     |
| transition-timing-function          | 1. 過渡的時序函數<br>2. 指定過渡的執行的方式                                                                                                                                                             | ease(預設值，慢速開始，先加速，再減速)<br>linear(勻速運動)<br> ease-in(加速運動)<br>ease-out(減速運動)<br>ease-in-out(先加速，後減速)<br>cubic-bezier()指定時序函數，https://cubic-bezier.com<br>steps()，分步執行過渡效果，可以設定二個值<br> end：在時間結束時執行過渡(預設值)<br>start：在時間開始時執行過渡<br> |
| transition-delay                    | 過渡效果的延遲，等待一段時間後在執行過渡                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                     |

#### 基本寫法

```scss
/* transition-property */
transition-property: height, width;
transition-property: all;

/* transition-duration */
transition-duration: 100ms, 2s;
transition-duration: 2s;

/* transition-timing-function */
transition-timing-function: ease;
transition-timing-function: cubic-bezier(0.24, 0.95, 0.82, -0.88);
transition-timing-function: steps(2, start);

/* transition-delay */
transition-delay: 2s;
```

#### transition 簡寫

1. 可以同時設定過渡相關的所有屬性
2. 如果要寫延遲，則兩個時間中第一個是持續時間，第二個是延遲

```scss
transition: 2s margin-left 1s cubic-bezier(0.24, 0.95, 0.82, -0.88);
```
