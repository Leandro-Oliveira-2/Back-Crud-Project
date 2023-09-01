import { Router } from 'express';
import TransationController from '@modules/transations/infra/http/controllers/TransationController';

const transationRouter = Router();
const transationController = new TransationController();

transationRouter.post('/', transationController.create);
transationRouter.get('/:id', transationController.find);
transationRouter.delete('/:id', transationController.delete);
transationRouter.get('/', transationController.list);



export default transationRouter;
