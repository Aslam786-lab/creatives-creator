export const filteredCreatives = (searchItem, creatives) => {
  const searchedCreatives = creatives.filter((item) => {
    const isColorMatch = !searchItem.color || item.color === searchItem.color;
    const isTextMatch =
      !searchItem.text ||
      item.title.includes(searchItem.text) ||
      item.subtitle.includes(searchItem.text);
    return isColorMatch && isTextMatch;
  });
  return searchedCreatives;
};
