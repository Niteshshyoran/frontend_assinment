function sum(a, b, c) {
    return a + b + c;
    }
    
    function calculateTotal(...args) {
        return sum(...args);
    }
    
    console.log(calculateTotal(1, 2, 3));
    