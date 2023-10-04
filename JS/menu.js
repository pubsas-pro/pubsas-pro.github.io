(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav_link--show');
        
    });
    closeMenu.addEventListener('click',()=>{
        menu.classList.remove('nav_link--show');
    })

})();