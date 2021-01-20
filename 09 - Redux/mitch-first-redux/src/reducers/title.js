import * as actions from '../actions/actionTypes';

export default function titleReducer(
  state = 'Change title on settings',
  action
) {
  switch (action.type) {
    case actions.UPDATE_TITLE:
      return action.payload.newTitle;
    default:
      return state;
  }
}
