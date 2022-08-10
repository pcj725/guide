import { defineUserConfig } from "vuepress"
import { defaultTheme } from "@vuepress/theme-default"
import { searchPlugin } from "@vuepress/plugin-search"

export default defineUserConfig({
  lang: "zh-CN",
  title: "前端开发指南",
  description: "代码千万行，规范第一行",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  theme: defaultTheme({
    logo: "/logo.png",
    repoLabel: "仓库地址",
    navbar: [
      {
        text: "环境搭建",
        link: "/setup/",
      },
      {
        text: "基础强化",
        children: [
          {
            text: "JavaScript",
            link: "/devNorms/javaScript/",
          },
          {
            text: "Vue",
            link: "/devNorms/vue/",
          },
          {
            text: "代码提交",
            link: "/devNorms/code/",
          },
        ],
      },
    ],
    sidebar: {
      "/setup/": [
        {
          text: "环境搭建",
          children: ["/setup/"],
        },
      ],
      "/devNorms/": [
        {
          text: "javaScript",
          children: [
            "/devNorms/javaScript/",
            "/devNorms/javaScript/01-变量",
            "/devNorms/javaScript/02-对象",
            "/devNorms/javaScript/03-数组",
            "/devNorms/javaScript/04-解构",
            "/devNorms/javaScript/05-字符串",
            "/devNorms/javaScript/06-函数",
            "/devNorms/javaScript/07-箭头函数",
            "/devNorms/javaScript/08-模块",
            "/devNorms/javaScript/09-运算符",
            "/devNorms/javaScript/10-注释",
            "/devNorms/javaScript/11-类型转换",
          ],
        },
        {
          text: "Vue",
          children: [
            "/devNorms/vue/",
            "/devNorms/vue/01-优先级A",
            "/devNorms/vue/02-优先级B",
            "/devNorms/vue/03-优先级C",
          ],
        },
        {
          text: "代码提交",
          children: ["/devNorms/code/"],
        },
      ],
    },
  }),
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],
})
