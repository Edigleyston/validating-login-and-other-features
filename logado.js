export function initLogado() {
   async function chamaJson2() {
      const responseData1 = await fetch('/JS/JSON/contaEdigleyston.json')
      const dataJson1 = await responseData1.json()

      const responseData2 = await fetch('/JS/JSON/contaCamdicy.json')
      const dataJson2 = await responseData2.json()

      const userLogado1 = sessionStorage.getItem('usuarioLogado', `${dataJson1.username}`)
      const userLogado2 = sessionStorage.getItem('usuarioLogado2', `${dataJson2.username}`)
      
      if (!userLogado1 && !userLogado2){
         window.location = "index.html"
         sessionStorage.clear()
      }
      else{
         // const stateObj = { home: "inicio" }
         // history.pushState(stateObj, "", "inicio.html")
      }
   }
   chamaJson2()
}
// export function disableBackButton() {
//    const voltando = history.back()
//    voltando.addEventListener("click", ()=>{
//       console.log("voltou")
//    })
 
   // window.history.pushState(null, "", window.location.href)
   // window.onpopstate = () => {
   //    window.history.pushState(null, "", window.location.href)
   //    sessionStorage.clear()
   // }

export function nameUser() {
   async function chamaJson() {
      const responseData1 = await fetch('/JS/JSON/contaEdigleyston.json')
      const dataJson1 = await responseData1.json()

      const responseData2 = await fetch('/JS/JSON/contaCamdicy.json')
      const dataJson2 = await responseData2.json()

      const user = document.querySelector('.userName')
      if (sessionStorage.getItem('usuarioLogado', `${dataJson1.userName}`)) {
         user.innerText = `Bem vindo ${dataJson1.userName}`
      }
      if (sessionStorage.getItem('usuarioLogado2', `${dataJson2.userName}`)) {
         user.innerText = `Bem vinda ${dataJson2.userName}`
      }
   }
   chamaJson()
}
export function logOut() {
   const btnLogout = document.querySelector('.logout')
   btnLogout.addEventListener('click', () => {
      window.location = "index.html"
      sessionStorage.clear()
   })
}