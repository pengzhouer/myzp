/**
 * Created by zhoupeng on 2017/12/13.
 */
import {connect} from 'react-redux';
import App from '../app';
import {changeDuration, next, progressChange} from '../action/player';

function mapStateToProps(state) {
    return {
        currentMusic: state.currentMusic,
        volume: state.volume
    }
}
function mapDispatchToProps(dispatch) {
    return{
        changeDuration(duration){
            dispatch(changeDuration(duration));
        },
        next(){
            dispatch(next());
        },
        progressChange(progress){
            dispatch(progressChange(progress));
        },
    }
}
const AppCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppCon;
