import { UUID } from "crypto";

export type ProjectType = {
    id: number|UUID,
    name : string,
    link: string,
    description: {
        short: string,
        long?: string
    },
    images: string[],
    tags?: string[]
};