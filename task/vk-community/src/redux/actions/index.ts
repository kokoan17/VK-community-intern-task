import { MOCK_GROUP_LIST } from "../../consts";
import { filterGroups, sleep } from "../../helpers";
import { ThunkAction } from "../../utils/types";
import { SET_GROUPS_COUNT, SET_GROUPS_LIST } from "../consts";
import { Group, SetGroupsList, SetGroupsCount, FilterProps } from "../types";

export const setGroupsList = (payload: Group[]): SetGroupsList => ({
  type: SET_GROUPS_LIST,
  payload,
});

// для пагинации
export const setGroupsCount = (payload: number): SetGroupsCount => ({
  type: SET_GROUPS_COUNT,
  payload,
});

export const loadGroupList =
  (privacyType: string, avatarColors?: string[], areFriends?: boolean): ThunkAction<void> =>
  (dispatch) => {
    const data: FilterProps = {privacyType}
    data.privacyType = privacyType
    if (avatarColors) {
      data.avatarColors = avatarColors
    }
    if (areFriends !== undefined) data.areFriends = areFriends

    sleep(1000).then(() => dispatch(setGroupsList(filterGroups(MOCK_GROUP_LIST, data))))

    // место для запроса на сервер
  };

