const solution = (n) => {
    const result = [];
    for(let num = 1; num < n + 1; num++){
        if(num % 2 === 1) result.push(num);
    }
    return result;
}