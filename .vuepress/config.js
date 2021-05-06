module.exports = {
  title: "Yuci's CoderWiki ", //網站標題
  description: '',
  dest: './dist',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  theme: 'reco', //template
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'CSS', link: '/docs/css/', icon: 'reco-message' },
      { text: 'JS', link: '/docs/js/', icon: 'reco-message' },
      { text: 'Vue', link: '/docs/vue/', icon: 'reco-message' },
      {
        text: 'GitHub',
        icon: 'reco-github',
        link: 'https://github.com/cynthiayuci13',
        // items: [
        //   {
        //     text: 'GitHub',
        //     link: 'https://github.com/recoluan',
        //     icon: 'reco-github',
        //   },
        // ],
      },
      // { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
    ],
    sidebar: {
      '/docs/css/': [
        '',
        'csstips',
        'box-modal',
        'selector',
        'float',
        'flex',
        'sprite',
        'display-visibility',
        'background',
        'transition',
        'animation',
        'border',
        'margin',
        'position',
        'transform',
        'vercital-align',
        'white-space',
        'overflow',
        'box-shadow',
        'font',
        'form',
        'table',
      ],
      '/docs/js/': [
        '',
        'type',
        'conditional',
        'function',
        'scope',
        'this',
        'object',
        'prototype',
        'array',
        'date',
        'math',
        'string',
        'regex',
      ],
      '/docs/vue/': ['', 'intro', 'vuepress'],
    },
    type: 'home',
    // 部落格設定
    blogConfig: {
      category: {
        location: 2, // 在導航欄菜單中所佔的位置，預設2
        text: '分類', // 預設 “分類”
      },
      tag: {
        location: 3, // 在導航欄菜單中所佔的位置，預設3
        text: '標籤', // 預設 “標簽”
      },
    },
    friendLink: [
      // {
      //   title: '午後南雜',
      //   desc: 'Enjoy when you can, and endure when you must.',
      //   email: '1156743527@qq.com',
      //   link: 'https://www.recoluan.com',
      // },
      // {
      //   title: 'vuepress-theme-reco',
      //   desc: 'A simple and beautiful vuepress Blog & Doc theme.',
      //   avatar:
      //     'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
      //   link: 'https://vuepress-theme-reco.recoluan.com',
      // },
    ],
    logo: '/logo.png',
    // 搜索設定
    search: true,
    searchMaxSuggestions: 10,
    // 自動形成側邊導航
    // sidebar: 'auto',
    // 最後更新時間
    lastUpdated: 'Last Updated',
    // 作者
    author: 'cynthia.yuci13',
    // 作者頭像
    authorAvatar: '/avatar.png',
    // 備案號
    record: 'xxxx',
    // 項目開始時間
    startYear: '2021',
    /**
     * support for
     * 'default'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     */
    codeTheme: 'tomorrow', // default 'tomorrow'
    subSidebar: 'auto', //在所有頁麵中啓用自動生成子側邊欄，原 sidebar 仍然兼容
    mode: 'light', //預設 auto，auto 跟隨系統，dark 暗色模式，light 亮色模式
    modePicker: false, // 預設 true，false 不顯示模式調節按鈕，true 則顯示
    noFoundPageByTencent: false, //關閉404騰訊公益
    /**
     * 密鑰 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 設定 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true,
  },
};
