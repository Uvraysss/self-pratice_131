const studentScores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 68 },
    { name: 'David', score: 55 },
    { name: 'Eve', score: 78 }
]

const passingNames = function getPassingName(studentScore) {
    return studentScore.filter(student => student.score > 70) 
                       .map(student => student.name.toUpperCase()) 
}

console.log(passingNames)

console.log(Array.isArray([]))
console.log(Array.isArray("[]"))
console.log(Array.isArray[1, true])

const array1 = ["a", "b", "c"]
const array2 = ["d", "e", "f"]
const array3 = array1.concat(array2)
console.log(array3)
console.log(array3.toString())

const nums = [15, 2, 33]
nums.reverse()
console.log(nums)

const array4 = [1, 30, 4, 21, 100000]
array4.sort((a, b) => a - b)
console.log(array4)

const stds = [
  { id: 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th" },
  { id: 5, name: "Pornchai", email: "pornchai@sit.kmutt.ac.th" },
  { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
]

students.sort((a, b) => a.name.localeCompare(b.name));

/*stds.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});*/
console.log(stds)
