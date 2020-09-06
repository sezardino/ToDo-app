const toggleProperty = (arr, id, propertyName) => {
  const index = arr.findIndex((item) => item.id === id)
  const newEl = {...arr[index], [propertyName]: !arr[index][propertyName]};
  const newArr = [...arr.slice(0, index), newEl, ...arr.slice(index + 1)];
  return newArr
};


export {toggleProperty};