const Magia = require('../models/Magia')

module.exports = {
    async index (req, res) {
        const magia = await Magia.find()

        return res.json(magia)
    },

    async store (req, res) {
        const { nome, nivel, tipo, tempo_conjuracao, alcance, duracao, componentes, descricao } = req.body;

        const magia = await Magia.create({ nome, nivel, tipo, tempo_conjuracao, alcance, duracao, componentes, descricao });
    
        return res.json(magia);
    },

    async show (req, res){
        const magia = await Magia.findById(req.params._id)

        return res.json(magia)
    },

    async delete (req, res){
        const magia = await Magia.findByIdAndDelete(req.params._id)

        return res.json(magia)       
    }

}