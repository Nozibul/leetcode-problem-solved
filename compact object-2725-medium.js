var compactObject = function(obj) {
    if(Array.isArray(obj)){
      return obj.filter(ele => Boolean(ele)).map(value=> compactObject(value))
    } else if(obj !== null && typeof obj === "object"){
        let newObj = {};
        for (let key in obj){
            if(Boolean(obj[key])){
                newObj[key] = compactObject(obj[key]);
            }
        }
        return newObj;
    }else{
        return obj
    };
};

const newObjs = compactObject({"a": null, "b": [false, 1]})
console.log(newObjs);