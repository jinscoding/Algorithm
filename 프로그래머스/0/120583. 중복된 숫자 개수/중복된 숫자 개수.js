const solution = (array, n) => {
    let result = 0;
    for(let index = 0; index < array.length; index++){
        if(n === array[index]) result++;
    }
    return result;
}