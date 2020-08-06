import express from 'express';
import ClassesControles from './controllers/ClassesController';
import ConnectionsControllers from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesControles();
const connectionsControllers = new ConnectionsControllers();


routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.post('/connections', connectionsControllers.create);
routes.get('/connections', connectionsControllers.index);

export default routes;