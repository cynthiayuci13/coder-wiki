---
title: Vuepress文檔說明
date: 2021-01-19
subSidebar: 'auto'
# categories: 前端學習
# tags:
#  - tag2
---

## 參考資源

[VuePress 官網](https://v1.vuepress.vuejs.org/zh/)<br>
[VuePress-markdown 教學](https://v1.vuepress.vuejs.org/zh/guide/markdown.html#%E9%93%BE%E6%8E%A5)

## 文章摘要

:::tip
這是一個提示
:::

::: warning
這是一個警告
:::

::: danger
這是一個危險警告
:::

::: details 後面可以自訂名稱
這是一個 collapse 收合塊，在 IE / Edge 中不生效

```js
console.log('Hello,VuePress!');
```

:::

```text
:::tip
放置文字或程式碼都可行
:::
```

```text
:::waring
放置文字或程式碼都可行
:::
```

```text
:::danger
放置文字或程式碼都可行
:::
```

```text
:::details 後面可以自訂名稱
放置文字或程式碼都可行
:::
```

### 代碼中行高亮

- 可單行／多行
- 行數區間：例如`{5-8}`
- 多個單行：例如`{2,4,6}`
- 也可綜合上述：例如`{2,5-8,11}`

```js {4}
export default {
  data() {
    return {
      msg: 'Highlighted!',
    };
  },
};
```

### Emoji

[Emoji 列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

:tada: :100:

```text
:tada: :100:
```
