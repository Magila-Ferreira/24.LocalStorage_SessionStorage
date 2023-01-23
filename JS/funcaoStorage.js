/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
// Comandos Local Storage

// 1 - Inserir dado
localStorage.setItem("Nome", "Mágila Morgana");

// 2 - Restart do navegador sem perder dados

// 3 - Resgatar item do Local Storage no Console do navegador
const name = localStorage.getItem("Nome");
console.log(name);

// 4 - Resgatar item que não existe
const lastName = localStorage.getItem("lastname");

if (!lastName) {
    console.log("Sem sobrenome!");
}

// 5 - Remover item
localStorage.removeItem("Nome");
localStorage.removeItem("aluno: ");
localStorage.removeItem("name: ");

// 6 - Limpar todos os itens (Criar para depois deletar)
localStorage.setItem("a", 1);
localStorage.setItem("b", 2);
localStorage.setItem("c", 3);

// console.log(typeof localStorage.getItem("a"));

localStorage.clear();

//---------- ---------- ---------- ---------- ---------- ---------- ----------//
// Comandos Session Storage

// 7 - Inserir dado
sessionStorage.setItem("number", 111);
sessionStorage.setItem("numberTwo", 222);
sessionStorage.setItem("numberThree", 333);

// 8 - reiniciar e perder dados

// 9 - Resgatar item do Session Storage no Console do navegador
const num = sessionStorage.getItem("number");
console.log(num);

// 10 - Resgatar item que não existe
const numero = sessionStorage.getItem("numero");

if (!numero) {
    console.log("Essa chave não está salva no Session Storage!");
}

// 11 - Remover item
sessionStorage.removeItem("number");

// 12 - Limpar todos os itens (Criar para depois deletar)
sessionStorage.setItem("numberFour", 4);
sessionStorage.setItem("numberFive", 5);
sessionStorage.setItem("numberSix", 6);

console.log(typeof sessionStorage.getItem("numberFive"));

sessionStorage.clear();

//---------- ---------- ---------- ---------- ---------- ---------- ----------//

// 13 - Salvar objeto - conversão OBJETO -> STRING (JSON.stringify(key))
const person = {
    name: "Mágila",
    age: 29,
    job: "teacher"
};

// Forma CERTA de tentar salvar um objeto 
localStorage.setItem("person", JSON.stringify(person));

// 14 - Restaurar objeto - desconversão STRING -> OBJETO (JSON.parse(getKey))
//const getPerson = localStorage.getItem("person");
//const personObject = JSON.parse(getPerson);

const personObject = JSON.parse(localStorage.getItem("person"));

console.log(typeof personObject);
console.log(personObject.job);