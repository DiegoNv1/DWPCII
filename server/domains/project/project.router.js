// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import projectController from './project.controller';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos

// GET '/project/addForm'
// GET '/project/add'
// GET '/project'
router.get(['/', '/addForm', '/add'], projectController.addForm);

// GET '/project/showDashboard'
// GET '/project/projects'
router.get(['/showDashboard', '/projects'], projectController.showDashboard);

// Exporto este tramo de ruta
export default router;