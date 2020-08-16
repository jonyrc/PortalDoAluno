const mongoose = require('mongoose')
const Pagamento = require('../models/pagamentoModel')

export default class PagamentoController {

    getAllPagamentos = async (req, res) => {
        try {
            const pagamentos = await Pagamento.find()
            return res.json(pagamentos)
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao buscar pagamentos",
                erro: err
            })
        }
    }

    getPagamento = (req, res) => {
        const { idPagamento } = req.params
    
        Pagamento.findById(idPagamento, async (err, pagamento) => {
            if (err)
                return res.status(500).send({
                    message: "Erro ao buscar pagamento",
                    erro: err
                })
            return res.json(pagamento)
        })
    }
}