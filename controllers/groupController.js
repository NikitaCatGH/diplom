const { Group } = require('../models/model');
const ApiError = require('../error/ApiError');


class GroupController {
    async create(req, res) {
        const { name } = req.body;
        const group = await Group.create({ name });
        return res.json(group);
    }
    async get(req, res) {
        const group = await Group.findAll();
        return res.json(group);
    }
    async getOne(req, res) {

    }
}


module.exports = new GroupController();