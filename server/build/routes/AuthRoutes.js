"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
class AuthRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', authController_1.authController.login);
        this.router.get('/:id', authController_1.authController.one);
        // this.router.get('/:user',userController.getByName );
    }
}
const authRoutes = new AuthRoutes();
exports.default = authRoutes.router;
