function contarPares(n){
    var par = 0
    for(i = 1; i <= n; i++){
        if(i % 2 == 0){
            par++
        }
    }
    return par
}
console.log(contarPares(10))