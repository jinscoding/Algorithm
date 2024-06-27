const solution = (arr, divisor) => {
    let result = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % divisor === 0) result.push(arr[index]);
    }
    return result.length ? result.sort((a,b) => a-b) : [-1];
}