function numericalTable(n, m){
    let str = '';
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= m; j++){
            str = (j === m) ? str + i : str + i + ' ';
        }
        str = (i !== n) ? str + '\n' : str;
    }
    return str;
}
console.log(numericalTable(4, 5));

//
// function numericalTable(n){
//     let str = '';
//     for (let i = 1; i <= n; i++){
//         if (i === n)
//             str = str + `${i} `.repeat(n - 1) + `${i}`;
//         else
//             str = str + `${i} `.repeat(n - 1) + `${i}` + '\n';
//     }
//     return str;
// }
// console.log(numericalTable(5));


// function numericalTable(n){
//   let str = '';
//   for (let i = 1; i <= n; i++){
//    str = str + `${i} `.repeat(n - 1) + `${i}`;
//     str = (i === n) ? str : str + '\n';
//   }
//   return str;
// }
// console.log(numericalTable(5));