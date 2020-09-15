<template>
  <div class="goods">
    <div class="nav">
      <div class="w">
        <el-button type="primary" size="small" @click="sort0">综合排序</el-button>
        <el-button type="primary" size="small" @click="sort1">价格升序</el-button>
        <el-button type="primary" size="small" @click="sort2">价格降序</el-button>
        <div class="price-interval">
          <input type="number" class="input" placeholder="价格" v-model="priceGt" />
          <span style="margin: 0 5px">-</span>
          <input type="number" placeholder="价格" v-model="priceLte" />
          <el-button
            type="primary"
            size="small"
            style="margin-left: 10px;"
            @click="getGoodslist()"
          >确定</el-button>
        </div>
      </div>
    </div>
    <div>
      <div class="goods-box w">
        <MallGoods v-for="(o,index) in goodslist" :key="index" :goods="o"></MallGoods>
      </div>
      <div class="w" v-if="!$route.query.cid">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNum"
          :page-sizes="[8, 16, 32, 64]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import MallGoods from '@/components/MallGoods.vue';
export default {
  components: {
    MallGoods
  },
  data () {
    return {
      goodslist: [],
      total: 0,
      pageNum: 1,
      pageSize: 8,
      sort: 0,
      priceGt: '',
      priceLte: ''
    }
  },
  watch: {
    '$route.query.cid' : function (newVal) {
        if(newVal===!"1184") {
          this.getGoodslist()
        }else {
          this.getGoodslist()
        }
    }
  },
  created () {
    this.getGoodslist()
  },
  methods: {
    async getGoodslist () {
        const res = await this.$http.get(`/api/goods/allGoods`, {
          params: {
            sort: this.sort,
            page: this.pageNum,
            size: this.pageSize,
            priceGt: this.priceGt,
            priceLte: this.priceLte,
            cid: this.$route.query.cid
          }
        })
      // console.log(res);
      this.total = res.data.total
      this.goodslist = res.data.data
      // console.log(this.goodslist);
    },
    // 每页显示数量改变
    handleSizeChange (newSize) {
      this.pageSize = newSize
      this.getGoodslist()
    },
    // 页数改变
    handleCurrentChange (newPage) {
      this.pageNum = newPage
      this.getGoodslist()
    },
    // 综合排序
    sort0 () {
      this.sort = 0
      this.getGoodslist()
    },
    // 价格升序
    sort1 () {
      this.sort = 1
      this.getGoodslist()
    },
    // 价格降序
    sort2 () {
      this.sort = -1
      this.getGoodslist()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/style/mixin';
@import '../assets/style/theme';

.nav {
  height: 60px;
  line-height: 60px;
  > div {
    display: flex;
    align-items: center;
    a {
      padding: 0 30px 0 0;
      height: 100%;
      @extend %block-center;
      font-size: 12px;
      color: #999;
      &.active {
        color: #5683ea;
      }
      &:hover {
        color: #5683ea;
      }
    }
    input {
      @include wh(80px, 30px);
      border: 1px solid #ccc;
    }
    input + input {
      margin-left: 10px;
    }
  }
  .price-interval {
    padding: 0 15px;
    @extend %block-center;
    input[type='number'] {
      border: 1px solid #ccc;
      text-align: center;
      background: none;
      border-radius: 5px;
    }
  }
}

.goods-box {
  overflow: hidden;
  > div {
    float: left;
    border: 1px solid #efefef;
  }
}

.no-info {
  padding: 100px 0;
  text-align: center;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  .no-data {
    align-self: center;
  }
}

.img-item {
  display: flex;
  flex-direction: column;
}

.el-pagination {
  align-self: flex-end;
  margin: 3vw 10vw 2vw;
}

.section {
  padding-top: 8vw;
  margin-bottom: -5vw;
  width: 1218px;
  align-self: center;
}

.recommend {
  display: flex;
  > div {
    flex: 1;
    width: 25%;
  }
}
</style>
