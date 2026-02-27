// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.


async function brewCoffee(coffee){
    let randomDelay=Math.ceil(Math.random()*10000)
    console.log("It will take about "+randomDelay+" seconds");
    
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(`${coffee} is ready`);
            resolve();
            
        },randomDelay)
    })
    
}


async function main(){

    let a = await brewCoffee("Filter Coffee")
    // console.log(a)
}

main()