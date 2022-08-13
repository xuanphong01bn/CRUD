import express from "express"
import userController from '../controllers/userController'
let router = express.Router();

let initWebRoutes = (app) => {

    router.get('/api/get-all-users', userController.handleGetAllUsers);
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    router.delete('/api/delete-user', userController.handleDeleteNewUser);
    router.put('/api/edit-user', userController.handleEditUser);








    return app.use("/", router); // app phải dùng tất cả các file route được khai báo
}

module.exports = initWebRoutes;