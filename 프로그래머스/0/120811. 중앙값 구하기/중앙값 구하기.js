const solution = (array) => {
    const mid = Math.trunc(array.length / 2)
    const sortArr = array.sort((a, b) => a - b);
    
    return sortArr[mid];
}
