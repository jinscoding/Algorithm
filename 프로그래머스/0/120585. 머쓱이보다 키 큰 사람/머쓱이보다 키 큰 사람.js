const solution = (array, height) => {
    let result = 0;
    for(let index = 0; index < array.length; index++){
        if(array[index] > height) result++;
    }
    return result;
}