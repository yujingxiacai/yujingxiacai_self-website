<template>
<div class="home-container" v-show="isLeave">
   <div class="contact-me" @click="contactMe">联系我<router-link to="/contact" class="contact-me-link"><img src="/img/story.png" alt=""></router-link></div> 
    <div class="home-wrapper">
        <div class="home-story">
            <span class="home-story-title">生活</span>
            <span class="home-story-title">故事</span>
            <span class="home-story-title">博客</span>
        </div>
       
        <div class="home">
            <div class="home-radio" v-for="(botton,index) in bottonDetail" :key="index">
                <img :src="botton.src" alt="" >
                <br>
                <span @click="linkTo(botton)"><router-link :to="botton.path" class="home-radio-link"  >生活</router-link></span>
                <!-- router-link不能添加点击事件。 -->
            </div>
        </div> 
    </div>
</div>

</template>

<script>
import '@/assets/css/animate.css';
import '@/assets/font/iconfont.css';
import contact from'@/components/Contact.vue';
export default {
   data(){
       return{
           bottonDetail:[{
            src:'/img/life.png',
            name:'生活',
            discription:'这里没有常理可言，我的森林需要你来探索，一个生活记录的是一个人',
            path:'/life',
            isEnter: false,
           },{
            src:'/img/story.png',
            name:'故事',
            discription:'让我给你讲个故事吧，虽然它真的很平庸，但我总觉的它能让你我更加近距离的畅谈心声，慰藉彼此的灵魂',
            path:'/life',
            isEnter: false,
           },{
            src:'/img/write.png',
            name:'博客',
            discription:'技术的沧海桑田中怎么能没有我的一片浪花呢？',
            path:'/life',
            isEnter: false,            
           }
           ],
           isLeave:true,
       }
   },
   components: {
       contact
   },
   methods: {
      linkTo(a){
          this.bottonDetail.forEach(element => {
              element.isEnter=false
          });
          this.isLeave=false;
          console.log(this.isLeave);
          a.isEnter=true;
          console.log(a.isEnter);
      },
      contactMe(){
          this.isLeave=false;

      }
   },
   watch: {
       
   },
   created () {
       this.isLeave=true;
       console.log('重新创建了一段，',this.isLeave);
   },
   computed:{

   }
}
</script>
<style lang="scss" scoped>
.contact-me{
    position: absolute;
    top:.4rem;
    right: .2rem;
    font-size: .07rem;
    z-index: 999;
    color: #64a0c4;
    &-link{
        img{
           width: .3rem;
           vertical-align: middle
        }
    }
}
.home-container{
    // position: absolute;
    // left:50%;
    // top:50%;
    width: 100%

}

.home-wrapper{
    padding-top: 50%;//这里之前用的是margin，外边距，这就导致了在移动端测试时会莫名的多出一段空白，下滑时，这是因为外边距将body整体挤到下面。
    margin-left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
}
.home-story{
    display: flex;
    padding: 1rem 0 .4rem;
    &-title{
        flex-grow: 1;
        text-align: center;
        font-size: .1rem;
        color: #93b9c7;
    }
}
.home{
    display: flex;
    &-radio{
        width: 0;
       flex-grow: 1;
       text-align: center;
      img{

          width: .6rem;
      }
       img:active{  
            animation: rubberBand .7s;
           
       } 
       &-link{
           opacity: 0;
           font-size:.2rem;
           outline: none;
       }
    }
}
</style>
