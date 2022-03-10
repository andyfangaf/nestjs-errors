export declare abstract class IQuery {
    abstract tribe(id: string): Tribe | Promise<Tribe>;
}
export declare class Tribe {
    id: string;
}
