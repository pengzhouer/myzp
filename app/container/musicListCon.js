/**
 * Created by zhoupeng on 2017/12/21.
 */
import {connect} from 'react-redux';
import MusicList from '../page/musiclist';
import {playThis} from '../action/player';

function mapStateToProps(state) {
    return {
        musicList: state.musicList,
        currentMusic: state.currentMusic
    }
}
function mapDispatchToProps(dispatch) {
    return{
        playThis(music){
            dispatch(playThis(music));
        }
    }
}
const MusicListCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(MusicList);

export default MusicListCon;