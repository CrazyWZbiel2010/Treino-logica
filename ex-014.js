let usuario = {
    nome: "Biel",
    idade: 16,
    email: "biel@gmail.com",
    senha: "abc12345"
}
function login(email, senha){
    if(email == usuario.email && senha == usuario.senha){
        return true
    }else{
        return false
    }
}
console.log(login("biel@gmail.com", "abc12345"))