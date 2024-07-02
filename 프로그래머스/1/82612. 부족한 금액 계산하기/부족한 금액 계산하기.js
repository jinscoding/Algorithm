const solution = (price, money, count) => {
    let result = 0;
    for(let time = 1; time <= count; time++){
        result += price * time; 
    }
    return money < result ? result - money : 0;  
}