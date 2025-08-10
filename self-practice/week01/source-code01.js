// In class
let x = [20,30, "Apple", true, false, "Banana"]
console.log(x) 
console.log(`length = ${x.length}`) 
console.log(`first index = ${x[0]}`) 
console.log(`last index = ${x[x.length-1]}`)

for (let i = 0; i < x.length; i++) {
    console.log(`Index = ${i}`,`Value = ${x[i]}`)
} 

x[x.length] = "YOU" 
x[x.length+2] = "JS" 
console.log(x) 

delete x[6] 
console.log(x) 
console.log(`length = ${x.length}`) 
console.log(x.pop()) 
console.log(`length = ${x.length}`) 

let y = [ ["YOU", "FOFO", "ABC"], {NO: "67130500131", Firstname: "Thunwawee", Nickname: "YOU"}]
console.log(y) 

//array contains many objects
const colors=[{id:1, name:'red', tone:'hot'},{id:2, name:'purple', tone:'cool'},{id:3, name:'white', tone:'neutral'}]
console.log(colors) 
 
const contacts=[{email:['abc@gmail.com','foo@kmutt.ac.th']},
{address:['Bangkok', 'Puket']}]
 
//array contains many arrays
const groups=[['Malee', 'Jane'], ['John', 'Jay', 'Pete']]
console.log(groups)
 

console.log(colors[1])
console.log(contacts[0].email[1])

for (let i = 0; i < groups.length; i++) {
    let group = groups[i]
    console.log(group[group.length-1])
}

/* spread */
const greeting = "hello Word"
const greetingCh = [...greeting] 
console.log(greetingCh) /*แปลง string เป็น Arrays*/

const cloneGreeting = ["check", ...greetingCh, "done"]
console.log(cloneGreeting)

let a = new Array ()
console.log(a)
console.log(a.length)

let b = new Array(10)
console.log(b)
console.log(b.length)

let c = new Array (3, 2, 1, "New")
console.log(c)
console.log(c.length)

const arr4 = Array.of(5)
console.log(arr4)
console.log(arr4.length)

const str = "Hello"
let k = Array.from(str)
console.log(k)
console.log(k.length)

const arr6 = Array.from(greeting)
console.log(arr6)
console.log(arr6.length)

// practice
/*
Exercise 1
Declare a variable fruits as an array with the values ["Apple", "Banana", "Cherry"].
- Add "Mango" to the end of the array.
- Display the entire array.
- Display the first and last element.
*/

let fruits = ["Apple", "Banana", "Cherry"]
fruits[fruits.length] = "Mango"
console.log(fruits)
console.log(fruits[0])
console.log(fruits[fruits.length-1])

/*
Exercise 2
Declare an array scores = [10, 20, 30, 40, 50].
- Remove the first element from the array.
- Remove the last element from the array.
- Display the remaining array.
*/

let scores = [10, 20, 30, 40, 50]
scores.shift()
scores.pop()
console.log(scores)

/*
Exercise 3
Declare an array color = ["red", "green", "blue"].
- Add "yellow" at the beginning of the array.
- Add "purple" at the end of the array.
- Display the array and its length.
*/

let color = ["red", "green", "blue"]
color.unshift("yellow")
color[color.length] = "purple"
console.log(color)
console.log(color.length)

/*
Exercise 4
Declare an array names = ["A", "B", "C"].
- Use a for loop to display the index and value of each element.
*/

let names = ["A", "B", "C"]

for (let i = 0; i < names.length; i++) {
      console.log(`Index = ${i}`,`Value = ${names[i]}`)
}

/*
Exercise 5
Declare a string "Hello World" in the variable text.
- Convert it to an array of characters using Array.from().
- Display the array and its length.
- Display the character at index 4.
*/

let v = "Hello World"
let s = Array.from(v)
console.log(s)
console.log(s.length)
console.log(s[4])