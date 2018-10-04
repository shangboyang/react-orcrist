# react-orcirst 

> React ‘s boilerplate 

- branch:master => react + react-router + redux + redux-thunk + webpack
- branch:lite => react + react-router + webpack

### React-Cli 
The `react-orcrist`'s boilerplate is used in `react-ost`'s cli, 
please see [react-ost](https://github.com/shangboyang/react-ost/blob/master/README.md).

```sh
sudo npm i -g react-ost // 全局安装react-ost
react-ost init // 初始化工程
```

### Quickstart

```sh
npm install // 安装依赖
npm run dev // 运行dev环境 浏览器访问：http://localhost:7706/
npm run build // 编译打包
```

#### React client-side-render boilerplate
Project structure:
```
my-app
├── src
│   ├── components
│   ├── config
│   ├── containers
│   ├── css
│   ├── utils
│   └── app.js
└── build
│   ├── build.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── webpack.base.config.js
│   ├── webpack.dev.config.js
│   └── webpack.prod.config.js
├── dist
├── .babelrc
├── .eslintignore
├── .eslintrc.js
├── index.html
├── node_modules
├── server.js
├── .gitignore
├── .editorconfig
├──  README.md
└── package.json
```
