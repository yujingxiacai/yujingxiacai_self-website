<template>
    <div class="contact">
        <div class="contact-cardcase">
            <p class="contact-cardcase-header">名片</p>
            <p>GitHub上见：https://github.com/yujingxiacai</p><a href="http://www.github.com/yujingxiacai" id="githubi"><i class="iconfont icon-GitHub"></i></a>
        </div>
        <form action="" class="contact-from">
            <p>那么你联系方式是？·—·</p>
            <div class="contact-from-input">
                昵称：<input type="text" placeholder="给自己起个有趣个性名字吧，方便我称呼你">
            </div>
            <div class="contact-from-input">
                邮箱：<input type="text">
            </div>
            <div class="contact-from-input">
                扣扣：<input type="text">
            </div>
            <div class="contact-from-input">
                电话：<input type="text">
            </div>
            <div class="contact-from-input">
                <button id="butsubmit" @click.prevent="pushcontext()">确认提交</button>
            </div>
        </form>
    </div>
</template>

<script>
import '@/assets/font/iconfont.css';
import Axios from 'axios';
export default {
    data(){
        return{

        }
    },
    methods: {
        pushcontext(){
            
            console.log('but11');
            window.history.go(-1);//但是这样呢，多页面就不好了，目前就这样先用着。
            return false;//可以组织，为什么用v-on时不能实现阻止默认事件呢？
        }
        
    },
    computed:{

    },
    watch:{

    },
    created() {
        
    },
    mounted() {

    },
}
</script>

<style lang="scss" scoped>
.contact{
    padding-top: 100%;//这里之前用的是margin，外边距，这就导致了在移动端测试时会莫名的多出一段空白，下滑时，这是因为外边距将body整体挤到下面。
    margin-left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    font-size: .2rem;
    color: #ffffff;
    &-cardcase{
        position: relative;
        #githubi :hover{
            color: #000000;
               transform: scale(1.2,1.2);
            }
        #githubi{
            position: absolute;
            top:1.1rem;
            right: -.1rem;
            outline: none;
            color: #ffffff;
            text-decoration: none;
            i{
                font-size: .2rem;

            }
   

        }
        &-header{
            font-size: .4rem;
        }
    }

}
.contact-from-input{
    padding-top: .1rem;
    padding-bottom: .1rem;
    input{
        color: #000000;
    }
   
    #butsubmit{
        font-size: .2rem;
        background-color: #39a9ed;
        padding-left: .5rem;
        padding-right: .5rem;
        margin-left: .6rem;
        border-radius: .1rem ;
        border:0;
        
    }
    
}
@media (max-width: 302px) {
    // 大于1024时出现这个效果
   #butsubmit{
        
        margin-left: 0 !important;
       
    }
}
</style>
