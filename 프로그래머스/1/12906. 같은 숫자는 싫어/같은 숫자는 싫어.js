const solution = (arr) => {
    const answer = [];
    for(let index = 0; index <= arr.length; index++){
       if (arr[index] !== arr[index+1]) answer.push(arr[index]);
    }
    return answer;
}