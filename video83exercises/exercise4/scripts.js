// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function passwordValidator(password){
    console.log(password.length>=8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password))
}

passwordValidator("rAhu@2")

