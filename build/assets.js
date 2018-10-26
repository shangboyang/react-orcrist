module.exports = {
  dev: {
    cdn: {
      js: [
        'https://cdn.bootcss.com/vConsole/3.2.0/vconsole.min.js'
        // 'https://unpkg.com/react@16.5.2/umd/react.development.js',
        // 'https://unpkg.com/react-dom@16.5.2/umd/react-dom.development.js',
        'https://cdnjs.cloudflare.com/ajax/libs/redux/3.6.0/redux.js'
      ]
    }
  },
  prod: {
    cdn: {
      js: [
        'https://unpkg.com/react@16.5.2/umd/react.production.min.js',
        'https://unpkg.com/react-dom@16.5.2/umd/react-dom.production.min.js',
        // 'https://cdnjs.cloudflare.com/ajax/libs/redux/3.6.0/redux.min.js',
        // 'https://cdnjs.cloudflare.com/ajax/libs/redux-thunk/2.1.0/redux-thunk.min.js',
        // 'https://cdnjs.cloudflare.com/ajax/libs/redux-thunk/2.1.0/redux-thunk.js'
      ]
    }
  }
}