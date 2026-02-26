console.log("Promises")

let prom1 = new Promise((resolve,reject)=>{
    a = Math.random()
    if (a < 0.5){
        reject("Value is less than 0.5 which is "+a)
    }
    else{
        console.log("Else block")
        setTimeout(()=>{
            console.log("It is returned after 3 seconds")
        },3000);
    }
})

prom1
    .then((message) => {
        console.log("Then block:", message)
    })
    .catch((error) => {
        console.log("Catch block:", error)
    })
    .finally(() => {
        console.log("Finally block: Always runs")
    })