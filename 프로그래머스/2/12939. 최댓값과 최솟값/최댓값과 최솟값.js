const solution = (s) => {
    let arr = s.split(' ').map(Number);
    arr = arr.sort((a,b) => a-b);
    
    const minNum = arr[0];
    const maxNum = arr[arr.length-1];
    
    const minStr = (minNum).toString();
    const maxStr = (maxNum).toString();
    
    return minStr + ' ' + maxStr;
}