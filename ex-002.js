function PodeEntrar(idd){
    if(idd < 12 && idd >= 0){
        return "Entrada proibida"
    }else if(idd >= 12 && idd <= 15){
        return "Entrada permitida com responsavel"
    }else if(idd >=16){
        return "Entrada Permitida"
    }else{
        return "Idade Invalida"
    }
}
console.log(PodeEntrar(-1))