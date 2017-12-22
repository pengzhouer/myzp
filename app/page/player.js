import React, {Component} from 'react';
import Progress from '../components/progress';
import './player.less';
import MusicListCon from '../container/musicListCon';
import { Scrollbars } from 'react-custom-scrollbars';

class Player extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    componentWillUnMount(){
    }
    componentWillMount(){

    }
    componentWillUnmount(){

    }
    componentWillReceiveProps(){

    }
    calculateTime(time){ //格式化时间
        const minute = Math.floor(time / 60);
        const second = Math.floor(time % 60);
        const formatTime = `${minute}:${second < 10 ? `0${second}` : second}`;
        return formatTime;
    }
    render(){
        const {leftShow, duration, playType, currentMusic, progress, volume, pause, mute, 
            next, play, changeMute, changeProgress, changeVolume, prev, changePlayType, leftShowOrHide} = this.props;
        return (
            <div className="player-page">
                <h1 className="caption">我的私人音乐坊 &gt;</h1>
                <div className="main-container clearfix">
                    <div className="controll-wrapper">
                        <h2 className="music-title">{currentMusic.title}</h2>
                        <h3 className="music-artist">{currentMusic.artist}</h3>
                        <div className="clearfix volume-controll">
                            <div className="volume-container">
                                <i className={`fa fa-lg ${mute ? 'fa-volume-off' : 'fa-volume-up'}`} onClick={changeMute}></i>
                                <div className="volume-wrapper">
                                    <Progress progress={volume} onProgressChange={changeVolume}></Progress>
                                </div>
                            </div>
                        </div>
                        <div className="time-controll clearfix">
                            <div className="time nowTime">{this.calculateTime(progress * duration / 100)}</div>
                            <div className="progress-wrapper">
                                <Progress progress={progress} onProgressChange={changeProgress} barColor="red"/>
                            </div>
                            <div className="time allTime">{this.calculateTime(duration)}</div>
                        </div>
                        <div className="play-controll-wrap clearfix">
                            <div className="play-controll">
                                <i className="fa fa-angle-left fa-2x" onClick={prev}></i>
                                <i className={`fa ${!pause ? 'fa-pause' : 'fa-play'} fa-1x`} onClick={play}></i>
                                <i className="fa fa-angle-right fa-2x" onClick={next}></i>
                            </div>
                            <div className="play-repeat">
                                <i onClick={changePlayType} className={`fa ${playType === 'repeat' ? 'fa-repeat' : 'fa-random'} fa-2x`}></i>
                            </div>
                        </div>
                    </div>
                    <div className="cover">
                        <img src={`/image/${currentMusic.cover}`} alt={currentMusic.title}/>
                    </div>
                </div>
                <div className="left-list" style={{right: leftShow ? '0px' : '-310px'}}>
                    <Scrollbars autoHide={true} style={{width: 310, height:500}}>
                        <MusicListCon></MusicListCon>
                    </Scrollbars>
                    <div className="toggleShow" onClick={leftShowOrHide}>
                        <i className={`fa fa-angle-${leftShow ? 'right' : 'left'}`}></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Player;