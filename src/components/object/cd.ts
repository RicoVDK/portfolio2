export class Cd
{
    constructor(
        private artist: string,
        private title: string,
        private infoLink: string,
        private owned: boolean,
        private purchaseLinks: Array<string>,
    ) {
    }

    getArtist(): string
    {
        return this.artist;
    }

    getTitle(): string
    {
        return this.title;
    }

    getInfoLink(): string
    {
        return this.infoLink;
    }

    isOwned(): boolean
    {
        return this.owned;
    }

    getPurchaseLinks(): Array<string>
    {
        return this.purchaseLinks;
    }
}