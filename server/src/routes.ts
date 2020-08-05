import express from 'express';
import ClassesControles from './controllers/ClassesController';

const routes = express.Router();
const classesControllers = new ClassesControles();


routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

export default routes;