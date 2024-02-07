module.exports = {
    title: "Axioms Developer Hub",
    tagline: "Add strong authentication, fine-grained authorization in your apps, devices, and APIs.",
    url: "https://axioms.io",
    baseUrl: "/",
    favicon: "https://static.axioms.io/branding/favicon.png",
    organizationName: "axioms-io",
    projectName: "developer",
    themeConfig: {
        color: {
            disableSwitch: true
        },
        hideOnScroll: true,
        navbar: {
            title: "Axioms",
            items: [{
                    to: "docs/getting-started/index",
                    activeBasePath: "docs",
                    label: "Docs",
                    position: "left",
                },
                { to: "blog", label: "Blog", position: "left" },
                {
                    href: "https://github.com/axioms-io",
                    label: "GitHub",
                    position: "left",
                },
                {
                    href: "https://jwtdebugger.axioms.io/",
                    label: "JWT Debugger",
                    position: "right",
                },
            ]
        },
        prism: {
            theme: require("prism-react-renderer/themes/github"),
            darkTheme: require("prism-react-renderer/themes/dracula"),
        },
        footer: {
            style: "light",
            links: [{
                    title: "Docs",
                    items: [{
                            label: "Getting Started",
                            to: "docs/getting-started/index",
                        },
                        {
                            label: "SDKs & Samples",
                            to: "docs/sdks-samples/index",
                        },
                        {
                            label: "REST APIs",
                            href: "#",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [{
                            label: "Stack Overflow",
                            href: "https://stackoverflow.com/questions/tagged/axioms",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/axioms-io",
                        },
                        {
                            label: "Community",
                            href: "https://community.axioms.io",
                        },
                    ],
                },
                {
                    title: "Connect",
                    items: [{
                            label: "LinkedIn",
                            href: "https://www.linkedin.com/company/axioms-io/",
                        },
                        {
                            label: "Angel",
                            href: "https://angel.co/company/axioms-io",
                        },
                        {
                            label: "Twitter",
                            href: "https://twitter.com/axioms-io",
                        },
                    ],
                },
            ],
            logo: {
                alt: "D3 Metalab",
                src: "img/d3ml-logo.svg",
                href: "https://d3ml.com",
            },
            copyright: `Copyright © ${new Date().getFullYear()} D3 Metalab. All rights reserved.`,
        }
    },
    presets: [
        [
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
        ]
    ],
    stylesheets: [
        "https://fonts.googleapis.com/css?family=Sen|Source+Code+Pro",
        "https://at-ui.github.io/feather-font/css/iconfont.css"
    ],
    plugins: [
    ],
    onBrokenLinks: "ignore"
};
