module.exports = {
    title: '小白 自学 IT',
    description: '码农-皇甫',
    port : 8888,
    dest : "dist",
    head : [
        [
            'link', {
            rel : 'icon',
            href :
                '/images/favicon.ico'
        }

        ],
        [
            'link', {
            rel : 'stylesheet',
            href : '/css/xbzxit.css'
        }
        ],
        [
            'script', {
            charset : 'utf-8',
            src : '/js/xbzxit.js'
        }, {
            language: "javascript",
            type: "text/javascript",
            src: "/js/pgmanor-self.js"
        }
        ]
    ],
    base: '',
    plugins: ['fulltext-search'],
    markdown : {
        lineNumbers : true // 代码块是否显示行号
    },
    themeConfig : {
        sidebarDepth : 5,
        search : true,
        searchMaxSuggestions : 10,

        /*顶层的导航栏*/
        nav: [
            {
                text: 'Java开发',
                items: [
                    {
                        text: 'Java小白',
                        items : [
                            {text : 'Oracle', link : '/java/noob/oracle/'},
                            {text : 'mysql', link : '/java/noob/mysql/'},
                            {text : 'PostgreSql', link : '/java/noob/PostgreSql/'},
                            {text : 'Linux', link : '/java/noob/linux/'},
                        ],
                    },
                    // {
                    //     text: 'Java入门',
                    //     items : [
                    //         {text : 'HtmlCssJs', link : '/java/started/HtmlCssJs/'},
                    //     ],
                    // },
                    {
                        text: 'Java初级',
                        items : [
                            {text : 'Maven', link : '/java/elementary/Maven/'},
                            {text : 'Spring', link : '/java/elementary/Spring/'},
                            {text : 'Mybatis', link : '/java/elementary/Mybatis/'},
                        ],
                    },
                    {
                        text: 'Java中级',
                        items : [
                            {text : 'Nginx', link : '/java/middleLevel/Nginx/'},
                            {text : 'SpringSecurity', link : '/java/middleLevel/SpringSecurity/'},
                        ],
                    },
                    {
                        text: 'Java高级',
                        items : [
                            {text : '分布式项目', link : '/java/highLevel/gulimall/'},
                        ],
                    },
                ],
            },

            // {
            //     text: 'Python开发',
            //     items: [
            //         {
            //             text: 'Python小白',
            //             items : [
            //                 {
            //                     text: '基础语法',
            //                     link: '/python/noob/basicGrammar/'
            //                 },
            //                 {
            //                     text: '三大主流类型',
            //                     link: '/python/noob/3bigType/'
            //                 },
            //                 {
            //                     text: '流程控制函数',
            //                     link: '/python/noob/proContMethod/'
            //                 },
            //                 {
            //                     text: '面向对象',
            //                     link: '/python/noob/oopExcep/'
            //                 },
            //                 {
            //                     text: '模块与文件',
            //                     link: '/python/noob/moduleFile/'
            //                 },
            //                 {
            //                     text: '多线程',
            //                     link: '/python/noob/multiThread/'
            //                 },
            //                 {
            //                     text: '正则及项目',
            //                     link: '/python/noob/expProject/'
            //                 },
            //             ],
            //         },
            //         {
            //             text: 'Python入门',
            //             items : [
            //                 {
            //                     text: 'Python与MySql',
            //                     link: '/python/started/pythonMysql/'
            //                 },
            //             ],
            //
            //         },
            //         {
            //             text: 'Python初级',
            //             items : [
            //                 {
            //                     text: 'Python与MySql',
            //                     link: '/python/started/pythonMysql/'
            //                 },
            //             ],
            //
            //         },
            //         {
            //             text: 'Python中级',
            //             items : [
            //                 {
            //                     text: 'Python与MySql',
            //                     link: '/python/started/pythonMysql/'
            //                 },
            //             ],
            //
            //         },
            //         {
            //             text: 'Python高级',
            //             items : [
            //                 {
            //                     text: 'Python与MySql',
            //                     link: '/python/started/pythonMysql/'
            //                 },
            //             ],
            //
            //         },
            //     ],
            // },
            //
            // {
            //     text: 'Linux云计算',
            //     items: [
            //         {
            //             text: 'Linux小白',
            //             items : [
            //                 {
            //                     text : 'Linux操作系统',
            //                     link : '/linux/noob/linuxSystem/'
            //                 },
            //                 {
            //                     text : 'Linux必备命令',
            //                     link : '/linux/noob/linuxCmd/'
            //                 },
            //                 {
            //                     text : '用户管理',
            //                     link : '/linux/noob/userManager/'
            //                 },
            //             ],
            //         },
            //         {
            //             text: 'Linux入门',
            //             items : [
            //                 {
            //                     text : 'VimTar',
            //                     link : '/linux/started/vimTar/'
            //                 },
            //                 {
            //                     text : 'yum与网络',
            //                     link : '/linux/started/yumNetwork/'
            //                 },
            //                 {
            //                     text : '硬盘分区',
            //                     link : '/linux/started/diskSwap/'
            //                 },
            //             ],
            //         },
            //         {
            //             text: 'Linux初级',
            //             items : [
            //                 {
            //                     text : '硬盘分区',
            //                     link : '/linux/started/diskSwap/'
            //                 },
            //             ],
            //         },
            //         {
            //             text: 'Linux中级',
            //             items : [
            //                 {
            //                     text : '硬盘分区',
            //                     link : '/linux/started/diskSwap/'
            //                 },
            //             ],
            //         },
            //         {
            //             text: 'Linux高级',
            //             items : [
            //                 {
            //                     text : '硬盘分区',
            //                     link : '/linux/started/diskSwap/'
            //                 },
            //             ],
            //         },
            //
            //     ],
            // },
            //
            {
                text: '软件测试',
                items: [
                    {
                        text: '测试小白',
                        items : [
                            {
                                text : '计算机基础',
                                link : '/autotest/noob/basicsComputer/'
                            },
                        ],
                    },
                    {
                        text: '测试入门',
                        items : [
                            // {
                            //     text : '测试用例设计',
                            //     link : ''
                            // },
                            {
                                text : '测试计划与工具',
                                link : '/autotest/started/b_testPlanTools/'
                            },
                            // {
                            //     text : '企业环境搭建',
                            //     link : ''
                            // },
                            // {
                            //     text : '数据库操作',
                            //     link : ''
                            // },
                        ],
                    },
                    {
                        text: '测试初级',
                        items : [
                            // {
                            //     text : 'Python编程基础',
                            //     link : ''
                            // },
                            // {
                            //     text : '前端知识',
                            //     link : ''
                            // },
                            {
                                text : 'WEB自动化',
                                link : '/autotest/elementary/h_webAuto/'
                            },
                            // {
                            //     text : '单元测试',
                            //     link : ''
                            // },
                            {
                                text : 'shell脚本',
                                link : '/autotest/elementary/j_shell/'
                            },
                        ],
                    },
                    {
                        text: '测试中级',
                        items : [
                            {
                                text : '接口及性能测试',
                                link : '/autotest/middleLevel/interfPerfTest/'
                            },
                            {
                                text : '移动端自动化',
                                link : '/autotest/middleLevel/appTest/'
                            },
                            {
                                text : '微信小程序',
                                link : '/autotest/middleLevel/miniprogram/'
                            },
                            // {
                            //     text : 'Redis',
                            //     link : ''
                            // },
                            // {
                            //     text : '数据结构',
                            //     link : ''
                            // },
                            // {
                            //     text : '数据库综合演练',
                            //     link : ''
                            // },
                        ],
                    },
                    {
                        text: '测试高级',
                        items : [
                            {
                                text : 'Jmeter',
                                link : '/autotest/highLevel/jmeter/'
                            },
                        ],
                    },
                ],
            },
            //
            {
                text: '前端开发',
                items: [
            //         {
            //             text: '前端小白',
            //             items : [
            //                 {
            //                     text : 'HTML',
            //                     link : '/frontEnd/noob/html/'
            //                 },
            //                 {
            //                     text : 'CSS',
            //                     link : '/frontEnd/noob/css/'
            //                 },
            //                 {
            //                     text : 'JavaScript',
            //                     link : '/frontEnd/noob/js/'
            //                 },
            //                 {
            //                     text : 'JS高级',
            //                     link : '/frontEnd/noob/jsAdv/'
            //                 },
            //                 {
            //                     text : 'jQuery',
            //                     link : '/frontEnd/noob/jquery/'
            //                 },
            //             ],
            //
            //         },
            //         {
            //             text: '前端入门',
            //             items : [
            //                 {
            //                     text : 'NodeJS',
            //                     link : '/frontEnd/started/nodeJs/'
            //                 },
            //                 {
            //                     text : 'MongoDB',
            //                     link : '/frontEnd/started/mongdb/'
            //                 },
            //             ],
            //
            //         },
            //         {
            //             text: '前端初级',
            //             items : [
            //                 {
            //                     text : 'NodeJS',
            //                     link : '/frontEnd/elementary/nodeJs/'
            //                 },
            //             ],
            //
            //         },
            //         {
            //             text: '前端中级',
            //             items : [
            //                 {
            //                     text : 'NodeJS',
            //                     link : '/frontEnd/started/nodeJs/'
            //                 },
            //             ],
            //
            //         },
                    {
                        text: '前端高级',
                        items : [
                            {
                                text : '微信小程序',
                                link : '/frontEnd/highLevel/miniprogram/'
                            },
                        ],

                    },
                ],
            },

            {
                text: '知识库',
                items: [
                    {
                        text: '必备技能',
                        items : [
                            {
                                text : '高效学习',
                                link : '/database/basicSkills/gxxx/'

                            },
                            {
                                text : 'Excel',
                                link : '/database/basicSkills/Excel/'
                            },
                            {
                                text : 'UML',
                                link : '/database/basicSkills/UML/'
                            }
                        ],
                    },
                    {
                        text: '常用工具',
                        items : [
                            {
                                text : 'Java',
                                link : '/database/tools/java/'
                            },
                            // {
                            //     text : '测试',
                            //     link : '/database/tools/test'
                            // },
                        ],
                    },
                    {
                        text: '代码库',
                        items : [
                            // {
                            //     text : '编写代码的艺术',
                            //     link : '/database/code/art/'
                            // },
                            {
                                text : 'Java',
                                link : '/database/code/java/'
                            },
                            // {
                            //     text : '前端',
                            //     link : '/database/code/web'
                            // }
                        ],
                    },
                    {
                        text: '工具类',
                        items : [
                            {
                                text : 'Java',
                                link : '/database/toolsclass/java/'
                            },
                            // {
                            //     text : '前端',
                            //     link : '/database/toolsclass/web'
                            // }
                        ],
                    },
                    {
                        text: '问题库',
                        items : [
                            {
                                text : '数据库',
                                link : '/database/faq/db/'
                            },
                            {
                                text : 'Java',
                                link : '/database/faq/java/'
                            },
                        ],
                    },
                ],
            },

            {
                text : 'HFZJ',
                items: [{
                    items : [
                        {
                            text : 'GitHub',
                            link : 'https://github.com/xbzxit'
                        },
                        {
                            text : 'CSDN',
                            link : 'https://blog.csdn.net/it_hfzj?spm=3001.5343/'
                        }
                    ]
                }]
            }
        ],

        /*左侧的导航栏*/
        sidebar: {
            //region 资料导航
            '/docnav/' : [{
                title : '资源导航',
                collapsable : false,
                children : [
                    '',
                ]
            }],
            //endregion

            //region java部分
            '/java/noob/oracle/' : [{
                title : 'Oracle',
                collapsable : false,
                children : [
                    '',
                    'document/OracleClient',
                    'document/Oracle安装',
                    'document/Oracle入门',
                    'document/多表查询',
                    'document/PLSQL基础语法',
                    'document/PLSQL记录类型',
                    'document/PLSQL流程控制',
                    'document/PLSQL游标',
                    'document/PLSQL异常',
                    'document/PLSQL存储函数',
                    'document/PLSQL存储过程',
                    'document/PLSQL包',
                    'document/PLSQL触发器',
                ]
            }],
            '/java/noob/mysql/' : [{
                title : 'mysql',
                collapsable : false,
                children : [
                    '',
                    'document/Linux安装mysql',
                ]
            }],

            '/java/noob/PostgreSql/' : [{
                title : 'PostgreSql',
                collapsable : false,
                children : [
                    '',
                    'document/安装',
                ]
            }],

            '/java/noob/linux/' : [{
                title : 'Linux',
                collapsable : false,
                children : [
                    '',
                    'document/Linux介绍',
                    'document/安装Linux',
                    'document/基础认识',
                    'document/基础配置',
                    'document/常用命令',
                    'document/文件操作',
                    'document/安装Oracle11g',
                ]
            }],
            '/java/elementary/Maven/' : [{
                title : 'Maven',
                collapsable : false,
                children : [
                    '',
                    'document/Maven介绍',
                    'document/setting_xml',
                    'document/Maven常见插件',
                    'document/开发Maven插件',
                    'document/Maven常见问题',

                ]
            }],
            '/java/elementary/Spring/' : [{
                title : 'Spring',
                collapsable : false,
                children : [
                    '',
                    'document/Spring概述',
                    'document/IOC容器',
                    'document/AOP',
                    'document/JdbcTemplate',
                    'document/事务操作',
                    'document/Spring5新功能',
                    'document/组件注册',
                    'document/生命周期',
                    'document/自动装配',
                    'document/AOP原理',
                    'document/声明式事务',
                    'document/扩展原理',
                    'document/Spring容器创建',
                    'document/Servlet3.0'
                ]
            }],
            '/java/elementary/Mybatis/' : [{
                title : 'Mybatis',
                collapsable : false,
                children : [
                    '',
                    'document/Mybatis介绍',
                    'document/全局配置文件',
                    'document/映射文件',
                    'document/动态SQL与缓存',
                    'document/逆向工程',
                    'document/generatorConfig',
                    'document/运行原理',
                    'document/批量操作',
                    'document/注解开发',
                    'document/MybatisExample',
                    'document/mybatis问题整理'
                ]
            }],
            '/java/middleLevel/Nginx/' : [{
                title : 'Nginx',
                collapsable : false,
                children : [
                    '',
                    'document/Nginx基本概念',
                    'document/Nginx安装',
                    'document/配置文件',
                    'document/反向代理',
                    'document/动静分离',
                    'document/高可用',
                    'document/Nginx原理'
                ]
            }],
            '/java/middleLevel/SpringSecurity/' : [{
                title : 'SpringSecurity',
                collapsable : false,
                children : [
                    '',
                    'document/SpringSecurity简介',
                    'document/入门案例'
                ]
            }],
            '/java/middleLevel/encode/' : [{
                title : '安全密码学',
                collapsable : false,
                children : [
                    '',
                    'document/密码学介绍'
                ]
            }],
            '/java/highLevel/gulimall/' : [{
                title : '谷粒商城',
                collapsable : false,
                children : [
                    '',
                    'document/项目简介',
                    'document/分布式基本概念',
                    'document/环境搭建',
                    'document/SpringCloudAlibaba',
                    'document/SpringCloud',
                    'document/ES6',
                    'document/Vue',
                    // 'document/商品服务-三级分类',
                    // 'document/商品服务-品牌管理',
                    // 'document/商品服务-平台属性',
                    // 'document/商品服务-新增商品',
                    // 'document/商品服务-商品管理',
                    // 'document/仓储服务-仓库管理',
                    'document/k8s环境准备',
                    'document/k8s集群搭建',
                    'document/kubesphere安装'
                ]
            }],
            //endregion

            //region python
            '/python/noob/basicGrammar/' : [{
                title : 'pythonMysql',
                collapsable : false,
                children : [
                    '',
                    'document/Python介绍',
                ]
            }],

            '/python/started/pythonMysql/' : [{
                title : 'pythonMysql',
                collapsable : false,
                children : [
                    '',
                    'document/Python与MySql的整合',
                ]
            }],
            //endregion

            //region linux
            '/linux/noob/linuxSystem/' : [{
                title : 'Linux操作系统',
                collapsable : false,
                children : [
                    '',
                    'document/网络模型',
                    'document/Linux目录',
                ]
            }],
            //endregion

            //region 自动化测试
            '/autotest/noob/basicsComputer/' : [{
                title : '计算机基础',
                collapsable : false,
                children : [
                    '',
                    'document/测试的重要性',
                    'document/系统',
                    'document/系统架构',
                    'document/语言分类',
                    'document/网络',
                    'document/命令',
                    'document/服务器',
                ]
            }],
            '/autotest/noob/testTheory/' : [{
                title : '理论知识',
                collapsable : false,
                children : [
                    '',
                    'document/测试的目的_定义_原则',
                    'document/软件质量模型',
                    'document/测试流程',
                    'document/案例一',
                    'document/案例二'
                ]
            }],
            '/autotest/started/b_testPlanTools/' : [{
                title : '测试计划与工具',
                collapsable : false,
                children : [
                    '',
                    'document/QC',
                ]
            }],
            '/autotest/elementary/h_webAuto/' : [{
                title : 'WEB自动化',
                collapsable : false,
                children : [
                    '',
                    'document/Selenium环境搭建',
                    'document/常用选择器定位_Python',
                    'document/其他对象定位_Python',
                    'document/UnitTest_Python',
                    'document/PO模型_Python',
                    'document/JsonDict_Python',
                    'document/Logging_Python',
                ]
            }],
            '/autotest/elementary/j_shell/' : [{
                title : 'Shell',
                collapsable : false,
                children : [
                    '',
                    'document/',
                ]
            }],
            '/autotest/elementary/k_interface/' : [{
                title : '接口测试',
                collapsable : false,
                children : [
                    '',
                    'document/基础理论',
                    'document/HTTP协议',
                    'document/UnitTest',
                    'document/接口测试总结',
                ]
            }],
            '/autotest/elementary/p_javaTest/' : [{
                title : 'java测试',
                collapsable : false,
                children : [
                    '',
                    'document/自动化测试认知',
                    'document/用例设计',
                ]
            }],

            '/autotest/middleLevel/interfPerfTest/' : [{
                title : '接口与性能测试',
                collapsable : false,
                children : [
                    '',
                    'document/Apifox入门',
                    'document/Postman入门',
                    'document/Postman用例集',
                    'document/Postman断言',
                    'document/Postman前置脚本',
                    'document/Postman关联',
                    'document/Postman生成测试报告',
                    'document/Postman参数化',
                    'document/Postman实战',
                    // 'document/性能测试策略',
                    // 'document/性能测试指标',
                    // 'document/性能测试流程',
                    // 'document/性能测试JMeter',
                    // 'document/性能测试线程组',
                    // 'document/性能测试参数化',
                    // 'document/性能测试断言',
                    // 'document/性能测试正则表达式',
                    // 'document/性能测试链接数据库',
                    // 'document/性能测试控制器',
                    // 'document/性能测试定时器',
                    // 'document/项目实战',
                ]
            }],
            '/autotest/middleLevel/appTest/' : [{
                title : '移动端测试',
                collapsable : false,
                children : [
                    '',
                    'document/移动端环境搭建',
                    'document/Appium框架介绍',
                ]
            }],
            '/autotest/middleLevel/miniprogram/' : [{
                title : '微信小程序测试',
                collapsable : false,
                children : [
                    '',
                    'document/小程序介绍',
                    'document/小程序项目',
                    'document/项目实战部署',
                    'document/测试流程',
                    // 'document/项目实战测试点测试用例',
                    // 'document/项目实战非功能测试',
                    // 'document/测试报告',
                ]
            }],
            '/autotest/highLevel/jmeter/' : [{
                title : 'Jmeter',
                collapsable : false,
                children : [
                    '',
                    'document/使用Jmeter玩转接口测试',
                ]
            }],
            //endregion

            //region 前端开发
            '/frontEnd/noob/js/' : [{
                title : 'JavaScript',
                collapsable : false,
                children : [
                    '',
                    'document/JS认识',
                    'document/JS基础语法',
                    'document/运算符',
                    'document/条件判断',
                    'document/循环',
                    'document/面向对象',
                    'document/数组',
                    'document/常用对象',
                    'document/正则表达式',
                    'document/DOM',
                    'document/事件',
                    'document/定时器',
                    'document/JSON',
                ]
            }],
            '/frontEnd/noob/jquery/' : [{
                title : 'jQuery',
                collapsable : false,
                children : [
                    '',
                ]
            }],
            //endregion

            //region 资料库
            '/database/basicSkills/gxxx/' : [{
                title : '基础技能',
                collapsable : false,
                children : [
                    '',
                    'document/VuePress',
                    'document/MarkDown',
                    'document/电脑基础知识',
                    'document/装系统'
                ]
            }],
            '/database/basicSkills/Excel/' : [{
                title : 'Excel',
                collapsable : false,
                children : [
                    '',
                    'document/快速认识Excel',
                    'document/准确高效地获取数据',
                ]
            }],
            '/database/basicSkills/UML/' : [{
                title : 'UML',
                collapsable : false,
                children : [
                    '',
                    'document/快速认识Excel',
                    'document/准确高效地获取数据',
                ]
            }],
            '/database/toolsclass/java/' : [{
                title : '工具类',
                collapsable : false,
                children : [
                    '',
                    'document/Json处理',
                    'document/Redis工具类',
                    'document/字符串处理',
                    'document/常见工具类',
                    'document/时间格式化'
                ]
            }],
            '/database/code/java/' : [{
                title : '常用代码',
                collapsable : false,
                children : [
                    '',
                    'document/文件上传下载',
                    'document/List常见操作',
                ]
            }],
            '/database/tools/java/' : [{
                title : '工具使用',
                collapsable : false,
                children : [
                    '',
                    'document/IDEA使用',
                    'document/PLSQL使用'
                ]
            }],
            '/database/faq/db/' : [{
                title : '数据库常见问题',
                collapsable : false,
                children : [
                    '',
                    'document/Oralce恢复误删除的数据',
                    'document/数据常见操作'
                ]
            }],
            '/database/faq/java/' : [{
                title : 'JAVA常见问题',
                collapsable : false,
                children : [
                    '',
                    'document/接口对接',
                ]
            }],
            //endregion
        }
    }
};