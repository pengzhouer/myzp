/**
 * Created by zhoupeng on 2017/12/7.
 */
import React from 'react';
import ReactDom from 'react-dom';
import Root from './root';
import {random} from './action/player';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/todo';
import {Provider} from 'react-redux';

fetch('/music/getAll',{method: 'POST'})
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        let initState = {
            count: 0,
            currentMusic: data[0],
            progress: 0,
            volume: 70,
            pause: false,
            mute: false,
            musicList: data,
            playType: 'repeat',
            randomList: random(data),
            duration: 0,
            leftShow: false
        }
        return Promise.resolve(initState);
    })
    .then((initState)=>{
        let store = createStore(reducer, initState, applyMiddleware(thunk));
        return Promise.resolve(store);
    })
    .then((store)=>{
        ReactDom.render(
            <Provider store={store}>
                    <Root/>
            </Provider>,
            document.getElementById('root')
        );

        if(module.hot){
            module.hot.accept('./root', () => { render(Root) })
        }
    })
    .catch((e)=>{
        console.log(e);
    });






