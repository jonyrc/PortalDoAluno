const mongoose = require('mongoose')

var CursoSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: [true, 'Informe o nome do curso']
    },
    matriculas:[{ //alunos matriculados nesse Curso
        type: mongoose.Schema.Types.ObjectId, ref: 'Aluno'
    }]
})

module.exports = mongoose.model('Curso', CursoSchema)