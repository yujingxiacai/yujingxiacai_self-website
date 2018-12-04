<template>
    <div id="errorpage">
        <h1 id="errorpage-header">404</h1>
        <p id="errorpage-p">抱歉，你访问的页面不在这里，你可以尝试回到主页</p>
        <br>
        <router-link to="/" id="errorpage-back">》》返回主页《《</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="scss" scoped>
#errorpage{
    margin-top: 1rem;
    font-size: .1rem;
    color: #ffffff;
    text-align: center;
    &-header{
        font-size: .4rem;   
    }
    &-p{
        font-size: .2rem;
    }
    &-back{
        outline: none;
       border: .01rem #ffcccc solid;
        font-size: .1rem;
        font-weight: 700;
        color:#ffffff;
        text-decoration: none;
        margin-top: .1rem;
        padding: .1rem;
        width: .5rem;
        
    }
}
</style>
