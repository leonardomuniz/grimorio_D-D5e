const Truque = require('../models/Truque')

module.exports = {
    async index (req, res) {
        const truque = await Truque.find()

        return res.json(truque)
    },

    async store (req, res) {
        const { nome, tipo, tempo_conjuracao, alcance, duracao, componentes, descricao } = req.body;

        const truque = await Truque.create({ nome, tipo, tempo_conjuracao, alcance, duracao, componentes, descricao });
    
        return res.json(truque);
    },

    async show (req, res){
        const truque = await Truque.findById(req.params._id)

        return res.json(truque)
    },

    async delete (req, res){
        const truque = await Truque.findByIdAndDelete(req.params._id)

        return res.json(truque)       
    }

}