---
title: JS-Array 陣列
date: 2021-02-08
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

## 陣列介紹

- 數組也是一個對象。
- 它和我們普通對象功能類似，也是用來存儲一些值，不同的是普通對象是使用字符串作為屬性名的，而數組時使用數字來作為`索引(index)`操作元素。
- 索引從 0 的整數開始。
- 數組的存儲性能比普通對象要好，在開發中我們經常使用數組來存儲一些數據。

### 創建陣列對象

```javascript
/* 創建陣列對象 */

var arr = new Array();
//查詢為object對象
console.log(typeof arr);
(結果) => object;
```

### 增加陣列元素

> 語法<br>數組[索引] = 值

```javascript
/* 增加陣列元素 */
arr[0] = 10;
arr[1] = 120;
arr[2] = 130;

//不連續索引(不建議這樣)
arr[10] = 31;
arr[100] = 90;
```

### 直接往最後增加陣列元素

> 語法<br>數組[數組.length] = 值;

```javascript
arr[arr.length] = 70;
```

### 讀取陣列元素

- 可以使用`length`屬性來獲取數組的長度(元素的個數)。
- 對於`連續`的數組，使用 length 可以獲取到`數組的長度(元素的個數)`。
- 對於`非連續`的數組，使用 length 會獲取到`數組的最大的索引+1`，盡量不要創建非連續的數組。
- 如果讀取不存在的索引，他不會報錯而是返回`undefined`。

  > 語法<br>數組[索引]

```javascript
console.log(arr[2]);
(結果) => 130;

/* 依據上方範例，連續索引arr[0]-arr[2] */
console.log(arr.length);
(結果) => 3;

/* 依據上方範例，不連續索引 */
console.log(arr.length);
(結果) => 101;
```

### 修改陣列元素

- 如果修改的 length 大於原長度，則多出部分會空出來。
- 如果修改的 length 小於原長度，則多出的元素會被刪除。

```javascript
/* 大於原length */
arr.length = 10;
(結果) => [10, 120, 130, , , , , , , ,];

/* 小於原length */
arr.length = 2;
(結果) => [10, 120];
```

## 直接創建陣列與增加元素

```javascript
var arr = [1, 2, 3, 4, 5, 10];
console.log(arr[3]);
(結果) => 4;

/* 數組中的元素可以是任意的數據類型 */
arr = ['hello', 1, true, null, undefined];

/* 也可以是對象 */
var obj = { name: '孫悟空' };
arr[arr.length] = obj;
arr = [{ name: '孫悟空' }, { name: '沙和尚' }, { name: '豬八戒' }];

/* 也可以是函數 */
arr = [
  function() {
    alert(1);
  },
  function() {
    alert(2);
  },
];
//調用
console.log(arr[0]());

/* 數組中也可以放數組 */
arr = [
  [1, 2, 3],
  [3, 4, 5],
  [5, 6, 7],
];
console.log(arr[1]);
(結果) => [3, 4, 5];
```

### 使用 push()增加最後元素

該方法可以向數組的末尾添加一個或多個元素，`返回數組的新的長度`。

```javascript
var arr = ['孫悟空', '豬八戒', '沙和尚'];
var result = arr.push('yuci', 'jalenkite', 'yumi', 'ray');

console.log(arr);
(結果) => ['孫悟空', '豬八戒', '沙和尚', 'yuci', 'jalenkite', 'yumi', 'ray'];

//回傳陣列的新長度
console.log(result);
(結果) => 7;
```

### 使用 pop()刪除最後元素

刪除數組的最後一個元素，並將`被刪除的元素作為返回值返回`。

```javascript
var result2 = arr.pop();

console.log(arr);
(結果) => ['孫悟空', '豬八戒', '沙和尚', 'yuci', 'jalenkite', 'yumi'];

//回傳被刪除的元素
console.log(result2);
(結果) => ray;
```

### 使用 unshift()增加最前元素

向數組開頭添加一個或多個元素，`返回新的數組長度`，並重新調整順序。

```javascript
var result3 = arr.unshift('milk', 'cookie');

console.log(arr);
(結果) => [
  'milk',
  'cookie',
  '孫悟空',
  '豬八戒',
  '沙和尚',
  'yuci',
  'jalenkite',
  'yumi',
];

//回傳陣列的新長度
console.log(result3);
(結果) => 8;
```

### 使用 shift()刪除最前元素

可以刪除數組的第一個元素，並將被刪除的元素作為返回值返回`。

```javascript
var result4 = arr.pop();

console.log(arr);
(結果) => ['cookie', '孫悟空', '豬八戒', '沙和尚', 'yuci', 'jalenkite', 'yumi'];

//回傳被刪除的元素
console.log(result4);
(結果) => milk;
```

## 使用 for 將數組所有元素取出

```javascript
var arr = ['孫悟空', '豬八戒', '沙和尚', 'yuci', 'jalenkite', 'yumi', 'ray'];

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### 練習-將成年人列出為一個新陣列

```javascript
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
}

var per = new Person('yuci', 18);
var per2 = new Person('jalenkite', 28);
var per3 = new Person('yumi', 18);
var per4 = new Person('ray', 8);

//將上述對象存成一組陣列使用
var perArr = [per, per2, per3, per4];
console.log(perArr);

//建立一個成年人函數
function getAdult(arr) {
  //創建一個空的新陣列
  var newArr = [];

  //將perArr先取出來
  for (i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    var p = arr[i];
    if (p.age >= 18) {
      ////如果大於等於18，則將這個對象添加到newArr中
      newArr.push(p);
    }
  }

  //返回
  return newArr;
}

//檢查結果
var result = getAdult(perArr);
console.log(result);
```

## 使用 forEach()將數組所有元素取出

- 一般我們都是使用 for 循環去遍曆數組，JS 中還為我們提供了 forEach()方法，用來遍曆數組。
- 這個方法只支援 IE9 以上的瀏覽器。
- IE8 及以下的瀏覽器均不支援該方法，所以如果需要兼容 IE8，則不要使用 forEach，改使用 for 循環來遍曆。
- forEach()方法需要一個函數作為參數。
- 瀏覽器會在回調函數中傳遞三個參數：
  - 第一個參數，就是當前正在遍曆的元素
  - 第二個參數，就是當前正在遍曆的元素的索引
  - 第三個參數，就是正在遍曆的數組

```javascript
var arr = ['孫悟空', '豬八戒', '沙和尚', 'yuci', 'jalenkite', 'yumi', 'ray'];

arr.forEach(function(value, index, obj) {
  console.log(value, index, obj);
});
```

## 擷取刪除插入元素

### 使用 slice()擷取

> arr.slice(start,end)

- 擷取開始位置的索引，包含開始索引。
- 擷取結束位置的索引，不包含結束索引。
- 第二個參數可以省略不寫，此時會擷取從開始索引往後的所有元素。
- 索引可以傳遞一個`負值`，如果傳遞一個負值，則從後往前計算。-1 倒數第一個，-2 倒數第二個。
- 可以用來從數組`提取指定元素`。
- 該方法`不會改變元素數組`，而是將擷取到的元素封裝到一個新數組中返回。

```javascript
var arr = ['孫悟空', '豬八戒', '沙和尚', 'yuci', 'jalenkite', 'yumi', 'ray'];
var result = arr.slice(0, 3);

(結果) => ['孫悟空', '豬八戒', '沙和尚'];

/* 假如只有寫start開始位置，則擷取start後所有 */
var result = arr.slice(3);
(結果) => ['yuci', 'jalenkite', 'yumi', 'ray'];

/* 假如寫負值則為倒數 */
var result = arr.slice(1, -1);
(結果) => ['豬八戒', '沙和尚', 'yuci', 'jalenkite', 'yumi'];
var result = arr.slice(1, -2);
(結果) => ['豬八戒', '沙和尚', 'yuci', 'jalenkite'];
var result = arr.slice(-2);
(結果) => ['yumi', 'ray'];
```

### 使用 splice()刪除/插入

> arr.splice(start,deleteCount)

- 可以用於刪除數組中的指定元素。
- 使用 splice()會影響到原數組，會將指定元素從原數組中刪除，並將被刪除的元素作為返回值返回。
- 參數第一個，表示開始位置的索引
- 參數第二個，表示要刪除的數量，若為 0，則無刪除。
- 參數第三個及以後可以傳遞一些新的元素，這些元素將會自動插入到開始位置索引前面。

```javascript
var arr = ['孫悟空', '豬八戒', '沙和尚', 'yuci', 'jalenkite', 'yumi', 'ray'];
var result = arr.splice(0, 3);

/* 顯示刪除後會影響原陣列 */
console.log(arr);
(結果) => ['yuci', 'jalenkite', 'yumi', 'ray'];

/* 顯示要刪除3個 */
console.log(result);
(結果) => ['孫悟空', '豬八戒', '沙和尚'];

/* 第三個參數後可以替換或新增元素 */
var arr = ['孫悟空', '豬八戒', '沙和尚', 'yuci', 'jalenkite', 'yumi', 'ray'];
var result = arr.splice(0, 3, 'tom', 'mary');
(結果) => ['tom', 'mary', 'yuci', 'jalenkite', 'yumi', 'ray'];

/* 沒有刪除任何元素，但第三個參數後新增時，插入參數前 */
var arr = ['孫悟空', '豬八戒', '沙和尚', 'yuci', 'jalenkite', 'yumi', 'ray'];
var result = arr.splice(3, 0, 'tom', 'mary', 'john');
(結果) => [
  '孫悟空',
  '豬八戒',
  '沙和尚',
  'tom',
  'mary',
  'john',
  'yuci',
  'jalenkite',
  'yumi',
  'ray',
];
```

### 練習-去除數組中重複的數字

bug 補充說明：假若沒有加上 j--，則會發生相同的數字漏掉刪除，因為 j 與 i 在比對時，原本是比對 j(i+1)也就是下一組數字

```javascript
var arr = [1, 2, 3, 2, 2, 2, 2, 1, 3, 3, 4, 2, 5];

for (var i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
  for (var j = i + 1; j < arr.length; j++) {
    // console.log(arr[j]);
    if (arr[i] === arr[j]) {
     --; //記得要加上這個，不然會有bug
    }
   arr.splice(j, 1); //刪除重覆的j
      j  // console.log(arr[j]);
  }
  console.log(arr[i]);
}
```

## 連接元素

### 使用 concat()連接元素

> arr.concat(value1,value2,....valueN)

- concat()可以連接兩個或多個數組，並將新的數組返回。
- 該方法不會對原數組産生影響。


```javascript
var arr = ['孫悟空', '豬八戒', '沙和尚'];
var arr2 = ['yuci', 'jalenkite', 'yumi', 'ray'];
var arr3 = ['tom', 'mary', 'john'];

var result = arr.concat(arr2);
console.log(result);

var result = arr.concat(arr2, arr3);
console.log(result);

var result = arr.concat(arr2, arr3, 'hen', 'milk');
console.log(result);
```

### 使用 join()連接元素

> arr.join([separator]

- separator 用來隔開陣列中每個元素的字串。如果不指定連接符，則預設使用`,`作為連接符。
- 該方法可以將數組轉換為一個字符串。
- 該方法不會對原數組産生影響，而是將轉換後的字符串作為結果返回。
- 在 join()中可以指定一個字符串作為參數，這個字符串將會成為數組中元素的連接符。

```javascript
var arr = ['孫悟空', '豬八戒', '沙和尚'];
var arr2 = ['yuci', 'jalenkite', 'yumi', 'ray'];
var arr3 = ['tom', 'mary', 'john'];

/* 預設 */
var result = arr.join();
console.log(result);
(結果) => 孫悟空, 豬八戒, 沙和尚;
console.log(typeof result);

/* 指定連接符 */
var result = arr2.join('+');
console.log(result);
(結果) => yuci + jalenkite + yumi + ray;

var result = arr2.join('');
console.log(result);
(結果) => yucijalenkiteyumiray;
```

## 反轉元素

### 使用 reverse()反轉

- 該方法用來反轉數組（前面的去後面，後面的去前面）
- 該方法會直接修改原數組

```javascript
var arr = ['yuci', 'jalenkite', 'yumi', 'ray'];
var result = arr.reverse();
console.log(result);
console.log(arr);
```

## 排序元素

### 使用 sort()排序

> arr.sort([compareFunction])

- 可以用來對數組中的元素進行排序，也會影響原數組。
- compareFunction 參數為指定一個函式來定義排序順序。假如省略此參數，預設會按照 Unicode 編碼進行排序。
- 即使對於純數字的數組，使用 sort()排序時，也會按照 Unicode 編碼來排序，所以對數字進排序時，可能會得到錯誤的結果。例如 11 就會排在 1 的後面，這時就需要使用到`compareFunction`來自訂排序。
- 瀏覽器會根據回調函數的返回值來決定元素的順序。
  - 如果返回一個大於 0 的值，則元素會交換位置。
  - 如果返回一個小於 0 的值，則元素位置不變。
  - 如果返回一個 0，則認為兩個元素相等，也不交換位置。

```javascript
var arr = ['yuci', 'jalenkite', 'yumi', 'ray'];
var arr2 = ['e', 'a', 'g', 'b', 'z'];
var arr3 = [3, 4, 1, 2, 5, 11];

var result = arr.sort();
var result2 = arr2.sort();
var result3 = arr3.sort();

console.log(result);
(結果) => 'jalenkite', 'ray', 'yuci', 'yumi';
console.log(result2);
(結果) => 'a', 'b', 'e', 'g', 'z';

//這個會有問題
console.log(result3);
(結果) => 1, 11, 2, 3, 4, 5;
console.log(arr);
```

- 自訂函式來為數字排序

```javascript
var arr = [3, 4, 1, 2, 5, 11];

/* 由小排序到大(預設) */
var result = arr.sort(function(a, b) {
  //第一種方式(要寫比較多程式)
  if (a > b) {
    return 1; //大於 0，元素會交換位置
  } else if (a < b) {
    return -1; //小於 0 的值，則元素位置不變
  } else {
    return 0; //返回一個 0，則認為兩個元素相等，也不交換位置
  }
  //第二種方式
  return a - b;
});

/* 由大排序到小 */
var result2 = arr.sort(function(a, b) {
  //第一種方式(要寫比較多程式)
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }

  //第二種方式
  return b - a;
});

console.log(result);
(結果) => 1, 2, 3, 4, 5, 11; //正確

console.log(result2);
(結果) => 11, 5, 4, 3, 2, 1;
```
