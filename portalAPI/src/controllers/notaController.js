const mongoose = require('mongoose')
const Nota = require('../models/notaModel')

export default class NotaController {

    getAllNotas = async (req, res) => {
        try {
            const notas = await Nota.find()

            for (let nota of notas) {
                await nota.populate('idDisciplina').execPopulate();
                await nota.populate('idAluno').execPopulate();
                await nota.populate('idDisciplina.idProfessor').execPopulate();
            }
                

            return res.json(notas)
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao buscar notas",
                erro: err
            })
        }
    }

    getNota = (req, res) => {
        const { idNota } = req.params
    
        Nota.findById(idNota, async (err, nota) => {
            if (err)
                return res.status(500).send({
                    message: "Erro ao buscar nota",
                    erro: err
                })
            await nota.populate('idDisciplina').execPopulate()
            await nota.populate('idAluno').execPopulate()
            await nota.populate('idDisciplina.idProfessor').execPopulate()
            return res.json(nota)
        })
    }

}