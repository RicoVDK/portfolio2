export class Cd
{
    constructor(
        private artist: string,
        private title: string,
        private infoLink: string,
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

    getPurchaseLinks(): Array<string>
    {
        return this.purchaseLinks;
    }
}