import {
  FETCH_DATA_START,
  FETCH_DATA_END
} from '@/containers/Main/constants';
import request from '@/utils/request';

const fetchStart = () => ({
  type: FETCH_DATA_START,
  fetching: true
});

const fetchEnd = data => ({
  type: FETCH_DATA_END,
  fetching: false,
  data,
});

const fetchData = () => (dispatch, getState) => {
  const {
    mainData
  } = getState().mainReducer;
  dispatch(fetchStart());
  
  request('post', '/post', {
    foo: 1,
    bar: 2
  }).then((data) => {
    console.log(mainData);
    dispatch(fetchEnd(data));
  }).catch((err) => {
    dispatch(fetchEnd(err));
  });
};

export default {
  fetchData,
  fetchEnd
};
