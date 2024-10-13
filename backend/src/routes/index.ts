import { Router } from 'express';
import authRoute from './authRoute';

const routes = Router();

routes.use(authRoute);

export default routes;
