/**
 * Created by zhoupeng on 2017/12/8.
 */
import React, {Component} from 'react';
import PlayerCon from './container/playCon';
import AppCon from './container/appCon'


/*
 let store = createStore(reducer, initState, applyMiddleware(thunk));
 */



class Root extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
                    <AppCon>
                        <PlayerCon></PlayerCon>
                    </AppCon>
        )
    }
}
export default Root;
