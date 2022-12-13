<template>
    <div class="innerbanktransfer" style="width:500px; height: 300px; margin: 10px auto;">
      <el-form
      ref="innertransferForm"
      :model="innertransferInfo"
      :rules="innertransferRules"
      label-position="top"
      label-width="120px"
      class="innerbanktransfer"
      :size="formSize"
      status-icon
    >
    <el-form-item label="付款账户" prop="myaccount">
        <el-input v-model="innertransferInfo.myaccount" placeholder="请输入"/>
      </el-form-item>
  
      <el-form-item label="币种" prop="currency">
        <el-select v-model="innertransferInfo.currency" placeholder="请选择">
          <el-option label="人民币" value="rmb" />
          <el-option label="美元" value="dollar" />
          <el-option label="英镑" value="pound" />
        </el-select>
      </el-form-item>
  
      <el-form-item label="转账金额" prop="amount">
        <el-input v-model="innertransferInfo.amount" placeholder="请输入"/>
      </el-form-item>
  
      <el-form-item label="收款账户" prop="account">
        <el-input v-model="innertransferInfo.account" placeholder="请输入"/>
      </el-form-item>
  
      <el-form-item label="备注" prop="note">
        <el-input v-model="innertransferInfo.note" placeholder="请输入"/>
      </el-form-item>
  
      <el-form-item>
        <el-button @click="submitForm(innertransferForm)">确认</el-button>
        <el-button @click="resetForm(innertransferForm)">返回</el-button>
      </el-form-item>
    </el-form>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'
  import axios from 'axios'
  
  const formSize = ref('default')
  const innertransferForm = ref<FormInstance>()
  const innertransferInfo = reactive({
    myaccount: '',
    currency: '',
    amount: '',
    account: '',
    note: '',
  })
  
  const innertransferRules = reactive<FormRules>({
    myaccount: [
      { required: true, message: '请输入付款账户', trigger: 'blur' },
      { min: 16, max: 19, message: '账户应该是16到19位的', trigger: 'blur' },
    ],
    currency: [
      {
        required: true,
        message: '请选择币种',
        trigger: 'change',
      },
    ],
    amount: [
      { required: true, message: '请输入转账金额', trigger: 'blur' },
      { min: 1, max: 500000, message: '单日转账限额50万', trigger: 'blur' },
    ],
    account: [
      { required: true, message: '请输入收款账户', trigger: 'blur' },
      { min: 16, max: 19, message: '账户应该是16到19位的', trigger: 'blur' },
    ],
  })
  
  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      if (valid) {
        console.log('submit!')
        axios.post("https://localhost:44369/api/cards/transfer/?cardid1="
        +innertransferInfo.myaccount+"&cardid2="+innertransferInfo.account+"&money="+innertransferInfo.amount)
        .then(response=>{
          console.log(response)
          if(response.data==1){
            axios.get("https://localhost:44369/api/cards/getbalance/?cardid="+innertransferInfo.myaccount)
            .then(response=>{
              alert("转账成功\n当前账户余额"+response.data+"￥")
            })
            
          }
          else alert("转账失败")
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