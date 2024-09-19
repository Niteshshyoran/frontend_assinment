function formatcurrency(value){
    return `$${value.toFixed(2)}`;
}

const price = 500;

console.log(`price is ${formatcurrency(price)}`);