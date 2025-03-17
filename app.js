// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// variables principales
let amigosLista=[];
let amigoIngresado=document.querySelector("input");
let listaDeUl=document.getElementById("listaAmigos");
let ResultadoDeUl=document.getElementById("resultado");

function sortearAmigo(){
    let sorteo=Math.floor(Math.random()*amigosLista.length);
    // console.log(amigoSorteado);
    let amigoSorteado=amigosLista[sorteo];
    ResultadoDeUl.innerHTML+=`<li>El amigo secreto es: ${amigoSorteado}</li>`;
}




function agregarAmigos(){
    if (amigoIngresado.value===""){
        alert("Por favor ingrese un nombre");
    }
    else{
        // agregamos a la lista los nombres ingresados por teclado
    amigosLista.push(amigoIngresado.value);
    console.log(amigosLista);
// usamos innerHTML para actualizar dinamicamente la lista con los nombres ingresados por teclado
    listaDeUl.innerHTML+= `<li>${amigoIngresado.value}</li>`;
}
    }

 

// LLAMADA A LAS FUNCIONES
agregarAmigos();
sortearAmigo();