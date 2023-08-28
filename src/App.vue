<script setup lang="ts">
import { userStore } from './stores/user';

const user = userStore();
</script>

<template>
<div>
  <routerView></routerView>
</div>
</template>

<style scoped>


</style>
