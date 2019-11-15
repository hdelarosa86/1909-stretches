function groupBy(arr, attr) {
  let obj = {};
  if (typeof attr === 'function') {
    arr.forEach(item => {
      if (!obj[attr(item)]) {
        obj[attr(item)] = [item];
      } else {
        obj[attr(item)].push(item);
      }
    });
  } else {
    arr.forEach(item => {
      if (!obj[item[attr]]) {
        obj[item[attr]] = [item];
      } else {
        obj[item[attr]].push(item);
      }
    });
  }
  return obj;
}

module.exports = { groupBy };
