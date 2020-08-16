import {Router} from 'express'

import AlunoController from '../src/controllers/alunoController'
import AvisoController from '../src/controllers/avisoController'
import CursoController from '../src/controllers/cursoController'
import DisciplinaController from '../src/controllers/disciplinaController'
import EscalaController from '../src/controllers/escalaController'
import NotaController from '../src/controllers/notaController'
import PagamentoController from '../src/controllers/pagamentoController'
import ProfessorController from '../src/controllers/professorController'

export default class Routes{
    
    constructor(server){
        this.server = server
        this.router = new Router()
    }

    registerRoutes = () => {
        this.avisoRoutes()
        this.alunoRoutes()
        this.cursoRoutes()
        this.disciplinaRoutes()
        this.escalaRoutes()
        this.notaRoutes()
        this.pagamentoRoutes()
        this.professorRoutes()
    }

    avisoRoutes = () => {
        const controller = new AvisoController()
        this.router.get("/avisos", controller.getAllAvisos)
        this.router.get("/aviso/:idAviso", controller.getAviso)
    }
    alunoRoutes = () => {
        const controller = new AlunoController()
        this.router.get("/alunos", controller.getAllAlunos)
        this.router.get("/aluno/:idAluno", controller.getAluno)
    }
    cursoRoutes = () => {
        const controller = new CursoController()
        this.router.get("/cursos", controller.getAllCursos)
        this.router.get("/curso/:idcurso", controller.getCurso)
    }
    disciplinaRoutes = () => {
        const controller = new DisciplinaController()
        this.router.get("/disciplinas", controller.getAllDisciplinas)
        this.router.get("/disciplina/:iddisciplina", controller.getDisciplina)
    }
    escalaRoutes = () => {
        const controller = new EscalaController()
        this.router.get("/escalas", controller.getAllEscalas)
        this.router.get("/escala/:idEscala", controller.getEscala)
    }
    notaRoutes = () => {
        const controller = new NotaController()
        this.router.get("/notas", controller.getAllNotas)
        this.router.get("/notas/:idNota", controller.getNota)
    }
    pagamentoRoutes = () => {
        const controller = new PagamentoController()
        this.router.get("/pagamentos", controller.getAllPagamentos)
        this.router.get("/pagamentos/:idpagamento", controller.getPagamento)
    }
    professorRoutes = () => {
        const controller = new ProfessorController()
        this.router.get("/professors", controller.getAllProfessors)
        this.router.get("/professors/:idprofessor", controller.getProfessor)
    }

    init = () => {
        this.registerRoutes()
        this.server.use("/", this.router)
    }
}

