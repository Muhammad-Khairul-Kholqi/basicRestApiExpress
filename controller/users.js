// function create
const createNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Create new users success',
        data: req.body
    })
}

// function read
const getAllUsers = (req, res) => {
    const data = {
        id: '1',
        name: 'khairul',
        email: 'kkhhh@gmail.com',
        address: 'sukabumi'
    }
    res.json({
        message: 'Get all users success',
        data: data
    })
}

// function update
const updateUser = (req, res) => {
    const {idUser} = req.params;
    console.log('idUser: ', idUser);
    res.json({
        message: 'update success',
        data: req.body
    })
}

const deleteUser = (req, res) => {
    const {idUser} = req.params;
    res.json({
        message: 'delete success',
        data: {
            id: idUser,
            name: 'khairul kholqi',
            emaail: 'kkhrl@gmail.com',
            address: 'curug'
        }
    })
}



module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}