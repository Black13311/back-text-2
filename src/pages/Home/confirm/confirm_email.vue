<template>
    <div class="justify-center text-center gap-3">
        <h1 class="">confirm email</h1>
        <p class="mt-2 mb-9">email you : {{ email }}</p>
        <label>password email otp</label>
        <input v-model="enteredCode" type="text" id="con_email" class="bg-slate-400">
        <button @click="checkCode" class=" rounded-md">Submit</button>
    </div>
    <div class="text-center">
        <p>code : {{ correctCodesr }}</p>
        <p>{{ correctCodes }}</p>
        <div></div>

    </div>
</template>
<script setup lang="ts">

import { message } from 'ant-design-vue';
import { userStore } from '../../../stores/user';

import router from '../../../router';
import { ref } from 'vue'


const user = userStore();
const email = user.otp.email;
const correctCode = user.otp.code;
const enteredCode = ref('');
const correctCodes = alert(correctCode);
const correctCodesr = correctCode;
const showError = ref(false);
// boolen true : REGISTERED  & fales : ACTIVE
const shouldUpdateStatus = true;


const checkCode = () => {
    if (enteredCode.value === correctCode && email) {
        // UP Status user& email
        try {
      if (shouldUpdateStatus) {
        user.updateUserStatus(email, 'ACTIVE'); // Call updateUserStatus on the store instance
      }
      router.push('/');
    } catch (error) {
      message.error('Error updating user status');
    }
    } else {
        showError.value = true;
        message.error('Incorrect OTP code');
    }
}; 
</script>