import {
  connect
} from 'react-redux';

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
