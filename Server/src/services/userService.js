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
module.exports = {
    getAllUsers: getAllUsers,
    createNewUser: createNewUser,
}