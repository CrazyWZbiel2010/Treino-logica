let campos = ["Biel", "", "email@gmail.com", "2009"]
function todosPreenchidos(campos){
    for(i = 0; i <= campos.length; i++){
        if(campos[i] == ""){
            return false
        }
    }
    return true
}
console.log(todosPreenchidos(campos))