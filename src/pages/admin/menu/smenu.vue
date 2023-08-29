<template>
  <div class="side-menu-right">
    <div class="menu-content">
      <div class="flex">
        <img src="../../../assets/image/T3.png" class="w-10 h-10" />
        <p class="px-3">
          Back Back<br> Admin
          <span>

          </span>
        </p>
      </div>
      <div class="font-bold py-4 flex">
        Order Details
      </div>
      <div>
          <p>
            Recipent: Yelande Temara<br>
          </p>
          <p>29/08/2023</p>
        </div>
    </div>
  </div>
</template>
  
<script>
import {} from '@ant-design/icons-vue';
export default {
  name: 'SideMenuRight',
};
</script> 
  
<style scoped>
.side-menu-right {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 500px;
  /* Adjust this as needed */
  background-color: #fff;
  /* Menu background color */
  box-shadow: -3px 0 10px rgba(0, 0, 0, 0.2);
  /* Optional shadow effect */
}

.menu-content {
  padding: 20px;
  /* Adjust spacing as needed */
}</style>