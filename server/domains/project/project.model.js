// Importando Mongoose
import mongoose from 'mongoose';
// Desestructurando la fn Schema Special
const { Schema } = mongoose;

// Construir un Schema 
const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description:{
        type: Date,
        require: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
});

// Compilando el esquema para
// generar un modelo
mongoose.model()