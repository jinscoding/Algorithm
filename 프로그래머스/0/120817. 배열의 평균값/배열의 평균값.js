const solution = (numbers) => {
    const sum = numbers.reduce((acc, num) => acc + num);
    const avg = sum / numbers.length;
    return avg;
};