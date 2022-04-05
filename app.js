window.addEventListener("resize",ventana);

function ventana(){
    if(window.matchMedia("(min-width: 780px)").matches){
        document.getElementsByClassName("[ form-group ] [ flow ]")[0].style.display = "flex";
    }
    else{//cel
        band = 0;
        document.getElementsByClassName("[ form-group ] [ flow ]")[0].style.display = "none";
    }
}

window.addEventListener("resize",ventana1);

function ventana1(){
    if(window.matchMedia("(min-width: 780px)").matches){
        document.getElementsByClassName("[ main-content ] [ flow ]")[0].style.display = "flex";
    }
    else{//cel
        band = 0;
        document.getElementsByClassName("[ main-content ] [ flow ]")[0].style.display = "none";
    }
}

window.addEventListener("resize",ventana2);

function ventana2(){
    if(window.matchMedia("(min-width: 780px)").matches){
        document.getElementsByClassName("[ text-center ]")[0].style.display = "flex";
    }
    else{//cel
        band = 0;
        document.getElementsByClassName("[ text-center ]")[0].style.display = "none";
    }
}
