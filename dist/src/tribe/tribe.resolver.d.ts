import { TribeService } from './tribe.service';
import { Tribe } from './entities/tribe.entity';
import { CreateTribeInput } from './dto/create-tribe.input';
import { UpdateTribeInput } from './dto/update-tribe.input';
export declare class TribeResolver {
    private readonly tribeService;
    constructor(tribeService: TribeService);
    createTribe(createTribeInput: CreateTribeInput): Promise<Tribe>;
    findOne(id: string): Promise<import("@mikro-orm/core").Loaded<Tribe, never>>;
    updateTribe(updateTribeInput: UpdateTribeInput): Promise<import("@mikro-orm/core").Loaded<Tribe, never>>;
    removeTribe(id: string): Promise<import("@mikro-orm/knex").EntityManager<import("@mikro-orm/knex").AbstractSqlDriver<import("@mikro-orm/knex").AbstractSqlConnection>>>;
}
