// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.
let Gryffindor = []
let Hufflepuff = []
let Ravenclaw = []
let Slytherin = []
function classSelection(names){
    for (const name of names) {
        if (name.length<=6){
            Gryffindor.push(name)
        }
        else if (name.length <=8){
            Hufflepuff.push(name)
        }
        else if (name.length <= 12){
            Ravenclaw.push(name)
        }
        else{
            Slytherin.push(name)
        }
        
    }
}

let names = [
    "Ava",                // 3
    "Leo",                // 3
    "Noah",               // 4
    "Liam",               // 4
    "Emma",               // 4
    "Aryan",              // 5
    "Rohan",              // 5
    "Sophia",             // 6
    "Daniel",             // 6
    "Harper",             // 6
    "Michael",            // 7
    "Jessica",            // 7
    "Benjamin",           // 8
    "Isabella",           // 8
    "Alexander",          // 9
    "Charlotte",          // 9
    "Christopher",        // 11
    "Maximilian",         // 10
    "Anastasia",          // 9
    "Bartholomew",        // 11
    "Alexanderson",       // 12
    "Montgomery",         // 10
    "Valerianus",         // 10
    "Constantine",        // 12
    "Alexandrianna",      // 13
    "Nathanielson",       // 13
    "Christopherian",     // 15
    "Alexanderthegreat",  // 18
    "Maximilianusrex"     // 16
];

classSelection(names)
console.log(Gryffindor)
console.log(Hufflepuff)
console.log(Ravenclaw)
console.log(Slytherin)