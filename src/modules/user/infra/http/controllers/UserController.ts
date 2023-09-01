import { Request, Response } from "express";
import {instanceToPlain} from "class-transformer";

import { StatusCodes } from "http-status-codes";
import AppError from "@common/errors/AppError";
import parseZodValidationError from "@common/errors/ZodError";
import AppContainer from '@common/container';

import CreateUserValidator from '@modules/user/infra/http/validators/CreateUserValidator'
import UpdateSaldoUserValidator from '@modules/user/infra/http/validators/UpdateSaldoUserValidator'

import CreateUserService from "@modules/user/services/CreateUserService";
import FindUserService from "@modules/user/services/FindUserService";
import DeleteUserService from "@modules/user/services/DeleteUserService";
import ListUserService from "@modules/user/services/ListUserService";


class UserController {

  public async create(req:Request, res:Response): Promise<Response> {
    const data = await CreateUserValidator.parseAsync(req.body).catch((err)=>{
      throw new AppError(parseZodValidationError(err), StatusCodes.BAD_REQUEST);
    });
    const createUser = AppContainer.resolve<CreateUserService>(CreateUserService);
    const user = await createUser.execute({data});

    return res.status(StatusCodes.CREATED).json(instanceToPlain(user));
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
    return res.status(200).json(instanceToPlain(user));
  }

  public async list(req:Request, res:Response): Promise<Response> {
    const listUser = AppContainer.resolve<ListUserService>(ListUserService);
    const users = await listUser.execute();

    return res.status(200).json(instanceToPlain(users));
  }


}

export default UserController