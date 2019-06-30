export class Dog {
    breed: string;
    breedUrl: string;
    url: string = undefined;
    
    constructor(breed: string, url?: string) {
        this.breed = breed;
        this.breedUrl = `https://dog.ceo/api/breed/${breed}/images`;
        if (url) this.url = url;
    }
}
