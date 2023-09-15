import Types from "@common/container/types";
import { inject, injectable } from "inversify";

import ITransationRepository from '@modules/transations/repositories/ITransationRepository';
import IResponse from '@modules/user/responses/IListUserResponse'

@injectable()
class ListTransationService {

    @inject(Types.TransationRepository) private userRepository!: ITransationRepository;

    public async execute(): Promise<IResponse[] | undefined> {
        const transations = await this.userRepository.list({});

        return transations
    }
}
export default ListTransationService