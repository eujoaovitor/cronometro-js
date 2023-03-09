//variaveis
let sec = 0;
let min = 0;
let hr = 0;
let interval;

//Funcão dois digitos se numero for menor que 10
function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

//funcão iniciar
function start() {
    watch()
    interval = setInterval(watch, 1000);
}

//função pausar
function pause() {
    clearInterval(interval);
}

//função parar
function stop() {
    clearInterval(interval);
    sec = 0;
    min = 0;
    document.getElementById('watch').innerText='00:00:00'
}

//funcão contar
function watch() {
    sec++
    if(sec == 60){
        min++   
        sec = 0
        if(min == 60){
            min = 0;
            hr++
        }
    }
    document.getElementById('watch').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec)
}