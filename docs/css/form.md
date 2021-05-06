---
title: CSS-Form
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

| 用法 <div style="width:200px"></div> | 說明 <div style="width:200px"></div>                   | 備註 |
| ------------------------------------ | ------------------------------------------------------ | ---- |
| action                               | 表單要提交的服務器地址                                 |      |
| name                                 | 數據要提交到服務器中，必須要為元素指定一個 name 屬性值 |      |
| autocomplet                          | autocomplete="off"，關閉自動補全                       |      |
| readonly                             | 將表單項設置為唯讀，數據會提交                         |      |
| disabled                             | 將表單項設置為禁用，數據不會提交                       |      |
| autofocus                            | 設置表單項自動獲取焦點                                 |      |

```html
<form action="target.html"></form>
<input type="text" name="username" /><br />
<input type="password" name="password" />
<input type="radio" name="hello" value="a" />
<input type="radio" name="hello" value="b" checked />
<input type="checkbox" name="test" value="1" />
<input type="checkbox" name="test" value="2" />

//以下結果都一樣，都可以使用
<input type="submit" />
<!-- 重置按钮 -->
<input type="reset" />

<!-- 普通的按钮 -->
<input type="button" value="按钮" />

<button type="submit">提交</button>
<button type="reset">重置</button>
<button type="button">按钮</button>

<input type="text" name="username" value="hello" readonly />
<input type="text" name="username" value="hello" autocomplete="off" />
<input type="text" name="username" value="hello" disabled />
<input type="text" name="username" value="hello" autofocus />
```
