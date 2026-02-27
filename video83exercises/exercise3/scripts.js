// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function augumented_string(word){
    let reverse_word = ""
    for (let i=word.length-1;i>=0;i--){
        reverse_word+=word[i]
    }
    console.log(`Reversed word: ${reverse_word}`)
    console.log(`Augumented word: ${word + reverse_word}`)
}

augumented_string("Hello")