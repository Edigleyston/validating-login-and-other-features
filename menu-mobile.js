import { outsideClick } from '/JS/modules/outsideclick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];
  

  //se o menuButton for true
  if(menuButton) {
  function openMenu(event) {
    //Abre o menu mobile
    menuList.classList.add('active');
    menuButton.classList.add('active');
    //chama função outsideClick
    outsideClick(menuList, eventos, () => {
    console.log('teste')
  
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
    })
  }
  eventos.forEach(evento => menuButton.addEventListener(evento, openMenu));
  }
}