// http server host
// const server = {
//   proxy: 'proxy;', // webpack http-proxy-middleware
// };

const autoServer = () => {
  let env = '';
  if (navigator.userAgent.match(/NATIVE_APP/ig)) { // hybirdApp env
    env = 'native;';
  } else {
    switch (true) {
      case !!location.host.match(/localhost/ig): // local env
        env = 'mock;https://www.bing.com';
        break;
      case !!location.host.match(/test/ig): // test-dev env
        env = 'stage;https://test.bing.com.cn';
        break;
      case !!location.host.match(/city/ig): // prod env
        env = 'prod;https://city.bing.com.cn';
        break;
      default:
    }
  }
  
  return env;
};

export default autoServer();
