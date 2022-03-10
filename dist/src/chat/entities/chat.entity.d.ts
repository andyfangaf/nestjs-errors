export declare enum ChatStatus {
    OPEN = "open",
    CLOSED = "closed"
}
export declare class Chat {
    id: string;
    status: ChatStatus;
    createdAt: Date;
    updatedAt: Date;
}
