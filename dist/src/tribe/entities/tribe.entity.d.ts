import { EntityRepository } from "@mikro-orm/postgresql";
export declare class TribeRepository extends EntityRepository<Tribe> {
}
export declare enum TribeTier {
    FREE = "free",
    GROWTH = "growth"
}
export declare class Tribe {
    id: string;
    name: string;
    logo: string;
    tier: TribeTier;
    createdAt: Date;
}
