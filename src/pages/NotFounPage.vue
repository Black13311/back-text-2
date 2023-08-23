<script setup lang="ts">
import {useRoute} from 'vue-router'
import router from '../router';


const route = useRoute()

// 

console.log(route);
</script>
<template>
    <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
      <template #extra>
        <a-button v-if="route.path === '/signup'"
        @click="router.push('/')">Go To Login</a-button>
        <a-button v-else= "route.path == '/home'" type="primary" @click="router.push('/home')" >Back Home</a-button>

      </template>
    </a-result>
  </template>
  
  
  