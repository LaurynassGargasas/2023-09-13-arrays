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

// console.log(newArray)


let task1 = newArray.slice(0, 1)
// console.log(task1)

let task2 = newArray.slice(-2, -1)
// console.log(task2)

let task3 = newArray.slice(1, 2)
// console.log(task3)

let task4 = newArray.slice(-3, -2)
// console.log(task4)

let task5 = newArray.slice(7, 8)
// console.log(task5)

let task6 = newArray.slice(-9, -8)
// console.log(task6)

let middleOfArray = Math.floor(newArray.length / 2)
let task7 = newArray.slice(middleOfArray, (middleOfArray + 1))
// console.log(task7)

let task8 = newArray.slice(0, 3)
// console.log(task8)

let task9 = newArray.slice(-4, -1)
// console.log(task9)

let task10 = newArray.slice(0, 10)
// console.log(task10)

let task11 = newArray.slice(-11, -1)
// console.log(task11)

let task12 = newArray.slice(2, 8)
// console.log(task12)

let task13 = newArray.slice(-9, -4)
// console.log(task13)

let task14 = newArray.slice(10, 19)
// console.log(task14)

let task15 = newArray.slice(-17, -8)
// console.log(task15)

let task16 = newArray.slice(1, 27)
// console.log(task16)

let task17 = newArray.slice(0, 26)
// console.log(task17)

let task18 = newArray.slice(5, 27)
// console.log(task18)

let task19 = newArray.slice(0, 22)
// console.log(task19)

let task20 = newArray.slice(0, middleOfArray)
// console.log(task20)

let task21 = newArray.slice(middleOfArray + 1, 27)
// console.log(task21)

let task22 = newArray.slice(1, -2)
// console.log(task22)

let task23 = newArray.slice(5, -3)
// console.log(task23)

let task24 = newArray.slice(1, -8)
// console.log(task24)

let task25 = newArray.slice(7, -2)
// console.log(task25)

let task26 = newArray.slice(9, -12)
// console.log(task26)

let task27 = newArray.slice(10, -8)
// console.log(task27)

let task28 = newArray.slice(7, -8)
// console.log(task28)


let task29 = newArray.slice(0, 5)
// console.log(task29)
let task292 = newArray.slice(-7, -1)
// console.log(task292)
let combine29 = task29.concat(task292)
// console.log(combine29)

let task30 = newArray.slice(2, 5)
// console.log(task30)
let task302 = newArray.slice(12, 15)
// console.log(task302)
let combine30 = task30.concat(task302)
// console.log(combine30)


console.log(newArray)

let uzd1 = newArray.filter(function(element){
    if(element > 0){
        return true
    }
})
console.log(uzd1)


let uzd2 = newArray.filter(function(element){
    if(element < 0)
    return true
})
console.log(uzd2)


let uzd3 = newArray.filter(function(element){
    if(element % 2 === 0){
        return true
    }
})
console.log(uzd3)


let uzd4 = newArray.filter(function(element){
    if(element % 3 === 0){
        return true
    }
})
console.log(uzd4)


let uzd5 = newArray.filter(function(element){
    if(element % 5 === 0){
        return true
    }
})
console.log(uzd5)


let uzd6 = newArray.filter(function(element){
    if(element % 11 === 0){
        return true
    }
})
console.log(uzd6)


let uzd7 = newArray.filter(function(element){
    if(element % 31 === 0){
        return true
    }
})
console.log(uzd7)


let uzd8 = newArray.filter(function(element){
    if(element % 2 === 0 && element % 3 === 0){
        return true
    }
})
console.log(uzd8)


let uzd9 = newArray.filter(function(element){
    if(element % 3 === 0 && element % 7 === 0){
        return true
    }
})
console.log(uzd9)


let uzd10 = newArray.filter(function(element){
    if(element % 5 === 0 && element % 9 === 0){
        return true
    }
})
console.log(uzd10)


let uzd11 = newArray.filter(function(element){
    if(element % 5 === 0 && element % 11 === 0){
        return true
    }
})
console.log(uzd11)


let uzd12 = newArray.filter(function(element){
    if(element % 2 === 0 && element % 8 === 0 && element % 12 === 0){
        return true
    }
})
console.log(uzd12)


let uzd13 = newArray.filter(function(element){
    if(element % 2 === 0 || element % 3 === 0){
        return true
    }
})
console.log(uzd13)


let uzd14 = newArray.filter(function(element){
    if(element % 3 === 0 || element % 5 === 0){
        return true
    }
})
console.log(uzd14)


let uzd15 = newArray.filter(function(element){
    if(element % 5 === 0 || element % 6 === 0){
        return true
    }
})
console.log(uzd15)


let uzd16 = newArray.filter(function(element){
    if(element % 7 === 0 || element % 8 === 0){
        return true
    }
})
console.log(uzd16)


let uzd17 = newArray.filter(function(element){
    if(element % 9 === 0 || element % 13 === 0){
        return true
    }
})
console.log(uzd17)


let uzd18 = newArray.filter(function(element){
    if(element % 2 === 0 && element % 3 === 0 || element % 5 === 0){
        return true
    }
})
console.log(uzd18)


let uzd19 = newArray.filter(function(element){
    if(element % 5 === 0 && element % 7 === 0 || element % 9 === 0){
        return true
    }
})
console.log(uzd19)


let uzd20 = newArray.filter(function(element){
    if(element % 7 === 0 && element % 8 === 0 || element % 11 === 0){
        return true
    }
})
console.log(uzd20)


let uzd21 = newArray.filter(function(element){
    if(element % 9 === 0 && element % 12 === 0 || element % 13 === 0){
        return true
    }
})
console.log(uzd21)


let uzd22 = newArray.filter(function(element){
    if(element > 100){
        return true
    }
})
console.log(uzd22)


let uzd23 = newArray.filter(function(element){
    if(element > 555){
        return true
    }
})
console.log(uzd23)


let uzd24 = newArray.filter(function(element){
    if(element >= 888){
        return true
    }
})
console.log(uzd24)


let uzd25 = newArray.filter(function(element){
    if(element >= 6789){
        return true
    }
})
console.log(uzd25)


let uzd26 = newArray.filter(function(element){
    if(element < 50){
        return true
    }
})
console.log(uzd26)


let uzd27 = newArray.filter(function(element){
        return true < 1000   
})
console.log(uzd27)


let uzd28 = newArray.filter(function(element){
    return true <= -1   
})
console.log(uzd28)


let uzd29 = newArray.filter(function(element){
    return true <= -5564  
})
console.log(uzd29)


let uzd30 = newArray.filter(function(element){
    if(element < 1000 && element > 500){
        return true
    }
})
console.log(uzd30)


let uzd31 = newArray.filter(function(element){
    if(element < 100 && element > 0){
        return true
    }
})
console.log(uzd31)


let uzd32 = newArray.filter(function(element){
    if(element < 0 && element > -50){
        return true
    }
})
console.log(uzd32)


let uzd33 = newArray.filter(function(element){
    if(element <= 0 && element > -100){
        return true
    }
})
console.log(uzd33)


let uzd34 = newArray.filter(function(element){
    if(element >= 0 && element < 55){
        return true
    }
})
console.log(uzd34)


let uzd35 = newArray.filter(function(element){
    if(element >= 444 && element <= 654){
        return true
    }
})
console.log(uzd35)


let uzd36 = newArray.filter(function(element){
    if(element > 0 && element % 2 === 0){
        return true
    }
})
console.log(uzd36)


let uzd37 = newArray.filter(function(element){
    if(element > 0 && element % 3 === 0){
        return true
    }
})
console.log(uzd37)


let uzd38 = newArray.filter(function(element){
    if(element < 0 && element % 4 === 0){
        return true
    }
})
console.log(uzd38)


let uzd39 = newArray.filter(function(element){
    if(element < 0 && element % 111 === 0){
        return true
    }
})
console.log(uzd39)


let uzd40 = newArray.filter(function(element){
    if(element > 500 && element % 2 === 0){
        return true
    }
})
console.log(uzd40)


let uzd41 = newArray.filter(function(element){
    if(element > 1000 && element % 3 === 0){
        return true
    }
})
console.log(uzd41)


let uzd42 = newArray.filter(function(element){
    if(element < 1000 && element % 9 === 0){
        return true
    }
})
console.log(uzd42)


let uzd43 = newArray.filter(function(element){
    if(element < 500 && element % 2 === 0){
        return true
    }
})
console.log(uzd43)


let uzd44 = newArray.filter(function(element){
    if(element >= 33 && element % 3 === 0){
        return true
    }
})
console.log(uzd44)


let uzd45 = newArray.filter(function(element){
    if(element >= 444 && element % 12 === 0){
        return true
    }
})
console.log(uzd45)


let uzd46 = newArray.filter(function(element){
    if(element <= 155 && element % 5 === 0){
        return true
    }
})
console.log(uzd46)


let uzd47 = newArray.filter(function(element){
    if(element <= -333 && element % 9 === 0){
        return true
    }
})
console.log(uzd47)


let uzd48 = newArray.filter(function(element){
    if(element > 100 && element < 500 && element % 5 === 0){
        return true
    }
})
console.log(uzd48)


let uzd49 = newArray.filter(function(element){
    if(element >= 888 && element < 1000 && element % 2 === 0){
        return true
    }
})
console.log(uzd49)


let uzd50 = newArray.filter(function(element){
    if(element <= 888 && element >= -333 && element % 3 === 0 && element !== 0){
        return true
    }
})
console.log(uzd50)


let uzd51 = newArray.filter(function(element){
    if(typeof element === 'number'){
        return true
    }
})
console.log(uzd51)


let uzd52 = newArray.filter(function(element){
    if(typeof element === 'string'){
        return true
    }
})
console.log(uzd52)


let uzd53 = newArray.filter(function(element){
    if(typeof element === 'string' && element.length > 5){
        return true
    }
})
console.log(uzd53)


let uzd54 = newArray.filter(function(element){
    if(typeof element === 'string' && element.length <= 5){
        return true
    }
})
console.log(uzd54)


let uzd55 = newArray.filter(function(element){
    if(typeof element === 'string' && element.length < 7){
        return true
    }
})
console.log(uzd55)


let uzd56 = newArray.filter(function(element){
    if(typeof element === 'string' && element.includes('t')){
        return true
    }
})
console.log(uzd56)


let uzd57 = newArray.filter(function(element){
    if(typeof element === 'string' && element.includes('y')){
        return true
    }
})
console.log(uzd57)

let uzd58 = newArray.filter(function(element){
    if(typeof element === 'string' && (element.includes('a') || element.includes('a'))){
        return true
    }
})
console.log(uzd58)


let uzd59 = newArray.filter(function(element){
    if(typeof element === 'string' && element.includes('t') && element.includes('i')){
        return true
    }
})
console.log(uzd59)


let uzd60 = newArray.filter(function(element){
    if(typeof element === 'string' && element.includes('t') && !element.includes('k')){
        return true
    }
})
console.log(uzd60)


let uzd61 = newArray.filter(function(element){
    if(typeof element === 'string' && element.includes('a') && !element.includes('s')){
        return true
    }
})
console.log(uzd61)


let uzd62 = newArray.filter(function(element) {
    if (typeof element === 'string') {
        let tCount = 0;
        for (let i = 0; i < element.length; i++) {
            if (element[i] === 't') {
                tCount++;
                if (tCount > 1) {
                    return true;
                }
            }
        }
    }
    return false;
});
console.log(uzd62)


let uzd63 = newArray.filter(function(element){
    if(typeof element === 'string' && element.includes('st')){
        return true
    }
})
console.log(uzd63)


let uzd64 = newArray.filter(function(element){
    if(typeof element === 'string' && element.includes('nd')){
        return true
    }
})
console.log(uzd64)


let uzd65 = newArray.filter(function(element){
    if(typeof element === 'string' && !element.includes('s')){
        return true
    }
})
console.log(uzd65)


let uzd66 = newArray.filter(function(element){
    if(typeof element === 'string' && !element.includes('t')){
        return true
    }
})
console.log(uzd66)


let uzd67 = newArray.filter(function(element){
    if(typeof element === 'string' && !element.includes('r') && !element.includes('l')){
        return true
    }
})
console.log(uzd67)


let uzd68 = newArray.filter(function(element){
    if(typeof element === 'string' && !isNaN(parseInt(element.charAt(0)))){
        return true
    }
})
console.log(uzd68)


let uzd69 = newArray.filter(function(element){
    if(typeof element === 'string' && element.charAt(0) === 's'){
        return true
    }
})
console.log(uzd69)


let uzd70 = newArray.filter(function(element){
    if(typeof element === 'string' && element.charAt(0) === 'o'){
        return true
    }
})
console.log(uzd70)


let uzd71 = newArray.filter(function(element){
    if(typeof element === 'string' && element.endsWith('d')){
        return true
    }
})
console.log(uzd71)


let uzd72 = newArray.filter(function(element){
    if(typeof element === 'string' && element.endsWith('s')){
        return true
    }
})
console.log(uzd72)


let uzd73 = newArray.filter(function(element){
    if(typeof element === 'string' && element.length > 4 && element.includes('o')){
        return true
    }
})
console.log(uzd73)


let uzd74 = newArray.filter(function(element){
    if(typeof element === 'string' && element.length >= 5 && element.includes('a')){
        return true
    }
})
console.log(uzd74)


let uzd75 = newArray.filter(function(element){
    if(typeof element === 'string' && element.length % 2 === 0){
        return true
    }
})
console.log(uzd75)


let uzd76 = newArray.filter(function(element){
    if(typeof element === 'string' && !element.length % 2 === 0 && element.includes('s')){
        return true
    }
})
console.log(uzd76)


let uzd77 = newArray.filter(function(element){
    if(typeof element === 'string' && element.charAt(2) === 'a'){
        return true
    }
})
console.log(uzd77)


let uzd78 = newArray.filter(function(element){
    if(typeof element === 'string' && element.charAt(3) === 'l'){
        return true
    }
})
console.log(uzd78)


let uzd79 = newArray.filter(function(element){
    if(typeof element === 'string' && element.charAt(4) !== 't' && element.length > 4){
        return true
    }
})
console.log(uzd79)


let uzd80 = newArray.filter(function(element){
    if(typeof element === 'string' && element.charAt(3) !== 'e' && element.length < 6 && isNaN(parseInt(element.charAt(0)))){
        return true
    }
})
console.log(uzd80)