const connect = process.env.NODE_ENV !== 'production'
  ? require('react-redux').connect : window.ReactRedux && window.ReactRedux.connect;

const Connect = (Container) => {
  function mapStateToProps(state) {
    const {
      transReducer
    } = state;

    return {
      ...transReducer
    };
  }

  return connect(mapStateToProps)(Container);
};

export default Connect;
