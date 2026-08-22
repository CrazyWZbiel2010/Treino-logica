let numeros = [0, 1, 28, 7, 190, 2]
function menorNumero(n){
    let menor = 0
    for(i = 0; i < n.length; i++){
        if(i == 0){
            menor = n[i]
        }
        if(n[i] < menor){
            menor = n[i]
        }
    }
    return menor
}
console.log(menorNumero(numeros))