"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const connectDB_util_1 = __importDefault(require("./utils/connectDB.util"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = config_1.default.get('port');
app.use('/api', routes_1.default);
app.listen(port, () => {
    console.log(`App started at http://localhost:${port}`);
    (0, connectDB_util_1.default)();
});
