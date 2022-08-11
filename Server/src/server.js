import express from "express";
import bodyParser from "body-parser"; // lấy các tham số của client
// vd: query paragram, userID = 7 ;
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web.js';
import testConnectDB from './config/ConnectDB'
require('dotenv').config();// gọi hàm config của .env, chạy hàm process ở dưới

let app = express();

// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRoutes(app);

testConnectDB();
let port = process.env.PORT; // lấy port trong env
app.listen(port, () => { // callback, lấy được port mới chạy hàm
    console.log("Backend nodejs is running on the port: " + port)
})
