//Objeto

let amigo = {nome: "André Anderson",
sexo: "M",
peso: 99,
Rua: "Rua Piaui",
numero: 100,
cidade: "Pirambola",
estado: "SP",
//Modificando a função
engordar(p=0){
    console.log("Engordou")
    //this - palavra alto referência ao objeto
    this.peso += p
}}

//Aqui eu acrescentei o valor 2 neste exemplo que aumentou o valor do peso e como o valor foi
//maior que 0 como determinado na função ele acrescentou a palavra "engordou".
amigo.engordar(2)
console.log(`${amigo.nome} do sexo "${amigo.sexo}" tem ${amigo.peso}kg`)