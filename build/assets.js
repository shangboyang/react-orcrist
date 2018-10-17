module.exports = {
  dev: {
    cdn: {
      js: [
        // 'https://unpkg.com/react@16.5.2/umd/react.development.js',
        // 'https://unpkg.com/react-dom@16.5.2/umd/react-dom.development.js'
      ]
    }
  },
  prod: {
    cdn: {
      js: [
        'https://unpkg.com/react@16.5.2/umd/react.production.min.js',
        'https://unpkg.com/react-dom@16.5.2/umd/react-dom.production.min.js'
      ]
    }
  }
}