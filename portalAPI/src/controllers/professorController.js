const mongoose = require('mongoose')
const Professor = require('../models/professorModel')

export default class ProfessorController {

    getAllProfessors = async (req, res) => {
        try {
            const professors = await Professor.find()
            return res.json(professors)
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao buscar professors",
                erro: err
            })
        }
    }

    getProfessor = (req, res) => {
        const { idProfessor } = req.params
    
        Professor.findById(idProfessor, async (err, professor) => {
            if (err)
                return res.status(500).send({
                    message: "Erro ao buscar professor",
                    erro: err
                })
            return res.json(professor)
        })
    }
}