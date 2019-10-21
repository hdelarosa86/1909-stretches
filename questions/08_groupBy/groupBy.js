function groupBy(arr, attr) {
    return arr.reduce( (obj,item) => {
        if(obj[item[attr]]){
            obj[item[attr]].concat([item]);
        } else {
            obj[item[attr]] = [item];
        }
        console.log(obj);
       return obj
    },{})
}

module.exports = { groupBy };
