---
title: JS-條件式
date: 2021-01-30
---

<style>
body{
  font-size:1rem !important;
}
.page .side-bar{
  width:20rem !important;
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

## if 條件式語句

if 語句在執行時，會先對條件表達式進行求值判斷，如果條件表達式的值為 true，則執行 if 後的語句，如果條件表達式的值為 false，則不會執行 if 後的語句。

```javascript
/* 文法一 */
if(條件表達式){
  語句...
}

/* 文法二 */
if(條件表達式){
  語句...
}else{
  語句...
}

/* 文法三 */
if(條件表達式){
  語句...
}else if{
  語句...
}else if{
  語句...
}else if{
  語句...
}else{
  語句...
}
```

```javascript
//這樣的寫法會遇到一個問題，年齡90，在第一個條件式就成立了，所以不會在到䈗面更符合的條件。
age = 90;
if (age > 17) {
  alert('你已經成年了');
} else if (age > 30) {
  alert('你已經中年了');
} else if (age > 60) {
  alert('你已經退休了');
} else {
  alert('你歲數挺大的了~~');
}
```

```javascript
//上方問題改寫後
age = 90;
if (age > 17 && age <= 30) {
  alert('你已經成年了');
} else if (age > 30 && age <= 60) {
  alert('你已經中年了');
} else if (age > 60 && age <= 80) {
  alert('你已經退休了');
} else {
  alert('你歲數挺大的了~~');
}
```

### 練習一

```javascript
//prompt 彈出輸入視窗
var score = prompt('請輸入你的期末成績(0-100)：');

//防呆考量：使用者可能會輸入超過100或小於0的數字／輸入非數字isNaN
if (score > 100 || score < 0 || isNaN(score)) {
  alert('你輸入不正確的分數，請重新輸入');
} else {
  if (score == 100) {
    alert('送你一輛BMW');
  } else if (score >= 80) {
    alert('送你一台iphone');
  } else if (score >= 60) {
    alert('送你一本書');
  } else {
    alert('你的成績不及格，沒有獎勵');
  }
}
```

## switch 條件式語句

- 如果比較結果為 true，則從當前 case 處開始執行代碼。當前 case 後的所有的代碼都會執行。
- 我們可以在 case 的後面加上一個 `break` 關鍵字，這樣可以確保會執行當前 case 語句後跳出，而不會執行其他的 case。
- 如果比較結果為 false，則繼續向下比較。
- 如果所有的比較結果都為 `false`，則執行 `default` 後的語句。
- switch 語句和 if 語句的功能實際上有重複的，使用 switch 可以實現 if 的功能，同樣使用 if 也可以實現 switch 的功能，所以我們使用時，可以根據自己的習慣選擇。

```javascript
/* 文法 */
switch(條件表達式){
  case 表達式:
    語句...
    break;
  case 表達式:
    語句...
    break;
  default:
    語句...
    break;
}
```

```javascript
/* 第一種寫法 */
var score = 33;
//使用parseInt將及格條件範圍縮小成5個條件，其餘default不及格
switch (parseInt(score / 10)) {
  case 10:
  case 9:
  case 8:
  case 7:
  case 6:
    console.log('及格');
    break;
  default:
    console.log('不及格');
    break;
}

/* 第二種寫法 */
var score = 99;
switch (true) {
  case score >= 60:
    console.log('及格');
    break;
  default:
    console.log('不及格');
    break;
}
```

## while 循環語句

創建一個循環，往往需要三個步驟：<br>

1. 創初始化一個變數。
2. 在循環中設定一個條件表達式。
3. 定義一個更新表達式，每次更新初始化變數。

```javascript
/* 文法 */
while(條件表達式){
  語句...
}
```

```javascript
//1.創初始化一個變數
var i = 0;
//2.在循環中設定一個條件表達式
while (i < 100) {
  //3.定義一個更新表達式，每次更新初始化變數
  i++;
  console.log('i:' + i);
}
```

### 練習一 投資年利率

假如投資的年利率為 5%，試求從 1000 塊增長到 5000 塊，需要花費多少年

```javascript
var money = 1000; //定義初期存款金額
var year = 0; //定義初期年
while (money < 5000) {
  money = money * 1.05;
  year++;
}
console.log('已存了多少錢', money);
console.log('一共需要幾年才能存到', year);
```

### 練習二(改良 if 範例版本)

增加 循環判斷，當輸入錯誤時，應該要提供重新輸入

```javascript
while (true) {
  //prompt 彈出輸入視窗
  var score = prompt('請輸入你的期末成績(0-100)：');
  //假如輸入在正確數值範圍，則離開循環
  if (score >= 0 && score <= 100) {
    break;
  }
  //若輸入錯誤，給予錯誤提示
  alert('你輸入不正確的分數，請重新輸入');
}

//防呆考量：使用者可能會輸入超過100或小於0的數字／輸入非數字isNaN
if (score > 100 || score < 0 || isNaN(score)) {
} else {
  if (score == 100) {
    alert('送你一輛BMW');
  } else if (score >= 80) {
    alert('送你一台iphone');
  } else if (score >= 60) {
    alert('送你一本書');
  } else {
    alert('你的成績不及格，沒有獎勵');
  }
}
```

## for 循環語句

在 for 循環中，一樣也分成三個步驟<br>

1.  初始化表達式
2.  條件表達式
3.  更新表達式

```javascript
/* 文法 */
for(初始化表達式;條件表達式;更新表達式){
   語句...
}
```

### 練習一 奇數之和

列印 1-100 之間所有奇數之和

```javascript
//宣告總和變數
var sum = 0;

//循環
for (var i = 1; i <= 100; i++) {
  //假如除2不會整除有餘數，就代表是奇數
  if (i % 2 != 0) {
    sum = sum + i;
  }
}
console.log('1到100奇數總和：', sum);
結果==>2500
```

### 練習二 7 倍數個數及總和

列印 1-100 之間所有 7 的倍數的個數及總和

```javascript
var sum = 0;
var count = 0;
for (var i = 1; i <= 100; i++) {
  if (i % 7 == 0) {
    sum = sum + i;
    count++;
  }
}
console.log('7的倍數總和：', sum);
console.log('7的倍數字共有幾個：', count);
總和結果==>735
個數結果==>14
```

### 練習三 水仙花數

水仙花數是指一個 3 位數，它的每個位上的數字的 3 次冪之和等於它本身。<br>
例如：1^3 + 5^3 + 3^3 = 153，請列印所有的水仙花數。

```javascript
for (var i = 100; i <= 999; i++) {
  //獲取百位數字
  var bai = parseInt(i / 100);
  //獲取十位數字
  var shi = parseInt((i - bai * 100) / 10);
  //獲取個位數字
  var ge = i % 10;
  //計算水仙花數
  if (bai * bai * bai + shi * shi * shi + ge * ge * ge == i) {
    console.log(i);
  }
  // console.log('百位數字：', bai);
  // console.log('十位數字：', shi);
  // console.log('個位數字：', ge);
}
結果==>153.370.371.407
```

### 練習四 質數

在頁面中接收一個用戶輸入的數字，並判斷該數是否是質數。<br>
能被 1 和自身以外的數法整除的數字就稱為`質數`，1 不是質數也不是合數，質數必須是大於 1 的自然數。

```javascript
var num = prompt('請輸入一個數字來判斷是不為質數：');
//宣告預設判斷質數為true
var flag = true;

//防呆機制，輸入數字不得為1
if (num <= 1) {
  console.log('請輸入>1的數字');
} else {
  //判斷是否為質數
  //因為不能輸入1，所以從2開始(2-num)
  //例如輸入5，就要與(2/3/4)相除，看是否能被整除
  for (i = 2; i <= num; i++) {
    //接下來判斷num是否能被i整除
    //可是思考一下為什麼不是使用 !=0
    if (num % 2 == 0) {
      //會被整除就不是質數
      flag = false;

      //一旦進入判斷，則證明i不可能是質數了，此時循環再執行已經沒有任何意義了，使用break來結束循環
      break;
    }
  }
}
if (flag) {
  alert(num + '為質數');
} else {
  alert(num + '不是質數');
}
```

### 練習五 打印\*圖形

打印以下圖形

```text
*
**
***
****
*****

*****
****
***
**
*
```

```javascript
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < i + 1; j++) {
    document.write('*');
  }
  document.write('<br>');
}
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 5 - i; j++) {
    document.write('*');
  }
  document.write('<br>');
}
```

### 練習六 99 乘法表

列印 99 乘法表

```javascript
for (var i = 1; i <= 9; i++) {
  for (var j = 1; j <= i; j++) {
    document.write(
      '<span style="margin-right:10px">' + j + '*' + i + '=' + i * j + '</span>'
    );
  }
  document.write('<br>');
}
```

## 補充-break 觀念

1.  `break` 關鍵字可以用來退出 switch 或循環語句，不能在 if 語句中使用。
2.  break 關鍵字，會立即終止離他最近的那個循環語句。

```javascript
for (var i = 0; i < 5; i++) {
  console.log(i);

  //為何這裡可以在if語句中使用，是因為這裡的break是影響外層for循環
  if (i == 2) {
    break;
  }
}
```

```javascript
for (var i = 0; i < 5; i++) {
  console.log('@外層循環' + i);
  for (var j = 0; j < 5; j++) {
    //離這層最近，所以立即終止這個循環
    break;
    console.log('內層循環:' + j);
  }
}
```

## 補充-continue 觀念

1. if 語句中也不能使用。
2. continue 關鍵字可以用來跳過當次循環，同樣 continue 也是預設只會對離他最近的循環循環起作用。

```javascript
for (var i = 0; i < 5; i++) {
  if (i == 2) {
    //跳過當次循環
    continue;
  }

  console.log(i);
}
```

## 補充-優化程式碼讀取時間

1. 使用開頭`console.time('字串名稱')`與結尾`console.timeEnd('字串名稱')`，字串名稱頭與尾都要相同，否則會跑不出來。
2. 可以拿來測試加上 break 前後時間是否有所差異。

```javascript
//開頭加上console.time
console.time('測試讀取時間');
var sum = 0;

for (var i = 1; i <= 10000; i++) {
  if (i % 2 != 0) {
    sum = sum + i;
    //測試有加break與沒加break前後時間差異
    break;
  }
}
//結束加上console.timeEnd
console.timeEnd('測試讀取時間');
測試結果=>有差！
```

## 補充 Math.sqrt()

> `Math.sqrt()`，開立平方根

```javascript
//列印2-100之間所有的數
for (var i = 2; i <= 100; i++) {
  var flag = true;
  //原本要判斷100的數字，現在使用平方減少所有數字都要判斷，例如100就只要檢到2-10數字即可
  for (var j = 2; j <= Math.sqrt(i); j++) {
    if (i % j == 0) {
      flag = false;
      break;
    }
  }
  //如果是質數，則列印i的值
  if (flag) {
    //console.log(i);
  }
}
```
