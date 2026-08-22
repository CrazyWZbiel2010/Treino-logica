let letras = "abcdefghijklmnopqrstuvwxyz"
let numero = "0987654321"

function VerificaSenha(senha){
    let temLetra = false
    let temNumero = false
    for(let i of senha){
        for(let l of letras){
            if(i === l){
                temLetra = true
                break
            }
        }
    }
    for(let i of senha){
        for(let l of numero){
            if(i === l){
                temNumero = true
                break
            }
        }
    }
    if(temLetra && temNumero && senha.length >= 8){
        return true
    }else{
        return false
    }
}
console.log(VerificaSenha("aaaaaaaaaa2")) // true
console.log(VerificaSenha("aaaaaaaaaa") ) // false
console.log(VerificaSenha("123456789") )  // false
console.log(VerificaSenha("abc123")  )    // false