import Time from '../entity/Time';
import * as db from '../../db/copa.json'

export default class TimeDAO {

    recuperarTodos() {
        let times = db.times.map(time => new Time(
            time.ano, time.campeao, time.vicecampeao, time.tecnico));

        return times;
    }
}