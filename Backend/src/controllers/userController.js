import express from "express"
import userService from "../services/userService"
let handleGetAllUsers = async (req, res) => {
    let id = req.query.id; //ALL, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            users: []
        })
    }
    let users = await userService.getAllUsers(id)
    if (!users) {
        return res.status(200).json({
            errCode: 2,
            errMessage: 'User does not exist',
            users
        })
    }
    else
        return res.status(200).json({
            errCode: 0,
            errMessage: 'OK',
            users
        })


}
let handleCreateNewUser = async (req, res) => {
    let message = await userService.createNewUser(req.body);
    console.log(message);
    return res.status(200).json(message);
}
let handleDeleteNewUser = async (req, res) => {
    let message = await userService.deleteNewUser(req.body.id);
    return res.status(200).json(message);
}
let handleEditUser = async (req, res) => {
    let message = await userService.editUser(req.body);
    return res.status(200).json(message);
}
module.exports = {
    handleGetAllUsers: handleGetAllUsers,
    handleCreateNewUser: handleCreateNewUser,
    handleDeleteNewUser: handleDeleteNewUser,
    handleEditUser: handleEditUser
}