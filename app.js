"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_data_source_1 = require("./src/database/app-data-source");
var errorMiddleware_1 = require("./src/middlewares/errorMiddleware");
var routes_1 = require("./src/routes/routes");
app_data_source_1.AppDataSource
    .initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization:", err);
});
var port = 3000;
var app = express();
app.use(express.json());
app.use('/', routes_1.default);
app.use(errorMiddleware_1.default);
app.listen(port, function () { console.log('App working at port 3000.'); });
