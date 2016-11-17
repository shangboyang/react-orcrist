// require('eventsource-polyfill');
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true');

console.log('hotClient', hotClient);

hotClient.subscribe(function (event) {
    if (event.action === 'reload') {
        window.location.reload();
    }
});
