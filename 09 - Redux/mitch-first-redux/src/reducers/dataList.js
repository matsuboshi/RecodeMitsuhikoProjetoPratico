import * as actions from '../actions/actionTypes';
import { produce } from 'immer';

let lastId = 0;

const initialState = [
  {
    id: 0,
    description: 'Just a sample',
    resolved: true,
  },
];

export default function dataList(state = initialState, action) {
  switch (action.type) {
    case actions.ROW_ADDED:
      return produce(state, (draftState) => {
        draftState.push({
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        });
      });

    case actions.ROW_REMOVED:
      return state.filter((row) => row.id !== action.payload.id);

    case actions.ALL_ROWS_REMOVED:
      return [];

    case actions.ROW_RESOLVED:
      return state.map((row) =>
        row.id !== action.payload.id
          ? row
          : produce(row, (draftrow) => {
              draftrow.resolved = !draftrow.resolved;
            })
      );

    default:
      return state;
  }
}
