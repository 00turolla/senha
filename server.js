const express = require ("express")
const app = express()

app.use(express.json())
app.use(express.static("aberto"))

app.post("/validar-login", (req, res) =>{
    const { usuario, senha } = req.body

    if (usuario === process.env.USUARIO_ADM && senha === process.env.SENHA_ADM) {
        res.json({ sucesso: true })
    } else {
        res.json({ sucesso: false })
    }
})

app.listen(3000, () => console.log("servidor rodando em http://localhost:3000"))