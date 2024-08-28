import { UUID } from "crypto";

export type ProjectType = {
    id: number|UUID,
    name : string,
    link?: string,
    git?: string,
    description: {
        short: string,
        long?: string
    },
    images: string[],
    tags?: string[]
};