const mongoose = require('mongoose')

var NotaSchema = new mongoose.Schema({
    idAluno: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Aluno'
    },
    idDisciplina: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Disciplina'
    },
    nota1:{
        type: Number,
        required: [false, 'Informe a nota 1 (Prova 1)']
    },
    nota2:{
        type: Number,
        required: [false, 'Informe a nota 2 (Trabalhos)']
    },
    nota3:{
        type: Number,
        required: [false, 'Informe a nota 3 (Prova 3)']
    },
    faltas:{
        type: Number,
        required: [false, 'Informe o número de Faltas']
    }
})

module.exports = mongoose.model('Nota', NotaSchema)