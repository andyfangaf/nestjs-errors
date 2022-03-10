import { Tribe } from './entities/tribe.entity';
import { CreateTribeInput } from './dto/create-tribe.input';
import { UpdateTribeInput } from './dto/update-tribe.input';
import { EntityManager } from '@mikro-orm/postgresql';
export declare class TribeService {
    private readonly em;
    constructor(em: EntityManager);
    create(createTribeInput: CreateTribeInput): Promise<Tribe>;
    findOne(id: string): Promise<import("@mikro-orm/core").Loaded<Tribe, never>>;
    update(id: string, updateTribeInput: UpdateTribeInput): Promise<import("@mikro-orm/core").Loaded<Tribe, never>>;
    remove(id: string): Promise<EntityManager<import("@mikro-orm/postgresql").AbstractSqlDriver<import("@mikro-orm/postgresql").AbstractSqlConnection>>>;
}
