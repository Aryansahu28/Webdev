
function factorialByReduce(num){
    
    if (num<0){
        return "Enter a valid number";

    }

    if (num==0 && num==1){
        return 1;
    }

    const numbers = Array.from({length:num},(_,i)=>i+1);

    const result = numbers.reduce((accumulator,currentValue)=> accumulator*currentValue,1);

    return result



}
console.log(factorialByReduce(5))