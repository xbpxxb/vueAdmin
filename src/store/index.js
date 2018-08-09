import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import {login_serve} from '../serves'
export const store = new Vuex.Store({
  state: {

  },
  actions:{
    //初始化接口
    login_action(store,params){
        return new Promise((resolve) => {
            login_serve(params).then(res =>{
                resolve(res)
          })
        })
      },
  },
  mutations: {

  }
});
