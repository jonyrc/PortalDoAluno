const express = require('express')

const AlunoController = require('../controllers/alunoController')
const AvisoController = require('../controllers/avisoController')
const CursoController = require('../controllers/cursoController')
const DisciplinaController = require('../controllers/disciplinaController')
const EscalaController = require('../controllers/escalaController')
const NotaController = require('../controllers/notaController')
const PagamentoController = require('../controllers/pagamentoController')
const ProfessorController = require('../controllers/professorController')

module.exports = function (app){
    const routes = express.Router();

    app.use('/', function(req, res){
        res.writeHead(200)
        res.end('API funcionando')
    })

    app.use('/aluno', 
        routes.get('/', AlunoController.getAllAlunos),
        routes.get('/:idAluno', AlunoController.getAluno)
    )
    app.use('/aviso', 
        routes.get('/', AvisoController.getAllAvisos),
        routes.get('/:idAviso', AvisoController.getAviso)
    )
    app.use('/curso', 
        routes.get('/', CursoController.getAllCursos),
        routes.get('/:idCurso', CursoController.getCurso)
    )
    app.use('/disciplina', 
        routes.get('/', DisciplinaController.getAllDisciplinas),
        routes.get('/:idDisciplina', DisciplinaController.getDisciplina)
    )
    app.use('/escala', 
        routes.get('/', EscalaController.getAllEscalas),
        routes.get('/:idEscala', EscalaController.getEscala)
    )
    app.use('/nota', 
        routes.get('/', NotaController.getAllNotas),
        routes.get('/:idNota', NotaController.getNota)
    )
    app.use('/pagamento', 
        routes.get('/', PagamentoController.getAllPagamentos),
        routes.get('/:idPagamento', PagamentoController.getPagamento)
    )
    app.use('/professor', 
        routes.get('/', ProfessorController.getAllProfessors),
        routes.get('/:idProfessor', ProfessorController.getProfessor)
    )

    
}