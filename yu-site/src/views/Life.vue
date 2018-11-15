<template>
<div class="life-wrapper">
    <ul class="life" >
        <li v-for="(life,index) in lifeDetail" :key="index" class="life-item">
            <div class="life-item-img"><img :src="life.src" alt=""></div>
            <div class="life-item-text"><p>{{life.description}}</p></div>
        </li>
    </ul>
</div>
</template>

<script>
import Axios from 'axios';

export default {
    data (){
        return {
            lifeDetail:[],
        }
    },
    methods: {
        
    },
    computed:{

    },
    watch:{

    },
    
    created() {
        let url='/data/lifeimg.json';
        Axios.get(url).then(res=>{
            this.lifeDetail=res.data.lifeImg;
            console.log(res.data.lifeImg);
        })
    },
}
</script>


<style lang="scss" scoped>
.life-wrapper{
font-size: .1rem; 
color: #ffffff;
// 下面的两个属性加在ul上会出现元素外移的bug，在ul外面套一层div，把该属性放到div外壳中，没问题，但是也没有起作用。待思考！！
width: 20rem;
margin: 1rem auto;
}
.life{


position: fixed;
top:0;
right: 0;
left: 0;
z-index: 999;
bottom: 0;
overflow-Y:scroll;
    &-item{
        
        &-img{
            text-align: center;
            img{
                width:4rem;
                padding-top: .1rem;
            }
        }
        &-text{
            text-align: center;
            padding: .1rem 1rem;
        }
    }
}
</style>