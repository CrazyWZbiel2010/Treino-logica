function VerificaNumero(n){
    if(n > 0){
        return "Positivo"
    }else if(n < 0){
        return "Negativo"
    }else{
        return "Igual a zero"
    }
}
console.log(VerificaNumero(-10))