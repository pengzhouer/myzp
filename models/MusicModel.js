/**
 * Created by zhoupeng on 2017/12/14.
 */
var conn = require('../util/Connection');
var MusicDao = require('../dao/musicDao');
var musicDao = new MusicDao();

class MusicModel{
    constructor(){}
    getAll(cb){
        musicDao.getAll(conn, (err, results)=>{
            if(err) return cb(err);
            cb(null, results);
        })
    }
}

module.exports = MusicModel;