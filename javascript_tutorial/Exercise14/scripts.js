container = document.body.querySelector(".container")


async function createMessage(text, classname){
    return new Promise((resolve)=>{
        let div = document.createElement('div');
        div.className=`${classname}`
        div.innerHTML=`<h1>${text}</h1>`
        container.appendChild(div)

        let h1 = div.querySelector("h1")
        let dots =""


        let interval = setInterval(()=>{
            if (dots.length < 3){
                dots += "."
            } 
            h1.innerText = text + dots

    },400)

    setTimeout(() => {
            clearInterval(interval)   // stop blinking
            resolve()
        }, 2000)
    })
    
}



async function runHack(){
    await createMessage("Initializing Hacking", "func1")
    await createMessage("Reading your files", "func2")
    await createMessage("Passwords files are Detected", "func3")
    await createMessage("Sending all files to Server", "func4")
    await createMessage("Cleaning Up", "func5")
}

runHack()
