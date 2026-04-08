const moment = require("moment");
const secret = require("./secret.js");
const fs = require('fs-extra')
const path = require('path')
module.exports = [
     [
    (options, ctx) => ({
      name: 'copy-assets-plugin',

      async ready() {
        const docsRoot = path.resolve(__dirname, '../') // docs
        const publicRoot = path.resolve(__dirname, './public/assets')

        try {
          await fs.ensureDir(publicRoot)

          const dirs = fs.readdirSync(docsRoot)

          for (const dir of dirs) {
            // ⭐ 关键：多加一层 about
            const source = path.join(docsRoot, dir, 'assets', dir)
            const target = path.join(publicRoot, dir)

            if (fs.existsSync(source)) {
              await fs.copy(source, target, { overwrite: true })
              console.log(`✅ 已复制: ${dir}/assets/${dir} → public/assets/${dir}`)
            }
          }

        } catch (err) {
          console.error('❌ assets 复制失败', err)
        }
      }
    })
  ],
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
    ['@vuepress/medium-zoom', {
        selector: 'img',
    }],
    ["vuepress-plugin-auto-sidebar", {
        title: {
            mode: 'default',
            map: {
                '/about/': '关于我',
            }
        },
        collapse: {
            open: true
        },
    }],
]
