<template>
  <div>
    <div class="layout-container">
      <m-header>
        <div slot="nav"></div>
      </m-header>
      <div class="w">
        <div class="content"></div>
      </div>
    </div>

    <MFooter></MFooter>
  </div>
</template>

<script>
import MHeader from '@/common/MHeader'
import MFooter from '@/common/MFooter.vue';
export default {
  components: {
    MHeader,
    MFooter
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/style/mixin';

.w {
  padding-top: 40px;
}

.content {
  display: flex;
  height: 100%;
}

.account-sidebar {
  width: 210px;
  border-radius: 6px;
  .avatar {
    padding-top: 20px;
    border-radius: 10px;
    text-align: center;
    img {
      width: 168px;
      height: 168px;
    }
    h5 {
      font-size: 18px;
      line-height: 48px;
      font-weight: 700;
    }
  }
  .account-nav {
    padding-top: 15px;
    li {
      position: relative;
      height: 48px;
      border-top: 1px solid #ebebeb;
      line-height: 48px;
      &:hover {
        a {
          position: relative;
          z-index: 1;
          height: 50px;
          background-color: #98afee;
          line-height: 50px;
          color: #fff;
        }
      }
      a {
        display: block;
      }
      &.current {
        a {
          position: relative;
          z-index: 1;
          height: 50px;
          background-color: #98afee;
          line-height: 50px;
          color: #fff;
        }
      }
    }
  }
}

.account-content {
  margin-left: 20px;
  flex: 1;
}
</style>
