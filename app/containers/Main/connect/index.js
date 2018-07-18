import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';
import * as AppActions from '@/containers/App/actions';
import MainActions from '@/containers/Main/actions';

const mainActions = Object.assign({}, AppActions, MainActions);
const Connect = (Container) => {
  // redux ‘s state 非 react state
  function mapStateToProps(state) {
    console.log('Main State :::', state);
    
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
