<style lang="scss" scoped>
.login-page {
  width: 100vw;
  height: 100vh;
  background-color: #324057;
  background: url(../../assets/img/loginBankground.png) no-repeat;
  background-size: 100%;
  .form-container {
    position: absolute;
    top: 60%;
    left: 70%;
    margin-top: -155px;
    margin-left: -210px;
    padding: 25px;
    width: 420px;
    height: 310px;
    border-radius: 5px;
    text-align: center;
    .manage-tip {
      position: absolute;
      width: 100%;
      top: -100px;
      left: 0;
      p{
        font-size: 34px;
        color: #fff;
      }
    }
    .submit-btn {
      width: 100%;
    }
  }
}
.captcha {
  height: 38px;
}
.form-fade-enter-active, .form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter, .form-fade-leave-active {
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}
</style>
<template>
  <div class="login-page">
    <el-collapse-transition name="form-fade" mode="in-out">
      <section v-show="showLogin" class="form-container">
        <div class="manage-tip">
          <p>朔之源业务管理系统</p>
        </div>
        <el-form ref="loginForm" :model="loginForm" :rules="rules">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" prefix-icon="el-icon-unlock" placeholder="请输入用户名" clearable />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" prefix-icon="el-icon-key" placeholder="请输入密码" show-password clearable />
          </el-form-item>
          <el-form-item prop="code">
            <el-input v-model="loginForm.code" type="text" placeholder="- - - -">
              <template slot="prepend">
                验证码
              </template>
              <template slot="append">
                <div v-loading="captchaLoading" class="captcha" @click="updateCaptcha" v-html="captcha" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="submit-btn" @click="submitForm('loginForm')">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </section>
    </el-collapse-transition>
  </div>
</template>
<script>
// import loginApi from '@/api/login'
export default {
  data () {
    return {
      data: null,
      showLogin: false,
      loginForm: {
        username: '',
        password: '',
        code: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      },
      captcha: null,
      captchaLoading: false
    }
  },
  mounted () {
    this.showLogin = true
    // this.qryUser()
  },
  methods: {
    // qryUser () {
    //   this.$http.request(loginApi.login).then(res => {
    //     this.data = res.data.data
    //   })
    // }
  }
}
</script>
