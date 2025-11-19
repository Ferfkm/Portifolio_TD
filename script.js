let texto = document.querySelector("#nome");
// texto.textContent = "Fernanda";

let nome = prompt("Qual é o seu nome?")

texto.textContent = nome;

if (nome == null){
    texto.textContent = 'Seja Bem-vindo';
} else{
    texto.textContent = nome;
}