let menu = document.querySelector('.hambur-menue');
let navbar = document.querySelector('.nav');
let header = document.querySelector('header')

document.addEventListener('scroll',function(){
    if(document.documentElement.scrollTop > 0){
        document.querySelector('.header-logo').style.fontSize = '3rem'
    }
    else{
        
        document.querySelector('.header-logo').style.fontSize = '4rem'
    }
})

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.addEventListener('scroll', () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
});