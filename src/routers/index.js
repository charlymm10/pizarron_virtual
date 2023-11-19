const express = require('express');
const router = express.Router();
const model = require('../models/datos.js')();
const faltantes = require('../models/datos.js')

router.get('/', async (req, res)=>{
    const datos = await faltantes.find();
    console.log(datos);
    res.render('index.ejs', {
        datos
    });
}); //el get obtiene datos


router.post('/add', async(req, res) => {
    const valor = new faltantes(req.body);
    console.log(req.body);
    await valor.save();
    res.redirect('/');
})

router.get('/del/:id', async(req,res) => {
    const {id} = req.params;
    await faltantes.findByIdAndRemove(id);
    res.redirect('/')
})


router.post('/upd/:id', async(req, res)=>{
    const{id} = req.params;
    const{Nombre, Descripcion, Cantidad} = req.body;
    await faltantes.findByIdAndUpdate(id, {Nombre, Descripcion, Cantidad});
    res.redirect('/')
})


module.exports = router;

