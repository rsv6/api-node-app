import { genSalt, hash, compare }from 'bcrypt'

export const geraHash = async (senha) => {
  const salt = 10;
  const hashGerado = await hash(senha, salt) 
  return hashGerado;
} 

export const comparaHash = async (senhaNova, senhaAntiga) => {
  const validaSenha = await comparaHash(senhaNova, senhaAntiga);
  return validaSenha;
}

// Metodo synchronous:
// const senhaHash = await geraHash("svieiRa@81915262");
// console.log(senhaHash);
// const result = await compare("svieiRa@81915262", senhaHash);

// console.log("Resultado: ", result);

// if (result) {
//   console.log("Senhas são iguais!");
// } else {
//   console.log("Senha não são iguais!!");
// }


// Metodo Asynchronous:
// geraHash("svieiRa@81915262")
//   .then(res => {
//     console.log(res)
//     compare("svieiRa@81915262", res)
//       .then(result => console.log(result))
//       .catch(err => console.log(err))
    
//   })
//   .catch(error => console.log(error))

