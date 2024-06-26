const solution = (n) => {
    let sum = 0;
    for (let divisor = 1; divisor < n + 1; divisor++) {
        if(n % divisor === 0) sum += divisor
    }
    return sum;
}