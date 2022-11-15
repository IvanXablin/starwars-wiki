<script setup lang="ts">
import { TPlanet } from "@/types/TPlanets";

const props = defineProps<{
  planet: TPlanet | undefined,
}>();
</script>

<template>
  <div class="planet-card">
    <p class="planet-card__title">{{ props.planet?.name }}</p>
    <p class="planet-card__info">Rotation Period: {{ props.planet?.rotation_period }}</p>
    <p class="planet-card__info">Orbital Period: {{ props.planet?.orbital_period }}</p>
    <p class="planet-card__info">Diameter: {{ props.planet?.diameter }}</p>
    <p class="planet-card__info">Climate: {{ props.planet?.climate }}</p>
    <p class="planet-card__info">Gravity: {{ props.planet?.gravity }}</p>
    <p class="planet-card__info">Terrain: {{ props.planet?.terrain }}</p>
    <p class="planet-card__info">Surface Water: {{ props.planet?.surface_water }}</p>
    <p class="planet-card__info">Population: {{ props.planet?.population }}</p>
  </div>
</template>

<style lang="scss" scoped>
.planet-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  max-width: 300px;
  min-height: 600px;
  width: 100%;
  height: 100%;
  margin: 20px;
  padding: 25px;
  border-radius: 30px 0;
  background: rgba(33, 33, 33, 0.55);

  &__title {
    font-size: 38px;
    font-weight: bolder;
  }

  &__info {
    font-size: 16px;
  }

  &:hover {
    transition: 0.55s;
    transform: scale(1.05);
  }
}
</style>