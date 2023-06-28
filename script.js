const form = document.querySelector("#form")
const inputname = document.querySelector("#name")
const inputemail = document.querySelector("#email")
const inputsenha = document.querySelector("#password")
const inputcpf = document.querySelector("#cpf")
const inputtel = document.querySelector("#tel")
const inputsexo = document.querySelector("#sexo")


form.addEventListener("submit", (event) => {
    event.preventDefault();

    if ((inputname.value === "") || (inputemail.value === "") || (inputsenha.value === "") || (inputcpf.value === "") || (inputtel.value === "") ||
        (inputsexo.value === "")) {
        alert("Deus é PAI");
        return;

    } else {
        alert("Tudo certo");
    }

});








/*
function isEmailValido(email){
    const emailRegex = new RegExp(
        /^[a-zA-z0-9._-] + @[a-zA-z0-9._]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return false;
    }

    return false;
}






/*inserir  algo no localStorege
localStorage.setItem("name", "Robson");
localStorage.setItem("name1", "Alcione");

localStorage.setItem("num", "1");
localStorage.setItem("num1", "2");

const num2= localStorage.getItem("num");
const num3= localStorage.getItem("num1");

console.log(num2);


// buscar  o que tem no banco
const nome= localStorage.getItem("name1");
console.log(nome);


//verificar o tipo
console.log(typeof localStorage.getItem("num2"))

// apagar um item do banco
//localStorage.removeItem("name");

// Apagar tudo que estiver no banco
//localStorage.clear()
*/
