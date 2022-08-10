# 本地开发环境

## Node.js
1. 直装方式：[官方地址](https://nodejs.org/zh-cn/) ，建议下载LTS版本，最好下载12，14这两个版本。
> 缺点：不利于多环境的Node.js项目的运行！
2. Nvm(Node版本管理)：
    - Windows：[https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)

### 包管理器
**[Yarn](http://yarnpkg.top/)**(推荐使用)：
- 安装
```sh
npm i -g yarn
```
- 镜像设置(淘宝)
```sh
yarn config set registry http://registry.npm.taobao.org/
```


**[npm](https://www.npmjs.com/package/npm)**(node中自带):
- 镜像设置(淘宝)
```sh
npm config set registry http://registry.npm.taobao.org/
```
## IDE
- [WebStorm](https://www.jetbrains.com/webstorm/)
- [VSCode](https://code.visualstudio.com/docs)(推荐)

::: tip 扩展包(扩展ID)
- `ESLint`(dbaeumer.vscode-eslint)： JavaScript 和 JSX 检查工具
- `Prettier`(esbenp.prettier-vscode)： 代码格式化工具
- `Vetur`(octref.vetur)： Vue 代码检测
- `JavaScript (ES6) code snippets`(xabikosJavaScriptSnippets)：ES6语法智能提示，以及快速输入
- `Vue Language Features (Volar)`(Vue.volar)：Vue3 的语言支持
<!-- - `Auto Rename Tag`(formulahendry.auto-rename-tag)：自动闭合标签 `Todo Tree`(Gruntfuggly.todo-tree)：TODO标记 -->
:::

::: tip 设置vue模板

1. 依次选择"文件 -> 首选项 -> 用户片段"
2. 输入"vue"后回车，会打开vue.json文件
3. 拷贝以下内容覆盖文件原内容即可
``` json
{
    "Print to console": {
        "prefix": "vue",
        "body": [
        "<template>",
        "  <div></div>",
        "</template>",
        "",
        "<script>",
        "export default {",
        "  name: '',",
        "  data() {",
        "    return {}",
        "  },",
        "  mounted() {},",
        "  methods: {},",
        "}",
        "</script>",
        "",
        "<style lang=\"scss\" scoped></style>",
        ""
        ],
        "description": "Log output to console"
    }
}

```
:::

## Vue-CLI
Vue官方提供的、快速生成 `Vue` 工程的工具，[官方地址](https://cli.vuejs.org/zh/guide/)
- 安装
```sh
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```