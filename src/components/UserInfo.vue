<template>
    <br>
    <br>
    <el-form :model="userInfo" v-if="pagestate" label-width="120px">
        <el-form-item label="用户名">
            {{ name }}
        </el-form-item>
        <el-form-item label="手机号">
            {{ phone }}
        </el-form-item>
        <el-form-item label="真实姓名">
            {{ userInfo.realname }}
        </el-form-item>
        <el-form-item label="性别">
            {{ userInfo.sex }}
        </el-form-item>
        <el-form-item label="生日">
            {{ userInfo.birthday }}
        </el-form-item>
        <el-form-item label="住址">
            {{ userInfo.address }}
        </el-form-item>
        <el-form-item label="账户">
            {{ userInfo.cardID }}
        </el-form-item>
        <el-form-item>
        <el-button type="primary" @click="onChange">修改信息</el-button>
      </el-form-item>
    </el-form>
    <el-form :model="userInfo" label-width="120px" v-else style="width: 50%">
      <el-form-item label="用户名">
        {{ name }}
      </el-form-item>
      <el-form-item label="手机号">
        {{ phone }}
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input v-model="userInfo.realname" />
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="userInfo.sex">
          <el-radio label="男" />
          <el-radio label="女" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="生日">
        <el-col :span="11">
          <el-date-picker
            v-model="userInfo.birthday"
            type="date"
            placeholder="Pick a date"
            style="width: 100%"
            format="YYYY/MM/DD"
            value-format="YYYY-MM-DD"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="userInfo.address" />
      </el-form-item>
      <el-form-item label="账户">
        <el-input v-model="userInfo.cardID" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts">
import { computed } from '@vue/runtime-core'
import { mapGetters } from 'vuex'
import {detail_info,upload_info,renew_info} from '../api/user'
import state from '../store/modules/user'
import { ElMessage } from 'element-plus'
import axios from 'axios'

  export default{
    data(){
        return{
            uploaded:false,
            pagestate:false,
            userInfo:{
                username:'',
                phone:'',
                realname:'',
                sex:'',
                birthday:'',
                address:'',
                cardID:''
            }
        }
    },
    beforeCreate(){
        console.log(state.state.name)
        detail_info(state.state.name).then(response=>{
            console.log(response)
            if(response.data.user==null){
                this.uploaded=false
                this.pagestate=false
                ElMessage({message:"您还未登记过信息"})
            }
            else {
                this.uploaded=true
                this.pagestate=true
                this.userInfo.realname=response.data.user.realname
                this.userInfo.sex=response.data.user.sex
                this.userInfo.birthday=response.data.user.birthday
                this.userInfo.address=response.data.user.address
                this.userInfo.cardID=response.data.user.cardID
            }
        })
    },
    methods:{
        onSubmit(){
          if(this.uploaded==false){
            this.userInfo.username=state.state.name
            this.userInfo.phone=state.state.phone
            console.log(this.userInfo)
            upload_info(this.userInfo).then(response=>{
                ElMessage({message:"修改成功",type:"success"})
                this.uploaded=true
                this.pagestate=true
            })
          }
          else{
            this.userInfo.username=state.state.name
            this.userInfo.phone=state.state.phone
            console.log(this.userInfo)
            axios.post("http://139.9.132.108:8080/user/update",this.userInfo).then(response=>{
                ElMessage({message:"修改成功",type:"success"})
                this.uploaded=true
                this.pagestate=true
            })
          }
        },
        onChange(){
            this.pagestate=false;
        }

    },
    computed:{
        ...mapGetters([
            'name',
            'phone'
        ]
        )
    }
  }
  </script>
  