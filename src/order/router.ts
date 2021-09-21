import {Router} from "express";
import {UserController} from "./controller";
import multer from "multer";
const userController = new UserController();
export const router = Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.originalname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

router.post('/users/register', async (req, res)=> await userController.createUser(req, res))
router.get('/users/list', async (req, res)=> await userController.getUsers(req, res))
router.get('/users/find/by/:id', async (req, res)=> await userController.getUserById(req, res))
router.put('/users/update/img/:id', upload.single('file'), async(req, res) => await userController.updateUserImage(req,res))

