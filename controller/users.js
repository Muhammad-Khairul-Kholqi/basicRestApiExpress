const getAllUsers = (req, res) => {
    res.json({
        message: 'Get all users success'
    })
}

const postAllUsers = (req, res) => {
    res.json({
        message: 'Create new users success'
    })
}

module.exports = {
    getAllUsers,
    postAllUsers
}