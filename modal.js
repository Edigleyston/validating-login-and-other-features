export function initModal() {
  const btnOpen = document.querySelector('[data-modal="abrir"]');
  const btnClose = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  const btnLogin = document.querySelector(`[data-modal="abrir"]`)
  const login = document.querySelector("#login")
  const user = document.querySelector('#user')
  const erro = document.querySelector('.erro')
  const senha = document.querySelector('#senha')

  const Action = {
    btnEnter: document.querySelector('.botao'),
    login: document.querySelector("#login"),

    blockAcess() {
      Action.btnEnter.disabled = true;
    },
    access() {
      Action.btnEnter.disabled = false
      Action.login.classList.add('.logado')
    }
  }


  if (btnOpen && btnClose && containerModal) {

    //Adicionando ou removendo modal da tela
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle('ativo');
    }

    //Fechando modal aonde quer que clique fora dele.
    function clickOutOfModal(event) {
      if (event.target === this) { //targer === this pois se o alvo for no this que se refere ao window
        toggleModal(event);
      }
    }


    btnOpen.addEventListener('click', toggleModal);
    btnClose.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', clickOutOfModal);


    login.addEventListener('change', () => {
      async function getUser() {
        try {
          const responseData1 = await fetch('/JS/JSON/contaEdigleyston.json')
          const dataJson1 = await responseData1.json()
          console.log(`Usuário é ${dataJson1.userName}`)

          const responseData2 = await fetch('/JS/JSON/contaCamdicy.json')
          const dataJson2 = await responseData2.json()
          console.log(`Usuário é ${dataJson1.userName}`)

          if (user.value == dataJson1.userLogin || user.value == dataJson2.userLogin) {
            erro.remove()
          } else {
            user.nextElementSibling.innerText = "Usuário não cadastrado"
            Action.blockAcess()
          } if (senha.value != dataJson1.userPass
            || user.value != dataJson1.userLogin) {
            Action.blockAcess()
          }
          if (senha.value == dataJson1.userPass
            && user.value == dataJson1.userLogin
          ) {
            btnLogin.classList.add('.logado')
            Action.access()
            sessionStorage.setItem('usuarioLogado', `${dataJson1.userName}`)
            location.href = "home.html"
            return
          } else if (senha.value == dataJson2.userPass
            && user.value == dataJson2.userLogin
          ) {
            btnLogin.classList.add('.logado')
            Action.access()
            sessionStorage.setItem('usuarioLogado2', `${dataJson2.userName}`)
            location.href = "home.html"
            return
          }
        } catch (erro) {
          console.log(`Houve um erro: ${erro}`)
          Action.blockAcess()
        }
      }
      getUser()
    })
  }
}
// FALTANDO 27