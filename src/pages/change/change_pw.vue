<template>
  <div>
      <div class="text-center mt-14">
          <h1>Change Password</h1>
      </div>
      <div class="text-center">
          <h2>Email : {{ user.otp.email }}</h2>
      </div>
      <div class="justify-center text-center p-4">
          <input v-model="newPassword" type="password" name="newPassword"  placeholder="New Password" class=" text-center px-14 py-3 rounded-xl "/>
      </div>
      <div class="justify-center text-center">
          <input v-model="confirmpassword" type="password" name="ConfirmPassword" placeholder="Confirm Password" class=" text-center px-14 py-3 rounded-xl "/>
      </div>
      <div class="text-center mt-6">
          <button class="py-3 px-28 bg-green-400 rounded-xl shadow-lg" @click="changePassword">SEVE</button>
      </div>
  </div>
</template>
<script lang="ts" setup>
import {userStore} from '../../stores/user';
import {message} from 'ant-design-vue';
import {ref} from 'vue';
import router from '../../router'
const user = userStore();

let newPassword = ref('');
let confirmpassword = ref('');

const changePassword = async () => {
  if (newPassword.value !== confirmpassword.value) {
      message.error("Passwords do not match");
  } else {
      try {
          const email = user.otp.email;
          const isSuccess = await user.ChangePassword(email, newPassword.value);
          
          if (isSuccess) {
              message.success("Password changed successfully");
              router.push("/login")
          } else {
              message.error("Password change failed");
          }
      } catch (err) {
          message.error("not");
      }
  }
}
</script>