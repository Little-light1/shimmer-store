<template>
  <el-row class="good-item">
    <el-col>
      <el-card :body-style="{padding: 0}" >
        <div class="good-img" @click="toGoodsDetails(goods.productId)">
          <a>
            <img :src="goods.productImageBig" alt>
          </a>
        </div>
        <h6 class="good-title">{{goods.productName}}</h6>
        <h3 class="sub-title ellipsis">{{goods.subTitle}}</h3>
        <div class="good-price pr">
          <div class="ds pa">

              <el-button type="default" size="medium" @click="toGoodsDetails(goods.productId)">查看详情</el-button>

              <el-button type="primary" size="medium" @click="addGoods(goods.productId)">加入购物车</el-button>

          </div>
          <p>
            <span style="font-size:14px">¥</span>
            {{Number(goods.salePrice).toFixed(2)}}
          </p>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
props: ['goods'],
methods: {
  toGoodsDetails(id) {
         this.$router.push(`goodsDetail?productId=${id}`)
  },
 async addGoods (productId) {
         const res = await this.$http.post(`/api/addCart`, {
           userId: 62,
           productId: productId,
           productNum: 1
         })
         console.log(res);
  }
},
}
</script>

<style lang="scss" scoped>
.good-img {
  display: flex;
  justify-content: center;
  a {
    display: block;
    img {
      margin: 50px auto 10px;
      width: 206px;
      height: 206px;
      display: block;
    }
  }
}
.good-price {
  margin: 15px 0;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #d44d44;
  font-family: Arial;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: space-around;
  padding-bottom: 60px;
  a {
    margin-right: 5px;
  }
  .ds {
    display: none;
  }
}
.good-price:hover .ds {
  display: block;
}
.good-title {
  line-height: 1.2;
  font-size: 16px;
  color: #424242;
  margin: 0 auto;
  padding: 0 14px;
  text-align: center;
  overflow: hidden;
}
h3 {
  text-align: center;
  line-height: 1.2;
  font-size: 12px;
  color: #d0d0d0;
  padding: 10px;
}
.good-item {
  background: #fff;
  width: 25%;
  transition: all 0.5s;
  height: 410px;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 1px 1px 20px #999;
    .good-price p {
      display: none;
    }
    .ds {
      display: flex;
    }
  }
}
.el-card {
  border: none;
}
.aaa{
  margin-right: 10px;
}
</style>
