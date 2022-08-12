import express from "express"
import homeController from '../controllers/homeController';
import userController from '../controllers/userController'
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', (req, res) => {
        return res.send('Hello word from about ')
    });
    router.get('/getCRUD', homeController.getCRUD);
    router.post('/postCRUD', homeController.postCRUD);
    router.post('/postCRUD', homeController.postCRUD);
    router.get('/readCRUD', homeController.readCRUD);

    router.get('/api/get-all-users', userController.handleGetAllUsers);




    return app.use("/", router); // app phải dùng tất cả các file route được khai báo
}

module.exports = initWebRoutes;