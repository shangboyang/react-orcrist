// es6 Promise polyfill
import Promise from 'es6-promise';

/**
 * 为Promise扩充done 总是处于回调链最底端 保证抛出任何可能出现的异常
 * @param  {[type]} onFulfilled [description]
 * @param  {[type]} onRejected  [description]
 * @return {[type]}             [description]
 */
Promise.prototype.done = function(onFulfilled, onRejected) {
    this.then(onFulfilled)
    .catch(function(reason) {
      console.log(reason);
        setTimeout(() => {
            throw reason;
        }, 0)
    })
};

const request = (type, url) => {

    let hasCanceled_ = false;

    let promise = new Promise((resolve, reject) => {

        const handler = function() {

            if (this.readyState !== 4) {
                return;
            }

            if (this.status === 200) {
                resolve(this.response);
            }

        };

        let client = new XMLHttpRequest();
        client.open(type, url);
        client.onreadystatechange = handler;
        client.responseType = 'json';
        client.setRequestHeader('Accept', 'application/json');
        client.send();

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

  //  return promise;

}

export default request;
