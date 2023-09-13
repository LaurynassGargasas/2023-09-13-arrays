// let numsArray = [5, 500, -5, 57.5]

// console.log(numsArray)
// console.log(numsArray.length)

// console.log(numsArray[0])

// for (let i = 0; i < numsArray.length; i++){
//     console.log(numsArray[i])
// }


let newArray = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751]

let minusFirst = newArray.splice(0, 1)
console.log(minusFirst)
console.log(newArray)

let minusLast = newArray.splice(-1, 1)
console.log(newArray)

let middleIndex = Math.floor(newArray.length / 2)
console.log(middleIndex)

let minusMiddle = newArray.splice(middleIndex, 1)
console.log(minusMiddle)
console.log(newArray)

let minusBeforeLast = newArray.splice(-2, 1)
console.log(minusBeforeLast)
console.log(newArray)

let minusSecond = newArray.splice(1, 1)
console.log(minusSecond)

let minusSeventhEight = newArray.splice(6, 2)
console.log(newArray)

let minusMinus456 = newArray.splice(-6, 3)
console.log(newArray)

newArray[2] = 888

console.log(newArray)


let replaceThree = newArray.splice(9, 1, 33, 789, 6543)
console.log(newArray)


let replaceLast = newArray.splice(-1, 1, 321, 654, 987)
console.log(newArray)


let insert11 = newArray.splice(1, 0, 11)
console.log(newArray)

let insert1 = newArray.splice(13, 0, 1)
console.log(newArray)

let insertMinus1 = newArray.splice(-1, 0, -1)
console.log(newArray)

let toFirst = newArray.unshift(1, 2, 3)
console.log(newArray)

let toLast = newArray.push(-333, -321, -312)
console.log(newArray)

let middleIndex2 = Math.floor(newArray.length / 2)
let plusMiddle = newArray.splice(middleIndex2, 0, 0)
console.log(newArray)

let deleteFirst = newArray.shift()
console.log(newArray)

let deleteLast = newArray.pop()
console.log(newArray)

let addStart = newArray.unshift('start')

let addEnd = newArray.push('end')

console.log(newArray)