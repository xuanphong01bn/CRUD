import express from "express"
import db from '../models/index'
import CRUDService from "../services/CRUDService"
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll(); // tên models trong code là User
        // console.log('---------------------');
        // console.log(data);
        // console.log('---------------------');

        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        }); // ko cần đường dẫn do trong file view engine đã config r mạc định là trong file views r

    } catch (e) {
        console.log(e);
    }

}
let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    // console.log(req.body)
    console.log(message)
    return res.send('post crud from server')
}
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
};