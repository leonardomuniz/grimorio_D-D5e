const mongoose = require('mongoose')

const TruqueSchema = new mongoose.Schema({
    nome:String,
    tipo: String,
    tempo_conjuracao: String,
    alcance: String,
    duracao: String,
    componentes: String,
    descricao: String
})

module.exports = mongoose.model('Truque', TruqueSchema)