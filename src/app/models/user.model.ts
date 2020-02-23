export class User {
    username: string
    email: string
    password: string

    constructor(deatils: any) {
        this.username = deatils.username || '',
        this.email = deatils.email || '',
        this.password = deatils.password || ''
    }
}