import { computed } from 'vue';
import { formState } from './LoginPage.vue';

export const disabled = computed(() => {
return !(formState.email && formState.password);
});
