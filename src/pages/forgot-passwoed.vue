<script setup lang="ts">
import { ref } from "vue";
import { message } from "ant-design-vue";
import { userStore } from "../stores/user.ts";
import router from '../router';
import { showOtp } from "../utils/myutil.ts";

const email = ref<string>()
const user = userStore()

const onForgotPassword = () => {
  if (!email.value) return message.warning('Please enter your email')
  try {
    const result = user.forgotPassword(email.value)

    showOtp('Forgot password successful', result.code)

    router.push('/forgot-password/verify')
  } catch (err: any) {
    message.error(err.message)
  }
}

</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-sky-600">
    <div class="w-96 bg-white rounded-3xl shadow-2xl p-6">
      <div class="text-center">
        <h1 class="font-semibold text-gray-600">Forgot Password?</h1>
        <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div>
        <a-input v-model:value="email" size="large" class="my-4 text-center" placeholder="Enter your email" />
        <a-button size="large" type="primary" block :disabled="!email" @click="onForgotPassword">Reset my Password
        </a-button>
      </div>
      <a href="/login" class="no-underline">Login</a>
    </div>
  </div>
</template>

<style scoped></style>