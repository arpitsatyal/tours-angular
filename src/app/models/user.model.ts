export class User {
    username: string
    email: string
    password: string
    role: string
    profilePic: string

    constructor(deatils: any) {
        this.username = deatils.username || '',
        this.email = deatils.email || '',
        this.password = deatils.password || '',
        this.role = deatils.role || '',
        this.profilePic = deatils.profilePic || ''
    }
}