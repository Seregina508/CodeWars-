function squareOrSquareRoot(array){
    let arr = [];
    for (let i = 0; i < array.length; i++){
        if (Math.sqrt(arr[i]) % 1 === 0)
            arr.push(Math.sqrt(array[i]))
        else
            arr.push(Math.pow(array[i], 2))
    }
    return arr;
}
console.log(squareOrSquareRoot([4,3,9,2,1]));