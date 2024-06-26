const solution = (absolutes, signs) => {
    for (let index = 0; index < signs.length; index++) {
        if (signs[index] === false) absolutes[index] = -absolutes[index];
    }
    const result = absolutes.reduce((acc, num) => acc + num);
    return result;
}