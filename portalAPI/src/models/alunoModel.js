const mongoose = require('mongoose')

var AlunoSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: [true, 'Informe o nome do aluno']
    },
    matricula:{
        type: Number,
        required: [true, 'Informe o número de matrícula do aluno']
    },
    senha:{
        type: String,
        required: [true, 'Informe a senha do aluno']
    },
    periodo:{
        type: Number,
        required: [true, 'Informe o período do aluno']
    }
})

module.exports = mongoose.model('Aluno',AlunoSchema)