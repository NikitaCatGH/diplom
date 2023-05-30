const sequelize = require('../db');
const { DataTypes } = require('sequelize');


//админ панель///////

//логин админа
const LoginAdminPanel = sequelize.define("login_for_admin_panel", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrementIdentity: false },
    login: { type: DataTypes.STRING, unique: true, allowNull: false },
    pass: { type: DataTypes.STRING, unique: true, allowNull: false }
});

//группы////
// массив участников, массив дисциплин?

const Group = sequelize.define("group", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrementIdentity: true },
    nameOfGroups: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.STRING, unique: false, allowNull: true },
    countOfMembers: { type: DataTypes.INTEGER, unique: false, allowNull: true }
});
// студенты с их оценками
// массив оценок?
const Student = sequelize.define("student", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrementIdentity: true },
    name: { type: DataTypes.STRING, unique: false, allowNull: false },
    group_id: { type: DataTypes.INTEGER, allowNull: false },
    discipline_id: { type: DataTypes.INTEGER, allowNull: false },
    // groupMembership: { type: DataTypes.STRING, unique: false, allowNull: true }
});
// оценки

const Mark = sequelize.define("mark", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrementIdentity: true },
    value: { type: DataTypes.INTEGER, autoIncrementIdentity: false },
    student_id: { type: DataTypes.INTEGER, autoIncrementIdentity: false },
    task_id: { type: DataTypes.INTEGER, autoIncrementIdentity: false },

}
);
// task

const Task = sequelize.define("task", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrementIdentity: true },
    value: { type: DataTypes.STRING, autoIncrementIdentity: false },
    file: { type: DataTypes.STRING, autoIncrementIdentity: false },
    discipline_id: { type: DataTypes.INTEGER, autoIncrementIdentity: false },

});


//discipline
const Discipline = sequelize.define("discipline", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrementIdentity: true },
    nameOfGroups: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.STRING, unique: false, allowNull: true },

});


//textboxs
const Textbox_group = sequelize.define("textbox_group", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrementIdentity: true },
    value: { type: DataTypes.STRING, autoIncrementIdentity: false },
    group_id: { type: DataTypes.INTEGER, autoIncrementIdentity: false },

});

const Textbox_discipline = sequelize.define("textbox_discipline", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrementIdentity: true },
    value: { type: DataTypes.STRING, autoIncrementIdentity: false },
    discipline_id: { type: DataTypes.INTEGER, autoIncrementIdentity: false },

});


//связующая дисциплин и груп
const DisciplineGroup = sequelize.define("descipline_group", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrementIdentity: true },
});


// описание group 

Group.belongsToMany(Discipline, { through: DisciplineGroup });
Discipline.belongsToMany(Group, { through: DisciplineGroup });


Group.hasMany(Student);
Student.belongsTo(Group);

Group.hasOne(Textbox_group);
Textbox_group.belongsTo(Group);


// student
Student.hasMany(Mark);
Mark.belongsTo(Student);


// discipline
Discipline.hasMany(Task);
Task.belongsTo(Discipline);

Discipline.hasMany(Student);
Student.belongsTo(Discipline);

Discipline.hasOne(Textbox_discipline);
Textbox_discipline.belongsTo(Discipline);


module.exports = {
    LoginAdminPanel,
    Student,
    Group,
    Discipline,
    Task,
    Textbox_discipline,
    Textbox_group,
    Mark,

};