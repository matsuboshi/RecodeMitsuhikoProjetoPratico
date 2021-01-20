import { combineReducers } from 'redux';
import dataList from './dataList';
import title from './title';

const allReducers = combineReducers({
  dataList,
  title,
});

export default allReducers;
