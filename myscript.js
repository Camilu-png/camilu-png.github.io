function myFunction() {
    var name = window.prompt("¿Cómo te llamas? ");
    alert("Gracias por ver mi portafolio, \n " + name);
}
function hideShow(){
    if(document.querySelector('.menu').classList.contains('is-active')){
        document.querySelector('.menu').classList.remove('is-active');
        document.querySelector('.fa-folder').classList.add('is-active');
        document.querySelector('.fa-folder-open').classList.remove('is-active');
    }
    else{
        document.querySelector('.menu').classList.add('is-active');
        document.querySelector('.fa-folder').classList.remove('is-active');
        document.querySelector('.fa-folder-open').classList.add('is-active');
    }
    
}
// function validation(event){
//     if (event.matches && window.screen.width < 480){
//         document.querySelector('.fa-folder').addEventListener('click',hideShow)
//         document.querySelector('.fa-folder-open').addEventListener('click',hideShow)
//     }
//     else{
//         document.querySelector('.fa-folder').removeEventListener('click',hideShow)
//         document.querySelector('.fa-folder-open').removeEventListener('click',hideShow)
//     }
    
// }
// const celular = window.matchMedia('screen and (max-width:480px)');
// celular.addListener(validation)
