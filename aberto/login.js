const formLogin = document.getElementById("formLogin")

formLogin.addEventListener("submit", async function (event){
    event.preventDefault()

    const usuario = document.getElementById("usuario").value.trim()
    const senha = document.getElementById("senha").value
    const mensagemSucesso = document.getElementById("mensagemSucesso")
    const mensagemErro = document.getElementById("mensagemErro")

    const resposta = await fetch("/validar-login", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ usuario, senha })
    })

    const dados = await resposta.json()

    if(dados.sucesso) {
        mensagemSucesso.textContent = "senha certa"
    } else {
        mensagemErro.textContent = "erro paizão"
    }
})