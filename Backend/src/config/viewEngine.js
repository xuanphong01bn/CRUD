import express from "express";

let configViewEngine = (app) => {
    app.use(express.static("./src/public")); // lấy ảnh trên server
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
}

module.exports = configViewEngine;