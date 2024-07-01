const solution = (left, right) => {
    let sum = 0;
    
    for (let num = left; num <= right; num++) {
        let divisorsCount = 0;
        for (let j = 1; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                divisorsCount++;
                if (num / j !== j) divisorsCount++;
            }
        }
        divisorsCount % 2 === 0 ? sum += num : sum -= num;
    }
    
    return sum;
}
