const mongoose = require('mongoose')
const Disciplina = require('../models/disciplinaModel')

export default class DisciplinaController {

    getAllDisciplinas = async (req, res) => {
        try {
            const disciplinas = await Disciplina.find()
            return res.json(disciplinas)
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao buscar disciplinas",
                erro: err
            })
        }
    }

    getDisciplina = (req, res) => {
        const { idDisciplina } = req.params
    
        Disciplina.findById(idDisciplina, async (err, disciplina) => {
            if (err)
                return res.status(500).send({
                    message: "Erro ao buscar disciplina",
                    erro: err
                })
            return res.json(disciplina)
        })
    }
}