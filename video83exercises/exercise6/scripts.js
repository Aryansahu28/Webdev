// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function vowelCounter(word){
    word = word.toLowerCase()
    vowels = ['a','i','o','u','e']
    let count = 0
    for (const letter of word){
        if (vowels.includes(letter)){
            count+=1
    }}
    console.log(count)


}

word = "aeiousdfsdgsffsfse"
vowelCounter(word)