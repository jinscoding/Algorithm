const solution = (s) => {
    let arr = s.split('');
    const newArr = [];
    
    let capitalizeNext = true; 

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === " ") {
            newArr.push(arr[index]); 
            capitalizeNext = true; 
        } else if (capitalizeNext) {
            newArr.push(arr[index].toUpperCase()); 
            capitalizeNext = false; 
        } else {
            newArr.push(arr[index].toLowerCase()); 
        }
    }

    return newArr.join('');
};
