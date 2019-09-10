import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isMobile:false,
        pageSelect:"all",
        navList:[{
            id:'all',
            icon:'&#xe783;',
            name:'全部'
          },{
            id:'good',
            icon:'&#xe621;',
            name:'精华'
          },{
            id:'share',
            icon:'&#xe613;',
            name:'分享'
          },{
            id:'ask',
            icon:'&#xe605;',
            name:'问答'
          },{
            id:'job',
            icon:'&#xe6a6;',
            name:'招聘'
          },{
            id:'dev',
            icon:'&#xe61a;',
            name:'客户端测试'
          }],
          tag:{
            all:'全部',
            share:'分享',
            ask:'问答',
            good:'精华',
            job:'工作',
            dev:'测试'
          }
    },
    mutations:{
        // 判断是不是手机端
        SET_MOBLIE(state,isMobile){
            state.isMobile = isMobile;
        },
        SET_Page(state,pageId){
          state.pageSelect = pageId;
        }
    }
})