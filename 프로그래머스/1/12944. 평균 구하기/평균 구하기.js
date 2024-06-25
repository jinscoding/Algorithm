const solution = (arr) => {
    const sum = arr.reduce((acc, cur) => acc + cur);
    const avg = sum / arr.length;
    return avg;
}