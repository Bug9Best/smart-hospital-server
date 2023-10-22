import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor() {}
    private user: any = [
        {
            name: "hello"
        }
    ]

    getUser = () => {
        return this.user;
    }
}
