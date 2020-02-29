export class User {
    username: string
    email: string
    password: string
    role: string

    constructor(details: any) {
        this.username = details.username || '',
        this.email = details.email || '',
        this.password = details.password || '',
        this.role = details.role || ''
    }
}