export function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';
  
    if(!element.hasAttribute(outside)) {
      events.forEach(userEvent => {
        setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
      });
      element.setAttribute(outside, '');
    }
    //função para quando clicar fora do menu, ele fechar
    function handleOutsideClick(event) {
      /* Se o alvo clicando não conter o elemento do event */
      if(!element.contains(event.target)) {
        element.removeAttribute(outside);
        events.forEach(userEvent => {
          html.removeEventListener(userEvent, handleOutsideClick);
        })
        callback();
      }       
    }
  }