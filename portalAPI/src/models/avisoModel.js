const mongoose = require('mongoose')

var AvisoSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: [true, 'Informe o título do aviso']
    },
    texto:{
        type: String,
        required: [true, 'Informe o texto do aviso']
    },
    dataPublicacao:{
        type: Date,
        required: [true, 'Informe a data da publicação do aviso']
    },
    vigencia:{
        type: Date,
        required: [true, 'Informe a data de expiração do aviso']
    }
})

module.exports = mongoose.model('Aviso', AvisoSchema)