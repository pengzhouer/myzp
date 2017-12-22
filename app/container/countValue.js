/**
 * Created by zhoupeng on 2017/12/13.
 */
import {increment, decrement, show, hide} from '../action/todo';
import {connect} from 'react-redux'
import Counter from '../components/counter';

function showAndHide() {
    return function (dispatch, getState) {
        dispatch(show(8888));
        setTimeout(()=>{
            dispatch(hide(4000));
        },2000);
    }
}

function mapStateToProps(state) {
    return {
        value: state.count,
    }
}
function mapDispatchToProps(dispatch) {
    return{
        onIncrement() {
            dispatch(increment);
        },
        onDecrement(){
            dispatch(decrement);
        },
        onAsync(){
            dispatch(showAndHide());
        }
    }
}
const CountValue = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CountValue;