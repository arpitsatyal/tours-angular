export class Tour {
    name: string
    maxGroupSize: Number
    duration: Number
    difficulty: String
    price: Number
    summary: String

    constructor(details: any) {
        this.name = details.name || ''
        this.maxGroupSize = details.maxGroupSize || ''
        this.duration = details.duration || ''
        this.difficulty = details.difficulty || ''
        this.price = details.price || ''
        this.summary = details.summary || ''
    }
}