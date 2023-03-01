function accum(s) {
    let result = '';
    for (let i = 0; i < s.length; i++){
        result += s[i].toUpperCase();
        for(let j = 1; j < i + 1; j++){
            result += s[i].toLowerCase();
        }
        result = (i < s.length - 1) ? result + '-' : result;
    }
    return result;
}
console.log(accum('dsAgQmL'));