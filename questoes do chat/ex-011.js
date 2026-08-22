function verificaDia(dia, mes, ano){
    if(mes == 8){
        if(dia >=1 && dia<=31){
            return true
        }
    }
    if(mes % 2 != 0){
        if(dia >= 1 && dia <= 31){
            return true
        }else{
            return false
        }
    }else if(mes % 2 == 0 && mes != 2){
        if(dia >= 1 && dia <= 30){
            return true
        }else{
            return false
        }
    }
    if(ano % 4 == 0){
        if(mes == 2){
            if(dia >= 1 && dia <= 29){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }else if(ano % 4 != 0){
        if(mes == 2){
            if(dia >=1 && dia <= 28){
                return true
            }else{
                return false
            }
        }
    }else{
        return false
    }
    
}
console.log(verificaDia(31, 8, 2012))