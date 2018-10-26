import * as AppActions from '@/containers/App/actions';
import MainActions from '@/containers/Main/actions';

const devMode = process.env.NODE_ENV !== 'production';
const bindActionCreators = devMode ? require('redux').bindActionCreators : window.Redux && window.Redux.bindActionCreators;
const connect = devMode ? require('react-redux').connect : window.ReactRedux && window.ReactRedux.connect;

const mainActions = Object.assign({}, AppActions, MainActions);
const Connect = (Container) => {
  // redux ‘s state 非 react state
  function mapStateToProps(state) {
    return {
      ...state,
    };
  }

  function mapActionToProps(dispatch) {
    return {
      Actions: bindActionCreators(mainActions, dispatch),
    };
  }

  return connect(mapStateToProps, mapActionToProps)(Container);
};

export default Connect;
