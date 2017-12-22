/**
 * Created by zhoupeng on 2017/12/10.
 */
import React, {Component} from 'react';
import './musicListItem.less';

class MusicListItem extends Component{
    constructor(props){
        super(props);
        this.playMusic = this.playMusic.bind(this, this.props.musicItem.id);
        this.deleteMusic = this.deleteMusic.bind(this, this.props.musicItem.id);
    }
    playMusic(musicId){
        Pubsub.publish('PLAY_MUSIC', musicId);
    }
    deleteMusic(musicId, evevt){
        event.stopPropagation();
        Pubsub.publish('DELETE_MUSIC', musicId);
    }
    render(){
        const {focus, musicItem, playThis} = this.props;
        return (
            <li style={{width: this.props.width}} onClick={playThis.bind(this, musicItem)} className={`components-musicListItem clearfix ${focus ? 'focus' : ''}`}>
                <p><strong>{musicItem.title}</strong> - {musicItem.artist}</p>
                <div onClick={this.deleteMusic} className="delete"><i className="fa fa-minus fa-2x"></i></div>
            </li>
        )
    }
}

export default MusicListItem;