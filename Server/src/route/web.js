import express from "express"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.send('Hello word with Phong')
    });
    return app.use("/", router); // app phải dùng tất cả các file route được khai báo
}

module.exports = initWebRoutes;