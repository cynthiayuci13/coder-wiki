---
title: JS-正則表達式
date: 2021-02-25
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

- 正則表達式用於定義一些字符串的規則。
- 計算機可以根據正則表達式，來檢查一個字符串是否符合規則，獲取將字符串中符合規則的內容提取出來。
- 使用 typeof 檢查正則對象，會返回 object。

## RegExp()創建正則表達式

第一種寫法：使用構造函數創建更加靈活

> var 變量 = new RegExp("正則表達式","匹配模式");

第二種寫法：使用字面量的方式創建更加簡單

> var 變量 = /正則表達式/匹配模式

```javascript
/* 第一種寫法 */
var reg = new RegExp('a');
console.log(reg);
(結果) => /a/;

/* 第二種寫法(更簡單) */
var reg = /a/i;
```

## test()測試正則表達式

- 使用這個方法可以用來檢查一個字符串是否符合正則表達式的規則，如果符合則返回 true，否則返回 false。
- 會嚴格檢查大小寫。
- 在構造函數中可以傳遞一個匹配模式作為第二個參數，`i` 忽略大小寫； `g` 全局匹配模式。
- 使用 `|` 表示`或者`的意思。
- `[]`也代表或者關係
  - [ab] == a|b
  - [a-z] 任意小寫字母
  - [A-Z] 任意大寫字母
  - [A-z] 任意字母
  - [0-9] 任意數字
- `[^ ]` 找除了以外的

```javascript
/* 這個正則表達式可以來檢查一個字符串中是否含有a */
var reg = new RegExp('a');
var str = 'abcd';
var str2 = 'bcd';
var str3 = 'Abcd';
var result = reg.test(str);
var result2 = reg.test(str2);
var result3 = reg.test(str3);

console.log(result);
(結果) => true;
console.log(result2);
(結果) => false;
console.log(result3);
(結果) => false; //因為是大寫關係

/* 加入匹配，忽略大小寫 */
var reg = new RegExp('a', 'i');
var str3 = 'Abcd';
var result3 = reg.test(str3);
console.log(result3);
(結果) => true;

/* 檢查一個字符串中是否有a或b */
var reg = /a|b/;
var str = 'bcd';
var str2 = 'cd';
var result = reg.test(str);
var result2 = reg.test(str2);

console.log(result);
(結果) => true;
console.log(result2);
(結果) => false;

/* 檢查是否為英文字母 */
var reg = /[a-z]/;
var str = 'bcd';
var str2 = '123';
var result = reg.test(str);
var result2 = reg.test(str2);

console.log(result);
(結果) => true;
console.log(result2);
(結果) => false;

/* 檢查一個字符串中是否含有 abc 或 adc 或 aec */
var reg = /a[bde]c/; //先找到規則就是頭為a，尾為c，中間為bde
var str = 'azc';
var str2 = '123';
var str3 = 'abc';
var str4 = 'adc';
var str5 = 'aec';
var result = reg.test(str);
var result2 = reg.test(str2);
var result3 = reg.test(str3);
var result4 = reg.test(str4);
var result5 = reg.test(str5);

console.log(result);
(結果) => false;
console.log(result2);
(結果) => false;
console.log(result3);
(結果) => true;
console.log(result4);
(結果) => true;
console.log(result5);
(結果) => true;

/* 檢查除了 abc 或 adc 或 aec以外的 */
var reg = /[^abc|^adc|^aec]/;
var str = 'abc';
var str2 = 'adc';
var str3 = 'azc';
var result = reg.test(str);
var result2 = reg.test(str2);
var result3 = reg.test(str3);

console.log(result);
(結果) => false;
console.log(result2);
(結果) => false;
console.log(result3);
(結果) => true;
```

## 搭配 split()

- 可以將一個字符串拆分為一個數組。
- 方法中可以傳遞一個正則表達式作為參數，這樣方法將會根據正則表達式去拆分字符串。
- 這個方法即使`不指定全局匹配，也會全都匹配`。

```javascript
/* 根據任意字母來將字符串拆分 */
var str = '1a2b3c4d5e6f7';
var result = str.split(/[A-z]/);
console.log(result);
(結果) => ['1', '2', '3', '4', '5', '6', '7'];
```

## 搭配 search()

- 可以搜索字符串中是否含有指定內容。
- 如果搜索到指定內容，則會返回`第一次出現`的索引，如果沒有搜索到返回-1。
- 它可以接受一個正則表達式作為參數，然後會根據正則表達式去檢索字符串。
- serach()只會查找第一個，即使`設置全局匹配也沒用`。

```javascript
/* 搜索字符串中是否含有abc 或 aec 或 afc */
var str = 'hello abc hello aec afc';
var str2 = 'hello';
var result = str.search(/a[bef]c/);
var result2 = str2.search(/a[bef]c/);
console.log(result);
(結果) => 6;
console.log(result2);
(結果) => -1;
```

## 搭配 match()

- 可以根據正則表達式，從一個字符串中將符合條件的內容`提取`出來。
- 默認情況下我們的 match 隻會找到第一個符合要求的內容，找到以後就停止檢索。
- 我們可以設置正則表達式為`全局匹配模式`，這樣就會匹配到所有的內容。
- 可以為一個正則表達式設置多個匹配模式，且順序無所謂。
- 會將匹配到的內容封裝到一個數組中返回。

```javascript
/* 提取所有英文 */
var str = '1a2a3a4a5e6f7A8B9C';
var result = str.match(/[a-z]/gi);
console.log(result);
(結果) => ['a', 'a', 'a', 'a', 'e', 'f', 'A', 'B', 'C'];
```

## 搭配 replace()

- 可以將字符串中指定內容替換為新的內容。
- 第一個參數被替換的內容，可以接受一個正則表達式作為參數。
- 第二個參數為新的內容。
- 默認只會替換第一個。

```javascript
/* 替換新內容 */
var str = '1a2a3a4a5e6f7A8B9C';
var result = str.replace(/[a-z]/ig,"+");
console.log(result);
(結果) =>1+2+3+4+5+6+7+8+9+;

/* 替換新內容為空字串 */
var str = '1a2a3a4a5e6f7A8B9C';
var result = str.replace(/[a-z]/ig,"");
console.log(result);
(結果) =>123456789;
```

## 量詞

- 通過量詞可以設置一個內容出現的次數

  - `{n}` 正好出現 n 次。
  - `{m,n}` 出現 m-n 次。
  - `{m,}` m 次以上。
  - `+` 至少一個，相當於{1,}。
  - `*` 0 個或多個，相當於{0,}。
  - `?` 0 個或 1 個，相當於{0,1}。

- 量詞只對第一個內容起作用，若要指定多量詞，請將指定量詞寫在`()`裡面。
- `^` 表示開頭
- `$` 表示結尾
- 如果在正則表達式中同時使用^ \$則要求字符串必須完全符合正則表達式。

```javascript
/* 量詞只對第一個內容起作用 */
var reg = /a{3}/;
var str = '1a2a3a'; //不是連續的
var str2 = '1aaa'; //連續a
var result = reg.test(str);
var result2 = reg.test(str2);

console.log(result);
(結果) => false;
console.log(result2);
(結果) => true;

/* 若要指定多量詞 */
var reg = /(ab){3}/;
var str = 'abababab'; //找至少超過3次，超過也算true
var result = reg.test(str);

console.log(result);
(結果) => true;

/* 若要指定找尋限定出現次數 */
var reg = /ab{1,3}/;
var str = 'ab';
var result = reg.test(str);

console.log(result);
(結果) => true;

/* 檢查一個字符串中是否以a開頭或結尾寫法 */
var reg = /^a/;
var reg2 = /a$/;
var str = 'ab';
var str2 = 'ba';
var result = reg.test(str);
var result2 = reg.test(str2);
var result3 = reg2.test(str2);

console.log(result);
(結果) => true;
console.log(result2);
(結果) => false;
console.log(result3);
(結果) => true;

/* 檢查一個字符串中以a是開頭也是結尾 */
var reg = /^a$/;
var str = 'ab';
var str2 = 'a';
var result = reg.test(str);
var result2 = reg.test(str2);

console.log(result);
(結果) => false;
console.log(result2);
(結果) => true;
```

### 範例-檢查一個字符串是否是一個合法手機號

手機號規則

1. 必須是 09 為開頭，共 2 碼
2. 後面 3-10 為任意數字，不得為英文，共 8 碼

```javascript
var reg = /09[0-9]{8}/;
var phoneStr = '0933123456';
var phoneStr2 = 'aaa0933123456bbbb';
var result = reg.test(phoneStr);
var result2 = reg.test(phoneStr2);
console.log(result);
(結果) => true;
console.log(result2);
(結果) => true; //在這裡出現了bug

/* 改寫bug，加上開頭與結尾判斷 */
var reg = /^09[0-9]{8}$/;
var phoneStr = '0933123456';
var phoneStr2 = 'aaa0933123456bbbb';
var result = reg.test(phoneStr);
var result2 = reg.test(phoneStr2);

console.log(result);
(結果) => true;
console.log(result2);
(結果) => true;
```

## \轉義字符

檢查一個字符串中是否含有 .

- `.` 表示任意字符，所以必須要進行轉義。
- 在正則表達式中使用`\`作為轉義字符。
  - `\.` 表示.。
  - `\\` 表示\。
  - `\w` 任意字母、數字、_ [A-z0-9_]。
  - `\W` 除了字母、數字、_ [^A-z0-9_]。
  - `\d` 任意的數字 [0-9]。
  - `\D` 除了數字 [^0-9]。
  - `\s` 空格。
  - `\S` 除了空格。
  - `\b` 單詞邊界(要是一個單字)。
  - `\B` 除了單詞邊界。

```javascript
var reg = /\./;
var str = 'ab.cd.d';
var str2 = 'abcdd';
var result = reg.test(str);
var result2 = reg.test(str2);
console.log(result);

(結果) => true;
console.log(result2);
(結果) => false;
```

- 注意：使用構造函數時，由於它的參數是一個字符串，而\是字符串中轉義字符，如果要使用\則需要使用`\\`來代替。

```javascript
var reg = new RegExp('\\.');
var reg = new RegExp('\\\\');
```

```javascript
/* 去除掉字符串中的前後的空格，但這也包含中間單字空格 */
var str = '    he  llo     ';
var result = str.replace(/\s/g, '');
console.log(result);
(結果) => hello; //這裡產生一個bug為除了去除前後的空格，就連中間的空格也被拿掉了

/* 去除掉字符串中的前後的空格+全區匹配 */
var str = '    he  llo     ';
var result = str.replace(/^\s*|\s*$/g, '');
console.log(result);
(結果) => hello;

/* 去除開頭的空格 */
var str = '    he  llo     ';
var result = str.replace(/^\s*/, ''); //*代表所有空格
console.log(result);
(結果) => he llo      ;

/* 去除結尾的空格 */
var str = '    he  llo     ';
var result = str.replace(/\s*$/, ''); //*代表所有空格
console.log(result);
(結果) =>        he llo;
```

## 郵件正則表達式
