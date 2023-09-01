import Transations from "@modules/transations/infra/typeorm/entities/Transations";

import ICreateTransactionsDTO from "@modules/transations/dtos/ICreateTransactionsDTO";


interface ITransationRepository{
  create(data:ICreateTransactionsDTO): Promise<Transations>;
  find(where: object | object[], relations?: string[]): Promise<Transations | undefined>;
  list(where: object | object[], relations?: string[], take?: number, skip?: number): Promise<Transations[]>;
  delete(userId:number): Promise<void>;
}
export default ITransationRepository;
