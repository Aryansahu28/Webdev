// The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

function setAuthToken(token,expiryInMinutes){
    const expiryTime = Date.now() + expiryInMinutes * 60 * 1000
    let data = {
        token,
        expiry: expiryTime
    }
    console.log(token);
    console.log("Your token is saved in browser")
    
    localStorage.setItem("authToken",JSON.stringify(data))
}

function getAuthToken(){
    const stored = JSON.parse(localStorage.getItem("authToken"))

    if (!stored) return null

    if (Date.now() > stored.expiry){
        localStorage.removeItem("authToken")
        console.log("Auth token removed")
        return null
    }

    
    else{
        return stored.token
    }
}

setAuthToken("sgew3gss",1)

console.log(getAuthToken())