import {UserService} from "./services";
import multer from 'multer'


export class UserController{
    private userService = new UserService();

    public async getUsers(req:any, res:any){
        try {
            const data = await this.userService.getUsers();
            res.send({success: true, data});
            res.status(200)
        } catch (error) {
            res.send({success: false, error} );
            res.status(400)
        }
    };


    public async getUserById(req:any,res:any){
        try {
            const id = req.params.id;
            const data = await this.userService.getUserById(id);
            res.send({success: true, data});
            res.status(200);
        } catch (error) {
            res.send({success: false, error});
            res.status(400);
        }
    };

    public async createUser(req:any,res:any){
        try {
            const user = req.body;
            const data = await this.userService.createUser(user);
            res.send({success: true, data});
            console.log(data)
            res.status(200);
        } catch (error) {
            res.send({success: false, error});
            res.status(400);
        }
    };

    public async updateUserImage(req:any,res:any){
        try {
            const id = req.params.id;
            const image = req.file.path;
            const data = await this.userService.updateUserImage(id,image);
            res.send({success: true, data});
            res.status(200);
        } catch (error) {
            res.send({success: false, error});
            res.status(400);
        }
    };



}
