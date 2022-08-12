import express from "express"
import bcrypt from "bcryptjs"
import db from "../models/index";
const salt = bcrypt.genSaltSync(10); // muối = công thức để hash
let createNewUser = async (data) => {
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
            resolve('Create new user success') // === return 
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

module.exports = {
    createNewUser: createNewUser,
    hashPassword: hashPassword,
}