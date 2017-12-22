/**
 * Created by zhoupeng on 2017/11/7.
 */
var mysql = require('mysql');

var conn = mysql.createConnection({
    host:       '127.0.0.1',
    user:       'root',
    password:   'qq13579',
    database:   'music',
    port:        3306
});

module.exports = conn;