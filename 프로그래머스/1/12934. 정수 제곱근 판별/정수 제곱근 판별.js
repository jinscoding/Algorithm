const solution = (n) => {
    const result = Math.sqrt(n);
    return Number.isInteger(result) ? (result+1)*(result+1) : -1 
}