function identifyComplexType(values){
    return values.map(value => {
        if(Array.isArray(value)){
            return "array";
        }
        else if (value instanceof Date){
            return "date";
        }
        else if (value instanceof Function){
            return "function";
        }
        else if (value === null){
            return "null";
        }
        else{
            return typeof value;
        }
    });
}

const mixvalues = [23, "hi", false,[1],function(){}]

console.log(identifyComplexType(mixvalues));