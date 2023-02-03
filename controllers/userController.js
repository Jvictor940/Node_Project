const User = require('../models/User')

const getUsers = async(req, res, next) => {
    try {
        const result = await User.find(); //find all users

        res //if succesful send 200 status code and json
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result)
    } catch (error) {
        throw new Error(`Error getting all users: ${error.message}`)
    }
}

const createUser = async (req, res, next) => {
    try {
        const result = await User.create(req.body)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result)
    } catch (error) {
        throw new Error(`Error creating a user: ${error.message}`)
    }
}
// const deleteUser = async (req, res, next) => {
//     try {
//         const result = await User.delete(req.body)

//         res
//         .status(200)
//         .setHeader('Content-Type', 'application/json')
//         .json(result)
//     } catch (error) {
//         throw new Error(`Error deleting user: ${error.message}`)
//     }
// }
// const getUser = async (req, res, next) => {
//     try {

//     } catch (error) {

//     }
// }

module.exports = {
    getUsers, 
    createUser, 
}