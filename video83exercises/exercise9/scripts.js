// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

async function placeOrder(){
    let randomDelay=Math.ceil(Math.random()*10000)
    console.log(randomDelay);
    
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Order Placed');
            
        },randomDelay)
    })
    
}


async function main(){
    let a = await placeOrder()
    console.log(a)
}

main()