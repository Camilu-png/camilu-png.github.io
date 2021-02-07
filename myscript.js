function myFunction() {
    var name = window.prompt("¿Cómo te llamas? ");
    alert("Gracias por ver mi portafolio, \n " + name);
}
function hideShow(){
    if(document.querySelector('.menu').classList.contains('is-active')){
        document.querySelector('.menu').classList.remove('is-active');
    }
    else{
        document.querySelector('.menu').classList.add('is-active');
    }
    
}
