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