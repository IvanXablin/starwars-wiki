<script setup lang="ts">

</script>

<template>
<div class="nav-card">
  <img class="nav-card__logo" src="src/assets/images/stormtrooper.png" width="110"/>
  <div class="nav-card__content">
      <p>Planents</p>
      <p>SOSI SOSI SOSI SOSI SOSI SOSI SOSI</p>
  </div>
</div>
</template>

<style lang="scss" scoped>
.nav-card {
  width: 300px;
  height: 150px;
  margin: 0 20px;
  background: rgba(33, 33, 33, 0.75);
  border-radius: 30px 0 30px 0;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: white;
  }

  &__logo {
    position: relative;
    right: 30px;
    bottom: 40px;
    width: 100px;
    height: 100px;
  }
}
</style>