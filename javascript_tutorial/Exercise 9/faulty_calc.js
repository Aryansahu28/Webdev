function calculate(a,b,op){
    if (op == "+"){
        a= parseInt(a);
        b=parseInt(b);
        console.log(a+b)
    }
    else if (op == "-"){
        a= parseInt(a);
        b=parseInt(b);
        console.log(a-b)
    }
    else if (op == "*"){
        a= parseInt(a);
        b=parseInt(b);
        console.log(a*b)
    }
    else if (op == "/"){
        a= parseInt(a);
        b=parseInt(b);
        console.log(a/b)
    }
    else if (op == "**"){
        a= parseInt(a);
        b=parseInt(b);
        console.log(a**b)
    }   
    
}

function faulty_calc(a,b,op){
    if (op == "+"){
        a= parseInt(a);
        b=parseInt(b);
        console.log(a/b)
    }
    else if (op == "-"){
        a= parseInt(a);
        b=parseInt(b);
        console.log(a*b)
    }
    else if (op == "*"){
        a= parseInt(a);
        b=parseInt(b);
        console.log(a+b)
    }
    else if (op == "/"){
        a= parseInt(a);
        b=parseInt(b);
        console.log(a**b)
    }
    else if (op == "**"){
        a= parseInt(a);
        b=parseInt(b);
        console.log(a+b)
    }
}


let a = prompt("Enter the first number");
let b = prompt("Enter the second number");
let op = prompt("Enter the operation out of (+, -, *, /, **)")

if (Math.random()<0.1){
    faulty_calc(a,b,op);
}
else{
    calculate(a,b,op);
}
