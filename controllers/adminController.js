const ApiError = require('../error/ApiError');
const { LoginAdminPanel } = require('../models/model');


class AdminController {

    async login(req, res, next) {
        const { login, password } = req.body;
        if (login !== LoginAdminPanel.login) {
            return next(ApiError.forbidden('Не верный логин'));
        }
        if (password !== LoginAdminPanel.pass) {
            return next(ApiError.forbidden('Не верный пароль'));
        }
        if (password === LoginAdminPanel.pass && login === LoginAdminPanel.login) {
            return res.json({ message: "успешный вход" });
        }
    }
    async auth(req, res) {
        res.json('Authhhh');
    }
    async check(req, res, next) {
        const { id } = req.query;
        if (!id) {
            return next(ApiError.badRequest('Не задан ID'));
        }
        res.json(id);
    }
}


module.exports = new AdminController();