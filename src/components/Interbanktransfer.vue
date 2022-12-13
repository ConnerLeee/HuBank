<template>
    <div class="interbanktransfer" style="width:500px; height: 200px; margin: 10px auto;">
      <el-form
      ref="intertransferForm"
      :model="intertransferInfo"
      :rules="intertransferRules"
      label-position="top"
      label-width="120px"
      class="interbanktransfer"
      :size="formSize"
      status-icon
    >
    <el-form-item label="付款账户" prop="myaccount">
        <el-input v-model="intertransferInfo.myaccount" placeholder="请输入"/>
      </el-form-item>
  
      <el-form-item label="币种" prop="currency">
        <el-select v-model="intertransferInfo.currency" placeholder="请选择">
          <el-option label="人民币" value="rmb" />
          <el-option label="美元" value="dollar" />
          <el-option label="英镑" value="pound" />
        </el-select>
      </el-form-item>
  
      <el-form-item label="转账金额" prop="amount">
        <el-input v-model="intertransferInfo.amount" placeholder="请输入"/>
      </el-form-item>
  
      <el-form-item label="收款账户" prop="account">
        <el-input v-model="intertransferInfo.account" placeholder="请输入"/>
      </el-form-item>
  
      <el-form-item label="收款银行" prop="bank">
        <el-select v-model="intertransferInfo.bank" placeholder="请选择">
          <el-option label="中国银行" value="boc" />
          <el-option label="中国工商银行" value="icbc" />
          <el-option label="中国建设银行" value="ccb" />
        </el-select>
      </el-form-item>
  
      <el-form-item label="备注" prop="note">
        <el-input v-model="intertransferInfo.note" placeholder="请输入"/>
      </el-form-item>
  
      <el-form-item>
        <el-button @click="submitForm(intertransferForm)">确认</el-button>
        <el-button @click="resetForm(intertransferForm)">返回</el-button>
      </el-form-item>
    </el-form>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'
  
  const formSize = ref('default')
  const intertransferForm = ref<FormInstance>()
  const intertransferInfo = reactive({
    myaccount: '',
    currency: '',
    amount: '',
    account: '',
    bank: '',
    note: '',
  })
  
  const intertransferRules = reactive<FormRules>({
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
    bank: [
      {
        required: true,
        message: '请选择收款人账户所在银行',
        trigger: 'change',
      },
    ],
  })
  
  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      if (valid) {
        console.log('submit!')
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