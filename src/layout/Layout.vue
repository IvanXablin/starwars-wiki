<script setup lang="ts">
import Header from "../components/Header/Header.vue"
import Footer from '../components/Footer/Footer.vue'
</script>

<template>
  <Header/>
  <main class="main">
    <slot>

    </slot>
  </main>
  <Footer/>
</template>

<style lang="scss" scoped>
.main {
  flex: 1 1 auto;
}
</style>
