let adj={
    "0":"Crazy",
    "1":"Amazing",
    "2":"Fire"
}
let shop={
    "0":"Engine",
    "1":"Food",
    "2":"Garment"
}

let anotherword={
    "0":"Bros",
    "1":"Limited",
    "2":"Hub",
}

let a = Math.ceil(Math.random()*100)%3;
let b = Math.ceil(Math.random()*100)%3;
let c = Math.ceil(Math.random()*100)%3;
console.log(a.toString())
console.log(b.toString())
console.log(c.toString())

console.log(`${adj[a.toString()]} ${shop[b.toString()]} ${anotherword[c.toString()]}`)
 
