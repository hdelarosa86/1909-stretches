const trim = obj => {
    let newObj ={}
    for(let k in obj){
        if(obj[k] === 0 || obj[k] === false){
            newObj[k] = obj[k];
        }
    }
    return newObj;
};

module.exports = { trim };
