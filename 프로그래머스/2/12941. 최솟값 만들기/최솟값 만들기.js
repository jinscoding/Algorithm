const solution = (A,B) => {
    let answer = 0;
    A.sort((a,b)=> a-b);
    B.sort((a,b)=> b-a); 
    
    for(let index = 0; index < A.length; index++){
        answer += A[index] * B[index];
    }
    return answer;
}