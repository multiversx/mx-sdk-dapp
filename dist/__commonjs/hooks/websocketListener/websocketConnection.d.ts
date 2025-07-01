import { Socket } from 'socket.io-client';
export declare enum WebsocketConnectionStatusEnum {
    NOT_INITIALIZED = "not_initialized",
    PENDING = "pending",
    COMPLETED = "completed"
}
export declare const websocketConnection: {
    current: Socket | null;
    status: WebsocketConnectionStatusEnum;
};
//# sourceMappingURL=websocketConnection.d.ts.map