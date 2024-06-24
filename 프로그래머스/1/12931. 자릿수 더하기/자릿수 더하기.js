const solution = (n) => {
    let strNum = n.toString();
    let sum = 0;
    for (let index of strNum) {
        sum += Number(index);
    }
    return sum;
}