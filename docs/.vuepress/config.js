const moment = require('moment');

module.exports = {
    title: "轻狂帅哥",     // 网站的标题
    description: "轻狂帅哥的笔记",    // 网站的描述
    head: [
        ['link', {rel: 'icon', href: '/assets/img/favicon.ico'}],
        ['meta', {names: 'author', content: '轻狂帅哥'}],
        ['meta', {names: 'keywords', content: '学习，成长，轻狂帅哥的笔记'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png'}],
        // ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c'}],
        // ['meta', {name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png'}],
        // ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
    ],
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    moment.locale("zh-cn")
                    return moment(timestamp).format("LLLL")
                }
            }
        ],
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: {
                    message: "发现新内容可用",
                    buttonText: "刷新"
                }
            }
        ]
    ],
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            {text: '首页', link: '/'},
            {text: '关于我', link: '/about'},
            {text: 'External', link: 'https://www.baidu.com'},
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    {text: 'Chinese', link: '/language/chinese/'},
                    {text: 'Japanese', link: '/language/japanese/'}
                ]
            }
        ],
        lastUpdated: '更新时间',
        sidebar: [
            {
                title: '美丽的css',   // 必要的
                path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/css/css-aaa',
                    '/css/css-bbb',
                    '/css/css-ccc'
                ]
            },
        ]
    },

}
