<template>
    <div class="h-screen bg-gray-100 flex justify-center items-center ">
        <div class="bg-white xl:w-1/5 h-fit p-6 rounded-2xl shadow-xl">
          <div class="w-fit mx-auto mb-10">
            <!-- Logo -->
            <img src="vite.svg" class="w-20"/>
          </div>
          <div>
            <p class="font-bold px-3 text-center mb-5"> Login </p>
          </div>
          <a-form
      :model="formState"
      name="normal_login"
      class="login-form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
    <form @submit.prevent="onFinish">
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
  
      <!-- Remember -->
      <a-form-item>
        <a-form-item name="remember" no-style>
          <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
        </a-form-item>
      </a-form-item>

      <!-- Button Login -->
  
      <a-form-item>
        <a-button :disabled="disabled" 
        type="primary"
         html-type="submit" 
         class="login-form-button" 
        block>
          Log in
        </a-button>

      
      </a-form-item>
    </form>

      <!-- register and for got password -->
    <a-form-item>
      <div class="flex">
        <router-link to="/signup"  class="flex-1">register now!</router-link>
        <router-link  class="login-form-forgot" to="/for-password">Forgot password</router-link>

      </div>
    </a-form-item>
          </a-form>
       </div>
    </div>
  </template>
  <script lang="ts" setup>
  import { reactive, computed } from 'vue';
  import { LockOutlined, MailOutlined } from '@ant-design/icons-vue';
  import router from '../router';
import getMiniDecimal from 'ant-design-vue/es/input-number/src/utils/MiniDecimal';
import { genImagePreviewStyle } from 'ant-design-vue/es/image/style';

  interface FormState {
    email: string;
    password: string;
    remember: boolean;
  }
  const formState = reactive<FormState>({
    email: '',
    password: '',
    remember: true,
  });




  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const disabled = computed(() => {
    return !(formState.email && formState.password);

  });
  // create router home in local & filer
  const onFinish = () => {
  // const storedEmail = localStorage.getItem(email);
  // const storedPassword = localStorage.getItem(password);
  const storedUserData = JSON.parse(localStorage.getItem('user'));
  if (storedUserData === null) {
    alert('User data not found in localStorage');
    return;
  }

  const matchingUser = storedUserData.user.find(
    (user: any) => user.email === formState.email && user.password === formState.password
  );

  if (matchingUser) {
    router.push('/home'); // Use router.push() to navigate to the home page
  } else {
    alert('Not User');
  }
};
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
  