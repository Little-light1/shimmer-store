<template>
  <div class="login">
    <div class="box">
      <span>使用账号 登录官网</span>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="user">
          <el-input type="text"  v-model="username" autocomplete="off" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password"  v-model="password" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <div class="geetest"></div>
        <el-form-item>
          <el-button type="primary" @click="toLogin">登录</el-button>
          <el-button @click="$router.push('/home')">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
data () {
  return {
    ruleForm: {},
    rules: {},
    username: 'shimmer',
    password: 123456,

  }
},
methods: {
 async toLogin() {
      const res = await this.$http.post(`/api/login`, {
        user: this.username,
        pwd: this.password
      })

       if(res.data.code !==200 ) {
         this.$message.error("登录失败！")
       }
       console.log(res);
       this.$message.success("登录成功！")
       window.sessionStorage.setItem('token',res.data.token)
       this.$router.push('/home')
  }
},
};
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  overflow: visible;
  background: #ededed;
  .box {
    width: 450px;
    border: 1px solid #dadada;
    border-radius: 10px;
    position: absolute;
    top: 200px;
    left: 50%;
    padding: 50px 50px 50px 10px;
    margin-left: -225px;
    box-shadow: 0 9px 30px -6px rgba(0, 0, 0, 0.2),
      0 18px 20px -10px rgba(0, 0, 0, 0.04),
      0 18px 20px -10px rgba(0, 0, 0, 0.04),
      0 10px 20px -10px rgba(0, 0, 0, 0.04);
    text-align: center;
    form {
      margin-top: 30px;
    }
    span {
      color: #333;
      font-weight: 400;
    }
  }
}
</style>
