import { Cd } from "./cd";

export class CdCollection
{
    constructor(private cds: Array<Cd>) {}

    getCds(): Array<Cd>
    {
        return this.cds;
    }
}