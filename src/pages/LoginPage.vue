<template>
  <div class="h-screen bg-gray-100 flex justify-center items-center">
    <div class="bg-white xl:w-1/5 h-fit px-6 py-6 rounded-2xl shadow-2xl">
      <div class="w-fit mx-auto mb-10">
        <img src="vite.svg" class="w-20">
      </div>
      <a-form
        :model="formState"
        name="normal_login"
        class="login-form"
        @finish="onFinish"
        @finishFailed="onFinishFailed">
        <a-form-item
          label=""
          name="email"
          :rules="[{ required: true, message: 'Please input your email!' }]">
          <a-input v-model:value="formState.email"
                   size="large"
                   placeholder="Enter email">
            <template #prefix>
              <UserOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          label=""
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password"
                            size="large"
                            placeholder="Enter password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon"/>
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-form-item name="remember" no-style>
            <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
          </a-form-item>
        </a-form-item>

        <a-form-item>
          <a-button :disabled="disabled"
                    type="primary"
                    html-type="submit"
                    block
                    class="login-form-button">
            Log in
          </a-button>
        </a-form-item>

        <a-form-item>
          <div class="flex">
            <router-link to="/register" class="flex-1">Register now!</router-link>
            <router-link class="login-form-forgot" to="/forgot-password">Forgot password?</router-link>
          </div>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive, computed} from 'vue';
import {UserOutlined, LockOutlined} from '@ant-design/icons-vue';
import {UserModel} from "../model/UserModel";
import {userStore} from "../stores/user.ts";
import {message} from "ant-design-vue";
import router from '../router'

const user = userStore()

const formState = reactive<UserModel>({
  email: '',
  password: '',
  remember: true,
});
const onFinish = () => {
  const login = user.login(formState.email, formState.password)

  if (login === 1) {
    return message.error('Email and password incorrect!')
  }

  if (login === 2) {
    return message.error('Your user is not active!')
  }

  // redirect to home page
  router.push('/')
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