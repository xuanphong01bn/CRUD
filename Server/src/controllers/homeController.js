import express from "express"
import db from '../models/index'
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
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
module.exports = {
    getHomePage: getHomePage,
};