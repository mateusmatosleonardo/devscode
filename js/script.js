var span = document.querySelector('.content span')
    span.addEventListener('click', function(){

    var content = document.querySelector('.content p') //.classList.add('mostrar');

    if(content.classList.contains('mostrar')){
        span.innerHTML = 'Saiba mais';
        content.classList.remove('mostrar');
    }else{
        span.innerHTML = 'Ocultar';
        content.classList.add('mostrar')
    }
});