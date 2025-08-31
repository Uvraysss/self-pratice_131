//filter function does not change an original array
const words = ['Mango', 'apple', 'Mangoteen', 'orange', 'mangoes']
// 1.annonymous srrow function
// const shortWords = words.filter((words) => words.length <= 6)
// 2. annonymous function declaration
/* const shortWords = words.filter(function (word) {
    return word.length <= 6
})*/
// 3. reuse callback function (named function)
function wordLeangth(word) {
    return word.length <= 6
}
const shortWords = words.filter(wordLeangth)
// const shortWords = words.filter(wordLeangth("apple")) //words.filter(true)
console.log(words)
console.log(shortWords)

//sort function change original array
const sortedWords = words.sort()
console.log(words)
console.log(sortedWords)

const map1 = words.map( x => x.toUpperCase())
console.log(map1)
//131 5avenger//

const students = [
    { id: 1, name:'Somchai Jaidee'},
    { id: 2, name: "Suda Deejai" },
    { id: 3, name: "John Smith" },
]
const map2 = students.map( (students) => students.id)
console.log(map2)

const map3 = students.map((students) => students.id).filter(id => id % 2 == 0)
console.log(map3)

//return all words that include 'mango' 
//result ['Mango', 'Mangoteen']

const map4 = words.filter((words) => words.toUpperCase().includes('MANGO'))
console.log(map4)
//includes() -> array
console.log(words.includes("Apple"))
console.log(words.includes("apple"))
console.log(words.includes("apple")) // case sensitive ตัวเล็กตัวใหญ่มีผลต่างกัน

//check array that has word "apple" or not if has display 'has apple', otherwise, display 'dose not have apple'
function Find1(words) {
    if (words.find( word => word.toUpperCase().includes("APPLE"))) {
        return "has apple";
    } else {
        return "does not have apple";
    }
}

console.log(Find1(words))

const sentence = "The quick brown for jumps over the lazy dog."
const word = "Ox"
console.log(sentence.includes(word))

num = 2
let x = num % 2 === 0 ? "even" : "odd"

const product = [1, 'RED', 102]
const productDetail = product.reduce((detail, prop) => {
    return prop === 'RED' ? detail?.concat('R') : detail?.concat(prop)
}, '') 
console.log(productDetail)

const cart = [
    { productID:1001, price: 500, quantity: 2 },
    { productID:1002, price: 10, quantity: 3 },
    { productID:1003, price: 5, quantity: 10 },
]
//find cart total and return object that show the total {total: 1080}
const total = cart.map(product => product.price * product.quantity)
                  .reduce((sum, price) => sum + price, 0);

console.log(total)

// cart[cart.length] = { productId: 5555, price: 1, quantity: 4 }
cart.push({ productId: 5555, price: 1, quantity: 4 })
console.log(cart)
console.log(cart.pop()) //{ productId: 5555, price: 1, quantity: 4 }
console.log(cart.length) //3
//unshift
console.log(cart.unshift({ productId: 1000, price: 1, quantity: 4 })) 
console.log(cart)
console.log(cart.length)
//shift
console.log(cart.shift())
console.log(cart)
console.log(cart.length)

const words1 = ["Mango", "Apple", "mangoteen", "orange", "mangoes"]
words1.splice(2, 1, 'banana') // replace "mangoteen" with 'banana'
console.log(words1)
words1.splice(3,2) // remove the last two words
console.log(words1)
words1.splice(2, 0 ,'melon', 'cherry') // add 'melon' and 'cherry' after 'Apple'
console.log(words1)

const words2 = ["Mango", "Apple", "mangoteen", "orange", "mangoes"]

//slice items at index 2 to last
console.log(words2.slice(2))  
// //slice the first to third items
console.log(words2.slice(0,3))
//fill null to all items
console.log(words2.fill(null))

// practice

/*Problem 1 – Filter Short Words
- Given the following array of words:
- const fruits = ["Mango", "Apple", "Banana", "Kiwi", "Orange"];
Task: Use .filter() to find only the words with length ≤ 5 and display the result.*/

const fruits = ["Mango", "Apple", "Banana", "Kiwi", "Orange"]
const fruitShortwords = fruits.filter((fruit) => fruit.length <= 5) 
console.log(fruitShortwords) //[ 'Mango', 'Apple', 'Kiwi' ]

/*Problem 2 – Map to Uppercase
- Use the same fruits array.
Task: Use .map() to convert all words to uppercase and display the result.*/

const fruitUppercase = fruits.map((fruit) => fruit.toUpperCase()) 
console.log(fruitUppercase) //[ 'MANGO', 'APPLE', 'BANANA', 'KIWI', 'ORANGE' ]

/*Problem 3 – Find Maximum and Minimum
- You are given an array of numbers:
const numbers = [12, 45, 7, 32, 89, 5, 77];
Task: Use .reduce() to find the maximum value (max).
      Use .reduce() to find the minimum value (min).
- Display the result as an object, for example: { max: 89, min: 5 }*/

const numbers = [12, 45, 7, 32, 89, 5, 77]
const max = numbers.reduce((acc,num) => (num > acc ? num : acc), numbers[0])
const min = numbers.reduce((acc,num) => (num < acc ? num : acc), numbers[0])

const result = { max: max, min: min }
console.log(result) // { max: 89, min: 5 }

/*Problem 4 – Check Even Numbers
You are given an array of numbers:
const numbers = [3, 8, 12, 5, 7, 10];
Task: Write a function to check if the array contains any even numbers.
If yes → display "Has even number"
If no → display "Does not have even number" */

const Numbers = [3, 8, 12, 5, 7, 10]

function Some(Numbers) {
    if (Numbers.some(num => num % 2 === 0)) {
        return "Has even number"
    } else {
        return "Does not have even number"
    }
}

console.log(Some(Numbers)) //"Has even number"

/*Problem 5 – Add/Remove Elements
- Given the array:
let colors = ["Red", "Green", "Blue"];
Task: Add "Yellow" to the end of the array
      Add "Black" to the beginning of the array
      Remove 1 element from the beginning of the array
      Remove 1 element from the end of the array
Display the current array and its length*/

let colors = ["Red", "Green", "Blue"]

colors.push("Yellow")
colors.unshift("Black")
console.log(colors) //["Black", "Red", "Green", "Blue", "Yellow"]
console.log(colors.length) // 5
colors.pop()
colors.shift()
console.log(colors) //["Red", "Green", "Blue"]
console.log(colors.length) //3

/*problem 6 – Using splice
- Given the array:
let animals = ["Cat", "Dog", "Elephant", "Lion"];
Task: Replace "Elephant" with "Tiger"
      Remove "Lion"
      Insert "Monkey" and "Giraffe" after "Dog"
Display the final array*/

let animals = ["Cat", "Dog", "Elephant", "Lion"]

animals.splice(2, 1, "Tiger")
console.log(animals) //["Cat", "Dog", "Tiger", "Lion"]
animals.splice(3, 1)
console.log(animals) //["Cat", "Dog", "Tiger"]
animals.splice(2, 0, "Monkey", "Giraffe")
console.log(animals) //["Cat", "Dog", "Monkey", "Giraffe", "Tiger"]
