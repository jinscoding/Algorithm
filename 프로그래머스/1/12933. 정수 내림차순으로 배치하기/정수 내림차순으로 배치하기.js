// 배열로 만들로 내림차순 해서 다시 합치기
const solution = (n) => {
    const arr = n.toString().split('').map(element => element = parseInt(element));
    const sortArr = arr.sort().reverse();
    const result = Number(sortArr.join(''));
    return result;
}