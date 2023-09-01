import Types from "@common/container/types";
import { inject, injectable } from "inversify";
import * as Z from 'zod';
import * as argon2 from 'argon2';

import Schema from '@modules/user/infra/http/validators/CreateUserValidator';
import IUserRepository from "../repositories/IUserRepository";


import AppError from "@common/errors/AppError";
import { StatusCodes } from "http-status-codes";

interface IRequest {
    data: Z.infer<typeof Schema>
}

@injectable()
class CreateUserService{

  @inject(Types.UserRepository) private userRepository!: IUserRepository;
  
  public async execute({data}: IRequest){
    const user = {
        name: data.name,
        gender: data.gender.toString(),
        email: data.email,
        phone: data.phone,
        adress: data.adress,
        saldo: data.saldo,
        passwordHash: await argon2.hash(data.secret)
    }
    console.log(user)

    const userCreated = await this.userRepository.create(user);

    return userCreated;
  }
}

export default CreateUserService;