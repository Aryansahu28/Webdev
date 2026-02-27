// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

let products = [
    { name: "Laptop", category: "Electronics", price: 800 },
    { name: "Shoes", category: "Fashion", price: 60 },
    { name: "Phone", category: "Electronics", price: 500 },
    { name: "T-shirt", category: "Fashion", price: 20 }
]

function filtercriterion(products,creterion){
    return products.filter(product =>{
        Object.keys(creterion).every(key =>{
            product[key] == creterion[key]
        })

    })
}

let result = filterProducts(products, { category: "Electronics" })
console.log(result)