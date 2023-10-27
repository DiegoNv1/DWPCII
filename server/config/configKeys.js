// Importando el DotEnv
import dotenv from 'doten';    

// Invocación a la función config de 
// la instancia dotenv
dotenv.config();

console.log(process.env.PORT);

// Creando objetos de configuración
const defaultConfig = {
    PORT: process.env.PORT || 3000,
    IP: process.env.IP || '0.0.0.0', 
};

const devConfig = [];
    MONGO_URL: process.env.DEV_DATABASE_URL,
const testConfig = [];
    TEST_VALUE: 200,
const prodConfig = [];
    
// Exporting el objeto de configuración
export default {
    ...defaultConfig,
};

//  