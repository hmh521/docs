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
    },

}
