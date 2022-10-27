

let piedra = document.getElementById("piedra")
let papel = document.getElementById("papel")
let tijera = document.getElementById("tijera")
let lagarto = document.getElementById("lagarto")
let spock = document.getElementById("spock")

piedraSinBoton = document.getElementById("piedraSinBoton")

let ataqueEnemigo = 0
let ataqueJugador = 0

let vidasJugador = 3
let vidasEnemigo = 3

function random(min, max)
{
    let resultado
    resultado = Math.floor(Math.random() * (max - min + 1)) + min
    console.log("numero " + resultado)
    return resultado
}

function elegirPiedra() 
{
    piedraSinBoton = document.getElementById("piedraSinBoton");
    piedraSinBoton.style.display = 'flex';
    papelSinBoton = document.getElementById("papelSinBoton");
    papelSinBoton.style.display = 'none';
    tijeraSinBoton = document.getElementById("tijeraSinBoton");
    tijeraSinBoton.style.display = 'none';
    lagartoSinBoton = document.getElementById("lagartoSinBoton");
    lagartoSinBoton.style.display = 'none';
    spockSinBoton = document.getElementById("spockSinBoton");
    spockSinBoton.style.display = 'none';

    piedraPC = document.getElementById('piedraPC');
    piedraPC.style.display = 'none';
    papelPC = document.getElementById('papelPC');
    papelPC.style.display = 'none';
    tijeraPC = document.getElementById('tijeraPC');
    tijeraPC.style.display = 'none';
    lagartoPC = document.getElementById('lagartoPC');
    lagartoPC.style.display = 'none';
    spockPC = document.getElementById('spockPC');
    spockPC.style.display = 'none';

    ataqueJugador = 1

    var aleatorio = random(6, 0);
            ataqueEnemigo = aleatorio;
            if(aleatorio == 1){
                piedraPC = document.getElementById('piedraPC');
                piedraPC.style.display = 'flex';  
            }
            else if(aleatorio == 2){
                papelPC = document.getElementById('papelPC');
                papelPC.style.display = 'flex';
            }
            else if(aleatorio == 3){
                tijeraPC = document.getElementById('tijeraPC');
                tijeraPC.style.display = 'flex';
            }
            else if(aleatorio == 4){
                lagartoPC = document.getElementById('lagartoPC');
                lagartoPC.style.display = 'flex';
            }
            else if(aleatorio == 5){
                spockPC = document.getElementById('spockPC');
                spockPC.style.display = 'flex';
            }
            else{
                console.log("Algo no funciona");
            }
            combate()
}

function elegirPapel() 
{
    piedraSinBoton = document.getElementById("piedraSinBoton");
    piedraSinBoton.style.display = 'none';
    papelSinBoton = document.getElementById("papelSinBoton");
    papelSinBoton.style.display = 'flex';
    tijeraSinBoton = document.getElementById("tijeraSinBoton");
    tijeraSinBoton.style.display = 'none';
    lagartoSinBoton = document.getElementById("lagartoSinBoton");
    lagartoSinBoton.style.display = 'none';
    spockSinBoton = document.getElementById("spockSinBoton");
    spockSinBoton.style.display = 'none';

    piedraPC = document.getElementById('piedraPC');
    piedraPC.style.display = 'none';
    papelPC = document.getElementById('papelPC');
    papelPC.style.display = 'none';
    tijeraPC = document.getElementById('tijeraPC');
    tijeraPC.style.display = 'none';
    lagartoPC = document.getElementById('lagartoPC');
    lagartoPC.style.display = 'none';
    spockPC = document.getElementById('spockPC');
    spockPC.style.display = 'none';

    ataqueJugador = 2

    var aleatorio = random(6, 0);
            ataqueEnemigo = aleatorio;
            if(aleatorio == 1){
                piedraPC = document.getElementById('piedraPC');
                piedraPC.style.display = 'flex';  
            }
            else if(aleatorio == 2){
                papelPC = document.getElementById('papelPC');
                papelPC.style.display = 'flex';
            }
            else if(aleatorio == 3){
                tijeraPC = document.getElementById('tijeraPC');
                tijeraPC.style.display = 'flex';
            }
            else if(aleatorio == 4){
                lagartoPC = document.getElementById('lagartoPC');
                lagartoPC.style.display = 'flex';
            }
            else if(aleatorio == 5){
                spockPC = document.getElementById('spockPC');
                spockPC.style.display = 'flex';
            }
            else{
                console.log("Algo no funciona");
            }
            combate()
}

function elegirTijera() 
{
    piedraSinBoton = document.getElementById("piedraSinBoton");
    piedraSinBoton.style.display = 'none';
    papelSinBoton = document.getElementById("papelSinBoton");
    papelSinBoton.style.display = 'none';
    tijeraSinBoton = document.getElementById("tijeraSinBoton");
    tijeraSinBoton.style.display = 'flex';
    lagartoSinBoton = document.getElementById("lagartoSinBoton");
    lagartoSinBoton.style.display = 'none';
    spockSinBoton = document.getElementById("spockSinBoton");
    spockSinBoton.style.display = 'none';

    piedraPC = document.getElementById('piedraPC');
    piedraPC.style.display = 'none';
    papelPC = document.getElementById('papelPC');
    papelPC.style.display = 'none';
    tijeraPC = document.getElementById('tijeraPC');
    tijeraPC.style.display = 'none';
    lagartoPC = document.getElementById('lagartoPC');
    lagartoPC.style.display = 'none';
    spockPC = document.getElementById('spockPC');
    spockPC.style.display = 'none';

    ataqueJugador = 3

    var aleatorio = random(6, 0);
            ataqueEnemigo = aleatorio;
            if(aleatorio == 1){
                piedraPC = document.getElementById('piedraPC');
                piedraPC.style.display = 'flex';  
            }
            else if(aleatorio == 2){
                papelPC = document.getElementById('papelPC');
                papelPC.style.display = 'flex';
            }
            else if(aleatorio == 3){
                tijeraPC = document.getElementById('tijeraPC');
                tijeraPC.style.display = 'flex';
            }
            else if(aleatorio == 4){
                lagartoPC = document.getElementById('lagartoPC');
                lagartoPC.style.display = 'flex';
            }
            else if(aleatorio == 5){
                spockPC = document.getElementById('spockPC');
                spockPC.style.display = 'flex';
            }
            else{
                console.log("Algo no funciona");
            }
            combate()
}

function elegirLagarto() 
{
    piedraSinBoton = document.getElementById("piedraSinBoton");
    piedraSinBoton.style.display = 'none';
    papelSinBoton = document.getElementById("papelSinBoton");
    papelSinBoton.style.display = 'none';
    tijeraSinBoton = document.getElementById("tijeraSinBoton");
    tijeraSinBoton.style.display = 'none';
    lagartoSinBoton = document.getElementById("lagartoSinBoton");
    lagartoSinBoton.style.display = 'flex';
    spockSinBoton = document.getElementById("spockSinBoton");
    spockSinBoton.style.display = 'none';

    piedraPC = document.getElementById('piedraPC');
    piedraPC.style.display = 'none';
    papelPC = document.getElementById('papelPC');
    papelPC.style.display = 'none';
    tijeraPC = document.getElementById('tijeraPC');
    tijeraPC.style.display = 'none';
    lagartoPC = document.getElementById('lagartoPC');
    lagartoPC.style.display = 'none';
    spockPC = document.getElementById('spockPC');
    spockPC.style.display = 'none';

    ataqueJugador = 4

    var aleatorio = random(6, 0);
            ataqueEnemigo = aleatorio;
            if(aleatorio == 1){
                piedraPC = document.getElementById('piedraPC');
                piedraPC.style.display = 'flex';  
            }
            else if(aleatorio == 2){
                papelPC = document.getElementById('papelPC');
                papelPC.style.display = 'flex';
            }
            else if(aleatorio == 3){
                tijeraPC = document.getElementById('tijeraPC');
                tijeraPC.style.display = 'flex';
            }
            else if(aleatorio == 4){
                lagartoPC = document.getElementById('lagartoPC');
                lagartoPC.style.display = 'flex';
            }
            else if(aleatorio == 5){
                spockPC = document.getElementById('spockPC');
                spockPC.style.display = 'flex';
            }
            else{
                console.log("Algo no funciona");
            }
            combate()
}

function elegirSpock() 
{
    piedraSinBoton = document.getElementById("piedraSinBoton");
    piedraSinBoton.style.display = 'none';
    papelSinBoton = document.getElementById("papelSinBoton");
    papelSinBoton.style.display = 'none';
    tijeraSinBoton = document.getElementById("tijeraSinBoton");
    tijeraSinBoton.style.display = 'none';
    lagartoSinBoton = document.getElementById("lagartoSinBoton");
    lagartoSinBoton.style.display = 'none';
    spockSinBoton = document.getElementById("spockSinBoton");
    spockSinBoton.style.display = 'flex';

    piedraPC = document.getElementById('piedraPC');
    piedraPC.style.display = 'none';
    papelPC = document.getElementById('papelPC');
    papelPC.style.display = 'none';
    tijeraPC = document.getElementById('tijeraPC');
    tijeraPC.style.display = 'none';
    lagartoPC = document.getElementById('lagartoPC');
    lagartoPC.style.display = 'none';
    spockPC = document.getElementById('spockPC');
    spockPC.style.display = 'none';

    ataqueJugador = 5

    var aleatorio = random(6, 0);
            ataqueEnemigo = aleatorio;
            if(aleatorio == 1){
                piedraPC = document.getElementById('piedraPC');
                piedraPC.style.display = 'flex';  
            }
            else if(aleatorio == 2){
                papelPC = document.getElementById('papelPC');
                papelPC.style.display = 'flex';
            }
            else if(aleatorio == 3){
                tijeraPC = document.getElementById('tijeraPC');
                tijeraPC.style.display = 'flex';
            }
            else if(aleatorio == 4){
                lagartoPC = document.getElementById('lagartoPC');
                lagartoPC.style.display = 'flex';
            }
            else if(aleatorio == 5){
                spockPC = document.getElementById('spockPC');
                spockPC.style.display = 'flex';
            }
            else{
                console.log("Algo no funciona");
            }
            combate()
}

function combate(){
    spanVidasEnemigo = document.getElementById("vidasEnemigo");
    spanVidasJugador = document.getElementById("vidasJugador");
    console.log("ataque enemigo " + ataqueEnemigo);
    console.log("ataque jugador " + ataqueJugador);
    if(ataqueJugador == ataqueEnemigo){
    }
    else if( (ataqueJugador == 1) && (ataqueEnemigo == 3 || ataqueEnemigo == 4) ){
        vidasEnemigo = vidasEnemigo - 1;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
        console.log("1 vidas pc = "+ vidasEnemigo);
        console.log("1 vidas jugador = "+ vidasJugador);
    }
    else if( (ataqueJugador == 2) && (ataqueEnemigo == 1 || ataqueEnemigo == 5) ){
        vidasEnemigo = vidasEnemigo - 1;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
        console.log("2 vidas pc = "+ vidasEnemigo);
        console.log("2 vidas jugador = "+ vidasJugador);
    }
    else if( (ataqueJugador == 3) && (ataqueEnemigo == 2 || ataqueEnemigo == 4) ){
        vidasEnemigo = vidasEnemigo - 1;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
        console.log("3 vidas pc = "+ vidasEnemigo);
        console.log("3 vidas jugador = "+ vidasJugador);
    }
    else if( (ataqueJugador == 4) && (ataqueEnemigo == 2 || ataqueEnemigo == 5) ){
        vidasEnemigo = vidasEnemigo - 1;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
        console.log("4 vidas pc = "+ vidasEnemigo);
        console.log("4 vidas jugador = "+ vidasJugador);
    }
    else if( (ataqueJugador == 5) && (ataqueEnemigo == 1 || ataqueEnemigo == 3) ){
        vidasEnemigo = vidasEnemigo - 1;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
        console.log("5 vidas pc = "+ vidasEnemigo);
        console.log("5 vidas jugador = "+ vidasJugador);
    }
    else{
        vidasJugador = vidasJugador - 1;
        spanVidasJugador.innerHTML = vidasJugador;
        console.log("6 vidas pc = "+ vidasEnemigo);
        console.log("6 vidas jugador = "+ vidasJugador);
    }
    contadorDeVidas()
 }

 function botonReiniciar(evento)
{
    location.reload()
}

function contadorDeVidas()
{
    if (vidasEnemigo == 0) {
        mensajeFinalGanador();
    }
    else if (vidasJugador == 0) {
        mensajeFinalPerdedor();
    }
}

function mensajeFinalGanador()
{
    piedra.disabled = true;
    papel.disabled = true;
    tijera.disabled = true;
    lagarto.disabled = true;
    spock.disabled = true;
    boton1 = document.getElementById('boton1');
    boton1.style.display = 'flex';  

}

function mensajeFinalPerdedor()
{
    piedra.disabled = true;
    papel.disabled = true;
    tijera.disabled = true;
    lagarto.disabled = true;
    spock.disabled = true; 
    reiniciarPerdedor = document.getElementById('reiniciarPerdedor');
    reiniciarPerdedor.style.display = 'flex';  
    boton2 = document.getElementById('boton2');
    boton2.style.display = 'flex';
}
