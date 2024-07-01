"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const app = (0, express_1.default)();
(0, mongoose_1.connect)("mongodb://root:example@mongo:27017/OTKT").then(() => console.log("connected to db"));
app.get("/", (req, res) => {
    res.send("Hello sweetie how are you");
});
app.listen(5000, () => {
    console.log("server started on port 5000");
});
