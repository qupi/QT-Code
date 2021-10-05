var arr = [2,0,2,1,2,4,5,4,8,5,9,1,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,88,0
    ,2,1,2,4,5,4,8,5,9,1,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,88,0,2,1,2,4,5
    ,4,8,5,9,1,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,88,0,2,1,2,4,5,4,8,5,9,1
    ,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,88,0,2,1,2,4,5,4,8,5,9,1,6,6,7,7,7
    ,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,88,0,2,1,2,4,5,4,8,5,9,1,6,6,7,7,7,7,7,7,7,7
    ,7,7,7,7,7,7,7,7,7,7,7,7,7,7,88,0,2,1,2,4,5,4,8,5,9,1,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7
    ,7,7,7,7,7,7,7,7,7,88,0,2,1,2,4,5,4,8,5,9,1,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7
    ,7,7,7,7,88,0,2,1,2,4,5,4,8,5,9,1,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,88
    ,0,2,1,2,4,5,4,8,5,9,1,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,88,0,2,1,2,4
    ,5,4,8,5,9,1,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,88,0,2,1,2,4,5,4,8,5,9
    ,1,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,88,0,2,1,2,4,5,4,8,5,9,1,6,6,7,7
    ,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,88,88] // count pair number

//var arr = [2,2,7,7,88,] // count pair number

// sorting the array to Ascending
var sorted_arr = arr.sort();
//console.log("Sorted array: " + sorted_arr);


// count each number
var currentNumber, currentCount;
var colCheckNumber = 0
var rowIndex = 0 
var countIndex = 0

var arr_final = [[], []];

// ======= using array filter function
function checkNum(num) {
    return num === currentNumber;
}

var tmpArray = arr;
while (0 < tmpArray.length) {
    currentNumber = tmpArray[0];
    currentCount = 0;
    currentCount = tmpArray.filter(checkNum).length
    console.log("Current Number: " + currentNumber + " have pair: " + Math.floor(currentCount / 2));
    tmpArray = tmpArray.slice(currentCount)
}

// ======= using while + for
/* var i = 0
while (i < sorted_arr.length){
    currentNumber = sorted_arr[0];
    currentCount = 0;
    for (var y = 0; y < sorted_arr.length; y++) {
        if (currentNumber === sorted_arr[y]) {
            currentCount = currentCount + 1
        } 
    }
    console.log("Current Number: " + currentNumber + " have pair: " + Math.floor(currentCount / 2))
    sorted_arr = sorted_arr.slice(currentCount, sorted_arr.length);
} */

// ======= using for + for
/* for (var i = 0; i < sorted_arr.length; i) {
    currentNumber = sorted_arr[0];
    currentCount = 0;
    for (var y = 0; y < sorted_arr.length; y++) {
        if (currentNumber === sorted_arr[y]) {
            currentCount = currentCount + 1
        } 
    }
    console.log("Current Number: " + currentNumber + " have pair: " + Math.floor(currentCount / 2))
    
    // Add result into a 2D array
    // console.log("colcheck: " + colCheckNumber)
    // arr_final [[colCheckNumber],[rowIndex]] = [[currentNumber],[currentCount]]
    // increase array index
    // rowIndex = rowIndex + 1;

    // shorting the array after couting the current number
    sorted_arr = sorted_arr.slice(currentCount, sorted_arr.length);
} */

// console.log("log final: " + arr_final.length)
// console.log("log final: " + arr_final)
