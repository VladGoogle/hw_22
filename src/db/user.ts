import {User, UserObj} from "./models/user";

export class UserDao {

    public async createUser(user:UserObj): Promise<User | null> {

        const data = await User.create({
            name:user.name,
            email: user.email
        });
        return data;
    };

    public async getUserById(id:number): Promise<User | null> {

        const data = await User.findOne({
            where: {id: id}
        })
        return data;
    };

    public async getUsers(): Promise<User[]> {

        const data = await User.findAll({
            order: [["id", "ASC"]]
        })
        return data;
    };

    public async updateUserImage(id: number, image:string): Promise<User> {

        const userObj = await this.getUserById(id)
        if(userObj === null)
        {
            throw "User does not exist"
        }
        else {
            const data = await userObj.update({
                img: image
            });
            return data;
        }
    };
}