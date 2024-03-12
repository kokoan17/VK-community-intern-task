import { SET_GROUPS_COUNT, SET_GROUPS_LIST } from "../consts";

export interface GetGroupsResponse {
  result: 1 | 0;
  data?: Group[];
}

export interface Group {
  id: number;
  name: string;
  closed: boolean;
  avatar_color?: string;
  members_count: number;
  friends?: User[];
}

export interface User {
  first_name: string;
  last_name: string;
}

export interface SetGroupsList {
  type: typeof SET_GROUPS_LIST;
  payload: Group[];
}

export interface SetGroupsCount {
  type: typeof SET_GROUPS_COUNT;
  payload: number;
}

export interface FilterProps {
  privacyType: string;
  avatarColors?: string[];
  areFriends?: boolean;
}

export type GroupsActions = SetGroupsList | SetGroupsCount;
