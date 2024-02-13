<p align="center">
    <img alt="Logo" src="https://github.com/oscc-web/ieda-website-resources/blob/main/images/logo/logo.png" width="150">
</p>

<h1>
    <p align="center">冰山项目官方网站</p>
</h1>

<p align="center">
    <a title="Project Version">
        <img alt="Project Version" src="https://img.shields.io/badge/version-1.0.0-brightgreen" />
    </a>
        <a title="Node Version" target="_blank" href="https://nodejs.org">
        <img alt="Node Version" src="https://img.shields.io/badge/Node-%3E%3D18.19.0-blue" />
    </a>
    <a title="License" target="_blank" href="https://github.com/oscc-web/iceberg-website/blob/master/LICENSE">
        <img alt="License" src="https://img.shields.io/github/license/oscc-web/iceberg-website.svg" />
    </a>
    <br/>
    <a title="GitHub Watchers" target="_blank" href="https://github.com/oscc-web/iceberg-website/watchers">
        <img alt="GitHub Watchers" src="https://img.shields.io/github/watchers/oscc-web/iceberg-website.svg?label=Watchers&style=social" />
    </a>
    <a title="GitHub Stars" target="_blank" href="https://github.com/oscc-web/iceberg-website/stargazers">
        <img alt="GitHub Stars" src="https://img.shields.io/github/stars/oscc-web/iceberg-website.svg?label=Stars&style=social" />
    </a>
    <a title="GitHub Forks" target="_blank" href="https://github.com/oscc-web/iceberg-website/network/members">
        <img alt="GitHub Forks" src="https://img.shields.io/github/forks/oscc-web/iceberg-website.svg?label=Forks&style=social" />
    </a>
</p>

<p align="center">中文简体 | <a title="English" href="README.md">English</a></p>

## 使用

### 下载仓库

```sh
$> cd your-workspaces
$> git clone git@github.com:oscc-web/iceberg-website.git
```

### 更新依赖

```sh
$> yarn install
```

### 运行网站

```sh
$> yarn start
```

### 更新仓库

```sh
$> git pull
```

## 开发

### 内容维护

- 如果需要为网站添加新的语言（比如英文`en`），请在仓库的根目录依次执行如下命令。命令成功被执行后，系统会在`i18n`目录下创建跟语言同名的子目录，后续只需翻译该目录下的内容即可，其他信息请移步到[官方文档](https://docusaurus.io/zh-CN/docs/i18n/introduction)。

     ```sh
     $> yarn write-translations --locale en
     $> ./i18n.sh en
     ```

### 网站维护

- 如需部署网站到远程服务器，请在联系管理员添加SSH密钥后执行以下命令：

    ```sh
    $> yarn deploy
    ```

- **注意：网站在`Build`过程中会消耗比较大的内存，请务必确保你的机器至少有2GB以上的空余空间，否则可能会出现Yarn报错退出的情况！**

## 感谢

- [Docusaurus](https://docusaurus.io/)
- [Docusaurus Website](https://github.com/facebook/docusaurus/website)
