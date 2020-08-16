const mongoose = require('mongoose')

var DisciplinaSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: [true, 'Informe o título da disciplina']
    },
    idCurso: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Curso',
        required: [true, 'Informe o ID do Curso']
    },
    periodo: {
        type: Number,
        required: [true, 'Informe o período em que essa disciplina é lecionada']
    },
    idProfessor: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Professor'
    }
})
module.exports = mongoose.model('Disciplina', DisciplinaSchema)