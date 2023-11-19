const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const faltantes = new Schema({
    Nombre: String,
    Descripcion: String,
    Cantidad: String,
});

module.exports = mongoose.model('datos', faltantes);