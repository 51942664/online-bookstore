<template>
  <div class="login" v-if="showLogin">
    <header>
      <h3>{{headTitle}}</h3>
    </header>
    <main>
      <div class="b-login">
        <span @click="tab">登录</span>
        <span @click="tabb">注册</span>
      </div>
      <form class="form-login" v-show="isShow1">
        <div class="b-login">
          <svg class="tel"></svg>
          <input type="text" placeholder="请输入您的手机号" id="loginTel" v-model="phoneValue">
        </div>
        <div class="b-login">
          <svg class="lock"></svg>
          <input type="password" placeholder="请输入您的密码" id="loginPwd" v-model="pawdValue">
        </div>
        <div class="b-login">
          <button type="button" @click="loginLocal">登录</button>
        </div>
      </form>
      <form class="form-login" v-show="isShow2">
        <div class="b-login">
          <svg class="tel"></svg>
          <input type="text" placeholder="请输入您的手机号" v-model="telValue" id="registerTel" @blur="isCrTel(telValue)">
          <span class="must" style="color:red;" v-show="telFlag1">*</span>
          <span class="must" v-show="telFlag2" style="color:green">√</span>
          <p style="color:red" v-show="telTips">请输入正确的手机号码</p>
        </div>
        <div class="b-login">
          <svg class="user"></svg>
          <input type="text" placeholder="请输入您的昵称" id="registerName" v-model="nameValue">
        </div>
        <div class="b-login">
          <svg class="lock"></svg>
          <input type="password" placeholder="请输入您的密码" id="registerPwd" v-model="pwdValue" @blur="isPasswd(pwdValue)">
          <span class="must" style="color:red;" v-show="pwdFlag1">*</span>
          <span class="must" v-show="pwdFlag2" style="color:green">√</span>
          <p style="color:red" v-show="pwdTips">只能输入6-20个字母、数字、下划线</p>
        </div>
        <div class="b-login">
          <svg class="pwd"></svg>
          <input type="password" placeholder="请确认您的密码" id="registerPwsd" v-model="pwsdValue" @blur="isCrPwsd(pwsdValue)">
          <span class="must" style="color:red;" v-show="pwsdFlag1">*</span>
          <span class="must" v-show="pwsdFlag2" style="color:green">√</span>
          <p style="color:red" v-show="pwsdTips">只能输入6-20个字母、数字、下划线</p>
        </div>
        <div class="b-login">
          <button type="button" @click="setLocal">确认注册</button>
        </div>
      </form>
    </main>
    </main>
  </div>
</template>

<script>
  export default {
    name: "Login",
    props: ["headTitle"],
    data() {
      return {
        phoneValue: "",
        pawdValue: "",
        telValue: "",
        nameValue: "",
        pwdValue: "",
        pwsdValue: "",
        isShow1: true,
        isShow2: false,
        phoneFlag1: true,
        phoneFlag2: false,
        telFlag1: true,
        telFlag2: false,
        pwdFlag1: true,
        pwdFlag2: false,
        pwsdFlag1: true,
        pwsdFlag2: false,
        phoneTips: false,
        telTips: false,
        pwdTips: false,
        pwsdTips: false,

        
        // 做完了改为true
        showLogin:false
      };
    },
    methods: {
      tab() {
        this.isShow1 = true;
        this.isShow2 = false;
      },
      tabb() {
        this.isShow2 = true;
        this.isShow1 = false;
      },
      //注册界面的手机号码验证
      isCrTel(telValue) {
        var reg = new RegExp(/^1[34578]\d{9}$/);
        if (reg.test(telValue)) {
          this.telFlag1 = false;
          this.telFlag2 = true;
          this.telTips = false;
        } else {
          this.telFlag2 = false;
          this.telFlag1 = true;
          this.telTips = true;
        }
      },
      //注册界面的密码验证
      isPasswd(pwdValue) {
        var patrn = new RegExp(/^(\w){6,20}$/);
        if (!patrn.test(pwdValue)) {
          this.pwdFlag1 = true;
          this.pwdFlag2 = false;
          this.pwdTips = true;
        } else {
          this.pwdFlag2 = true;
          this.pwdFlag1 = false;
          this.pwdTips = false;

        }
      },
      //注册界面的密码验证
      isCrPwsd(pwsdValue) {
        var patrn = new RegExp(/^(\w){6,20}$/);
        if (!patrn.test(pwsdValue)) {
          this.pwsdFlag1 = true;
          this.pwsdFlag2 = false;
          this.pwsdTips = true;
        } else {
          this.pwsdFlag2 = true;
          this.pwsdFlag1 = false;
          this.pwsdTips = false;
        }
      },
      //当点击确认按钮把值传入本地存储   
      setLocal() {
        const self = this;
        var selfObj = {
          tel: self.telValue,
          name: self.nameValue,
          pwd: self.pwdValue,
          pwsd: self.pwsdValue
        };

        function add(infos) {
          if (!localStorage.getItem('signUpUserInfo')) {
            localStorage.setItem('signUpUserInfo', "[]");
          }
          var userInfoData = JSON.parse(localStorage.getItem('signUpUserInfo'));
          userInfoData.push(infos);
          userInfoData = JSON.stringify(userInfoData);
          localStorage.setItem('signUpUserInfo', userInfoData);
        }

        // 判断注册界面的两次密码是否输入一致
        if (this.telValue != "" && this.pwdValue != "" && this.pwsdValue != "") {
          if (this.pwdValue != this.pwsdValue) {
            alert("密码输入不一致");
            this.pwdValue = "";
            this.pwdFlag1 = true;
            this.pwdFlag2 = false;
            this.pwsdFlag1 = true;
            this.pwsdFlag2 = false;
            this.pwsdValue = "";
          } else {
            alert("注册成功");
            this.$router.push({
              path: "/"
            });
            add(selfObj);
            this.telValue = "",
              this.nameValue = "",
              this.pwdValue = "",
              this.pwsdValue = "",
              this.telFlag1 = true,
              this.telFlag2 = false,
              this.pwdFlag1 = true,
              this.pwdFlag2 = false,
              this.pwsdFlag1 = true,
              this.pwsdFlag2 = false;
          }
        } else {
          alert("账号和密码不能为空");
        }
      },
      loginLocal() {
        
        var local = this;
        var loginObj = {
          phone: local.phoneValue,
          pawd: local.pawdValue
        };


        //获取本地存储的数据
        var loginInfo = localStorage.getItem("signUpUserInfo");

        //把数据转换成数组
        var arr = JSON.parse(loginInfo),
          idx = arr.length;
        //查找状态(找到为true,未找到为false)
        var searchStatus = false;
        //遍历进行用户名对比
        for (var i = 0; i < idx; i++) {
          // 判断用户是否存在
          if (arr[i].tel === this.phoneValue) {
            searchStatus = true;
            break;
          }
        }
        //判断是否和本地存储的值一样
        if (searchStatus && arr[i].pwd === this.pawdValue) {
          localStorage.setItem('userName',arr[i].name);
          alert("登录成功");
          this.$router.push({
            path: "/"
          });
          localStorage.signInUserInfo = JSON.stringify(loginObj);
        } else {
          alert("账号或密码错误");
          this.pawdValue = "";
        }
      }
    }
  };
</script>

<style scoped lang="less">
  @import "../styles/Login.less";
</style>