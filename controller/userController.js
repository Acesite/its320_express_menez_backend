// import userSchema, {userSchema as User} from "../models/userModel";
// // OR
import User from '../models/userModel.js';


function createUser(req, res) {
    const { quote, author, published, title } = req.body;

    if (!quote || !author || !published){
        res.send('Please fill all fields.')
    }
    // const exists = User.findOne({username})

    // if (exists) {
    //     res.status(409).send('User exist')
    //     throw new Error('Username Exists')
    // }

    const newUser = User.create({
        quote, author, published, title
    })

    if (!newUser) {
        res.status(500).send('Error while creatng user.')
    }

    return res.status(200).send('User successfully created.')
}

export {createUser};