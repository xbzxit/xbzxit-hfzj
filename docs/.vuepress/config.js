module.exports = {
    title: '小白 自学 IT',
    description: '码农-皇甫',
    port : 8888,
    dest : "dist",
    head : [
        [
            'link',
            {
                rel : 'icon',
                href : '/images/favicon.ico'
            }
        ],
        [
            'link',
            {
                rel : 'stylesheet',
                href : '/css/xbzxit.css'
            }
        ],
        [
            'script',
            {
                charset : 'utf-8',
                src : '/js/xbzxit.js'
            },
            {
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
        yuu : {
            disableDarkTheme: true,
        },

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
                            {text : 'DM', link : '/java/noob/dm/'},
                            {text : 'Linux', link : '/java/noob/linux/'},
                        ],
                    },
                    {
                        text: 'Java初级',
                        items : [
                            {text : 'Logging', link : '/java/elementary/Logging/'},
                            {text : 'Maven', link : '/java/elementary/Maven/'},
                            {text : 'Git', link : '/java/elementary/Git/'},
                            {text : 'GitHub', link : '/java/elementary/GitHub/'},
                            {text : 'Spring', link : '/java/elementary/Spring/'},
                            {text : 'Mybatis', link : '/java/elementary/Mybatis/'},
                            {text : 'MybatisPlus', link : '/java/elementary/MybatisPlus/'},
                            {text : 'SpringBoot', link : '/java/elementary/SpringBoot/'},
                        ],
                    },
                    {
                        text: 'Java中级',
                        items : [
                            {text : 'RabbitMQ', link : '/java/middleLevel/RabbitMQ/'},
                            {text : 'Kafka', link : '/java/middleLevel/Kafka/'},
                            {text : 'Zookeeper', link : '/java/middleLevel/Zookeeper/'},
                            {text : 'Nginx', link : '/java/middleLevel/Nginx/'},
                            {text : 'SpringSecurity', link : '/java/middleLevel/SpringSecurity/'},
                            {text : 'SpringCloud', link : '/java/middleLevel/SpringCloud/'},
                            {text : 'CICD', link : '/java/middleLevel/CICD/'},
                        ],
                    },
                ],
            },

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
                            {
                                text : '测试计划与工具',
                                link : '/autotest/started/b_testPlanTools/'
                            },
                        ],
                    },
                    {
                        text: '测试初级',
                        items : [
                            {
                                text : 'WEB自动化',
                                link : '/autotest/elementary/h_webAuto/'
                            },
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
                                text : '移动端自动化',
                                link : '/autotest/middleLevel/appTest/'
                            },
                            {
                                text : '微信小程序',
                                link : '/autotest/middleLevel/miniprogram/'
                            },
                            {
                                text : '接口测试',
                                link : '/autotest/middleLevel/interfaceTest/'
                            },
                            {
                                text : '性能测试',
                                link : '/autotest/middleLevel/JMeter/'
                            },
                        ],
                    },
                    {
                        text: '测试高级',
                        items : [
                            {
                                text : '',
                                link : ''
                            },
                        ],
                    },
                ],
            },

            {
                text: '天天吃货',
                items: [
                    {
                        text: '阶段一：单体电商项目架构，开发与上线',
                        items : [
                            {
                                text : 'Week01_万丈高楼，地基首要',
                                link : '/project/java/foodie/week01/'
                            },
                            {
                                text : 'Week02_分类，推荐，搜索，评价，购物车开发',
                                link : '/project/java/foodie/week02/'
                            },
                            {
                                text : 'Week03_ 地址订单支付定时任务开发',
                                link : '/project/java/foodie/week03/'
                            },
                            {
                                text : 'Week04_用户中心 ,订单',
                                link : '/project/java/foodie/week04/'
                            },
                            {
                                text : 'Week05_云服务器部署上线',
                                link : '/project/java/foodie/week05/'
                            },
                        ],
                    },
                    {
                        text: '阶段二：从单体到高可用集群演进',
                        items : [
                            {
                                text : 'Week06_LVS+Nginx实现高可用集群',
                                link : '/project/java/foodie/week06/'
                            },
                            {
                                text : 'Week07_主从复制高可用Redis集群',
                                link : '/project/java/foodie/week07/'
                            },
                            {
                                text : 'Week08_Redis缓存雪崩，穿透',
                                link : '/project/java/foodie/week08/'
                            },
                        ],
                    },
                    {
                        text: '阶段三：逐个击破分布式核心问题',
                        items : [
                            {
                                text : 'Week09_分布式会话与单点登录SSO',
                                link : '/project/java/foodie/week09/'
                            },
                            {
                                text : 'Week10_分布式搜索引擎-Elasticsearch',
                                link : '/project/java/foodie/week10/'
                            },
                            {
                                text : 'Week11_分布式文件系统-FastDFS+阿里OSS',
                                link : '/project/java/foodie/week11/'
                            },
                            {
                                text : 'Week12_分布式消息队列-RabbitMQ',
                                link : '/project/java/foodie/week12/'
                            },
                            {
                                text : 'Week13_分布式消息队列-Kafka',
                                link : '/project/java/foodie/week13/'
                            },
                            {
                                text : 'Week14_分布式锁',
                                link : '/project/java/foodie/week14/'
                            },
                            {
                                text : 'Week15_读写分离、分库分表',
                                link : '/project/java/foodie/week15/'
                            },
                            {
                                text : 'Week16_分布式全局ID、分布式事务和数据一致性',
                                link : '/project/java/foodie/week16/'
                            },
                            {
                                text : 'Week17_分布式接口幂等性，分布式限流',
                                link : '/project/java/foodie/week17/'
                            },
                        ],
                    },

                ]
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
                            },
                            {
                                text : 'NAS',
                                link : '/database/basicSkills/NAS/'
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
                        },
                        {
                            text : 'Java学习路线',
                            link : '/database/javaDafa/'
                        },
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
                    'document/Oracle客户端安装',
                    'document/Oracle服务端安装',
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
                    'document/快速创建服务器',
                    'document/基础认识',
                    'document/基础配置',
                    'document/常用命令',
                    'document/文件操作',
                    'document/安装Oracle11g',
                ]
            }],
            '/java/elementary/Logging/' : [{
                title : 'Logging',
                collapsable : false,
                children : [
                    '',
                    'document/log4j概念',
                    'document/log4j配置文件',
                    'document/log4j集成',
                    'document/log4jLayout详解',

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
            '/java/elementary/Git/' : [{
                title : 'Git',
                collapsable : false,
                children : [
                    '',
                    'document/Git概述',
                    'document/Git安裝',
                    'document/Git常用命令',
                    'document/Git分支操作',
                    'document/Git团队协作机制',
                    'document/GitHub操作',
                    'document/IDEA集成Git',
                    'document/IDEA集成GitHub',
                    'document/Gitee',
                    'document/GitLab',
                ]
            }],
            '/java/elementary/GitHub/' : [{
                title : 'GitHub',
                collapsable : false,
                children : [
                    '',
                    'document/Git使用',
                    'document/版本回退与分支',
                    'document/GitHub使用',
                    'document/GitHub整合IDEA',
                    'document/GitLab',
                ]
            }],
            '/java/elementary/Spring/' : [{
                title : 'Spring',
                collapsable : false,
                children : [
                    '',
                    'document/Spring入门',
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
                    'document/运行原理',
                    'document/批量操作',
                    'document/注解开发',
                    'document/MybatisExample',
                    'document/mybatis问题整理',
                    'document/mybatis常见开发问题'
                ]
            }],
            '/java/elementary/MybatisPlus/' : [{
                title : 'MybatisPlus',
                collapsable : false,
                children : [
                    '',
                    'document/MybatisPlus入门',
                    'document/CRUD接口',
                    'document/常用注解',
                    'document/条件构造器',
                    'document/插件',
                    'document/通用枚举',
                    'document/代码生成器',
                    'document/多数据源',
                    'document/MybatisX插件',
                ]
            }],
            '/java/elementary/SpringBoot/' : [{
                title : 'SpringBoot',
                collapsable : false,
                children : [
                    '',
                    'document/SpringBoot简介',
                    'document/SpringBoot配置文件',
                    'document/SpringBoot自动配置原理',
                    'document/SpringBoot日志',
                    'document/SpringBoot整合模板引擎',
                    'document/SpringBoot简单整合',
                    'document/SpringBoot项目部署',
                    'document/SpringBoot错误积累'
                ]
            }],
            '/java/middleLevel/RabbitMQ/' : [{
                title : 'RabbitMQ',
                collapsable : false,
                children : [
                    '',
                    'document/RabbitMQ入门',
                    'document/消息中间件介绍',
                    'document/JMS规范',
                    'document/AMQP协议',
                ]
            }],
            '/java/middleLevel/Kafka/' : [{
                title : 'Kafka',
                collapsable : false,
                children : [
                    '',
                    'document/Kafka介绍',
                    'document/Kafka安装',
                    'document/Kafka常用命令',
                ]
            }],
            '/java/middleLevel/Zookeeper/' : [{
                title : 'Zookeeper',
                collapsable : false,
                children : [
                    '',
                    'document/Zookeeper入门',
                    'document/Zookeeper安装',
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
            '/java/middleLevel/SpringCloud/' : [{
                title : 'SpringCloud',
                collapsable : false,
                children : [
                    '',
                    'document/从2.2.x和H版开始说起',
                    'document/微服务架构编码构建',
                    'document/Eureka服务注册与发现',
                    'document/Zookeeper服务注册与发现',
                    'document/Consul服务注册与发现',
                    'document/Ribbon负载均衡服务调用',
                    'document/OpenFeign服务接口调用',
                    'document/Hystrix断路器',
                    'document/Zuul路由网关',
                    'document/Gateway新一代网关',
                    'document/config分布式配置中心',
                    'document/Bus消息总线',
                    'document/Stream消息驱动',
                    'document/Sleuth分布式请求链路追踪',

                    'document/Alibaba入门简介',
                    'document/Nacos服务注册和配置中心',
                    'document/Sentinel实现熔断与限流',
                    'document/Seata处理分布式事务',

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
            '/java/middleLevel/CICD/' : [{
                title : '持续部署',
                collapsable : false,
                children : [
                    '',
                    'document/Linux服务器',
                    'document/Jdk',
                    'document/Git',
                    'document/GitLab',
                    'document/Maven',
                    'document/nexus',
                    'document/SonarQube',
                    'document/Jenkins'
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
                    'document/Logging_Python',
                ]
            }],
            '/autotest/elementary/j_shell/' : [{
                title : 'Shell',
                collapsable : false,
                children : [
                    '',
                    'document/Shell基础语法',
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

            '/autotest/middleLevel/interfaceTest/' : [{
                title : '接口测试',
                collapsable : false,
                children : [
                    '',
                    'document/Apifox环境搭建',
                    'document/Apifox之团队项目管理',
                    'document/Apifox之接口设计',
                    'document/Apifox之环境管理数据模型',
                    'document/Apifox之导入导出',
                    'document/Apifox之调试用例',
                    'document/Apifox之断言',
                    'document/Apifox之Mock',
                    'document/Apifox之自动化测试',
                    'document/Apifox之性能测试',
                    'document/Apifox之测试套件报告',

                    'document/Postman入门',
                    'document/Postman用例集',
                    'document/Postman断言',
                    'document/Postman前置脚本',
                    'document/Postman关联',
                    'document/Postman参数化',
                    'document/Postman实战',
                    'document/Postman生成测试报告',

                    'document/Reqable介绍',
                    'document/Reqable之API测试',

                ]
            }],
            '/autotest/middleLevel/JMeter/' : [{
                title : '性能测试',
                collapsable : false,
                children : [
                    '',
                    'document/性能测试理论',
                    'document/Jmeter环境搭建',
                    'document/Jmeter使用示例',
                    'document/Jmeter元件',
                    'document/Jmeter参数化',
                    'document/Jmeter断言',
                    'document/Jmeter关联',
                    'document/Jmeter录制脚本',
                    'document/Jmeter连接数据库',
                    'document/Jmeter逻辑控制器',
                    'document/Jmeter定时器',
                    'document/Jmeter分布式',
                    'document/Jmeter报告',
                    'document/Jmeter并发数计算法',
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
                    'document/项目测试流程',
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

            //region 资料库
            '/database/basicSkills/gxxx/' : [{
                title : '基础技能',
                collapsable : false,
                children : [
                    '',
                    'document/VuePress',
                    'document/MarkDown',
                    'document/电脑基础知识',
                    'document/装系统',
                    'document/电脑必装软件'
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
                    'document/UML介绍',
                ]
            }],
            '/database/code/java/' : [{
                title : '常用代码',
                collapsable : false,
                children : [
                    '',
                    'document/文件上传下载',
                    'document/List常见操作',
                    'document/Json处理',
                    'document/Redis工具类',
                    'document/字符串处理',
                    'document/常见工具类',
                    'document/时间格式化'
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
                    'document/框架常见的问题',

                ]
            }],
            '/database/javaDafa/' : [{
                title : 'Java学习路线',
                collapsable : false,
                children : [
                    '',
                    'document/Java入门',
                    'document/巩固基础',
                    'document/Java企业开发基础',
                    'document/Java企业开发进阶',
                    'document/项目实战',
                    'document/Java高级',
                    'document/Java求职',
                    'document/持续学习',
                ]
            }],
            //endregion

            //region 天天吃货
            '/project/java/foodie/week01/' : [{
                title : 'Week01_万丈高楼，地基首要',
                collapsable : false,
                children : [
                    '',
                    'document/课程导学',
                    'document/大型网站介绍',
                    'document/架构师技能',
                    'document/架构设计',
                    'document/聚合工程',
                    'document/SpringBoot',
                    'document/HikariCP数据源',
                    'document/整合MyBatis',
                    'document/RestfulAPI',
                    'document/事务的传播',
                    'document/整合Swagger',
                    'document/前端项目部署',
                    'document/用户管理',
                    'document/Cookie与Session',
                    'document/整合日志',
                ]
            }],

            '/project/java/foodie/week02/' : [{
                title : 'Week02_分类，推荐，搜索，评价，购物车开发',
                collapsable : false,
                children : [
                    '',
                    'document/首页轮播图',
                    'document/商品分类',
                    'document/商品详情',
                    'document/商品评价',
                    'document/商品搜索',
                    'document/购物车',
                ]
            }],

            '/project/java/foodie/week03/' : [{
                title : 'Week03_ 地址订单支付定时任务开发',
                collapsable : false,
                children : [
                    '',
                    'document/收货地址',
                    'document/确认订单',
                    'document/创建订单',
                    'document/微信支付',
                    'document/支付宝支付',
                    'document/定时任务',
                ]
            }],
            //endregion
        }
    }
};
