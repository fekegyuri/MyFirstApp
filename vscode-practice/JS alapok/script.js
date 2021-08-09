let toDo1 = 'Számok 1-től 10-ig'
console.log(toDo1)

for (let i = 0; i <= 9; i++) {
    console.log(i+1)
}

let toDo2 = 'Páros számok 2-től 20-ig'
console.log(toDo2)

for (let i = 1; i <= 10; i++) {
    console.log(i*2)
}

let toDo3 = 'Első N szám'
console.log(toDo3)

let printNumbersTill = (number) => {
    for (let i = 1; i <= number; i++) {
        console.log(i)
    }
}

printNumbersTill(20)
printNumbersTill(15)

let toDo4 = 'Üdvözlés'
console.log(toDo4)

let getGreetingTo = (name) => {
    return `Hello, ${name}!`
}

console.log(getGreetingTo('Gyuri'))

let toDo5 = 'Tömb elemeit kiírni'
console.log(toDo5)

let printValues = (array) => {
    for (let i = 0; i < array.length; i++)  {
        console.log(array[i])
    }
}

printValues([0, 3, 6, 7, 9])

let toDo6 = 'For each ciklus'
console.log(toDo6)

let myNumbers = (array) => {
    array.forEach(number => {
        console.log(number)
    })
}

myNumbers([0, 3, 6, 7, 9])
