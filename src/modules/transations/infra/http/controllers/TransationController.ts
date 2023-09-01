import { Request, Response } from "express";

import { StatusCodes } from "http-status-codes";
import AppError from "@common/errors/AppError";
import parseZodValidationError from "@common/errors/ZodError";
import AppContainer from '@common/container';

import CreateTransationValidator from '@modules/transations/infra/http/validators/CreateTransationValidators'

import CreateTransationService from "@modules/transations/services/CreateTransationService";
import FindUserService from "@modules/user/services/FindUserService";
import DeleteUserService from "@modules/user/services/DeleteUserService";
import ListUserService from "@modules/user/services/ListUserService";


class TransationController {

  public async create(req:Request, res:Response): Promise<Response> {
    const data = await CreateTransationValidator.parseAsync(req.body).catch((err)=>{
      throw new AppError(parseZodValidationError(err), StatusCodes.BAD_REQUEST);
    });
    console.log("transactiontype:", data.transationType);
    const createTransation = AppContainer.resolve<CreateTransationService>(CreateTransationService);
    const transation = await createTransation.execute({data});

    return res.status(StatusCodes.CREATED).json(transation)
  }

  public async delete(req:Request, res: Response): Promise<Response> {
    const id = +req.params.id;
    const deleteUser = AppContainer.resolve<DeleteUserService>(DeleteUserService);
    await deleteUser.execute(id)
    return res.status(StatusCodes.NO_CONTENT).json();
  }

  public async find(req:Request, res: Response): Promise<Response> {
    const id = +req.params.id;
    const findUser = AppContainer.resolve<FindUserService>(FindUserService);
    const user = await findUser.execute({id})
    return res.status(200).json(user);
  }

  public async list(req:Request, res:Response): Promise<Response> {
    const listUser = AppContainer.resolve<ListUserService>(ListUserService);
    const users = await listUser.execute();

    return res.status(200).json(users);
  }

}

export default TransationController