//Inclass
let students = { stdno:67130500131, Fisrtname: "Thunwawee", 
Lastname: "Nithiphornchaiwong" }
console.log(students)

const book={isbn:12345678, title:'Introduction to JS',
authors:[{firstname:'John'}, {lastname:'Smith'},
{firstname:'Danial'}, {lastname:'Doh'}, {firstname:'YOU'}, {lastname:'Nithi'}], versions:[1.0, 2.0,3.0], 
isAvailable:true, getISBN(){return this.isbn},isbn:67130500131 } //ใส่ key isbn ซ้ำแต่ค่าต่างกัน โปรแกรมจะรันค่าล่าสุด 
console.log(book)
console.log(book.getISBN())
console.log(book.authors[0].firstname)
console.log(book.authors) //array
console.log(Object.values(book.authors))

book.publishDate = new Date(2025, 1, 10) // Add key เพิ่มใน Object book
console.log(book)
delete book.isAvailable // ลบ key isAvailable ออกจาก Object book
console.log(book)
console.log(book["publishDate"])
console.log(book.publishDate)

for (const key in book) {
    console.log(book[key])
} 

//constructure Function
function Book(isbn, title) { // ฺB ตัวใหญ่ สังเกตว่าเป็น constructure function
    this.isbn = isbn
    this.title = title
} // ฺสังเกตว่าใช้ this เป็นการเขียนแบบ consturcture function 

const myBook = new Book (111,"JS") // myBook เป็น Object ที่เก็บ reference หรือ เก็บ Address ที่พาไปหาตัว Object ที่แท้จริง หรือ Book
const b1 = new Book (123, "HTML")
const b2 = new Book (134, "CSS")
console.log(myBook)

// Class
class Book{
    constructor(isbn, title){
        this.isbn=isbn
        this.title=title
    }
    getISBN(){
        return this.isbn
    }
    setTitle(title){
        this.title=title
    }
    getBookInfo(){
        return `isbn: ${this.isbn}, title: ${this.title}`
    }
}
const Book1 = new Book(12345678, 'JS Beginner')
console.log(Book1.getBookInfo())
console.log(Book1.getISBN())
Book1.setTitle('JS for Beginner')
console.log(Book1.getBookInfo())

//4. using Object.create(existingObj)
const journal=Object.create(myBook)
journal.ISSN=587904
console.log(journal)
console.log(journal.isbn)
console.log(journal.title)

const y = {id:1, title:"JS"}
function doSomething(x){
    x = {id:1, title:"JS"} // x ฉีกออกมาสร้าง Object ใหม่แล้ว ไม่เกี่ยวกับ Object y
    x.id = 555
}
console.log(y)
console.log(doSomething(y))
console.log(y)

const y1 = {id:1, title:"JS"}
const y2 = {id:2, title:"JS"}
console.log(y1==y2)
console.log(y1===y2)
// false เนื่องจากเป็น Object คนละตัวกัน Memory Address ต่างกัน
console.log(Object.is(y1,y2))

y1 = y2 // เนื่องจาก b2 ให้ references จะกลายเป็นอยู่ที่เดียวกันแล้วจึงเป็น true
console.log(y1==y2)
console.log(y1===y2)
console.log(Object.is(y1,y2))

const x1={isbn:123, title:"JS"}
const x2={isbn:123, title:"JS"}
function isBookEqual(book1,book2) {
    if (book1.isbn === book2.isbn) {
        return true
    } else false
}
console.log(isBookEqual(x1,x2))


const book1={isbn:123, title:"JS"}
const book2={isbn:123, title:"JS"}

const keys = Object.keys(book1) // array of keys // [ 'isbn', 'title' ]
const values = Object.values(book1) // array of values // [ 123, 'JS' ]
console.log(keys)
console.log(values)

//destructuring on array 
const colors = ["red", "green", "blue"]
const [, item2] = colors // const items = color[1]
console.log(item2)
//destructuring on object 
const book3 = {isbn:1234, title:"JS", authors:{Firstname:"Jon", Lastname:"Smith"}}

const {isbn: BookISBN // การเปลี่ยนชื่อต้องใส่ Key ก่อนแล้วตามด้วย : และ ชื่อใหม่  
    , title} = book3
console.log(isbn)
console.log(title)

const {authors:{Firstname}} = book3
console.log(Firstname)

let q1 = {
    isbn: 123456789,
    title: "JavaScript"
}

let q2 = {
    isbn: 123456789,
    title: "JavaScript"
}

function shallowEquality(q1,q2) {
    const keys1 = Object.keys(q1)
    const keys2 = Object.keys(q2)

    if (keys1.length !== keys2.length) {
        return false
    }
    for (let key of keys1) {
        if (q1[key] !== q2[key]) {
            return false
        }
    }
    return true
}

/*
1. Nested Object & Array
- Create an object employee
- Display the entire employee object
- Display the full name by combining first + last
- Display the second project ("ProjectB")
*/

const employee = { empId: 1001, name: { first: "Bob", last: "Marley" }, projects: ["ProjectA", "ProjectB", "ProjectC"] }
console.log(employee)
const fullname = employee.name.first + " " + employee.name.last
console.log(fullname)
console.log(employee.projects[1])

/*
2. Object with Array of Objects
- Create an object library
- Display the title of the first book
- Display the author of the second book
- Use Object.values() on the third book
*/

const library = { code: "LIB001", name: "City Library", books: [
    {title:"JS Basics", author:"Alice"},
    {title:"Python Intro", author:"Bob"},
    {title:"CSS Guide", author:"Carol"}
  ], isOpen: true }

console.log(library.books[0].title)
console.log(library.books[1].author)
console.log(Object.values(library.books[2]))

/*
3. Constructor Function + Method
- Create a Constructor Function Movie:
- Properties: name, year, actors (array)
- Method: getMovieInfo() returns "Name: xxx, Year: yyy, Actors: a,b,c"
- Create an instance: movie1 = "Inception", 2010, ["Leonardo", "Elliot"]
- Display movie1.getMovieInfo()
*/

function Movie(name, year, actors) {
    this.name = name
    this.year = year
    this.actors = actors
    this.getMovieInfo = function() {
        return `Name: ${this.name}, Year: ${this.year}, Actors: ${this.actors.join(", ")}`
    }
}

const movie1 = new Movie("Inception", 2010, ["Leonardo", "Elliot"])
console.log(movie1.getMovieInfo())

/*
4. Class + Nested Property + Method
- Create a Class Movie:
- Constructor parameters: name, year, director (object {firstName, lastName})
- Method getDirector() returns director’s full name
- Method setYear(year) updates the year
- Create an instance: movie2 = "Avatar", 2009, {firstName:"James", lastName:"Cameron"}
- Display the director, update the year to 2022, display getMovieInfo()
*/

class Movie{
    constructor(name, year, director){
        this.name = name
        this.year = year
        this.director = director
    }
    getMovieInfo(){
        return `Name: ${this.name}, Year: ${this.year}, Director: ${this.director.firstName} ${this.director.lastName}`
    }
    getDirector(){
        return `${this.director.firstName} ${this.director.lastName}`
    }
    setYear(){
        this.year = year
    }
}

const movie2 = new Movie("Avatar", 2009, {firstName:"James", lastName:"Cameron"})
console.log(movie2.getDirector())
console.log(movie2.getMovieInfo())
movie2.setYear(2022)
console.log(movie2.getMovieInfo())

/*
6. Destructuring + Nested Array/Object
Given an array:
  {name:"cat", age:2},
  {name:"dog", age:5},
  {name:"rabbit", age:1}
Use destructuring to get the name of the second element ("dog") and the age of the first element 

Given an object:
const director = {name:{first:"Steven", last:"Spielberg"}, awards:["Oscar","Golden Globe"]}
Use destructuring to get first and the first award ("Oscar")
*/

const animals = [{ name:"cat", age:2 }, {name:"dog", age:5}, {name:"rabbit", age:1}]

const [, secondAnimal] = animals  
const { name: secondName } = secondAnimal
const { age: firstAge } = animals[0]

console.log(secondName)
console.log(firstAge)

const director = { 
    name: { first: "Steven", last: "Spielberg" }, 
    awards: ["Oscar", "Golden Globe"] 
}

const { name: { first: directorFirstName }, awards: [firstAward] } = director

console.log(directorFirstName)
console.log(firstAward)
