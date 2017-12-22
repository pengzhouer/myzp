/**
 * Created by zhoupeng on 2017/12/13.
 */
import {connect} from 'react-redux';
import {changeMute, changeProgress, changeVolume, playOrPause, prev, next, changePlayType, leftShowOrHide} from '../action/player';
import Player from '../page/player';

function mapStateToProps(state) {
    return Object.assign({}, state, {
        currentMusic: state.currentMusic,
        progress: state.progress,
        volume: state.volume,
        pause: state.pause,
        mute: state.mute,
        playType: state.playType,
        duration: state.duration,
        leftShow: state.leftShow
    });
}

function mapDispatchToProps(dispatch) {
    return {
        changeProgress(progress){
            dispatch(changeProgress(progress));
        },
        changeVolume(progress){
            dispatch(changeVolume(progress));
        }, 
        play(){
            dispatch(playOrPause());
        },
        next(){
            dispatch(next());
        },
        changeMute(){
            dispatch(changeMute());
        },
        prev(){
            dispatch(prev());
        },
        changePlayType(){
            dispatch(changePlayType());
        },
        leftShowOrHide(){
            dispatch(leftShowOrHide());
        }
    }
}

const PlayerCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);

export default PlayerCon;