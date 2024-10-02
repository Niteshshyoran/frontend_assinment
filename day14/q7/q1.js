//creating a arr with random intigers
const numbers = [1,3,43,5,30,45,75,2,4,9]
//creating a function
function filterArray(arr,callback){
    const filterArray=[]

    for(let i=0;i<arr.length;i++){
        // cheak the number is odd or even and adding to new array
        if (callback(arr[i])){
            filterArray.push(arr[i]);
        }
    }
    return filterArray;
}
function iseven(element){
    return element%2==0;
}
const filternumber = filterArray(numbers,iseven);
//displaying original array
console.log("original array", numbers)
//displaying even number array
console.log("filteredArray(Even Number)",filternumber)