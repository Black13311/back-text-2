<template>
    <div class="h-screen bg-gray-100 flex justify-center items-center ">
        <div class="bg-white xl:w-1/5 h-fit p-6 rounded-2xl shadow-xl">
            <!-- Logo -->
          <div class="w-fit mx-auto mb-10">
            <img src="vite.svg" class="w-20"/>
          </div>
          <div>
            <p class="font-bold px-3 text-center mb-5"> Sign Up </p>
          </div>
          <a-form
      :model="formState"
      name="normal_login"
      class="login-form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
    <!-- Full Name -->
      <a-form-item
        label=""
        name="fname"
        
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.fname"
        size="large"
        placeholder="Enter Full Name">
          <template #prefix>

            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <!-- Email -->
      <a-form-item
        label=""
        name="email"
        
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.email"
        size="large"
        placeholder="Enter Email">
          <template #prefix>
       
            <mail-outlined class="site-form-item-icon"/>
          </template>
        </a-input>
      </a-form-item>
  <!-- Password -->
      <a-form-item
        label=""
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password"
        size="large"
        placeholder="Enter Pasword">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>

<!-- Confirm Password -->
      <a-form-item
        label=""
        name="con_password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
      
        <a-input-password v-model:value="formState.con_password"
        size="large"
        placeholder="Confirm Pasword">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>
  
  <!-- Button SigUp -->
      <a-form-item>
        <a-button :disabled="disabled" 
        type="primary"
         html-type="button" 
         class="login-form-button" 
        block>
          Sign Up
        </a-button>
  
      </a-form-item>
      <a-form-item>
      <div class="flex">
        <router-link to="/"  class="flex-1">Login now!</router-link>
      </div>
    </a-form-item>
          </a-form>
       </div>
    </div>
  </template>
  <script lang="ts" setup>
  import { reactive, computed } from 'vue';
  import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue';
  interface FormState {
    email: string;
    fname: string;
    password: string;
    con_password: string;
    remember: boolean;
  }
  const formState = reactive<FormState>({
    email: '',
    fname: '',
    password: '',
    con_password: '',
    remember: true,
  });
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const disabled = computed(() => {
    return !(formState.email && formState.password);
  });
  </script>
  <style scoped>
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
  </style>
  