

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>obrigado por clicar</b>";
    //console.log(   document.getElementById("agradecimento"));
   // alert("thanks for click");
}

function redirecionar(){
       window.open("https://github.com/ThiagoLucca167/javascript");
       //window.location.href = "https://github.com/ThiagoLucca167/javascript";
}

function trocar(elemento){
    //document.getElementById("mouseover").innerHTML = "boa meu garoto";
    elemento.innerHTML = "boa filhão"
    //alert("trocar texto")
}

function voltar(elemento){
    //document.getElementById("mouseover").innerHTML = "Passe o mouse aqui";
   elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function soma(n1, n2){
    return n1 + n2;
}

var validar = 0;
function validaIdade(idade){
    if(idade >= 18){
        validar =true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt ("Qual sua idade ?")
validaIdade(idade)
console.log(validar);
*/

//alert(soma(5, 10));

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0;
while(count <= 5){
    console.log(count);
    alert(count)
    count++;
};
*/


/*
var idade = prompt("Qual a sua idade?");
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/


//var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"pêra", cor:"verde"}]
//console.log(frutas);
//alert(frutas[1].nome);


/*var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor)
*/

//var list =["maçã", "pêra", "uva", "melância"];
//list.push("banana");
//list.pop();
//console.log(list);
//console.log(list.toString());
//console.log(list.join(" "));


/*var nome = "Thiago Lucca";
var idade = 17;
var idade2 = 10;
var frase = "Palmeiras é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos "); 
//alert(idade + idade2)
console.log(nome);
console.log(idade * idade2);
console.log(frase.replace("Palmeiras","Brasil"));*/