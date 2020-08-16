const mongoose = require('mongoose')

var ProfessorSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: [true, 'Informe o nome do professor']
    }
})

module.exports = mongoose.model('Professor', ProfessorSchema)