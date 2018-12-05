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
        geturl(){
            let url='/data/lifeimg.json';
        Axios.get(url).then(res=>{
              this.lifeDetail=this.lifeDetail.concat(res.data.lifeImg.slice(this.lifeDetail.length,this.lifeDetail.length+3));  
            // this.lifeDetail=res.data.lifeImg;
            // console.log(this.lifeDetail.lifeImg);ajax里面是无法获取当前this的lifeDetail的信息的。属于异步加载，因为
        })
        }
    },
    computed:{
        
    },
    watch:{

    },
    
    created() {
        this.geturl();
    },
    mounted() {
        window.onscroll=()=>{
            // alert('123');//用于测试手机端为下滑是否兼容，发现监控下拉事件时兼容的
           let htmlscroheight= document.documentElement.scrollHeight;
           let htmlscrolltop= document.documentElement.scrollTop;
           let htmlclientheight= document.documentElement.clientHeight;
            //浏览器有时候会出现问题就是滚动条的top不准确，有时行，有时不行。所以干脆来个范围。
            let sumTop=Math.ceil(htmlscrolltop+htmlclientheight);
            let sumbuttom=Math.floor(htmlscrolltop+htmlclientheight);
            console.log(htmlscroheight,htmlscrolltop,htmlclientheight,sumTop,sumbuttom);
            // alert(htmlscroheight+'~'+sumbuttom+'~'+sumTop);//手机浏览输出的永远是876~715~715 确实是监听了，但是就是再也划不动了这个时候！！
            if(htmlscroheight<=sumTop&&htmlscroheight>=sumbuttom){
                console.log("yes!!!!");
                // alert(sumbuttom);//手机端根本就无法进入。
                this.geturl();
            }
        }
        //综合问题应该出现在我们的 ，在于手机的浏览器默认不兼容这个尺寸监控，可能手机浏览器bug。
    },
}
</script>


<style lang="scss" scoped>

.life-wrapper{
font-size: .1rem; 
color: #ffffff;
// 下面的两个属性加在ul上会出现元素外移的bug，在ul外面套一层div，把该属性放到div外壳中，没问题，但是也没有起作用。待思考！！
// width: 20rem;
// margin: 1rem auto;
}
.life{


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