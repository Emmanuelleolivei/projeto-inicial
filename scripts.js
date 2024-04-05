var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");

var email = document.getElementById("email");

var telefone = document.getElementById("telefone");

var cep = document.getElementById("cep");

var logradouro = document.getElementById("logradouro");

var numero = document.getElementById("numero");

var complemento = document.getElementById("complemento");

var bairro = document.getElementById("bairro");

var cidade = document.getElementById("cidade");

var estado = document.getElementById("estado");

var saida = document.getElementById("saida-de-dados");

function alertar (event){
   // alert("voce clicou no botao!!! " + " "+ nome.value);
   // var numero = 7;
   // var resultado = numero % 2;
   // if(resultado == 0){
   // alert(este numero é par!");   
   // }

   //validação dos dados
   if(cep.value.length < 8){
      alert('entre com um cep valido!');
      return;
   }
   
   //formartar os dados 
   cep.value = cep.value.replace('-', '');

 const url = `https://viacep.com.br/ws/${cep.value}/json`;
 
  
 fetch(url)
.then(function(resposta){
      return resposta.json();
})
.then(
   function(dadosDoEndereço){
      logradouro.value = dadosDoEndereço.logradouro;
      bairro.value = dadosDoEndereço.bairro;
      cidade.value = dadosDoEndereço.localidade;
      estado.value = dadosDoEndereço.uf;
      complemento.value = dadosDoEndereço.complemento;

      saidadedados(); //chamada da função
   }
)
.catch(function(e){
   alert(e.message());
});

}
function saidadedados(){

   saida.innerText = "nome: " + nome.value +
   "\n email: " + email.value +
   "\n telefone: " + telefone.value +
   "\n CEP: " + cep.value +
   "\n logradouro: " + logradouro.value +
   "\n numero: " + numero.value +
   "\n complemento: " + complemento.value +
   "\n bairro: " + bairro.value +
   "\n cidade: " + cidade.value +
   "\n estado: " + estado.value; 
}

