---
title: Vue使用介紹
date: 2021-02-25
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

[Vue.js 官網](https://cn.vuejs.org/index.html)

## 理解 MVVM 實現

![](/doc-img/2021-02-25-23-58-06.png)

- Model：data 數據對象
- View：模版頁面
- ViewModel:創建 Vue 實例，負責 Dom 監聽與數據資料綁定，指令(以 `v-開頭`的自定義標簽屬性)。

## Vue 基礎配置

1. 引入 Vue.js

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

2. 創建 Vue 對象<br>
   `el` : 指定根 element(選擇器)。<br>
   `data` : 初始化數據(頁面可以訪問)。
3. 雙向數據綁定使用`v-model`，顯示數據使用兩個大括號`{ {xxx} }`。
4. 安裝 Vue.js devtools<br>
   [chrome 套件-Vue Devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
   方便 Debug 使用。

```html
/* 模版 */
<div id="test">
  <input type="text" v-model="username" />
  <p>hello {{username}}</p>
</div>
```

```javascript
/* 配置對象 options */
const vm = new Vue({
  // 配置選項(option)
  el: '#test', // element: 指定用vue來管理頁面中的哪個標簽區域
  data: {
    username: 'yuci',
  },
});
```

## 強制數據綁定與事件監聽綁定

- 強制數據綁定使用

  > `v-bind:xxx`='yyy'，簡寫就是只寫`:xxx`

- 綁定事件監聽，所有事件函式要寫在`method`裡面
  > `v-on:click`='xxx'，簡寫是`@click`

```html
/* 雙向數據綁定 */
<p>{{content}}</p>
<p>{{content.toUpperCase()}}</p>

/* 強制數據綁定 */
<a v-bind:href="url">Url寫在data裡面</a>
<a :href="url">Url寫在data裡面</a>

/* 綁定事件監聽 */
<button v-on:click="test">點我</button>
<button @click="test">點我</button>

/* 函式加上參數也可以，會先找有沒有data，若沒有就直接顯示參數裡旳內容 */
<button @click="test2(content)">點我</button>
```

```javascript
new Vue({
  el: '#app',
  data: {
    content: 'NBA I Love This Game',
    url: 'http://www.google.com',
  },
  methods: {
    test() {
      alert('好啊!!!');
    },
    test2(msg) {
      alert(msg);
    },
  },
});
```

## 多數據連結

範例：想要輸入姓氏與姓名時，同時更新全名。

- 單向的意思是指輸入姓氏與姓名時，全名會同步更新。但若直接更新全名，則無法同步改變姓氏與姓名。

```html
<div id="app">
  輸入姓氏: <br />
  <input type="text" placeholder="First Name" v-model="firstName" /><br />
  輸入姓名:<br />
  <input type="text" placeholder="Last Name" v-model="lastName" /><br />
  使用computed-全名<br />
  <input type="text" placeholder="fullName" v-model="fullName" /><br />
  使用watch-全名2<br />
  <input type="text" placeholder="fullName2" v-model="fullName2" /><br />
  使用$watch-全名3<br />
  <input type="text" placeholder="fullName3" v-model="fullName3" /><br />
  使用computed雙向綁定-全名4<br />
  <input type="text" placeholder="fullName3" v-model="fullName4" />
</div>
```

### 使用 computed(單向)

- 注意如果你為一個計算屬性使用了箭頭函數，則 this 不會指向這個組件的實例。

```javascript
const vm = new Vue({
  el: '#app',
  data: {
    firstName: 'Yihsin',
    lastName: 'Chen',
  },
  /* 計算屬性配置 */
  computed: {
    fullName() {
      return this.firstName + '-' + this.lastName;
    },
  },
});
```

### 使用 watch(單向)

監視指定的屬性，當屬性變化時，同步改變。

```javascript
const vm = new Vue({
  el: '#app',
  data: {
    firstName: 'Yihsin',
    lastName: 'Chen',
    fullName2: 'Yihsin Chen',
  },
  watch: {
    firstName: function(value) {
      this.fullName2 = value + '- ' + this.lastName;
    },
    lastName: function(value) {
      this.fullName2 = this.firstName + '-' + value;
    },
  },
});
```

### 使用 `vm.$watch`(單向)

同上。

```javascript
const vm = new Vue({
  el: '#app',
  data: {
    firstName: 'Yihsin',
    lastName: 'Chen',
    fullName3: 'Yihsin Chen',
  },
});
vm.$watch('firstName', function(value) {
  this.fullName3 = value + '- ' + this.lastName;
});
vm.$watch('lastName', function(value) {
  this.fullName3 = this.firstName + '-' + value;
});
```

### 使用 computed(雙向)

- 通過`get()`與`set()`實現對屬性數據的顯示和監視。
- 計算屬性存在緩存，多次讀取只執行一次 get()計算。

```javascript
const vm = new Vue({
  el: '#app',
  data: {
    firstName: 'Yihsin',
    lastName: 'Chen',
  },
  /* 計算屬性配置 */
  computed: {
    fullName4: {
      // 當獲取當前屬性值時自動調用，返回當前屬性值。
      get() {
        console.log(this.firstName + this.lastName);
        return this.firstName + '-' + this.lastName;
      },
      // 當屬性值發生了改變時自動調用，監視當前屬性值變化，同步更新相關的其它屬性值。
      set(value) {
        const fullname = value.split('-');
        console.log(fullname);
        this.firstName = fullname[0];
        this.lastName = fullname[1];
      },
    },
  },
});
```

## class 與 style 綁定

- 若需要動態改變 CSS 時可使用`:class`，同時也能擁有固定 class 的樣式。
- style 綁定，為 boolean 值判斷。
  > :class=`"{classname:dataname,classname2:dataname2}"`

```html
<div id="app">
  /* class為字串綁定 */
  <p class="textOrigin" :class="className">設定p標籤的class名稱</p>

  /* class為對象綁定 */
  <p :class="{textOrigin:hasOrigin,textDynamic:hasDynamic}">
    Boolean動態更新class
  </p>

  /* style綁定 */
  <p :style="{color:originColor,fontSize:fontSize+'px'}">
    使用style標籤進行更新class
  </p>

  <button @click="update">更新按鈕</button>
  <button @click="update2">boolean更新按鈕</button>
  <button @click="update3">style更新按鈕</button>
</div>
```

```scss
.textOrigin {
  font-size: 30px;
}
.textDynamic {
  color: red;
}
.textUpate {
  color: blue;
  font-size: 16px;
}
```

```javascript
const vm = new Vue({
  el: '#app',
  data: {
    className: 'text-dynamic',
    hasOrigin: true,
    hasDynamic: false,
    originColor: 'red',
    fontSize: 50,
  },
  methods: {
    update() {
      this.className = 'textUpate';
    },
    update2() {
      this.hasOrigin = false;
      this.hasDynamic = true;
    },
    update3() {
      this.originColor = 'green';
      this.fontSize = 30;
    },
  },
});
```

## v-if 與 v-show 條件式比較

如果需要頻繁使用`v-show`較好

```html
<div id="app">
  <p v-if="click">已點選</p>
  <p v-else>尚未點選</p>

  <p v-show="click">已點選</p>
  <p v-show="!click">尚未點選</p>

  <button @click="click=!click">點我</button>
</div>
```

```javascript
const vm = new Vue({
  el: '#app',
  data: {
    click: false,
  },
});
```

下圖顯示結果你會發現用`v-if`會隠藏在 html 結構的行為，而`v-show`則為我們平常在使用 style 樣式 display:none 與 display:block 的用法。

![](/doc-img/2021-02-26-16-42-57.png)
