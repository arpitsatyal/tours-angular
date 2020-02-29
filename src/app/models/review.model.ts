export class Review {
    review: string
    rating
    constructor(details: any) {
        this.review = details.review || ''
        this.rating = details.rating || ''
    }
}