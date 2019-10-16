function groupBy(arr, attr) {
    return arr.reduce( (obj,item) => {
        if(obj[item.attr]){
            obj[item.attr].push(item);
        } else {
            obj[item.attr] = [];
            obj[item.attr].push(item);
        }
       return obj
    },{})
}

module.exports = { groupBy };
