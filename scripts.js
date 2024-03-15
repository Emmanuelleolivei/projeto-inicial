var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);

function alertar (event){
    alert("voce clicou no botao!!! " + event);
}