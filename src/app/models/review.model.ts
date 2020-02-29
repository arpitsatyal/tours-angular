export class Review {
    name: string
    rating
    constructor(details: any) {
        this.name = details.name || ''
        this.rating = details.rating || ''
    }
}