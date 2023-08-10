function tocaSomPom(){
    //document.querySelector('.tecla_pom'):
    document.querySelector('#som_tecla_pom').play();
}function tocaSomClap(){
    //document.querySelector('.tecla_clap'):
    document.querySelector('#som_tecla_clap').play();
}function tocaSomTim(){
    //document.querySelector('.tecla_pom'):
    document.querySelector('#som_tecla_tim').play();
}function tocaSomPuff(){
    //document.querySelector('.tecla_pom'):
    document.querySelector('#som_tecla_puff').play();
}function tocaSomSplash(){
    //document.querySelector('.tecla_pom'):
    document.querySelector('#som_tecla_splash').play();
}function tocaSomToim(){
    //document.querySelector('.tecla_pom'):
    document.querySelector('#som_tecla_toim').play();
}function tocaSomPsh(){
    //document.querySelector('.tecla_pom'):
    document.querySelector('#som_tecla_psh').play();
}function tocaSomTic(){
    //document.querySelector('.tecla_pom'):
    document.querySelector('#som_tecla_tic').play();
}function tocaSomTom(){
    //document.querySelector('.tecla_pom'):
    document.querySelector('#som_tecla_tom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
document.querySelector('.tecla_clap').onclick = tocaSomClap;
document.querySelector('.tecla_tim').onclick = tocaSomTim;
document.querySelector('.tecla_puff').onclick = tocaSomPuff;
document.querySelector('.tecla_splash').onclick = tocaSomSplash;
document.querySelector('.tecla_toim').onclick = tocaSomToim;
document.querySelector('.tecla_psh').onclick = tocaSomPsh;
document.querySelector('.tecla_tic').onclick = tocaSomTic;
document.querySelector('.tecla_tom').onclick = tocaSomTom;

document.addEventListener("keydown", function(event){ //escutador de tecla
    console.log(event.key); //mostrando botão

if((event.key === "q")||(event.key === "Q")||(event.key === "7")){   //executa o som com a tecla
    tocaSomPom();
} 
if((event.key === "w")||(event.key === "W")||(event.key === "8")){
    tocaSomClap();
}if((event.key === "e")||(event.key === "E")||(event.key === "9")){
    tocaSomTim();
}if((event.key === "a")||(event.key === "A")||(event.key === "4")){
    tocaSomPuff();
}if((event.key === "s")||(event.key === "S")||(event.key === "5")){
    tocaSomSplash();
}if((event.key === "d")||(event.key === "D")||(event.key === "6")){
    tocaSomToim();
}if((event.key === "z")||(event.key === "Z")||(event.key === "1")){
    tocaSomPsh();
}if((event.key === "x")||(event.key === "X")||(event.key === "2")){
    tocaSomTic();
}if((event.key === "c")||(event.key === "C")||(event.key === "3")){
    tocaSomTom();
}

});
