/**
 * Created by zhoupeng on 2017/12/13.
 */
const reducer = function (state, action) {
  switch (action.type){
      case 'INCREMENT': 
          return Object.assign({}, state, {
              count: state.count + 1
          });
      case 'DECREMENT':
          return Object.assign({}, state, {
              count: state.count - 1
          });
      case 'CHANGE_MUTE': 
          return Object.assign({}, state, {
             mute: action.mute 
          });
      case 'PLAY_PAUSE':
          return Object.assign({}, state, {
              pause: action.pause
          });
      case 'CHANGE_PROGRESS':
          return Object.assign({}, state, {
              progress: action.progress
          });
      case 'CHANGE_VOLUME':
          return Object.assign({}, state, {
              volume: action.progress
          });
      case 'SHOW':
          return Object.assign({}, state, {
              count: action.number
          });
      case 'HIDE':
          return Object.assign({}, state, {
              count: action.number
          });
      case 'GET_MUSICLIST':
          return Object.assign({}, state, {
              musicList: action.musicList,
              currentMusic: action.currentMusic,
              randomList: action.randomList,
          });
      case 'NEXT':
          return Object.assign({}, state, {
              currentMusic: action.currentMusic,
              progress: 0,
          });
      case 'PREV':
          return Object.assign({}, state, {
              currentMusic: action.currentMusic,
              progress: 0,
          });
      case 'CHANGE_PLAY_TYPE':
          return Object.assign({}, state, {
              playType: action.playType
          });
      case 'SET_DURATION':
          return Object.assign({}, state, {
              duration: action.duration
          });
      case 'LEFT_SHOW_HIDE':
          return Object.assign({}, state, {
              leftShow: !state.leftShow
          })
      default: return state;
  }
};

export default reducer;