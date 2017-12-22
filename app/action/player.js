/**
 * Created by zhoupeng on 2017/12/13.
 */

export function playOrPause() {
    return function (dispatch, getState) {
        let pause = getState().pause;
        $('#player').jPlayer(pause ? 'play' : 'pause');
        dispatch({
            type: 'PLAY_PAUSE',
            pause: !pause
        })
    }
}

export function changeMute() {
    return function (dispatch, getState) {
        let mute = getState().mute;
        $('#player').jPlayer('mute', !mute);
        dispatch({
            type: 'CHANGE_MUTE',
            mute: !mute
        })
    }
}

export function changeProgress(progress) {
    return function (dispatch, getState) {
        let pause = getState().pause;
        let duration = getState().duration;
        $('#player').jPlayer(pause ? 'pause' : 'play', progress * duration);
        dispatch(progressChange(progress));
    }
}

export function progressChange(progress) {
    return {
        type: 'CHANGE_PROGRESS',
        progress: progress
    }
}

export function changeVolume(progress) {
    return function (dispatch, getState) {
        $('#player').jPlayer('volume', progress);
        dispatch({
            type: 'CHANGE_VOLUME',
            progress: progress * 100
        })
    }
}

export function next() {
    return function (dispatch, getState) {
        const state = getState();
        const music = getMusic(state, 'next');//得到下一首的歌
        $('#player').jPlayer('setMedia', {mp3: `/music/${music.file}`}).jPlayer(state.pause ? 'pause' : 'play');
        dispatch({
            type: 'NEXT',
            currentMusic: music,
        })
    }
}

export function prev() {
    return function (dispatch, getState) {
        const state = getState();
        const music = getMusic(state, 'prev'); //得到上一首的歌
        $('#player').jPlayer('setMedia', {mp3: `/music/${music.file}`}).jPlayer(state.pause ? 'pause' : 'play');
        dispatch({
            type: 'NEXT',
            currentMusic: music,
        })
    }
}

export function playThis(music) {
    return function (dispatch, getState) {
        const state = getState();
        $('#player').jPlayer('setMedia', {mp3: `/music/${music.file}`}).jPlayer(state.pause ? 'pause' : 'play');
        dispatch({
            type: 'NEXT',
            currentMusic: music,
        })
    }
}

export function changePlayType() {
    return function (dispatch, getState) {
        const changeType = getState().playType === 'repeat' ? 'random' : 'repeat';
        dispatch({
            type: 'CHANGE_PLAY_TYPE',
            playType: changeType
        });
    }
}

function getMusic(state, nextOrPrev = 'next') { //得到下一首或上一首歌
    if(state.playType === 'repeat'){
        const music_list = state.musicList;
        const id = (music_list.indexOf(state.currentMusic) + (nextOrPrev === 'next' ? 1 : 5)) % (music_list.length);
        return music_list[id];
    }else{
        const random_list = state.randomList;
        const id = (random_list.indexOf(state.currentMusic) + (nextOrPrev === 'next' ? 1 : 5)) % (random_list.length);
        return random_list[id];
    }
}

export function random(array) {  //打乱数组
    let arr = [].concat(array);
    arr.sort(()=>{
        return 0.5 - Math.random();
    });
    return arr;
}

export function changeDuration(duration) {
    return {
        type: 'SET_DURATION',
        duration: duration
    }
}

export function loadMusicList() {
    return function (dispatch, getState) {
        fetch('/music/getAll',{method: 'POST'})
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                $('#player').jPlayer({
                    ready: function () {
                        $(this).jPlayer('setMedia', {
                            mp3:  `/music/${data[0].file}`
                        }).jPlayer('play').jPlayer('volume', getState().volume/100).data('jPlayer')
                    },
                    supplied: 'mp3',
                    wmode: 'window',
                    swfPath: "/js"
                });
                return Promise.resolve(data);
            })
            .then((data)=>{
                dispatch({
                    type: 'GET_MUSICLIST',
                    musicList: data,
                    currentMusic: data[0],
                    randomList: random(data),
                });
            })
            .catch((e)=>{
                console.log(e);
            });
    }
}

export function leftShowOrHide() {
    return {
        type: 'LEFT_SHOW_HIDE'
    }
}