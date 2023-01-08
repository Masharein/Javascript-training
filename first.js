// const person = {
//     name: 'Bob',
//     age: 25
// }
// person.city = 'SPB'
// // const person2 = Object.assign({}, person)
// // const person2 = { ...person}
// const person2 = JSON.parse(JSON.stringify(person))
// person2.age = 26
// person2.isAdult = true

// console.log(person)

// let a = 10
// let b = 15
// function sum(a, b) {
//     const c = a + b
//     console.log(c)
// }
// sum(a, b)
// a = 18
// b = 32
// sum(a, b)

// function myFn(a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c 
// }
// myFn(a, b)

// const personOne = {
//     name: 'Bob',
//     age: 25
// }
// function increasePersonAge(person) {
//     const updatedPerson = Object.assign({}, person)
//     updatedPerson.age += 1
//     return updatedPerson
// }

// const updatedPersonOne = increasePersonAge(personOne)
// console.log(personOne.age)
// console.log(updatedPersonOne.age) это мутация через копию - рекомендуется делать так

// function anotherFunction() {
// }

// function fnWithCallback(callbackFunction) {
//     callbackFunction ()
// }

// fnWithCallback(anotherFunction) 

// function printMyName() {
//     console.log('Bogdan')
// }
// console.log('Start')
// setTimeout(printMyName, 2000) - вызов через определенное время


// let a 
// let b
// function myFn() {
// let a
// a = true
// b = 10
// console.log(a)
// }

// myFn()
// console.log(a)
// console.log(b)


// 'use strict' - проверка переменных

let a, b
a = 10
b = a
let c = a + b
console.log(c)

унарные операторы 
a++ увеличивает на 1
+a строка в цифру