const mongoose = require('mongoose')
const Aviso = require('../models/avisoModel')

export default class AvisoController {

    getAllAvisos = async (req, res) => {
        try {
            const avisos = await Aviso.find()
            return res.json(avisos)
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao buscar avisos",
                erro: err
            })
        }
    }

    getAviso = (req, res) => {
        const { idAviso } = req.params
    
        Aviso.findById(idAviso, async (err, aviso) => {
            if (err)
                return res.status(500).send({
                    message: "Erro ao buscar aviso",
                    erro: err
                })
            return res.json(aviso)
        })
    }

}