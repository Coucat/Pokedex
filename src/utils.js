const WriteNumber = (id) => {
  if (id > 99) { return `N° ${id}`; }
  if (id > 9) { return `N° 0${id}`; }
  return `N° 00${id}`;
};
export default WriteNumber;
