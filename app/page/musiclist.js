/**
 * Created by zhoupeng on 2017/12/10.
 */
import React, {Component} from 'react';
import MusicListItem from '../components/musicListItem';

class MusicList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {musicList, currentMusic, playThis} = this.props;
        let listEle = musicList.map((item)=>{
            return <MusicListItem playThis={playThis} width={'300px'} key={item.id} musicItem={item} focus={item.id === currentMusic.id}></MusicListItem>
        });
        return(
            <ul>{listEle}</ul>
        )
    }
}

export default MusicList;

/*
focus={item === this.props.currentMusicItem}*/
