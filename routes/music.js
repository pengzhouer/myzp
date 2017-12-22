/**
 * Created by zhoupeng on 2017/12/14.
 */
var express = require('express');
var router = express.Router();
var MusicModel = require('../models/MusicModel');
var musicModel = new MusicModel();

router.get('/', (req, res, next)=>{
    console.log('get');
    res.send('end');
});
router.post('/getAll', (req, res, next)=>{
    musicModel.getAll((err, results)=>{
        if(err) return next(err);
        res.send(results);
    })
});

module.exports = router;