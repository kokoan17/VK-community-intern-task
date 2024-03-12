import { SET_GROUPS_COUNT, SET_GROUPS_LIST } from "../consts";
import { GroupsActions, Group } from "../types";

type GroupsState = {
  groups: Group[];
  count: number;
};

const INITIAL_STATE: GroupsState = {
  groups: [],
  count: 0,
};

function groupsReducer(state = INITIAL_STATE, action: GroupsActions) {
  switch (action.type) {
    case SET_GROUPS_LIST:
      return { ...state, groups: action.payload };
    case SET_GROUPS_COUNT:
      return { ...state, count: action.payload };
    default:
      return state;
  }
}

export default groupsReducer;
