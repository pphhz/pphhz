//没用到

import {
  SET_ISSHOW,
} from './mutations-type'

export default {
  /*
  changeFullScreen (state, flag) {
    state.isFullScreen = flag
  }
   */
  [SET_ISSHOW] (state,flag) {
    state.isShow = flag
  },
  // [SET_MINI_PLAYER] (state, flag) {
  //   state.isShowMiniPlayer = flag
  //   if (flag) {
  //     state.isFullScreen = false
  //     state.isShowListPlayer = false
  //   }
  // },
}
