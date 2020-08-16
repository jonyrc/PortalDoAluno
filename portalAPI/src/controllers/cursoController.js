const mongoose = require('mongoose')
const Curso = require('../models/cursoModel')

export default class CursoController {

    getAllCursos = async (req, res) => {
        try {
            const cursos = await Curso.find()
            return res.json(cursos)
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao buscar cursos",
                erro: err
            })
        }
    }

    getCurso = (req, res) => {
        const { idCurso } = req.params
    
        Curso.findById(idCurso, async (err, curso) => {
            if (err)
                return res.status(500).send({
                    message: "Erro ao buscar curso",
                    erro: err
                })
            return res.json(curso)
        })
    }
}