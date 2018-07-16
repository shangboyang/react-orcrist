// http server host
// const server = {
//   proxy: 'proxy;', // webpack http-proxy-middleware
//   native: 'native;', // hybirdApp
// };

const autoServer = () => {
  let env = '';
  if (navigator.userAgent.match(/NATIVE_APP/ig)) { // hybirdApp env
    env = 'native;';
  } else {
    switch (true) {
      case !!location.host.match(/localhost/ig): // local env
        env = 'mock;http://localhost:7709';
        break;
      case !!location.host.match(/test/ig): // test-dev env
        env = 'stage;https://test.pa.com.cn';
        break;
      case !!location.host.match(/city/ig): // prod env
        env = 'prod;https://city.pa.com.cn';
        break;
      default:
    }
  }
  
  return env;
};

export default autoServer();
