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
            text: 'Spring框架',
            items: [
                { text: 'Spring', link: '/frame/spring/' },
                { text: 'SpringMVC', link: '/frame/springmvc/' },
                { text: 'SpringBoot', link: '/frame/springboot/' },
                { text: 'SpringSecurity', link: '/frame/springsecurity/' },
            ]
        },
        {
            text: '数据库',
            items: [
                { text: 'MySQL', link: '/database/mysql/' },
                { text: 'Oracle', link: '/database/oracle/' },
            ]
        },
        {
            text: '虚拟机',
            items: [
                { text: 'JVM', link: '/virtualMachine/jvm/' }
            ]
        },
        {
            text: '运维',
            items: [
                { text: 'Linux', link: '/devops/linux/' },
                { text: 'Docker', link: '/devops/docker/' }
            ]
        },
        {
            text: '常见问题',
            items: [
                { text: 'git常见问题', link: '/commonproblem/git/' },
                { text: 'java常见问题', link: '/commonproblem/java/' },
                { text: 'mysql常见问题', link: '/commonproblem/mysql/' },
                { text: 'vue常见问题', link: '/commonproblem/vue/' },
            ]
        },
        {
            text: '面试常问',
            items: [
                { text: 'Redis', link: '/interview/redis/' },
                { text: 'MySQL', link: '/interview/mysql/' },
                { text: 'Spring', link: '/interview/spring/' },
                { text: 'Mybatis', link: '/interview/mybatis/' },
                { text: 'Springcloud', link: '/interview/springcloud/' },
            ]
        },
        // {
        //     text: '开源项目',
        //     items: [
        //         { text: 'Chinese', link: '/language/chinese/' }
        //     ]
        // },
        { text: '关于我', link: '/about/about'}
]

