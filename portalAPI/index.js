import App from "./src/app"
const mongoose = require("mongoose")

const API = new App()
const PORT = 3000

    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/portalAluno", {
        useNewUrlParser: true
    }).then(() => {
        console.log("MongoDB conectado...")
    }).catch((err)=> {
        console.log("Erro ao se conectar ao mongoDB: "+err)
    })

API.server.listen(PORT, () => console.log(`Funcionando em localhost:${PORT}`))
