// Importando dependencia debug
import Debug from 'debug'
// Establecemos el proceso a debuggear
const debug = Debug('projnotes2022b')
// exportando el logger de debuggeo
export default debug

import debug from '../services/debugLogger'
...
// Recuperar el modo de ejecución de la app
const nodeEnv = process.env.NODE_ENV || 'development'

// Inclusion del webpack middleware
if (nodeEnv === 'development') {
  debug('✒ Ejecutando en modo de desarrollo 👨‍💻')
}