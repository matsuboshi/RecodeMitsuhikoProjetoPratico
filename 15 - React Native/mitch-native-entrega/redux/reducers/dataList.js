import * as actions from '../actions/actionTypes';
import { produce } from 'immer';

let lastId = 4;

const initialState = [
  {
    id: 0,
    description: 'Fat yogurt',
    resolved: true,
  },
  {
    id: 1,
    description: 'Chia seeds',
    resolved: true,
  },
  {
    id: 2,
    description: 'Eggs',
    resolved: true,
  },
  {
    id: 3,
    description: 'Coconut oil',
    resolved: true,
  },
  {
    id: 4,
    description: 'Granola',
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
