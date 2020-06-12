<template>
    <div class="login-container">
        <el-form ref="form" :model="form" label-width="80px" class="login-form">
            <h2 class="login-title">UC客服系统</h2>
            <el-form-item label="用户名">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                form: {
                    username: "",
                    password: ""
                }
            };
        },
        beforeRouteEnter (to, from, next) {
          next(vm=>vm.$store.dispatch("setUser",null))
        },
        methods: {
          onSubmit(){
                // axios.get("/user/login",{
                //   params:{
                //     username : this.username,
                //     password : this.password
                //   }
                // })
                // .then(res=>{                
                //     let result = res.data
                //     if(result.duty==0||result.duty==1){
                //     }
                //     if(result.name != null){  
                //       this.$store.dispatch("setUser",result)
                //       this.$router.push({name:"homeLink"})
                //     }else{
                //       alert("账号或密码错误")
                //       this.$store.dispatch("setUser",null)
                //     }
                  
                // })
                this.$store.dispatch("setUser","jack")
            }
        },
    };
</script>
<style scoped>
    .login-form {
        width: 350px;
        margin: 160px auto;
        /* 上下间距160px，左右自动居中*/
        background-color: rgb(255, 255, 255, 0.8);
        /* 透明背景色 */
        padding: 30px;
        border-radius: 20px;
        /* 圆角 */
    }

    /* 背景 */
    .login-container {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #303133;
    }

    /* 标题 */
    .login-title {
        color: #303133;
        text-align: center;
    }
</style> -->