<script lang="ts" setup>
import {reactive, computed, ref} from 'vue';
import {UserOutlined, LockOutlined, IdcardOutlined, MailOutlined} from '@ant-design/icons-vue';
import {UserModel} from '../model/UserModel';
import {userStore} from '../stores/user.ts';
import {message, Modal} from "ant-design-vue";
import router from '../router';
import {showOtp} from "../utils/myutil.ts";

const defaultValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
}
let formState = reactive<UserModel>({...defaultValues});
const user = userStore()
const secondsToGo = ref(30)

const onFinish = () => {
  try {
    if (formState.password !== formState.confirmPassword) {
      return message.warning('Confirm message is not matched!')
    }

    // get register result
    const result = user.register(formState)

    // clear register form
    formState = {...defaultValues}

    // show verify otp
    //message.success(`Registered successful, You OTP code is: ${result.code}`, 10)

    showOtp('Registered Successful', result.code)

    router.push('/register/verify')
  } catch (err: any) {
    message.error(err.message)
  }
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const disabled = computed(() => {
  return !(formState.fullName && formState.email && formState.password);
});
</script>

<template>
  <div class="h-screen bg-gray-100 flex justify-center items-center">
    <div class="bg-white xl:w-1/5 h-fit px-6 py-6 rounded-2xl shadow-2xl">
      <div class="w-fit mx-auto mb-10">
        <p class="text-xl font-semibold pt-4">Register NOW!</p>
      </div>
      <a-form
        :model="formState"
        name="normal_login"
        class="login-form"
        @finish="onFinish"
        @finishFailed="onFinishFailed">

        <a-form-item
          label=""
          name="fullName"
          :rules="[{ required: true, message: 'Please input your full name!' }]">
          <a-input v-model:value="formState.fullName"
                   size="large"
                   autocomplete="off"
                   placeholder="Enter full name">
            <template #prefix>
              <IdcardOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          label=""
          name="email"
          :rules="[{ required: true, message: 'Please input your email!' }]">
          <a-input v-model:value="formState.email"
                   size="large"
                   placeholder="Enter email">
            <template #prefix>
              <MailOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          label=""
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]">
          <a-input-password v-model:value="formState.password"
                            size="large"
                            placeholder="Enter password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon"/>
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item
          label=""
          name="confirmPassword"
          :rules="[{ required: true, message: 'Please input your confirm password!' }]">
          <a-input-password v-model:value="formState.confirmPassword"
                            size="large"
                            placeholder="Enter password again">
            <template #prefix>
              <LockOutlined class="site-form-item-icon"/>
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-button :disabled="disabled"
                    type="primary"
                    html-type="submit"
                    block
                    class="login-form-button">
            Register
          </a-button>
        </a-form-item>

        <a-form-item>
          <div class="flex">
            <router-link to="/login" class="flex-1">Login now!</router-link>
          </div>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

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