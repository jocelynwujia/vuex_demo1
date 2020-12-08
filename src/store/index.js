import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 唯一的公共数据源
  state: {
    count:0
  },
  // 修改state数据
  mutations: {
    add(state){
      state.count++
    },
    addN(state,step){
      state.count += step
    },
    sub(state){
      state.count--
    },
    subN(state,step){
      state.count -= step
    }
  },
  // 处理异步任务
  actions: {
    addAsync(context){
      setTimeout(() => {
        context.commit('add')
      }, 1000);
    },
    addNAsync(context,step){
      setTimeout(() => {
        context.commit('addN',5)
      }, 1000);
    },
    subAsync(context){
      setTimeout(() => {
        context.commit('sub')
      }, 1000);
    },
    subNAsync(context,step){
      setTimeout(() => {
        context.commit('subN',step)
      }, 1000);
    }
  },
  // 加工数据
  getters:{
    showNum:state =>{
      return '当前最新的数据量是【'+state.count+'】'
    }
  },
  modules: {
  }
})
