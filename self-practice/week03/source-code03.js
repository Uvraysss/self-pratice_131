//In class
function F1(x, y) {
    return x * y
}

//1. function declaration
function mutiply1(a, b){
    return a * b
}
console.log(mutiply1(2,3))

//2. function expression (using arrow function systax) ไม่ support การเรียก references
const mutiply2 = (a, b) => a * b //(a, b) => return a * b
console.log(mutiply2(4,2)) 

//3. function expression (using function declaration)
const mutiply3 = function(a, b) {return a * b}
console.log(mutiply3(5,2))

console.log(typeof(mutiply1))
console.log(typeof(mutiply2))
console.log(typeof(mutiply3))

const x = mutiply1
const y = mutiply2
const z = mutiply3
console.log(typeof(x))
console.log(typeof(y))
console.log(typeof(z))
console.log(x(2,3))
console.log(y(3,3))
console.log(z(4,3))

let a = 1
let b = a
console.log(typeof(a))
console.log(typeof(b))

if (x === mutiply1) 
    console.log("x equals to mutiply1")
else 
    console.log("x is not equals to mutiply1")

function doSomething(x){
    return x(3,5) //multiply1(3,5)
}
console.log(doSomething(mutiply1)) //pass function to another function 

function Dosomething(x){
    return(x)
}
console.log(Dosomething(mutiply1))
const c = Dosomething(mutiply1)
console.log(c)
console.log(y(2,4))

function sayGoodbye(){
    return "Good bye"
}
function doSomeThing() {
    return sayGoodbye
} 
let doIt = doSomeThing()
console.log(doIt())
console.log(doSomeThing()())

function myFunc(theObject){
    theObject.model = "A9999"
}
const product = {model : "A1001", price : 199}
console.log(product.model)

myFunc(product);
console.log(product.model)

// Arguments
function sum(x, y, ...z){
    // return x + y
    // return arguments[0] + arguments[1]
    for (argu of arguments){
        console.log(argu)
    }
    console.log(arguments.length) // Arguments ไม่สนใจ spread
}
(sum(1, 2, 3, 4, 5, 6, 7, 8))

function sum(x,y,...z) {
    let count = 0
    for(argu of arguments) {
        count += argu
    }
    console.log(`sum: ${count}`);
}
sum(1,2,3,4,5)

function greeting(greet = 'Hello', whom = 'Guest', quote = 'How are you?'){
    return `${greet} ${whom} ${quote}`
}

console.log(greeting("hi")) // hi Guest How are you?
console.log(greeting("Good morning", "Guy", "Great!")) // Good morning Guy Great!
console.log(undefined, null, "Fine") // Hello null Fine
console.log(greeting()) // Hello Guest How are you?

function getFreqOfWords(sentence){
    if (sentence == null || sentence == undefined )
        return undefined
    
    sentence = sentence.toLowerCase()
    
    let Words = sentence.split(" ")

    let x = {}

    for (let i of Words){
        if ( i in x) {
            x[i]++
        } else {
            x[i] = 1
        }
    } return x;
}

console.log(getFreqOfWords('Today is present and present is your gift'))

// practice

/*Function Expression + Find Shortest Word
- Write a function using function expression (with const + function) named findShortestWord(sentence)
- Returns the shortest word in the sentence
- If there are ties in length, return the last word found
Example: "I love JavaScript" → "I"*/

const findShortestWord = function(sentence) {
    if (sentence == null || sentence == undefined)
        return undefined

    let Word = sentence.split(" ")
    let shortest = Word[0];

    for ( let i = 1; i < Word.length; i++ )
        if ( Word[i].length < shortest.length ) {
            shortest = Word[i]; 
}
    return shortest;
}

console.log(findShortestWord("I love JavaScript"))

/*Arrow Function + Count Consonants
- Write a function using arrow function named countConsonants(text)
- Counts the number of consonants (all letters except a, e, i, o, u)
- Case insensitive
Example: "Hello World" → 7*/

const countConsonants = (text) => {
    if (!text) return null

    text = text.toLowerCase()

    const consonants = "bcdfghjklmnpqrstvwxyz";
    let count = 0

    for ( let i of text ) {
        if (consonants.includes(i)) {
            count++
        }
    } return count
}

console.log(countConsonants("Hello World"))

/*Function as Argument + Reverse Words
- Write a function executeFunc(fn, str) that:
- Accepts a function fn and a string str
- Calls fn(str) and returns the result
Example: if fn = reverseWords → returns the sentence with each word reversed: "Hello World" → "olleH dlroW"*/

const reverseWords = function(sentence) {
    if ( sentence == null || sentence == undefined )
        return undefined

    return sentence.split(" ")
                    .map(words => words.split("").reverse().join(""))
                    .join()
}

const  executeFunc = (fn, str) => { return fn(str) }

console.log(executeFunc(reverseWords, "Hello World"))
console.log(executeFunc(reverseWords, "JavaScript is fun"))

/*Return Function + Even Length Checker
- Write a function createEvenLengthChecker() that:
- Returns a function that checks if a word has even length
Example:let isEven = createEvenLengthChecker()
console.log(isEven("hello")) // false
console.log(isEven("code")) // true*/

function createEvenLengthChecker(word) {
    if (typeof word !== "string") return null;

    if ( word.length % 2 == 0 ) { 
        return true
    } else {
        return false
    }
}

let isEven = createEvenLengthChecker()

console.log(isEven("hello")) 
console.log(isEven("code")) 

/*Return Function + Palindrome Checker
- Write a function createPalindromeChecker() that:
- Returns a function that checks if a word is a palindrome
Example:
let isPal = createPalindromeChecker()
console.log(isPal("madam"))*/

function createPalindromeChecker(word) {
    if (typeof word !== "string") return null;

    if( word == word.split("").reverse().join("")) {
        return true
    } else {
        return false
    }
}

let isPal = createPalindromeChecker()

console.log(isPal("madam"))
console.log(isPal("Thunwawee"))

/*Arguments Object + Multiply Numbers
- Write a function multiplyAll() that:
- Accepts any number of parameters
- Uses the arguments object to multiply all numbers passed
- Returns the total product
Example: multiplyAll(2, 3, 4) → 24*/

function multiplyAll() {
    if ( arguments.length === 0 ) return 0

    let product = 1

    for (let i = 0; i < arguments.length; i++) {
        product *= arguments[i]
    } return product
} 

console.log(multiplyAll(2, 3, 4)); 
console.log(multiplyAll(5, 10));  
console.log(multiplyAll(7));       
