<template>
    <div>
      <!-- 头部导航 -->
        <m-header></m-header>
        <!-- 子路由的出口-->
        <router-view></router-view>
        <!-- 页面底部 -->
        <m-footer></m-footer>
    </div>
</template>

<script>
    import MHeader from '@/common/MHeader';
    import MFooter from '@/common/MFooter.vue';
    export default {
        components: {
            MHeader,
            MFooter
        },
    }
</script>

<style lang="scss" scoped>

</style>
