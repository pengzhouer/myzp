/**
 * Created by zhoupeng on 2017/12/14.
 */
var assert = require('assert');
var MusicModel = require('../models/MusicModel');
var musicModel = new MusicModel();

describe('MusicModel', function () {
    describe('getAll()', function () {
        it('should get all without error', function (done) {
                musicModel.getAll(function (err, results) {
                    if(err) throw err;
                    done();
                    console.log(results);
                })
            }
        )
    });
});