export default function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    const activeClass = 'ativo';

    //Já vai iniciar com primeira pergunta da FAQ ativa
    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        //Abre resposta da FAQ
        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        //Adicionando Evento de click nas perguntas da FAQ
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}