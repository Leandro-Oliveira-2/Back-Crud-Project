import User from "../infra/typeorm/entities/User";

import ICreateUserDTO from "../dtos/ICreateUserDTO";
import IUpdateUserDto from "../dtos/IUpdateUserDTO";

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  find(where: object | object[], relations?: string[]): Promise<User | undefined>;
  list(where: object | object[], relations?: string[], take?: number, skip?: number): Promise<User[]>;
  update(user: User, data: IUpdateUserDto): Promise<User>;
  delete(userId: number): Promise<void>;
}
export default IUserRepository;
