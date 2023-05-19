

export interface Iproduct{
    pname: string;
    pid: number;
    pStatus: TpStatus;
    canReturn :1 | 0
}

export type TpStatus =  "In progress" | "Dispatched"| "Delivered"

