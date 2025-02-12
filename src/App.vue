<script setup lang="ts">
import {ref} from "vue";
import BaseForm from "./components/BaseForm.vue";
import type {FormSettings} from "./types/form";

const formData = ref({
  name:"",
  age:0,
})
const formSettings = ref<FormSettings>({
  rules:{
    name:[
      {required:true,message:"请输入姓名",trigger:"blur"}
    ],
    age:[
      {required:true,message:"请输入年龄",trigger:"blur"}
    ]
  },
  items:[
    {type:"input",prop:"name",label:"姓名",placeholder:"请输入姓名"},
    {type:"input",prop:"age",label:"年龄",placeholder:"请输入年龄"}
  ]
})


</script>

<template>
  <div>测试组件</div>
  <BaseForm :data="formData" :settings="formSettings" />
</template>

<style scoped>
</style>
