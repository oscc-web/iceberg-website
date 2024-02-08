module.exports = {
    title: "冰山计划",
    tagline: "构建芯片敏捷开发云平台，支持用户快速定制SoC芯片",
    url: "http://openiceberg.org",
    baseUrl: "/",
    favicon: "img/logo.png",
    organizationName: "oscc-web",
    projectName: "iceberg-website",
    themeConfig: {
        color: {
            disableSwitch: true
        },
        hideOnScroll: true,
        navbar: {
            title: "冰山计划",
            items: [{
                to: "docs/started/index",
                activeBasePath: "docs",
                label: "快速上手",
                postion: "left",
            }, {
                to: "docs/project/index",
                activeBasePath: "docs",
                label: "项目列表",
                position: "left",
            }, {
                to: "docs/about/index",
                label: "关于计划",
                position: "left"
            }, {
                to: "docs/faq/index",
                label: "常见问题",
                position: "left"
            }, {
                to: "docs/contact/index",
                label: "联系方式",
                position: "left"
            }]
        },
        prism: {
            theme: require("prism-react-renderer/themes/github"),
            darkTheme: require("prism-react-renderer/themes/dracula"),
        },
        footer: {
            style: "light",
            links: [{
                title: "快速上手",
                items: [{
                    label: "安装",
                    to: "docs/started/install",
                }, {
                    label: "配置",
                    to: "docs/started/config",
                }, {
                    label: "演示",
                    to: "docs/started/demo",
                }],
            }, {
                title: "项目列表",
                items: [{
                    label: "开源IP",
                    to: "docs/project/ip/index",
                }, {
                    label: "开源EDA",
                    to: "docs/project/eda/index",
                }, {
                    label: "云平台",
                    to: "docs/project/cloud/index",
                }, {
                    label: "一生一芯",
                    to: "docs/project/ysyx/index",
                }]
            }, {
                title: "关于计划",
                items: [{
                    label: "计划介绍",
                    to: "docs/about/intro",
                }, {
                    label: "新闻动态",
                    to: "docs/about/news",
                }, {
                    label: "团队成员",
                    to: "docs/about/team",
                }, {
                    label: "活动照片",
                    to: "docs/about/gallery",
                }]
            }, {
                title: "常见问题",
                items: [{
                    label: "技术",
                    to: "docs/faq/tech"
                }, {
                    label: "组织",
                    to: "docs/faq/org"
                }]
            }, {
                title: "联系方式",
                items: [{
                    label: "邮箱",
                    href: "xxx",
                }, {
                    label: "公众号",
                    href: "xxx",
                }, {
                    label: "B站",
                    href: "xxx",
                }, {
                    label: "知乎",
                    href: "xxx",
                }]
            }],
            logo: {
                alt: "冰山计划",
                src: "img/logo.png",
                href: "http://openiceberg.org",
            },
            copyright: `Copyright © ${new Date().getFullYear()} 冰山团队. All rights reserved.`,
        }
    },
    presets: [[
        "@docusaurus/preset-classic",
        {
            docs: {
                sidebarPath: require.resolve("./sidebars.js")
            },
            theme: {
                customCss: require.resolve("./src/css/custom.css"),
            },
            googleAnalytics: {
                trackingID: "xxx"
            },
            sitemap: {
                changefreq: "weekly",
                priority: 0.5,
                ignorePatterns: ["/tags/**"],
                filename: "sitemap.xml"
            }
        }
    ]],
    stylesheets: [
        "https://fonts.googleapis.com/css?family=Sen|Source+Code+Pro",
        "https://at-ui.github.io/feather-font/css/iconfont.css"
    ],
    onBrokenLinks: "ignore"
};
