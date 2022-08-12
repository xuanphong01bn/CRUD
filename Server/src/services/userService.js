import express from "express"
import db from "../models/index"
import bcrypt from "bcryptjs"
const salt = bcrypt.genSaltSync(10); // muối = công thức để hash
let getAllUsers = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = 'abc'
            if (userId === 'ALL') {
                users = await db.User.findAll({
                    attributes: {
                        exclude: ['password']
                    }
                })
            }
            if (userId && userId !== 'ALL') {
                users = await db.User.findOne({
                    where: { id: userId },
                    attributes: {
                        exclude: ['password']
                    }
                })
            }
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}
let hashPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hash = await bcrypt.hashSync(password, salt);
            resolve(hash)
        } catch (e) {
            reject(e)
        }

    })
}
let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashPassword(data.password);
            await db.User.create({
                username: data.username,
                password: hashPasswordFromBcrypt,
                telephone: data.telephone,
                address: data.address,
                email: data.email,

            })
            resolve({
                errCode: 0,
                message: 'OK'
            }) // === return 
        } catch (e) {
            reject(e)
        }
    })
}
let deleteNewUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: id }
            })
            if (!user) {
                resolve({
                    errCode: 2,
                    errMessage: 'User does not exist'
                })
            }
            await db.User.destroy({
                where: { id: id }
            });
            resolve({
                errCode: 0,
                errMessage: 'Delete done '
            })

        } catch (e) {
            reject(e)
        }
    })
}
let editUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            })
            if (!user) {
                resolve({
                    errCode: 2,
                    errMessage: 'User does not exist'
                })
            }
            let hashPasswordFromBcrypt = await hashPassword(data.password);
            await db.User.update(
                {
                    username: data.username,
                    password: hashPasswordFromBcrypt,
                    telephone: data.telephone,
                    address: data.address,
                    email: data.email,
                },
                {
                    where: { id: data.id }
                }
            )
            resolve({
                errCode: 0,
                errMessage: 'Update done '
            })
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    getAllUsers: getAllUsers,
    createNewUser: createNewUser,
    deleteNewUser: deleteNewUser,
    editUser: editUser
}