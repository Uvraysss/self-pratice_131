/*import getStrLength, { echo, getLength, TAX} from "./utility.js"
//Named export
console.log(getStrLength("Introduction to JS"))
console.log(echo('NO one perfect'))
console.log(TAX)
console.log(getLength("YOU"))
*/

//import strLength, { echo, TAX } from "./utility.js"
//change echo -> repeat 
import strLength, {Book, echo as repeat, VAT } from "./utility.js"

console.log(echo("No one perfect"))
console.log(repeat("Thunwawee"))
console.log(TAX)
console.log(VAT)
console.log(strLength("Frontend"))

const b1 = new Book(1234, "JS Beginner")
console.log(b1)
 