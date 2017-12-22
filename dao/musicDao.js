/**
 * Created by zhoupeng on 2017/12/14.
 */
class MusicDao {
    constructor(){}
    getAll(conn, cb){
        conn.query('SELECT * FROM music',
            [], 
            (err, results, fields)=>{
                if(err) return cb(err);
                cb(null, results);
            }
        );
    }
}

module.exports = MusicDao;