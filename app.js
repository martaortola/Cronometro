'use strict'



let ref_interval = "";

let nodoMinutos = document.querySelector( '#minutos' );
nodoMinutos.innerHTML = "00";
let minutos = 0;

let nodoSegundos = document.querySelector( '#segundos' );
nodoSegundos.innerHTML = ":00";
let segundos = 0;

let nodoMilisegundos = document.querySelector( '#milisegundos' );
nodoMilisegundos.innerHTML = ":00";
let milisegundos = 0;

let nodoContenedor = document.querySelector( '#contenedor' );


function empezar(){
    clearInterval(ref_interval);

    ref_interval = setInterval( function(){
        console.log( "Interval ejecutándose" );
        milisegundos = milisegundos + 1;
        console.log(milisegundos);
        if(milisegundos === 100){
            milisegundos = 0;
            segundos = segundos + 1;
            console.log(segundos);
            if(segundos === 60){
                segundos = 0;
                minutos = minutos + 1;
                if(minutos === 60){
                    minutos = 0;
                }
                nodoMinutos.innerHTML = minutos;
            }
            nodoSegundos.innerHTML = ":" + segundos;
        }
        nodoMilisegundos.innerHTML = ":" + milisegundos;
        if(minutos < 10){
            nodoMinutos.innerHTML = "0" + minutos;
        }
        if(segundos < 10){
            nodoSegundos.innerHTML = ":0" + segundos;
        }
        if(milisegundos < 10){
            nodoMilisegundos.innerHTML = ":0" + milisegundos;
        }
    }, 10);

    document.getElementById("empezar").disabled = true;
}


function reiniciar(){
    empezar();
}


function parar(){
    clearInterval(ref_interval);
}


function borrar(){
    parar();
    minutos = 0;
    segundos = 0;
    milisegundos = 0;
    nodoMinutos.innerHTML = "00";
    nodoSegundos.innerHTML = ":00";
    nodoMilisegundos.innerHTML = ":00";
    document.getElementById("empezar").disabled = false;
}


function guardar(){
    let nodoDiv = document.createElement('div');
    nodoDiv.classList.add('div');
    nodoDiv.innerHTML = `
    <p class="p">${nodoMinutos.innerHTML + nodoSegundos.innerHTML + nodoMilisegundos.innerHTML}</p>`;

    let nodoSpan = document.createElement('span');
    nodoSpan.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="cruz" fill="currentColor" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>`;

    nodoDiv.append(nodoSpan);
    nodoContenedor.append(nodoDiv);

    nodoSpan.addEventListener( 'click', function(){
        nodoDiv.classList.add('quitar');
    });

    document.getElementById("empezar").disabled = false;
}



