const { Discipline } = require('../models/model');
const ApiError = require('../error/ApiError');

class DisciplineController {
    async create(req, res) {
        const { name } = req.body;
        const discipline = await Discipline.create({ name });
        return res.json(discipline);
    }
    async get(req, res) {
        const discipline = await Discipline.findAll();
        return res.json(discipline);
    }
    async getOne(req, res) {

    }
}


module.exports = new DisciplineController();