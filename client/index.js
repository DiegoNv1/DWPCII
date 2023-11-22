// cargando los estilos
/* eslint-disable no-console */
import './styles/style.css';
/* eslint-disable */
// Importando estilos de Materialize CSS
import 'materialize-css/dist/css/materialize.css';
// Script para borrar proyecto
import deleteProject from './domains/project.dashboard';
// Importando scripts de Materialize
import 'materialize-css/dist/js/materialize';
/* eslint-enable */

// Inicializando Scripts de Materialize para interactividad
M.AutoInit();

// Cargando script en caso de que la URL sea '/project/dashboard'
if (window.location.pathname === '/project/showDashboard') {
  window.deleteProject = deleteProject;
}

console.log('Webpack Working Middleware!!! 📦');
