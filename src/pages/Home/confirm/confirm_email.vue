<script setup lang="ts">
import {MailOutlined} from '@ant-design/icons-vue';
import {userStore} from "../../../stores/user";
import {ref} from "vue";
import {message} from "ant-design-vue";
import router from '../../../router'
import {useRoute} from "vue-router";
import {showOtp} from "../../../utils/myutil";

const otp = ref()
const user = userStore()
const route = useRoute()
const isRegister = route.name === 'RegisterVerifyPage'
const isForgotPassword = route.name === 'ForgotPasswordVerifyPage'

const onVerifyCode = () => {
  if (otp.value !== user.otp.code) {
    return message.error('OTP not matched!')
  }

  if (isRegister) registerVerify()
  if (isForgotPassword) forgotPasswordVerify()
}

const registerVerify = () => {
  // update status
  const you = user.users.find((u: any) => u.email === user.otp.email)
  you.status = 'ACTIVE'
  user.otp.email = ''
  user.otp.code = ''
  message.success('Verified!')

  // goto login page
  router.push('/login')
}

const forgotPasswordVerify = () => {
  router.push('/change-password')
}

const onTryAgain = () => {
  const result = user.getNewOtp(user.otp.email)
  showOtp('Your NEW OTP', result.code)
}
</script>

<template>
  <div class="h-screen bg-gray-100 flex justify-center items-center">
    <div class="w-96 bg-white py-6 px-6 rounded-xl shadow-2xl">

      <div class="text-center">
        <MailOutlined :style="{fontSize: '3.5rem', color: '#1F96F2'}"/>
        <h1 class="text-xl font-semibold py-2">Verify its you</h1>
        <p>Lorem ipsum dolor sit amet <span class="text-gray-500">{{ user.otp.email }}</span> consectetur adipisicing
          elit. Ad aspernatur doloribus error necessitatibus
          reprehenderit.</p>
      </div>

      <div class="mb-6">
        <div class="text-center">
          <label for="">4-digits-code</label>
          <a-input v-model:value="otp"
                   placeholder="Enter 4-digits-code"
                   class="my-2
                   text-center"
                   :min="4"
                   :max="4"
                   size="large"/>
        </div>
        <div class="mt-4">
          <a-button block
                    type="primary"
                    size="large"
                    @click="onVerifyCode">Verify Code
          </a-button>
        </div>
      </div>

      <div>
        <p>Didn't receive an email? <span class="font-semibold text-[#1F96F2] cursor-pointer" @click="onTryAgain">Try again</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>