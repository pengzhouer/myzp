/**
 * Created by zhoupeng on 2017/12/17.
 */

import React, {Component} from 'react';
import Header from './components/header';

class App extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
    }
    componentWillUnMount(){
        $('#player').unbind($.jPlayer.event.ended);
        $('#player').unbind($.jPlayer.event.loadedmetadata)
    }
    componentDidMount(){
        const props = this.props;
        $('#player').jPlayer({
            ready: function () {
                $(this).jPlayer('setMedia', {
                    mp3:  `/music/${props.currentMusic.file}`
                }).jPlayer('play').jPlayer('volume', props.volume/100).data('jPlayer')
            },
            supplied: 'mp3',
            wmode: 'window',
            swfPath: "/js"
        });
        $('#player').bind($.jPlayer.event.loadedmetadata, (e)=>{
            this.props.changeDuration(e.jPlayer.status.duration);
        });
        $('#player').bind($.jPlayer.event.ended, (e)=>{
            this.props.next();
        });
        $('#player').bind($.jPlayer.event.timeupdate, (e)=>{
            this.props.progressChange(e.jPlayer.status.currentPercentAbsolute);
        });
    }
    render(){
        return (
            <div>
                <Header></Header>
                <div id="player"></div>
                {this.props.children}
            </div>
        )
    }
}
export default App;