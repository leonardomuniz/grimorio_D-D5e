const mongoose = require('mongoose')

const MagiaSchema = new mongoose.Schema({
    nome: String,
    nivel: String,
    tipo: String,
    tempo_conjuracao: String,
    alcance: String,
    componentes: String,
    duracao: String,
    descricao: String
})

module.exports = mongoose.model('Magia', MagiaSchema)