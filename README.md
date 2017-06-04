#react-orcirst 兽咬剑React

### 编译流程
```
1.安装nodejs环境：https://nodejs.org/en/
2.打开iterm 安装依赖包 npm install
3.运行服务器：npm run dev
4.应用打包：npm run build
5.浏览器访问：http://localhost:7706/
```

### evn
```
const server = {
  mock  : 'mock;http://localhost:7709',
  stage : 'stage;https://test-mhis-siapp.pingan.com.cn:57443',
  prod  : 'prod;https://ehs.pingan.com.cn',
  proxy : 'proxy;', // webpack http-proxy-middleware
  native: 'native;',
}

// proxy
let articlePromise = request('get', '/api', {
  pageNo
})

// mock
let articlePromise = request('get', '/cms/open/newArticles', {
   pageNo
})

// prod
let articlePromise = request('get', '/mhis-siapp/security/accountQuery/accountQuery.do', {*/
  pageNo
})

```
