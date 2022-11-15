<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent/FooterComponent.vue";
</script>

<template>
  <header-component/>
  <div class="main">
    <slot>

    </slot>
  </div>
  <footer-component/>
</template>

<style lang="scss" scoped>
.main {
  flex: 1 1 auto;
}
</style>
