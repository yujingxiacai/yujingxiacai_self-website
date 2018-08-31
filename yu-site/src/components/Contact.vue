<template>
    <div class="contact">
        <div class="contact-cardcase">
            <p class="contact-cardcase-header">名片</p>
            <p>GitHub上见：https://github.com/yujingxiacai</p>
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
                电话：<input type="number">
            </div>
        </form>
    </div>
</template>

<script>
import Axios from 'axios';
export default {
    data(){
        return{

        }
    },
    methods: {
        
    },
    computed:{

    },
    watch:{

    },
    created() {
        
    },
}
</script>

<style lang="scss" scoped>
.contact{
    padding-top: 50%;//这里之前用的是margin，外边距，这就导致了在移动端测试时会莫名的多出一段空白，下滑时，这是因为外边距将body整体挤到下面。
    margin-left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    font-size: .1rem;
    color: #ffffff;
    &-cardcase{
        &-header{
            font-size: .4rem;
        }
    }

}
</style>
