<template>
    <div class="">
        <h1>confirm email</h1>
        <p>email you : {{ email }}</p>
        <label>password email otp</label>
        <input v-model="enteredCode" type="text" id="con_email" class="bg-slate-400">
        <button @click="checkCode">Submit</button>
    </div>
    <div>
        <p>code : {{ correctCodesr }}</p>
        <p>{{ correctCodes }}</p>
        <div></div>

    </div>
</template>
<script setup lang="ts">

import { message } from 'ant-design-vue';
import { userStore } from '../../../stores/user';
import { withSuccess } from 'ant-design-vue/es/modal/confirm';
import router from '../../../router';
import { ref } from 'vue'


const user = userStore();
const email = user.otp.email;
const correctCode = user.otp.code;
const enteredCode = ref('');
const correctCodes = alert(correctCode);
const correctCodesr = correctCode;
const showError = ref(false);



const checkCode = () => {
    if (enteredCode.value === correctCode && email) {
        const userData = {
         email: '', // Replace with the actual email
  };
        user.register(userData);
         router.push('/');
    } else {
        showError.value = true;
        message.error('Incorrect OTP code');
    }
}; 
</script>