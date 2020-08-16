const mongoose = require('mongoose')

var PagamentoSchema = new mongoose.Schema({
    idAluno: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Aluno'
    },
    parcelas:[{
        valor:{
            type: Number,
            required: [false, 'Informe o valor da parcela']
        },
        vencimento:{
            type: Date,
            required: [false, 'Informe a data de vencimento']
        },
        pagamento:{
            type: Date,
            required: [false, 'Informe a data do pagamento']
        },
        status:{
            type: Number,
            required: [false, 'Informe o status do pagamento']
        },
        mesRef:{
            type: String,
            required: [false, 'Informe o mês de referência']
        },
        
    }],
    
})
module.exports = mongoose.model('Pagamento', PagamentoSchema)