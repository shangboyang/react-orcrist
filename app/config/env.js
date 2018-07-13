// http server host
const server = {
  mock: 'mock;http://localhost:7709',
  stage: 'stage;https://test-mhis-siapp.pingan.com.cn:57443',
  prod: 'prod;https://ehs.pingan.com.cn',
  proxy: 'proxy;', // webpack http-proxy-middleware
  native: 'native;',
};


// /////////////////////////////////////////////
// 选择调试server

// export const env = server.stage;
// export const env = server.prod;
// export const env = server.proxy;
// export const env = server.native;
// /////////////////////////////////////////////
export default {
  env: server.mock
};
