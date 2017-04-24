// es6 Promise polyfill
import Promise from 'es6-promise'
import {env, token} from '../config/env'

const currEnv = env.split(';')[0];
const currHost = env.split(';')[1];

/**
 * 为Promise扩充done 总是处于回调链最底端 保证抛出任何可能出现的异常
 * @param  {[type]} onFulfilled [description]
 * @param  {[type]} onRejected  [description]
 * @return {[type]}             [description]
 */
Promise.prototype.done = function(onFulfilled, onRejected) {
  this.then(onFulfilled)
  .catch(function(reason) {
    setTimeout(() => {
        throw reason;
    }, 0)
  })
};

const request = (type, url, params) => {

  type = typeof type === 'string' && type.toUpperCase();
  params = params || {};

  if (type === 'GET') {

    let p = '';
    for (let o in params) {
      p += o + '=' + params[o] + '&';
    }
    p = p.slice(0, -1);
    // get & http
    if (currHost.match(/http/g)) {
      url = currHost + url + '?' + p;
    }

    // native...

    // proxy...

  } else {
    // post & http
    if (currHost.match(/http/g)) {
      url = currHost + url;
    }

    // native...

    // proxy...

  }

  // http promise flag
  let hasCanceled_ = false;

  let promise = new Promise((resolve, reject) => {

    const handler = function() {

      if (this.readyState !== 4) return;

      if (this.status === 200) {
        resolve(this.response);
      }

    };

    let client = new XMLHttpRequest();
    client.open(type, url);
    client.onreadystatechange = handler;
    client.responseType = 'json';
    // client.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    client.setRequestHeader('Accept', 'application/json');
    client.send(type === 'POST' ? JSON.stringify(params) : null);

  })

  promise.then((val) =>
    hasCanceled_ ? reject({isCanceled: true}) : resolve(val)
  );

  promise.catch((error) =>
    hasCanceled_ ? reject({isCanceled: true}) : reject(error)
  );


  return {
    promise: promise,
    cancel() {
      hasCanceled_ = true;
    }
  };

}

export default request;
