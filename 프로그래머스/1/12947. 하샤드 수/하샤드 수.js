const solution = (x) => {
    const strNum = x.toString();
    let sum = 0;
    for (let element of strNum) {
        sum += Number(element);
    }
    return x % sum === 0 ? true : false; 
}