module.exports = {
    title: 'NullPointer',
    description: '犀利辅助',
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [
            { text: '主页', link: '/guide' },
            {
                text: '后端',
                items: [
                    {
                        text: 'JAVA', items: [
                            { text: 'JVM性能调优专题', link: 'https://cn.vuejs.org/v2/api/' },
                            { text: '并发编程专题', link: 'https://vuex.vuejs.org/zh/api/#vuex-store' },
                            { text: '源码框架专题', link: 'https://vuex.vuejs.org/zh/api/#vuex-store' },
                            { text: '分布式框架专题', link: 'https://vuex.vuejs.org/zh/api/#vuex-store' },
                            { text: '微服务专题', link: 'https://vuex.vuejs.org/zh/api/#vuex-store' },
                        ]
                    },
                    {
                        text: 'MYSQL', items: [
                            { text: '微博', link: 'https://baidu.com' }
                        ]
                    },
                    {
                        text: '项目实战', items: [
                            { text: '微博', link: 'https://baidu.com' }
                        ]
                    }
                ]
            },
            {
                text: '前端',
                items: [
                    {
                        text: 'VUE', items: [
                            { text: 'vue', link: 'https://cn.vuejs.org/v2/api/' },
                            { text: 'vuex', link: 'https://vuex.vuejs.org/zh/api/#vuex-store' }
                        ]
                    },
                    {
                        text: 'REACT', items: [
                            { text: 'vue', link: 'https://cn.vuejs.org/v2/api/' },
                            { text: 'vuex', link: 'https://vuex.vuejs.org/zh/api/#vuex-store' }
                        ]
                    }
                ]
            },
            {
                text: '运维', items: [
                    {
                        text: 'Linux', items: [
                            { text: 'vue', link: 'https://cn.vuejs.org/v2/api/' },
                            { text: 'vuex', link: 'https://vuex.vuejs.org/zh/api/#vuex-store' }
                        ]
                    },
                    {
                        text: 'Docker', items: [
                            { text: 'vue', link: 'https://cn.vuejs.org/v2/api/' },
                            { text: 'vuex', link: 'https://vuex.vuejs.org/zh/api/#vuex-store' }
                        ]
                    },
                ]
            },
            {
                text: '面试', items: [
                    {
                        text: 'Linux', items: [
                            { text: 'vue', link: 'https://cn.vuejs.org/v2/api/' },
                            { text: 'vuex', link: 'https://vuex.vuejs.org/zh/api/#vuex-store' }
                        ]
                    },
                    {
                        text: 'Docker', items: [
                            { text: 'vue', link: 'https://cn.vuejs.org/v2/api/' },
                            { text: 'vuex', link: 'https://vuex.vuejs.org/zh/api/#vuex-store' }
                        ]
                    },
                ]
            },
            {
                text: '文档', items: [
                    { text: 'Guava', link: 'https://www.yiibai.com/guava/' },
                    { text: 'Hutool', link: 'https://www.hutool.cn/docs/#/' },
                    { text: 'Mybatis-Plus', link: 'https://mybatis.plus/' },
                ]
            },
        ],
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    }
};