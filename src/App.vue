<script setup lang="ts">
import Layout from "./layout/Layout.vue";
import NavCard from "./components/navcard/NavCard.vue";
</script>

<template>
<layout>
<div class="home-page">
  <div class="home-page__about">
    <img class="home-page__logo" src="/src/assets/images/logoYellow.png" />
    <div class="home-page__info page-info">
        <p class="page-info__header">Star Wars Wiki</p>
        <p class="page-info__content">Star Wars Wiki the most complete wikipedia about the StarWars universe.</p>
        <p class="page-info__content">Here you find everything you need to know about the StarWars universe.</p>
    </div>
    <div class="home-page__navigation">
        <nav-card />
        <nav-card />
        <nav-card />
    </div>
  </div>
</div>
</layout>
</template>


<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  &__about {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  &__logo {
    width: 700px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    height: 150px;
    margin: 20px 0;
    padding: 20px;
    border-radius: 10px;
    background: rgba(33, 33, 33, 0.75);
  }

  &__navigation {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
.page-info {
  &__header {
    margin: 0 0 10px 0;
    font-family: 'Cairo', sans-serif;
    font-weight: 500;
    font-size: 35px;
    text-align: center;
    color: white;
  }

  &__content {
    margin: 0 0 10px 0;
    font-family: 'Cairo', sans-serif;
    font-size: 18px;
    text-align: center;
    color: #9d9b9b;
  }
}
</style>

