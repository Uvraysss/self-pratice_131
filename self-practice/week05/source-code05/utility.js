/*function echo(value){
    return value
}
const getLength = (str) => str.length
const MAXStudent = 60
//default export
module.exports = { echo, getLength, MAXStudent } // { echo:echo, getLength:getLength, MAXStudent:MAXStudent }
*/

function echo(value){
    return value
}
export default function getLength(str){ //สามารถเปลี่ยนชื่อได้ 
    return str.length
}
const TAX = 0.7
let x = 1
//export list
//export { echo, getLength as default, TAX }

class Book {
    constructor(isbn, title){
        this.isbn = isbn
        this.title = title
    }
}
export { Book, echo, getLength, TAX as VAT }