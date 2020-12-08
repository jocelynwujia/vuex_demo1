<template>
    <div>
        <!-- <h3>当前最新从count值为：{{$store.state.count}}</h3> -->
        <h3>{{this.$store.getters.showNum}}</h3>
        <button @click="handle1">+1</button>
        <button @click="handle2">+N</button>
        <button @click="handle3">+1 asynce</button>
        <button @click="handle3">+N asynce</button>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
       handle1(){
           this.$store.commit('add')
       },
       handle2(){
           this.$store.commit('addN',3)
       },
    //    异步让count自加1
       handle3(){
        //    这里的dispatch函数，专门用来触发action
           this.$store.dispatch('addAsync')
       },
        handle3(){
        //    这里的dispatch函数，专门用来触发action
           this.$store.dispatch('addNAsync',5)
       }
    }
}
</script>