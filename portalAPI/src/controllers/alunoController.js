const mongoose = require('mongoose')
const Aluno = require('../models/alunoModel')

export default class AlunoController {

    getAllAlunos = async (req, res) => {
        try {
            const alunos = await Aluno.find()
            return res.json(alunos)
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao buscar alunos",
                erro: err
            })
        }
    }

    getAluno = (req, res) => {
        const { idAluno } = req.params
    
        Aluno.findById(idAluno, async (err, aluno) => {
            if (err)
                return res.status(500).send({
                    message: "Erro ao buscar aluno",
                    erro: err
                })
            return res.json(aluno)
        })
    }

}