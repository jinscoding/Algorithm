const solution = (n) => {
    const strNum = n.toString();
    let sum = 0;
    for (let element of strNum) {
        sum += Number(element);
    }
    return sum;
}
