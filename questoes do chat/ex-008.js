let numeros = [15, 30, 28, 7, 190, 2]
function maiorNumero(n){
    var maior = 0
    for(i = 0; i <= n.length; i++){
        if(numeros[i] > maior){
            maior = numeros[i]
        }
    }
    return maior
}
console.log(maiorNumero(numeros))