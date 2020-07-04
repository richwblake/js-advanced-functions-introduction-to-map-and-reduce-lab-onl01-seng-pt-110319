// Your code here
function mapToNegativize (arr) {
    let newArr = [];
    arr.forEach(number => newArr.push(-number));
    return newArr;
}

function mapToNoChange (arr) {
    const newArr = arr;
    return newArr;
}

function mapToDouble (arr) {
    let newArr = [];
    arr.forEach(number => newArr.push(number * 2));
    return newArr;
}

function mapToSquare (arr) {
    let newArr = [];
    arr.forEach(number => newArr.push(number ** 2));
    return newArr;
}

function reduceToTotal (arr, memo = 0) {
    arr.forEach(number => memo += number);
    return memo;
}

function reduceToAllTrue (src) {
    for (let i = 0; i < src.length; i++ ) {
        if (!src[i]) return false;
      }
    return true;
}

function reduceToAnyTrue (src) {
    for (let i = 0; i < src.length; i++ ) {
        if (src[i]) return true;
      }
    return false;
}

