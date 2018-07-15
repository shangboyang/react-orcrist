import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';
import * as AppActions from '@/containers/App/action';
import * as MainAction from '@/containers/Main/actions';


const mainActions = Object.assign({}, AppActions, MainAction);
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
