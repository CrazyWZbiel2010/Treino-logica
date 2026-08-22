let usuarios = ["Biel", "Joao", "Maria", "Lucas"]
function procuraUsuario(usuario){
    for(i = 0; i < usuarios.length; i++){
        if(usuario == usuarios[i]){
            return true
        }
    }
    return false
}
if (procuraUsuario("Pedro")){
    console.log("Usuario encontrado!")
}else{
    console.log("Usuario nao encontrado!")
}