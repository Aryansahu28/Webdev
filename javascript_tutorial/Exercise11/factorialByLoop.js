let a = 6;

function factorial(a){
    if (a<0){
        return "Number is smaller than zero please enter a valid number";
    }

    if (a==1 && a==0){
        return 1;
    }

    fact_val = 1;
    while (a>1){
        fact_val *=a;
        a-=1;
    }
    return fact_val
}

console.log(factorial(6))