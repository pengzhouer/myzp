/**
 * Created by zhoupeng on 2017/12/14.
 */
class Music {
    constructor(obj){
        for(let key in obj){
            this[key] = obj[key];
        }
    }
}

module.exports = Music;

/*
{
    id: 1,
    title: '追光者',
    artist: '岑宁儿',
    file: '岑宁儿-追光者-(电视剧《夏至未至》插曲).mp3',
    cover: 'zhuiguangzhe.jpg'
},*/
