<template>
  <div>
<!-- 路由占位符 -->
<router-view class="main"></router-view>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" >
@import url('assets/style/index.scss');
#app{
  height: 100%
}
.main{
  background-color: #ededed;
  overflow: hidden;
  width: 100%;
}
</style>
