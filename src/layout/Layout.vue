<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent/FooterComponent.vue";
</script>

<template>
  <header-component/>
  <div class="main">
    <router-view/>
  </div>
  <footer-component/>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
}
</style>
