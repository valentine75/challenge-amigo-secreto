// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// variables principales
let amigosLista=[];
let amigoIngresado=document.querySelector("input");
let listaDeUl=document.getElementById("listaAmigos");

function limpiarCaja(){
    document.querySelector("input").value="";
}

function agregarAmigos(){
    if (amigoIngresado.value==""){
        alert("Por favor ingrese un nombre");
    }
    else{
        // agregamos a la lista los nombres ingresados por teclado
    amigosLista.push(amigoIngresado.value);
    // console.log(amigosLista);
// usamos innerHTML para actualizar dinamicamente la lista con los nombres ingresados por teclado
    listaDeUl.innerHTML+= `<li>${amigoIngresado.value}</li>`;
}
limpiarCaja();
    }



function sortearAmigo(){
    let sorteo=Math.floor(Math.random()*amigosLista.length);
    // console.log(sorteo);   
    let amigoSorteado=amigosLista[sorteo];
    let Resultado=document.getElementById("resultado");
    Resultado.innerHTML=`El amigo sorteado es:${amigoSorteado}`;
    // DEJAMOS DE MOSTRAR LA lISTA
    document.getElementById("listaAmigos").innerHTML="";
    
    if(amigosLista.length===0){
        alert("Todos los amigos han sido sorteados");
        document.location.reload();
    }
    // borramos los nombre sorteados
    amigosLista.splice(sorteo, 1);
}



 

// LLAMADA A LAS FUNCIONES
agregarAmigos();
