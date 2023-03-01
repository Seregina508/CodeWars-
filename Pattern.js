function pattern(n){
    let str = '';
    for (let i = 1; i <= n; i+= 2){
        let space = '';
        let stars = '';
        for (let j = 1; j <= (n - i)/2; j++){
            space = space + '_';
        }
        for (let j = 1; j <= i; j++){
            stars = stars + '*';
        }
        str = str + space + stars + space;
        str = (i === n) ? str : str + '\n';
    }
    return str;
}
console.log(pattern(7));