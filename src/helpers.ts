export const copyToClipboard = (text: string) => {
  return navigator.clipboard.writeText(text);
};

export const saveItemToList = (listName: string, item: string) => {
  const list = localStorage.getItem(listName);
  if (!list) {
    localStorage.setItem(listName, item);
    return [item];
  } else {
    const newList = `${list},${item}`;
    localStorage.setItem(listName, newList);
    return newList.split(",");
  }
};

export const removeItemFromList = (listName: string, item: string) => {
  const list = localStorage.getItem(listName)?.split(",");
  if (!list) {
    return [];
  } else {
    const newList = list.filter((li) => li !== item);
    localStorage.setItem(listName, newList.join(","));
    return newList;
  }
};
