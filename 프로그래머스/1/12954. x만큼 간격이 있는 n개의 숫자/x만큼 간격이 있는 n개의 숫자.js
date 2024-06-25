const solution = (x, n) => {
    let result = [];
    let multiplier = 0;
    
    for (let index = 0; index < n; index++) {
        multiplier++;
        result.push(x * multiplier);
    }
    
    return result;
}
