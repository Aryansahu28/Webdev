// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.


function sumSelector(nums){
    let sum = 0
    for (const num of nums){
        if (num < 0){
            break;

        }
        else{
            sum+=num;
            
        }
    }
    console.log(sum);
}

let nums = [1,2,3,4,-1,3,4,5,6]
sumSelector(nums)