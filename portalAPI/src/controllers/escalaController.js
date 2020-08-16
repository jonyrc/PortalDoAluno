const mongoose = require('mongoose')
const Escala = require('../models/escalaModel')

export default class EscalaController {

    getAllEscalas = async (req, res) => {
        try {
            const escalas = await Escala.find()

            for (let escala of escalas) {
                await escala.populate('diaSemana.horarios.idDisciplina').execPopulate()
                await escala.populate('idCurso').execPopulate()
            }

            
            return res.json(escalas)
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao buscar escalas",
                erro: err
            })
        }
    }

    getEscala = (req, res) => {
        const { idEscala } = req.params
    
        Escala.findById(idEscala, async (err, escala) => {
            if (err)
                return res.status(500).send({
                    message: "Erro ao buscar escala",
                    erro: err
                })
            await escala.populate('diaSemana.horarios.idDisciplina').execPopulate()
            await escala.populate('idCurso').execPopulate()
            return res.json(escala)
        })
    }

}

