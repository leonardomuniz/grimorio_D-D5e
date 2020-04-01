const express = require('express')

const TruqueController = require('./controllers/TruqueController')
const MagiaController = require('./controllers/MagiaController')

const router = express.Router()


router.get('/',(req,res) => res.json({msg:'oi'}))

router.get('/truques', TruqueController.index)
router.post('/truques', TruqueController.store)
router.get('/truques/:_id', TruqueController.show)
router.delete('/truques/:_id', TruqueController.delete)


router.get('/magias', MagiaController.index)
router.post('/magias', MagiaController.store)
router.get('/magias/:_id', MagiaController.show)
router.delete('/magias/:_id', MagiaController.delete)
module.exports = router