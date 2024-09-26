module.exports =  [
        { text: '首页', link: '/' },
        {
            text: '技术笔记',
            items: [
                { text: '前端', items:[
                        { text: 'HTML & CSS', link: '/frontend/html/' },
                        { text: 'JavaScript', link: '/frontend/js/' },
                        { text: 'Vue', link: '/frontend/vue/' },
                    ]},

                { text: '后端', items:[
                        { text: 'JavaSE', link: '/backend/javase/' },
                    ]},
            ]
        },
        {
            text: '常见问题',
            items: [
                { text: 'vue常见问题', link: '/commonproblem/vue/' },
            ]
        },
        {
            text: '面试常问',
            items: [
                { text: 'Redis', link: '/interview/redis/' },
            ]
        },
        // {
        //     text: '开源项目',
        //     items: [
        //         { text: 'Chinese', link: '/language/chinese/' }
        //     ]
        // },
        { text: '关于我', link: '/about/' }
]

