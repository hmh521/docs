module.exports = [
    ['script', { src: "https://www.googletagmanager.com/gtag/js?id=G-Y62GB4CEGY",async: true}],
    ['script', {},
        " window.dataLayer = window.dataLayer || [];\
        function gtag(){dataLayer.push(arguments);}\
        gtag('js', new Date());\
        gtag('config', 'G-Y62GB4CEGY');"],
    ['link', {rel: 'icon', href: '/assets/img/favicon.ico'}],
    ['meta', {names: 'author', content: '轻狂帅哥'}],
    ['meta', {names: 'keywords', content: '学习，成长，轻狂帅哥的笔记'}],
    ['meta', {name: 'theme-color', content: '#3eaf7c'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ["meta", {"http-equiv": "Pragma", content: "no-cache"}],
    ["meta", {"http-equiv": "Cache-Control", content: "no-cache"}],
    ["meta", {"http-equiv": "Expires", content: "0"}],
    ['link', {rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png'}],
    [
        'link', { href: "https://cdn.jsdelivr.net/npm/@docsearch/css@alpha", rel: "stylesheet" }
    ],
    [
        'script', { src: "https://cdn.jsdelivr.net/npm/@docsearch/js@alpha" }
    ]
    // ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c'}],
    // ['meta', {name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png'}],
    // ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
]
