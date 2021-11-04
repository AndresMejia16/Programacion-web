const menu_btn = document.querySelector('.toogle');
const navegacion = document.querySelector('header .navegacion')

menu_btn.addEventListener('click', ()=>{
    if(navegacion.classList.contains('active')){
        navegacion.classList.remove('active')
    }else{
        navegacion.classList.add('active')
    }
})