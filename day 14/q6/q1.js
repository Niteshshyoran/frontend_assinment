// define the function calculate
function calculate(num1,num2){
    //define the callback function name operation
    function operation (num1,num2,callback){
        return callback(num1,num2);
    }
    //define the addition callback function 

    function addition(a,b){
        return a+b;
    }

    //define the multiplication callback function 
    function multiplication(a,b){
        return a*b;
    }

    // call operation twice with addition and multiplication
    const additionresult = operation(num1,num2,addition);
    const multiplicationresult=operation(num1,num2,multiplication);

    //displaying the result
    console.log("Addition:-" ,additionresult);
    console.log("multiplication:-",multiplicationresult);
}
calculate(2,20)