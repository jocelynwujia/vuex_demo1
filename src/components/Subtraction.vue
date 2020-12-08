<template>
    <div>
        <!-- <h3>当前最新从count值为：{{count}}</h3> -->
        <h3>{{showNum}}</h3>
        <button @click="sub">-1</button>
        <button @click="subN(3)">-N</button>
        <button @click="subAsync">-1 async</button>
        <button @click="subNAsync(2)">-N async</button>
    </div>
</template>

<script>
import { mapState,mapMutations,mapActions,mapGetters } from 'vuex'
export default {
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['count']),
        ...mapGetters(['showNum'])
    },
    methods:{
        ...mapMutations(['sub','subN','subAsync']),
        ...mapActions(['subAsync','subNAsync']),
        // handle1(){
        //     this.sub()
        // },
        // handle2(){
        //     this.subN(3)
        // },
        // handle3(){
        //     this.subAsync()
        // }
    }
}
</script>