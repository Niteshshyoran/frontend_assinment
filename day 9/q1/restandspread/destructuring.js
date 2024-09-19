function extractFirstAndRest(arr) {
    const [first, ...rest] = arr;
    return { first, rest };
    }
    
    console.log(extractFirstAndRest([1, 2, 3, 4])); 

    