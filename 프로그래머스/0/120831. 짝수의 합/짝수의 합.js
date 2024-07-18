const solution = (n) => {
    let result = 0;
    for (let num = 2; num < n + 1; num++){
        if(num % 2 ===0) result += num;
    }
    return result;
}