let numeros = [2, 5, 2, 8, 2, 9, 5]
function quantidade(n){
    let contador = 0
    for(i = 0; i <= numeros.length; i++){
        if(n == numeros[i]){
            contador++
        }
    }
    return contador
}
console.log(quantidade(4))