import TimeDAO from '../model/dao/TimeDAO';

export default class CopaController {

    constructor() {
        this.timeDAO = new TimeDAO();
    }

    recuperarTimes() {
        return this.timeDAO.recuperarTodos();

    }
}