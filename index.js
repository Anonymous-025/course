// let num1 = 15
// let div =
//   num1 % 3 === 0 && num1 % 5 === 0
//     ? 'fuzzbuzz'
//     : num1 % 3 === 0
//     ? 'fuzz'
//     : num1 % 5 === 0
//     ? 'buzz'
//     : 'nothing'
// console.log(div)

// 80-100 'A+'
// 70-79 'A'
// 60-69 'A-'
// 50-59 'B'
// 40-49 'C'
// 33-39 'D'
// 0-32 'F'
// else 'invalid mark'

// let mark = 32
// if (mark >= 80 && mark <= 100) {
//   console.log('A+')
// } else if (mark >= 70 && mark <= 79) {
//   console.log('A')
// } else if (mark >= 60 && mark <= 69) {
//   console.log('A-')
// } else if (mark >= 50 && mark <= 59) {
//   console.log('B')
// } else if (mark >= 40 && mark <= 49) {
//   console.log('C')
// } else if (mark >= 33 && mark <= 39) {
//   console.log('D')
// } else if (mark >= 0 && mark <= 32) {
//   console.log('F')
// } else console.log('invalid marks')

// let numb = -1
// switch (true) {
//   case numb > 0:
//     console.log('This is a positive number')
//     break
//   case numb === 0:
//     console.log('This is a zero')
//     break
//   case numb < 0:
//     console.log('This is a negative number')
//     break
// }

// let strName = 'hello world'
// console.log(strName.charAt()) //it display charat given position
// console.log(strName.includes('world')) // to check if the value is present in string
// console.log(strName.toUpperCase()) //to change all characters to UPPER CASE
// console.log(strName.toLowerCase()) // to change all characters to lower case
// console.log(strName.startsWith('hell')) // to see if string starts with given value
// console.log(strName.endsWith('d')) // to see if string ends with given value

// let strName = 'hello hi hello hi'
// console.log(strName.search('hi')) // to see the index of given value, provides Ist index if repeated values are present
// console.log(strName.indexOf('hi')) // to see the index of given value method 2,
// console.log(strName.lastIndexOf('hi')) // to see the index of last index of the given value

// let m1 = 'hello '
// let m2 = 'hi '
// let m3 = 'hello'

// let m = m1.concat(m2, m3)
// console.log(m)

// let strName = 'hello world'
// console.log(strName.slice(2)) //  starting index and ending index ,is only given starts from after slicing till index llo world
// console.log(strName.substring(2)) // starting index and ending index, hello
// console.log(strName.substr(0, 1)) //starting index and length, h
// console.log(strName.substr(-11, 8)) //starts from right to left

// const objName = {
//   name: 'something',
//   age: 40,
//   methodName: function () {
//     console.log(`my age is ${this.age}`)
//   },
// }
// objName.methodName()

// const salary = {
//   raju: 2000,
//   rovin: 3000,
//   rahul: 4000,
// }
// let totSalary = 0
// for (let value in salary) {
//   totSalary += salary[value]
// }
// console.log(totSalary)

// const user = {
//   name: 'something',
//   age: 20,
//   favBook: {
//     bookName: 'Percy Jackson',
//     bookAuthor: 'Rick Riordan',
//   },
// }

// const { name, age, favBook } = user
// const { bookName, bookAuthor } = favBook

// console.log(name)
// console.log(bookName)

// Math.PI //returns pi value
// Math.random() //returns a random value
// console.log(Math.round(3.6)) // 4
// Math.pow(2, 4) //x ^ y
// Math.sqrt(64)

// JSON.stringify(objName) //convert obj to JSON file format
// JSON.parse(jsonName) //converts JSON to object format

// function FuncName(arg1 = 10, arg2) {
//   console.log(arg1 + arg2)
// }

// FuncName(40, 20)

// const FuncName = function (arg1, arg2) {
//   let sum = arg1 + arg2
//   return sum
// }

// console.log(FuncName(10, 30))

// let sum = 0
// const FuncName = (...args) => {
//   for (let i of args) {
//     sum += i
//   }
//   return sum
// }

// console.log(FuncName(1, 2, 3, 4, 5))

// const arrName = [{ obj1: 'value1', obj2: 'value2', obj3: 'value3' }]

// const result = arrName.find(function (objName) {
//   return (objName.obj1 = 'value2')
// })

// const arrName = [1, 23, 45, 5]
// arrName.forEach(function (varName, i) {
//   console.log(varName) //displays all elements of array0
// })

// const arrName = [
//   { pprt1: 'Name1', pprt11: 5 },
//   { pprt2: 'Name2', prty22: 20 },
// ]

// arrName
//   .sort(function (varName1, VarName2) {
//     if (varName1.pprt11 > VarName2.pprty22) {
//       return 1
//     }
//     if (varName1.pprt11 === VarName2.pprty22) {
//       return 0
//     }
//     if (varName1.pprt11 < VarName2.pprty22) {
//       return -1
//     }
//   })
//   .reverse()

// console.log(arrName)

// const arrName = [1, 242, 2, -42, 4]
// console.log(
//   arrName.every(function (num) {
//     return num > 0
//   })
// )

// const arrName = [1, 3, 2, -42, 4]
// console.log(arrName.map((num) => num * 2))

// let varName1
// varName1 = arrName.filter(function (varName) {
//   return varName % 2 === 1
// })
// console.log(varName1)

// arrName.reduce(function (sum, varName) {
//   sum + varName //  get sum of all the elements
// })
