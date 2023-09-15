import { Router } from 'express';
import TransationController from '@modules/transations/infra/http/controllers/TransationController';

const transationRouter = Router();
const transationController = new TransationController();

transationRouter.post('/', transationController.create);
transationRouter.delete('/:id', transationController.delete);
transationRouter.get('/', transationController.list);
transationRouter.post('/deposit', transationController.deposit);
transationRouter.post('/saque', transationController.saque);
transationRouter.get('/list/:id', transationController.userTransations)


export default transationRouter;
