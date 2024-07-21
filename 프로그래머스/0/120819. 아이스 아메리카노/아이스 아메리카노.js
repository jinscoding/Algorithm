const solution = (money) => {
    let result = [];
    const cup = Math.floor(money / 5500)
    if (money >= 5500){
        result.push(cup);
        result.push(money - cup * 5500);
    } else result = [0, money];
    
    return result;
}