import { makeAutoObservable } from "mobx";

export default class InfoStore {
    constructor() {
        this._groups = [{
            id: 1, name: "19ПК-11"
        }, { id: 2, name: "20ПК-42" },
        { id: 3, name: "19ПК-11К" }
        ];
        this._dicsiplines = [
            {
                id: 1, name: "МДК 01.01"
            }, { id: 2, name: "МДК 01.02" },
            { id: 3, name: "МДК 02.01" },
            { id: 4, name: "МДК 02.02" }
        ];
        this._tasks = [
            { id: 1, value: "Задание МДК 01.01 №1", file: "https/file1.pdf" },
            { id: 1, value: "Задание МДК 01.01 №2", file: "https/file1.pdf" },
            { id: 1, value: "Задание МДК 01.01 №3", file: "https/file1.pdf" },
            { id: 1, value: "Задание 1", file: "https/file1.pdf" },
            { id: 1, value: "Задание 2", file: "https/file1.pdf" },
            { id: 1, value: "Задание 3", file: "https/file1.pdf" },
        ];
        makeAutoObservable(this);
    }

    setGroups(groups) {

        this._groups = groups;
    }
    setDicsiplines(disciplines) {

        this._dicsiplines = disciplines;
    }
    setDicsiplines(tasks) {
        this._tasks = tasks;
    }
    //вызваеются, если была изменена переменная
    get disciplines() {
        return this._dicsiplines;
    }

    get groups() {
        return this._tasks;
    }
    get tasks() {
        return this._tasks;
    }
}