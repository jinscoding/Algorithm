const solution = (numbers) => {
    let sum = 0;
    for (let element = 1; element < 10; element++){
        if(!numbers.includes(element)) sum += element;
    }
    return sum;
}