// let numsArray = [5, 500, -5, 57.5]

// console.log(numsArray)
// console.log(numsArray.length)

// console.log(numsArray[0])

// for (let i = 0; i < numsArray.length; i++){
//     console.log(numsArray[i])
// }


let newArray = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751]

let minusFirst = newArray.splice(0, 1)
// console.log(minusFirst)
// console.log(newArray)

let minusLast = newArray.splice(-1, 1)
// console.log(newArray)

let middleIndex = Math.floor(newArray.length / 2)
// console.log(middleIndex)

let minusMiddle = newArray.splice(middleIndex, 1)
// console.log(minusMiddle)
// console.log(newArray)

let minusBeforeLast = newArray.splice(-2, 1)
// console.log(minusBeforeLast)
// console.log(newArray)

let minusSecond = newArray.splice(1, 1)
// console.log(minusSecond)

let minusSeventhEight = newArray.splice(6, 2)
// console.log(newArray)

let minusMinus456 = newArray.splice(-6, 3)
// console.log(newArray)

newArray[2] = 888

// console.log(newArray)


let replaceThree = newArray.splice(9, 1, 33, 789, 6543)
// console.log(newArray)


let replaceLast = newArray.splice(-1, 1, 321, 654, 987)
// console.log(newArray)


let insert11 = newArray.splice(1, 0, 11)
// console.log(newArray)

let insert1 = newArray.splice(13, 0, 1)
// console.log(newArray)

let insertMinus1 = newArray.splice(-1, 0, -1)
// console.log(newArray)

let toFirst = newArray.unshift(1, 2, 3)
// console.log(newArray)

let toLast = newArray.push(-333, -321, -312)
// console.log(newArray)

let middleIndex2 = Math.floor(newArray.length / 2)
let plusMiddle = newArray.splice(middleIndex2, 0, 0)
// console.log(newArray)

let deleteFirst = newArray.shift()
// console.log(newArray)

let deleteLast = newArray.pop()
// console.log(newArray)

let addStart = newArray.unshift('start')

let addEnd = newArray.push('end')

// console.log(newArray)

console.log(newArray)


let task1 = newArray.slice(0, 1)
console.log(task1)

let task2 = newArray.slice(-2, -1)
console.log(task2)

let task3 = newArray.slice(1, 2)
console.log(task3)

let task4 = newArray.slice(-3, -2)
console.log(task4)

let task5 = newArray.slice(7, 8)
console.log(task5)

let task6 = newArray.slice(-9, -8)
console.log(task6)

let middleOfArray = Math.floor(newArray.length / 2)
let task7 = newArray.slice(middleOfArray, (middleOfArray + 1))
console.log(task7)

let task8 = newArray.slice(0, 3)
console.log(task8)

let task9 = newArray.slice(-4, -1)
console.log(task9)

let task10 = newArray.slice(0, 10)
console.log(task10)

let task11 = newArray.slice(-11, -1)
console.log(task11)

let task12 = newArray.slice(2, 8)
console.log(task12)

let task13 = newArray.slice(-9, -4)
console.log(task13)

let task14 = newArray.slice(10, 19)
console.log(task14)

let task15 = newArray.slice(-17, -8)
console.log(task15)

let task16 = newArray.slice(1, 27)
console.log(task16)

let task17 = newArray.slice(0, 26)
console.log(task17)

let task18 = newArray.slice(5, 27)
console.log(task18)

let task19 = newArray.slice(0, 22)
console.log(task19)

let task20 = newArray.slice(0, middleOfArray)
console.log(task20)

let task21 = newArray.slice(middleOfArray + 1, 27)
console.log(task21)

let task22 = newArray.slice(1, -2)
console.log(task22)

let task23 = newArray.slice(5, -3)
console.log(task23)

let task24 = newArray.slice(1, -8)
console.log(task24)

let task25 = newArray.slice(7, -2)
console.log(task25)

let task26 = newArray.slice(9, -12)
console.log(task26)

let task27 = newArray.slice(10, -8)
console.log(task27)

let task28 = newArray.slice(7, -8)
console.log(task28)


let task29 = newArray.slice(0, 5)
console.log(task29)
let task292 = newArray.slice(-7, -1)
console.log(task292)
let combine29 = task29.concat(task292)
console.log(combine29)

let task30 = newArray.slice(2, 5)
console.log(task30)
let task302 = newArray.slice(12, 15)
console.log(task302)
let combine30 = task30.concat(task302)
console.log(combine30)