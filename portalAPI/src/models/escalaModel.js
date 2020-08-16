const mongoose = require('mongoose')

var EscalaSchema = new mongoose.Schema({
    idCurso:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Curso',
        required: [true, 'Informe o ID do Curso']
    },
    periodo:{
        type: Number,
        required: [true, 'Informe o período dessa escala']
    },
    diaSemana:[{
        dia:{
            type: String,
            required: [true, 'Informe o dia da semana']
        },
        horarios:[{
            idDisciplina:{
                type: mongoose.Schema.Types.ObjectId, ref: 'Disciplina',
                required: [false, 'Informe o ID da Disciplina']
            },
            horario:{
                type: Number,
                required: [false, 'Informe o horário da Disciplina']
            }
        }]
    }]
})

module.exports = mongoose.model('Escala', EscalaSchema)