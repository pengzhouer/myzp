/**
 * Created by zhoupeng on 2017/12/13.
 */
import React,{Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {value, onIncrement, onDecrement, onAsync} = this.props;
        return (
            <div>
                <h1>{value}</h1>
                <button onClick={onIncrement}>+++++</button>
                <button onClick={onDecrement}>------</button>
                <button onClick={onAsync}>llllll</button>
            </div>
        )
    }
}
export default Counter;