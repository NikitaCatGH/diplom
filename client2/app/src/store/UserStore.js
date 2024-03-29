import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = true; ////// false
        this._user = {};
        makeAutoObservable(this);
    }

    setIsAuth(bool) {

        this._isAuth = bool;
    }
    setUser(user) {
        this._user = user;
    }
    //вызваеются, если была изменена переменная
    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }
}