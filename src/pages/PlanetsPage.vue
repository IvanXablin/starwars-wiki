<script setup lang="ts">
import Layout from "@/layout/Layout.vue";
import axiosService from '@/api/AxiosService';
import { onMounted, ref } from "vue";
import { TPlanets } from "@/types/TPlanets";
import PlanetCard from "@/components/PlanetCard/PlanetCard.vue";

const planets = ref<TPlanets | undefined>();

const fetchPlanets = async (): Promise<void> => {
  planets.value = await axiosService.getPlanets();
};

onMounted((): void => {
  fetchPlanets();
});
</script>

<template>
  <layout>
    <div class="planets-page">
      <div class="planets-page__header">
        <p class="planets-page__counter">Total cards: {{ planets?.count }}</p>
        <img src="src/assets/images/planeta.png" alt="" />
      </div>
      <div class="planets-page__content">
        <planet-card
            v-for="planet in planets?.results"
            :key="planet.name"
            :planet="planet"
        />
      </div>
    </div>
  </layout>
</template>

<style lang="scss" scoped>
.planets-page {
  &__header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 120px;

    img {
      width: 80px;
    }

    @media screen and (max-width: 702px) {
      justify-content: center;
      padding: 10px 50px;
      text-align: center;
    }
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: white;
  }

  &__counter {
    margin: 0 20px;
    font-weight: bold;
    font-size: 36px;
    text-transform: uppercase;
    color: yellow;
  }
}
</style>