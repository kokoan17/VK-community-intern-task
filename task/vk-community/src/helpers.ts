import { MOCK_GROUP_LIST } from "./consts";
import { FilterProps, Group } from "./redux/types";

export const sleep = (delay: number) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
};

export const colorsArray = () => {
  return MOCK_GROUP_LIST.map((_) => _.avatar_color).filter(
    (item, pos, array) => array.indexOf(item) == pos && !!item
  );
};

export const filterGroups = (data: Group[], filters: FilterProps) => {
  let result: Group[] = data;

  if (filters.privacyType !== "all") {
    result = result.filter((elem) =>
      filters.privacyType === "close" ? elem.closed : !elem.closed
    );
  }

  if (filters.avatarColors && filters.avatarColors.length) {
    result = result.filter((elem) =>
      elem?.avatar_color
        ? filters.avatarColors?.includes(elem?.avatar_color)
        : false
    );
  }

  if (filters.areFriends) {
    result = result.filter((elem) => elem?.friends?.length)
  }

  return result;
};
