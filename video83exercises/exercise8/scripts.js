// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function arrayProduct(num){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve( num*2)
        },5000)
        
    })
}

async function main(){
    let nums = [1,3,4,5,6];
    let result = []
    for (const num of nums){
        a = await arrayProduct(num)
        result.push(a)
    }
    console.log(result)
}

main()