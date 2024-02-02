const UsersModel = require('../models/users')
// function create
const createNewUser = async (req, res) => {
    const {body} = req;

    if(!body.name || !body.email || !body.address) {
        return res.status(400).json({
            message: 'anda mengiirim data yang salah',
            data: null
        })
    }

    try {
        await UsersModel.createNewUser(body);
        res.status(201).json({
            message: 'Create new users success',
            data: req.body
        })
    }catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

// function read
const getAllUsers = async (req, res) => {
    // gunakan try catch untuk mengetahui error
    try{
        const [data] = await UsersModel.getAllUsers();
        res.json({
            message: 'Get all users berhasil',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

// function update
const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;
    try {
        await UsersModel.updateUser(body, idUser);
        console.log('idUser: ', idUser);
        res.json({
            message: 'update users success',
            data: {
                id: idUser,
                ...body
            }
        })
    }catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

// function delete
const deleteUser = async (req, res) => {
    const {idUser} = req.params;
    try {
        await UsersModel.deleteUser(idUser);
        res.json({
            message: 'Delete users success',
            data: null    
        })
    }catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}



module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}