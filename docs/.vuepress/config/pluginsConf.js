const moment = require("moment");
const secret = require("./secret.js");
module.exports = [
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
    ],
    [
        '@vssue/vuepress-plugin-vssue', {
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',
        // 其他的 Vssue 配置
        owner: 'hmh521',
        repo: 'docs',
        clientId: secret.clientId,
        clientSecret: secret.clientSecret,
        autoCreateIssue: true
    },
    ],
    ['@vuepress/back-to-top'],
    [
        '@vuepress/plugin-google-analytics',
        {
            id: secret.ga,
        },
    ],
]
