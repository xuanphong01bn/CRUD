import express from "express"
let getHomePage = (req, res) => {
    return res.render('homepage.ejs') // ko cần đường dẫn do trong file view engine đã config r mạc định là trong file views r

}
module.exports = {
    getHomePage: getHomePage,
};