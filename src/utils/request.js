import env from '@/config/env';

const currEnv = env.split(';')[0];
const currHost = env.split(';')[1];
const isNative = window.App; // naitve flag

const request = (type, url, params) => {
  let reqURL = url;

  const promise = new Promise((resolve, reject) => {
    const reqType = typeof type === 'string' && type.toUpperCase();
    const reqParams = params || {};
    // select request type
    if (reqType === 'GET' && currEnv !== 'native') {
      let p = '?'; // ‘?a=xxx&b=yyy’
      for (const o in reqParams) {
        if (Object.prototype.hasOwnProperty.call(reqParams, o)) {
          p += `${o}=${reqParams[o]}&`;
        }
      }
      p = p.slice(0, -1);
      // get & http
      if (currHost.match(/http/g)) {
        reqURL = currHost + reqURL + p;
      }
      // proxy && native 不做任何处理
    } else if (reqType === 'POST') {
      if (currHost.match(/http/g)) {
        reqURL = currHost + reqURL;
      }
    }

    /**
     * 区分环境执行Request
     */
    const execute = () => {
      if (isNative) {
        const reqBody = {
          reqURL,
          reqType,
          data: reqParams,
          success: resolve,
          error: reject,
        };

        typeof $$.Native.request === 'function' && $$.Native.request(reqBody);
      } else {
        const handler = function handler() {
          if (this.readyState !== 4) return;

          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(this.statusText);
          }
        };

        const client = new XMLHttpRequest();
        client.open(type, url);
        client.onreadystatechange = handler;
        client.responseType = 'json';
        client.setRequestHeader('Accept', 'application/json');
        client.setRequestHeader('Content-Type', 'application/json');

        // const currToken = window.sessionStorage.getItem('CITY_MALL_TOKEN');
        // client.setRequestHeader('token', currToken);
        // client.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        // client.setRequestHeader('requestID', `REQ_${currToken}${+new Date()}`);
        client.send(type === 'POST' ? JSON.stringify(params) : null);
      }
    };

    execute();
  });

  return promise;
};

export default request;
