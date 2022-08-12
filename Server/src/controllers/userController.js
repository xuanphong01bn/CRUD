import express from "express"
import userService from "../services/userService"
let handleGetAllUsers = async (req, res) => {
    let id = req.body.id; //ALL, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            users: []
        })
    }
    else {
        let users = await userService.getAllUsers(id)
        return res.status(200).json({
            errCode: 0,
            errMessage: 'OK',
            users
        })
    }

}

module.exports = {
    handleGetAllUsers: handleGetAllUsers,
}