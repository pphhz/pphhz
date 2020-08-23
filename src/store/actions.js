//没用到
import {
  SET_ISSHOW,
} from './mutations-type'

// import {
//   getSongDetail,
//   getSongLyric,
//   getSongURL
// } from '../api/index'

export default {
  /*
  setFullScreen ({ commit }, flag) {
    commit('changeFullScreen', flag)
  }
   */
  setToggleShow ({ commit }, flag) {
    // return flag=!flag
    commit(SET_ISSHOW, flag)
  },

}

