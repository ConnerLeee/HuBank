<template>
  <div class = "register" style="width: 100%; height: 695px; background-color: rgb(121,39,39); overflow: hidden;">
    <div class="register_form" style="width: 400px; margin: 150px auto">
      <div class="title" style="color: rgb(255,255,255); font-size: 30px; text-align: center; padding: 30px 0;">Hu Bank 用 户 注 册</div>
        <el-form
          ref="registerForm"
          :model="registerInfo"
          label-position="top"
          label-width="120px"
          class="registerform"
          :size="formSize"
          status-icon
        >
        <el-form-item label="手机号" prop="phone">
          <el-input class="input" v-model="registerInfo.phone" placeholder="请输入"/>
        </el-form-item>

        <el-form-item label="姓名" prop="username">
          <el-input v-model="registerInfo.username" placeholder="请输入"/>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="registerInfo.password" name="password" placeholder="请输入"/>
        </el-form-item>

        <el-form-item label="银行账户" prop="cardID">
          <el-input v-model="registerInfo.cardID" placeholder="请输入"/>
        </el-form-item>

        <el-form-item style="width:150px; margin: auto">
          <el-button @click="submitForm(registerForm)">确认</el-button>
          <el-button @click="resetForm(registerForm)">返回</el-button>
        </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage, ElMessageBox, FormInstance, FormRules } from 'element-plus'
import axios from 'axios'
import router from '../router/index'

const formSize = ref('default')
const registerForm = ref<FormInstance>()
const registerInfo = reactive({
  phone: '',
  username: '',
  password: '',
  cardID: '',
})

// const registerRules = reactive<FormRules>({
//   phone: [
//     { required: true, message: '请输入手机号', trigger: 'blur' },
//     { min: 11, max: 11, message: '手机号应该是11位的', trigger: 'blur' },
//   ],
//   username: [
//     { required: true, message: '请输入姓名', trigger: 'blur' },
//   ],
//   password: [
//     { required: true, message: '请输入密码', trigger: 'blur' },
//     { min: 6, max: 18, message: '密码应该是6到18位的', trigger: 'blur' },
//   ],
//   cardID: [
//     { required: true, message: '请输入银行账户', trigger: 'blur' },
//     { min: 16, max: 19, message: '银行账户应该是16到19位的', trigger: 'blur' },
//   ],
// })

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log(registerInfo)
      axios.post('http://localhost/user/signup',registerInfo).then(response=>{
        console.log(response)
        if(response.data.code===20002){
          router.push('/login')
          ElMessage({message:"注册成功",type:"success",duration: 5 * 1000})
        }
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>

<style scoped>

</style>

<style>
.register_form{
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px;
  margin-top: 80px;
}
.input{
  box-sizing: border-box;

  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 35px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 16px;
  letter-spacing: 1px;
  color: #fff;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}
</style>