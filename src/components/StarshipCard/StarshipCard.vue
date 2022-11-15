<script setup lang="ts">
import { TStarship } from "@/types/TStarships";

const props = defineProps<{
  starship: TStarship | undefined,
}>();
</script>

<template>
  <div class="starship-card">
    <p class="starship-card__title">{{ props.starship?.name }}</p>
    <p class="starship-card__info">Model: {{ props.starship?.model }}</p>
    <p class="starship-card__info">Manufacturer: {{ props.starship?.manufacturer }}</p>
    <p class="starship-card__info">Cost in Credits: {{ props.starship?.cost_in_credits }}</p>
    <p class="starship-card__info">Length: {{ props.starship?.length }}</p>
    <p class="starship-card__info">Max Atmosphering Speed: {{ props.starship?.max_atmosphering_speed }}</p>
    <p class="starship-card__info">Crew: {{ props.starship?.crew }}</p>
    <p class="starship-card__info">Passengers: {{ props.starship?.passengers }}</p>
    <p class="starship-card__info">Cargo Capacity: {{ props.starship?.cargo_capacity }}</p>
    <p class="starship-card__info">Consumables: {{ props.starship?.consumables }}</p>
    <p class="starship-card__info">Hyperdrive Rating: {{ props.starship?.hyperdrive_rating }}</p>
    <p class="starship-card__info">MGLT: {{ props.starship?.MGLT }}</p>
    <p class="starship-card__info">Starship class: {{ props.starship?.starship_class }}</p>
  </div>
</template>

<style lang="scss" scoped>
.starship-card {
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