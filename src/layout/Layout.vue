<script setup lang="ts">
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
</script>

<template>
  <Header/>
  <div class="main">
    <slot>

    </slot>
  </div>
  <Footer/>
</template>

<style lang="scss" scoped>
.main {
  flex: 1 1 auto;
}
</style>
