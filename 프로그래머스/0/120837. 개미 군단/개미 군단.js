const solution = (hp) => {
    const ant = Math.floor(hp/5) + Math.floor(hp%5)/3 + Math.floor((hp%5)%3);
    return Math.floor(ant);
}