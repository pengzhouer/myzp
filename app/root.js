/**
 * Created by zhoupeng on 2017/12/8.
 */
import React, {Component} from 'react';
import PlayerCon from './container/playCon';
import { BrowserRouter, Route, Redirect, Switch, Link} from 'react-router-dom';
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
                <BrowserRouter>
                    <AppCon>
                        <Switch>
                            <Route path="/" component={PlayerCon}></Route>
                        </Switch>
                    </AppCon>
                </BrowserRouter>
        )
    }
}
export default Root;
