function convertAndCompare(a, b) {
    if (!isNaN(Number(a)) && !isNaN(Number(b))) {
        return Number(a) === Number(b);
    }
    
    return String(a) === String(b);
    }
    console.log(convertAndCompare("10px", 10));