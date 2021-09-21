import {UserDao} from "../db/user";
import {UserObj} from "../db/models/user";

export class UserService {
    private userDao = new UserDao();

    public async getUsers() {
        return await this.userDao.getUsers();
    };

    public async getUserById(id:number) {
        return await this.userDao.getUserById(id);
    };

    public async createUser(user: UserObj) {
        return await this.userDao.createUser(user);
    }

    public async updateUserImage(id: number, image:string) {
        return await this.userDao.updateUserImage(id,image);
    }
}

