const headConf = require('./config/headConf.js');
const pluginsConf = require('./config/pluginsConf.js');
const navConf = require('./config/navConf.js');

module.exports = {
    title: "轻狂帅哥",     // 网站的标题
    description: "轻狂帅哥的笔记",    // 网站的描述
    head: headConf,
    plugins: pluginsConf,
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: navConf,
        lastUpdated: '更新时间',
        markdown: {
            lineNumbers: true,
            externalLinks: {
                target: '_blank', rel: 'noopener noreferrer'
            }
        },
        algolia: {
            apiKey: 'c7ba53586e93bd9bd5664cae50421f8c',
            indexName: 'hhxgg',
            // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
            appId: '0XPM8AE7J8',
            // 搜索框显示的提示文本
            placeholder: '搜索',
            // 搜索框展开时显示的提示文本
            aligoliaOptions: {
                facetFilters: ""
            }
        }
    }
}
