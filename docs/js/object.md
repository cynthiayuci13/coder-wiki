---
title: JS-Object 對象
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

## 何謂 Object 對象

在 JS 中來表示一個人的信息(name gender age)<br>

```javascript
var name = '孫悟空';
var gender = '男';
var age = 18;
```

- 如果使用基本數據類型的數據，我們所創建的變數都是獨立，不能成為一個整體。
- 對象屬於一種複合的數據類型，在對象中可以保存多個不同數據類型的屬性。
- 對象的分類：
  1. 內建對象
     - 由 ES 標準中定義的對象，在任何的 ES 的實現中都可以使用
     - 比如：Math String Number Boolean Function Object....
  2. 宿主對象
     - 由 JS 的運行環境提供的對象，目前來講主要指由瀏覽器提供的對象
     - 比如 BOM DOM
  3. 自定義對象
     - 由開發人員自己創建的對象

## 創建對象

- 使用`new`關鍵字調用的函數，是構造函數 constructor，構造函數是專門用來創建對象的函數。
- 使用 typeof 檢查一個對象時，會返回 object。
- JS 中的變數都是保存到記憶體中，基本數據類型的值直接在`棧內存記憶體`中儲存，值與值之間是獨立存在，修改一個變數不會影響其他的變數；而對象是保存到`堆內存記憶體`中的，每創建一個新的對象，就會在堆記憶體中開出一個新的空間，而變數保存的是對象的`記憶體地址(對象的引用)`，如果兩個變數保存的是同一個對象引用，當一個通過一個變數修改屬性時，另一個也會受到影響。

第一種方式<br>
單純創建一個空對象

> 文法<br>new Objent();

```javascript
var obj = new Objent();
```

第二種方式<br>

- 可以在創建對象時，直接指定對象中的屬性。
- 對象屬性名可以加引號也可以不加，建議不加。

> 文法<br>{屬性名:屬性值,屬性名:屬性值....};

```javascript
var obj = {
  name: '孫悟空', //'name': '孫悟空'也行
  gender: '男',
  age: 18,
  test: { name: '沙和尚' }, //對象還可以是對象
};
```

### 命名屬性

- 對象的屬性名不強制要求遵守標識符的規範，什麼亂七八糟的名字都可以使用，但是我們使用是還是盡量按照標識符的規範去做。
- JS 對象的`屬性值`，可以是`任意的數據類型`(string/number/boolean/undefind/null)，甚至也可以是一個對象。

  - 新增對象中的屬性

  > 文法<br>對象.屬性名 = 屬性值;

  - 讀取對象中的屬性，如果讀取對象中沒有的屬性，不會報錯而是會返回`undefined`。

  > 文法<br>對象.屬性名

  - 修改對象中的屬性。

  > 文法<br>對象.屬性名=屬性值

  - 刪除對象中的屬性。

  > 文法<br>delete 對象.屬性名

```javascript
var obj = new Object();
console.log(obj);

結果==>會是一個空的對象`{}`

//obj中添加一個name屬性、gender屬性、age屬性
obj.name = "孫悟空";
obj.gender = "男";
obj.age = 18;
console.log(obj);

結果==>`{name: "孫悟空", gender: "男", age: 18}`

console.log(obj.name);
結果==>`孫悟空`

//舊值修改為新值
obj.name ='YuciChen';
結果==>`YuciChen`

//刪除
delete obj.name
```

### 更靈活屬性名

使用`[]`這種形式去操作屬性，更加的靈活，可以直接傳遞一個`變數`，這樣變數值是多少就會讀取那個屬性。

> 文法<br>對象["屬性名"] = 屬性值

```javascript
obj['name'] = 'yuci';

//將屬性名放入一個變數讀取
var n = 'name';
console.log(obj[n]);
```

### 檢查對象中是否有此屬性

通過該運算符可以檢查一個對象中是否含有指定的屬性，如果有則返回 true，沒有則返回 false。

> 文法<br>"屬性名" in 對象

```javascript
var obj=new Object();
obj["name"]='yuci';
console.log("name" in obj)

結果==>true

var obj = {
  name:"孫悟空",
  age:18,
  gender:"男",
  address:"花果山"
};

for(var n in obj){
  console.log("屬性名:"+n);
  console.log("屬性值:"+obj[n]);
}

結果==>
屬性名 name
屬性名 age
屬性名 gender
屬性名 address

結果==>
屬性值 孫悟空
屬性值 18
屬性值 男
屬性值 花果山
```

## 對象函數

- 對象的屬性值可以是任何的數據類型，也可以是個函數。
- 函數也可以稱為對象的屬性，如果一個函數作為一個對象的屬性保存，調用這個函數就說調用對象的方法(method)。

```javascript
var obj = new Object();
obj.name = '孫悟空';
obj.sayname = function() {
  console.log(obj.name);
};

//調用方法
obj.sayName();
---

var obj2 = {
  name: '豬八戒',
  age: 18,
  sayName: function() {
    console.log(obj2.name);
  },
};

obj2.sayName();
```

## 優化-使用工廠模式來創建對象

透過參數傳入，就可以創建批量的對象

```javascript
//傳入name,age,gender參數
function createPerson(name, age, gender) {
  //創建一個新的對象
  var obj = new Object();

  //添加屬性
  obj.name = name; //參數
  obj.age = age;
  obj.gender = gender;

  //將對象返回
  return obj;
}

function createDog(name, age) {
  var obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.sayHello = function() {
    alert('汪汪~~');
  };

  return obj;
}

var obj2 = createPerson('yuci', 18, '女');
var obj3 = createPerson('john', 28, '男');
var dog = createDog('奶蓋', 3);
console.log(dog);
console.log(obj2);
console.log(obj3);
```

此圖無法區分對象，到底是人還是狗？

![](/doc-img/2021-02-06-00-02-57.png)

## 優化-構造函數

依據上方使用工廠模式來創建對象，可以更加方便創建批量的對象，可是會有一個缺點是無法區分對象，例如創建人的對象與動物對象。此時可以透過構造函數來將對象進行分類。

- 構造函數就是一個普通的函數，創建方式和普通函數沒有區別。
- 不同的是構造函數習慣上`首字母大寫`。
- 普通函數是直接調用，而構造函數需要使用 `new 關鍵字`來調用。
- 使用同一個構造函數創建的對象，我們稱為一類對象。
- 我們將通過一個構造函數創建的對象，稱為是該類的實例。

#### 構造函數的執行流程

1. 立刻創建一個新的對象。
2. 將新建的對象設定為函數中 this，在構造函數中可以使用 this 來引用新建的對象。
3. 逐行執行函數中的代碼。
4. 將新建的對象作為返回值返回。

#### this 不同情況

1. 當以函數的形式調用時，this 是 window。
2. 當以方法的形式調用時，誰調用方法 this 就是誰。
3. 當以構造函數的形式調用時，this 就是新創建的那個對象。

範例：創建一個構造函數，專門用來創建 Person 與 Dog 對象

```javascript
//創建Person對象
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.sayName = function() {
    alert(this.name);
  };
}

//創建Dog對象
function Dog(name, age) {
  this.name = name;
  this.age = age;
}

//創建Person實例
var per = new Person('Yuci', 18, '女');
var per2 = new Person('John', 16, '男');
var per3 = new Person('Mary', 38, '女');

//創建Dog實例
var dog1 = new Dog('奶蓋', 18);

console.log(per);
console.log(per2);
console.log(per3);
console.log(dog1);
```

此圖為 console.log 結果，會看到對象有被區分了
![](/doc-img/2021-02-05-23-58-11.png)

## instanceof 實例檢查

- 檢查一個對象是否是一個類的實例，如果是，則返回 true，否則返回 false。
- 所有的對象都是 Object 的後代，所以任何對象和 Object 左 instanceof 檢查時都會返回 true。

> 文法<br>對象 instanceof 構造函數

```javascript
console.log(per instanceof Person);
(結果) => true;

console.log(dog1 instanceof Person);
(結果) => false;

console.log(dog1 instanceof Dog);
(結果) => true;

console.log(dog instanceof Object);
(結果) => true;
```

## 優化-構造函數內建方法

- 目前我們的方法是在構造函數內部創建的，也就是構造函數每執行一次就會創建一個新的 sayName 方法，也是所有實例的 sayName 都是唯一的。這樣就導致構造函數執行一次就會創建一個新的方法，執行 10000 次就會創建 10000 個新的方法，而 10000 個方法都是一摸一樣的
- 思考如何完全可以`使所有的對象共享同一個方法`，請接續 phototype 原型對象了解寫在全局的缺點...回來改寫。

```javascript
function Person(name, age, gender) {
  // this.sayName = function() {
  //   alert(this.name);
  // };
  this.sayName = fun;
}

//將sayName方法在全局作用域中定義
function fun() {
  alert(this.name);
}
```

```javascript
//將sayName方法改為在Person構造函數之原型對象裡面
Person.prototype.sayName = function() {
  alert(this.name);
};
```

## 清理暫存垃圾

- 當一個對象沒有任何的變數或屬性對它進行引用，這種對象已不在使用，但卻會佔用大量的記憶體空間，導緻程式運行變慢。
- 在 JS 中擁有自動的垃圾回收機製，會自動將這些垃圾對象從記憶體中銷毀，我們不需要也不能進行垃圾回收的操作。我們需要做的只是要將不再使用的對象設定 `null`即可。

```javascript
var obj = new Object();

//對對象進行各種操作。。。。
obj = null;
```
