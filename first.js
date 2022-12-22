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

const personOne = {
    name: 'Bob',
    age: 25
}
function increasePersonAge(person) {
    personOne.age += 1
    return person
}

increasePersonAge(personOne)
console.log(personOne)