/**
 * Created by zhoupeng on 2017/12/8.
 */
import React, {Component} from 'react';
import './progress.less';

class Progress extends Component{
    constructor(props){
        super(props);
        this.barColor = props.barColor || 'black';
        this.changeProgress = this.changeProgress.bind(this);
        this.refCb = this.refCb.bind(this);
    }
    changeProgress(e){
        let progressBar = this.progressBar;
        let progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
        this.props.onProgressChange && this.props.onProgressChange(progress);
    }
    refCb(instance){
        this.progressBar = instance;
    }
    render(){
        return (
            <div className="components-progress" ref={this.refCb} onClick={this.changeProgress}>
                <div className="progress" style={{width: `${this.props.progress}%`, background: this.barColor}}></div>
            </div>
        )
    }
}

export default Progress;