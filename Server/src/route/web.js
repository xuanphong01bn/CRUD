import express from "express"
import homeController from '../controllers/homeController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', (req, res) => {
        return res.send('Hello word from about ')
    });
    return app.use("/", router); // app phải dùng tất cả các file route được khai báo
}

module.exports = initWebRoutes;