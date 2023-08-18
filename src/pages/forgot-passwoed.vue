<template>
    <div class="h-screen bg-gray-100 flex justify-center items-center ">
        <div class="bg-white xl:w-1/5 h-fit p-6 rounded-2xl shadow-xl">
          <div class="w-fit mx-auto mb-10">
            <!-- Logo -->
            <img src="vite.svg" class="w-20"/>
          </div>
          <div>
            <p class="font-bold px-3 text-center mb-5">For Got Password  </p>
          </div>
          <a-form
      :model="formState"
      name="normal_login"
      class="login-form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
    <!-- Email -->
    <a-form-item
        label=""
        name="email"
        
        :rules="[{ required: true, message: 'Please input your Email!' }]"
      >
        <a-input v-model:value="formState.email"
        size="large"
        placeholder="Enter Email">
          <template #prefix>
       
            <mail-outlined class="site-form-item-icon"/>
          </template>
        </a-input>
      </a-form-item>
  
      <!-- Confirm -->
      <a-form-item>
        <a-button :disabled="disabled" 
        type="primary"
         html-type="button" 
         class="login-form-button" 
        block>
          Confirm
        </a-button>
  
      </a-form-item>

      <a-form-item>
      <div class="flex">
        <router-link to="/"  class="flex">Login now!</router-link>
      </div>
    </a-form-item>
          </a-form>
       </div>
    </div>
  </template>
  <script lang="ts" setup>
  import { reactive, computed } from 'vue';
  import { MailOutlined } from '@ant-design/icons-vue';
  interface FormState {

    email: string;
  }
  const formState = reactive<FormState>({
    email: '',
  });
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const disabled = computed(() => {
    return !(formState.email);
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
  