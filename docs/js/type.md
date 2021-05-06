---
title: JS-資料型別與運算
date: 2021-01-26
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

## 資料型別

在 JS 中一共有六種數據類型，其中 String／Number／Boolean／Null／ Undefined 屬於基本數據類型，而 Object 屬於引用數據類型。

- String 字串
- Number 數值
- Boolean 布林值
- Null 空值
- Undefined 未定義
- Object 對象

### String 字串

- 在 JS 中字符串需要使用引號引起來。
- 使用雙引號或單引號都可以，但是不要混著用。
- 引號不能嵌套，雙引號不能放雙引號，單引號不能放單引號。
- 在字串中我們可以使用`\`作為轉義字符。

```javascript
var str = 'hello';
str = '我說:"今天天氣真不錯！"';

<!-- prettier-ignore -->
str = "Your\'s"; //若要保留'，請加入轉義字符\
```

### Number 數值

1. 在 JS 中所有的數值都是 Number 類型，包括整數和浮點數(小數)。
2. 數字最大值 Number.MAX_VALUE：1.7976931348623157e+308，數字最小值(大於 0 的最小值) Number.MIN_VALUE：5e-324。
3. 如果使用的數字超過最大值，則會返回`Infinity`，代表正無窮，使用 typeof 檢查 Infinity 也會返回 number。
4. `NaN` 是一個特殊的數字，表示 Not A Number，使用 typeof 檢查一個 NaN 也會返回 number。
5. 在 JS 中整數的運算基本可以保證精確，但要注意浮點運算，可能得到一個不精確的結果，所以䀆量不要使用 JS 進行對精確度要求比較高的運算。

### Boolean 布林值

主要用來做邏輯判斷，使用 typeof 檢查一個佈爾值時，會返回 boolean。

- true：表示真
- false：表示假

### Null 空值

1. Null 空值類型的值只有一個，就是 null，null 這個值專門用來表示一個為空的對象。
2. 使用 typeof 檢查一個 null 值時，會返回 object。

### Undefined 未定義

1. Undefined 未定義類型的值只有一個，就 undefind。
2. 當宣告一個變數，並未給序賦值時，它的值就是 `undefined`。
3. 使用 typeof 檢查一個 undefined 時也會返回 undefined。

### Object 對象

## 使用 typeof 判斷變數型別

> 文法：`typeof` 變數

- typeof 就是運算符，可以來獲得一個值的類型，它會將該值的類型以`字串(string)`的形式返回。
- 檢查字符串時，會返回 string。
- 檢查數值時，會返回 number。

```javascript
/* 數字123 */
var a = 123;
console.log(typeof a)

結果==>number

/* 字符串123 */
var b = '123';
console.log(typeof b)

結果==>string
```

## 強制類型轉換

1. 指將一個數據類型強制轉換為其他的數據類型。
2. 可轉換類型為 String／Number／Boolean，轉 Null 與 undefined 沒意義。

### 強制轉換 String

> **第一種方法**<br>調用`toString()`方法

- 該方法不會影響到原變數，它會將轉換的結果返回。
- null 和 undefined 這兩個值沒有 toString()方法，如果調用他們的方法，會報錯`Cannot read property 'toString' of null/undefined`。

```javascript
/* Number to String */
var a = 123;
a = a.toString();
結果==>"123"

/* Boolean to String  */
a = true;
a = a.toString();
結果==>"true"

/* null not to String  */
a = null;
a = a.toString();
結果==>報錯

/* undefined not to String  */
a = undefined;
a = a.toString();
結果==>報錯

console.log(typeof a);
console.log(a);
```

<br>

> **第二種方法**<br>調用`String()`函數

- 將被轉換的數據作為參數傳遞給函數。
- 使用 String()函數做強制類型轉換時，對於 Number 和 Boolean 實際上就是調用的 toString()方法；但是對於 null 和 undefined，就不會調用 toString()方法，它會將 null 直接轉換為`"null"`(字串)，將 undefined 直接轉換為`"undefined"`。

```javascript
/* Number to String */
var a = 123;
a = String(a);
結果==>"123"

/* null to String */
a = null;
a = String(a);
結果==>"null"

/* undefined to String */
a = undefined;
a = String(a);
結果==>"undefined"

console.log(typeof a);
console.log(a);
```

### 強制轉換 Number

> **第一種方法**<br>調用`Number()`函數

#### 字串轉數字

1. 如果是純數字的字符串，則直接將其轉換為數字。
2. 如果字符串中有非數字的內容，則轉換為 `NaN`，請改為使用第二種 parseInt()或 parseFloat()方法。
3. 如果字符串是一個空串或者是一個全是空格的字符串，則轉換為`0`。

#### 布林值轉數字

true 轉成 1<br>false 轉成 0

#### null 轉數字

0

#### undefined 轉數字

NaN

```javascript
var a = '123';
a = Number(a);
結果==>123

a = false;
a = Number(a);
結果==>0

a = null;
a = Number(a);
結果==>0

a = undefined;
a = Number(a);
結果==>NaN

a = "";
a = Number(a);
結果==>0

console.log(typeof a);
console.log(a);
```

<br>

> **第二種方法**<br>調用`parseInt()`,`parseFloat()`函數

- 專門用來對付字串，可以將一個字符串中的有效的整數內容取出來，然後轉換為 Number。
- 不可以拿來其它類型使用，如果對非 String 使用會先將變數轉換為字串後，在轉數字，例如：當參數裡面放布林值時，會將 true 轉換為字串，但因判別裡面未有數字，所以會回傳`NaN`。
- parseInt() 把一個字符串轉換為一個整數。
- parseFloat() 把一個字符串轉換為一個浮點數，作用與 parseInt()一樣，差別在有小數點。

```javascript
a = '123567a567px';
a = parseInt(a);
結果==>123567

a = 198.23;
a = parseInt(a);
結果==>198

a = '123.456.789px';
a = parseFloat(a);
結果==>123.456

a = true;
a = parseInt(a);
結果==>NaN

//可以在parseInt()中傳遞一個第二個參數，來指定數字的進制
a = parseInt(a, 10);
```

### 強制轉換 Boolean

> 調用`Boolean()`函數

#### 數字轉布林值

除了 0 和 NaN，其餘的都是 true

#### 字串轉布林值

除了空字串，其餘的都是 true

#### null 與 undefined 轉布林值

都為 false

#### object

對象會轉換為 true

```javascript
/* Number to Boolean */
var a = 123; //正負值數字
a = -123;
a = Boolean(a);
結果==>true

var a = Infinity;
a = Boolean(a);
結果==>true

var a = 0;
a = Boolean(a);
結果==>false

var a = NaN;
a = Boolean(a);
結果==>false

/* String to Boolean */
var a = "hello";
a = Boolean(a);
結果==>true

var a = "";
a = Boolean(a);
結果==>false

/* null to Boolean */
var a = null;
a = Boolean(a);
結果==>false

/* undefined to Boolean */
var a = undefined;
a = Boolean(a);
結果==>false

console.log(typeof a);
console.log(a);
```

## 算數運算符號

1. 當對非 Number 類型的值進行運算時，會將這些值轉換為 `Number` 然後在運算。
2. 任何值和 NaN 做運算都得 NaN。

### 加法(+)

- 可以對兩個值進行加法運算，並將結果返回。
- 如果對`兩個字符(string)`進行`加法`運算，則會做拼接，並將兩個字符串拚接為一個字符返回。
- 任何值和字符串做加法運算，都會先轉換為字符，然後再和字符串做拼接。

```javascript
var a = 123;
var result = a + 1;
結果==>124

result = 456 + 789;
結果==>1245

result = true + 1; //true自動轉換number，結果為1
結果==>2

result = true + false;
結果==>1

result = 2 + null;//null自動轉換number，結果為0
結果==>2

result = 2 + NaN; //任何值和 NaN 做運算都得 NaN
結果==>NaN

result = "你好" + "大帥哥"; //兩字串會全轉字串在拼接，不會轉number
結果==>"你好大帥哥"

result = 123 + "1"; //任何值和字符串做加法運算，都會先轉換為字符
結果==>"1231"

result = true + "hello";
結果==>"truehello"

result = 1 + 2 + "3";
結果==>"33"

result = "1" + 2 + 3;
結果==>"123"
```

### 補充-使用加法轉換字串小技巧

上述提到強制轉換 String 有兩種方式，分別為 toString()與 String()，在這裡還有一種技巧也可以。`利用任何值和字符串相加都會轉換為字符，並做拼接的特點`，隱式的類型轉換，由瀏覽器自動完成，實際上它也是調用 String()函數。

> 任意的數據類型 `+` `""(空字串)` =>即可將其轉換為 String

```javascript
var c = 123;
c = c + "";
結果==>"123"

var c = null;
c = c + "";
結果==>"null"
```

### 減法(-)

可以對兩個值進行減法運算，並將結果返回。

```javascript
result = 100 - 5;
結果==>95

result = 100 - true;
結果==>99

result = 100 - "1"; //不是加法，減法一樣轉換為number
結果==>99
```

### 補充-使用減法轉換數值小技巧

之前強制轉換數值使用 Number()，但有提到`任何值做- * /運算時都會自動轉換為Number`的特點做隱式的類型轉換，可以通過為一個值`-0`來將其轉換為 Number。原理和 Number()函數一樣，使用起來更加簡單。

> 任意的數據類型 `-` `0` =>即可將其轉換為 Number

```javascript
var d = "123";
d = d - 0;
結果==>123
```

### 乘法(\*)

可以對兩個值進行乘法運算。

```javascript
result = 2 * 2;
結果==>4

result = 2 * "8";
結果==>16

result = 2 * undefined;
結果==>NaN

result = 2 * null;
結果==>0
```

### 除法(/)

可以對兩個值進行除法運算。

```javascript
result = 4 / 2;
結果==>2

result = 3 / 2;
結果==>1.5
```

### 餘數(%)

相除之後未整除之餘數。

```javascript
result = 9 % 3;
結果==>3

result = 9 % 4;
結果==>1

result = 9 % 5;
結果==>4
```

## 補充-使用一元運算符轉換數值小技巧

原理和 Number()函數一樣，可以對一個其他的數據類型使用`+`，來將其轉換為 number。

```javascript
result = 1 +"2" + 3;
結果==>"123"

result = 1 + +"2" + 3; //字串前在加一個`+`，即轉正數
結果==>6

result = 1 + +true + 3;
結果==>5
```

## 補充-進制表示法

正常是使用 10 進制表示法。

1. 16 進制的數字，則需要以`0x`開頭。
2. 8 進制的數字，則需要以`0`開頭。
3. 2 進制的數字，則需要以`0b`開頭，但是不是所有的瀏覽器都支援。

```javascript
/* 16進制 */
a = 0x10;
a = 0xff;
a = 0xcafe;

/* 8進制 */
a = 070;

/* 2進制 */
a = 0b10;

//向"070"這種字符串，有些瀏覽器會當成8進制解析，有些會當成10進制
a = '070';

//可以在parseInt()中傳遞一個第二個參數，來指定數字的進制
a = parseInt(a, 10);
```

## 遞增與遞減

### 遞增(++)

- 通過遞增可以使變數在自身的基礎上增加 1。
- 遞增分成兩種：後++(a++) 和 前++(++a)
- 無論是那一種都會立即使原變數的值自增 1，但兩者不同的是 a++和++a 的值不同。
  - a++的值等於`原變數的值`（第一次，自增前的值）
  - ++a 的值等於`新值` （第一次，自增後的值）

```javascript
/* a++ */
var a = 1;
a++; //第一次
結果==>1

a++; //第二次
結果==>2

/* ++a */
var a = 1;
++a; //第一次
結果==>2

++a; //第二次
結果==>3

var d = 20;
var result = d++ + ++d + d ; //d++(20) + ++d(22) + 22
結果==>64
```

### 遞減(--)

- 通過遞增可以使變數在自身的基礎上減 1。
- 遞增分成兩種：後--(a--) 和 前--(--a)
- 無論是那一種都會立即使原變數的值自減 1，但兩者不同的是 a--和--a 的值不同。
  - a--的值等於`原變數的值`（第一次，自減前的值）
  - --a 的值等於`新值` （第一次，自減後的值）

## 邏輯運算符號

總共有三種邏輯運算符。

### 不等於(!)

- 所謂非運算就是值對一個布林值進行取反操作，true 變 false，false 變 true。
- 如果對一個值進行兩次取反，它不會變化。
- 如果對非布林值進行運算，則會將其轉換為`布林值`後再取反。

```javascript
var a = false;
a = !a;
結果==>true

var a = false;
a = !!a;
結果==>false
```

### 補充-使用不等於(!)強制轉換布林小技巧

我們可以利用上述特點，來將一個其他的數據類型轉換為布林值，可以為一個任意數據類型取兩次反，來將其轉換為布林值，原理和 Boolean()函數一樣。

```javascript
var b = 10; //對非布林值進行運算，則會將其轉換為布林值後再取反
b = !b;
結果==>false

var b = 10; //對非布林值進行運算，則會將其轉換為布林值後再取反
b = !!b;
結果==>true
```

### 等於(&&)

- 運算規則
  - 兩個值中黽要有一個值為 `false`就返回 false。<br>
  - 兩個值都為 `true` 時，才會返回 true。
  - 如果`第一個值為 false`，則不會看第二個值。

```javascript
/* 如果兩個值都是true則返回true */
var result = true && true;
結果==>true

/* 只要有一個false，就返回false */
result = true && false;
result = false && true;
result = false && false;
結果==>false
```

### 或者(||)

- 運算規則
  - 兩個值中隻要有一個`true`，就返回 true。
  - 如果兩個值都為`false`，才返回 false。
  - 如果`第一個值為true`，則不會檢查第二個值。

```javascript
/* 兩個都是false，則返回false */
result = false || false;
結果==>false

/* 只要有一個true，就返回true */
result = true || false;
result = false || true ;
result = true || true ;
結果==>true
```

### 等於(&&)與或者(||)與非布林值進行運算

- 當對`非布林值`進行與或運算時，會先將其轉換為布林值，然後再運算，並且返回原值。
- `等於(&&)`運算規則
  - 如果第一個值為`true`，則必然返回第二個值。
  - 如果第一個值為`false`，則直接返回第一個值。
- `或者(||)`運算規則
  - 如果第一個值為`true`，則直接返回第一個值。
  - 如果第一個值為`false`，則返回第二個值。

```javascript
/* 兩個值都為true，則返回後面的 */
result = 5 && 6;
結果==>6

/* 如果兩個值中有false，則返回false */
result = 0 && 2;
result = 2 && 0;
結果==>0

/* 如果兩個false，則返回最前面的false */
result = NaN && 0;
結果==>NaN

result = 0 && NaN;
結果==>0
```

```javascript
/* 如果第一個值為true，則直接返回第一個值 */
result = 2 || 1;
result = 2 || NaN;
result = 2 || 0;
結果==>2

/* 如果第一個值為false，則直接返回第二個值 */
result = NaN || 1;
結果==>1

result = NaN || 0;
結果==>0

result = "" || "hello";  //空字串為false
結果==>"hello"

result = -1 || "你好"; //-1為true
結果==>-1
```

## 賦值運算符號

| 符號 | 說明                    |
| ---- | ----------------------- |
| +=   | a += 5 等價於 a = a + 5 |  |
| -=   | a -= 5 等價於 a = a - 5 |  |
| \*=  | a _= 5 等價於 a = a _ 5 |  |
| /=   | a /= 5 等價於 a = a / 5 |  |
| %=   | a %= 5 等價於 a = a % 5 |  |

## 關係運算符號

通過關係運算符可以比較兩個值之間的大小關係，如果關係成立它會返回 true，如果關係不成立則返回 false。

| 符號 | 說明                                                                                    |
| ---- | --------------------------------------------------------------------------------------- |
| >    | 判斷符號左側的值是否大於右側的值，如果關係成立，返回 true，如果關係不成立則返回 false。 |  |
| >=   | 判斷符號左側的值是否大於或等於右側的值                                                  |  |
| <    | 小於                                                                                    |  |
| <=   | 小於等於                                                                                |  |

#### 當非數字比較時

- 對於非數值進行比較時，會將其轉換為`數字`然後在比較。
- 字串轉數字為 NaN，任何值和 NaN 做任何比較都是 false。
- 如果符號兩側的值都是字符串時，不會將其轉換為數字進行比較，而會分別比較字符串中字符的`Unicode 編碼`，比較字符編碼時是一位一位進行比較，在實際應用上可以拿它來進行英文排序使用。
- 如果比較的兩個字符串型的數字，可能會得到不可預期的結果，所以在比較兩個字符串型的數字時，一定要轉型。

```javascript
result = 5 > 10;
結果==>false

result = 5 > 5;
結果==>false

result = 5 >= 5;
結果==>true

result = 1 > true; //會將非數值轉換數字，true為1
結果==>false

result = 1 >= true;
結果==>true

result = 1 > "0";
結果==>true

result = 10 <= "hello"; //字串轉數字為NaN，任何值和NaN做任何比較都是false
結果==>false

result = true > false; //false為0,true為1
結果==>true

result = "11" < "5"; //不會轉數字，而是去比較字串的Unicode 編碼，比較第一位1<5
結果==>true

result = "abc" < "bcd";
結果==>true

result = "11123123123123123123" < "5"; //正常應該是會大於才對，但因為兩邊都是字串，5大於第一位數字1
結果==>true

result = "11123123123123123123" < +"5"; //加上+轉型數字
結果==>true

```

## 補充-Unicode 編碼

在字符串中使用轉義字符輸入 Unicode 編碼`\u四位編碼`

```javascript
console.log('\u2620');
```

在網頁中使用 Unicode 編碼`&#編碼`，但這裡的編碼需要的是 10 進制，而 Unicode 為 16 進制。

```html
<h1>&#9760;</h1>
```

## 關係運算符號

- 相等運算符用來比較兩個值是否相等，如果相等會返回 true，否則返回 false。
- undefined 衍生自 null，所以這兩個值做相等判斷時，會返回 true。
- NaN 不和任何值相等，包括他本身。

| 符號 | 說明                                                                                                         |
| ---- | ------------------------------------------------------------------------------------------------------------ |
| ==   | 當使用==來比較兩個值時，如果值的類型不同，則會自動進行類型轉換，將其轉換為相同的類型，然後在比較。           |  |
| !=   | 用來判斷兩個值是否不相等，如果不相等返回 true，否則返回 false，不相等也會對變數進行自動的類型轉換。          |  |
| ===  | 用來判斷兩個值是否全等，它和相等類似，不同的是它不會做自動的類型轉換，如果兩個值的類型不同，直接返回 false。 |  |
| !==  | 用來判斷兩個值是否不全等，和不等類似，不同的是它不會做自動的類型轉換，如果兩個值的類型不同，直接返回 true。  |  |

```javascript
var a = 10;
a == 4;
結果==>false

"1" == 1; //會自動進行類型轉換，通常數字最多
結果==>true

true == "1"
結果==>true

null == 0;  //這個比較特別，並非轉數字比較，所以就記下來吧！
結果==>false

undefined == null
結果==>true

NaN == NaN
結果==>false

10 != 5
結果==>true

"abcd" != "abcd"
結果==>false

"123" == 123; //會自動轉換成相等
結果==>true

"123" === 123; //三個等於，不會自動類型轉換
結果==>false

1 != "1"; //自動轉換，1會等於1
結果==>false

1 !== "1"; //不自動轉換類型
結果==>true
```

### 使用 isNaN 判斷 NaN

> `isNaN()`函數

判斷一個值是否是 NaN，如果該值是 NaN 則返回 true，否則返回 false。

```javascript
var b = NaN;
console.log(isNaN(b)); //判斷b的值是否是NaN
結果==>true
```

## 三元運算表達式

> 條件表達式`?`語句 1`:`語句 2;

- 條件運算符在執行時，首先對條件表達式進行求值，如果該值為 true，則執行語句 1，並返回執行結果，如果該值為 false，則執行語句 2，並返回執行結果。
- 如果條件的表達式的求值結果是一個非布林值，會將其轉換為布林值然後在運算。

```javascript
var a = 300;
var b = 143;
var c = 50;

var max = a > b ? a : b; //true返回a
結果==>300

"hello"?alert("語句1"):alert("語句2");
結果==>語句1
```
