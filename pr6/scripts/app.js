let menueIcon = document.querySelector('.fa-bars')

let navMenue = document.querySelector('.nav-menue')


menueIcon.addEventListener('click', function () {
    menueIcon.classList.toggle('fa-bars')
    menueIcon.classList.toggle('fa-times')
    navMenue.classList.toggle('open')
   

})


window.addEventListener('scroll', () =>{
    menueIcon.classList.remove('fa-times');
    menueIcon.classList.add('fa-bars');
    navMenue.classList.remove('open');
});