<script setup lang="ts">
import { TCharacter } from "@/types/TCharacters";
import { PropType } from "vue";

const props = defineProps({
    character: Object as PropType<TCharacter | undefined>,
});
</script>

<template>
  <div class="people-card">
    <p class="people-card__title">{{ props.character?.name }}</p>
    <p class="people-card__info">Height: {{ props.character?.height }} m </p>
    <p class="people-card__info">Mass: {{ props.character?.mass }} kg</p>
    <p class="people-card__info">Hair Color: {{ props.character?.hair_color }}</p>
    <p class="people-card__info">Skin Color: {{ props.character?.skin_color }}</p>
    <p class="people-card__info">Eye Color: {{ props.character?.eye_color }}</p>
    <p class="people-card__info">Birth Year: {{ props.character?.birth_year }}</p>
    <p class="people-card__info">Gender: {{ props.character?.gender }}</p>
  </div>
</template>

<style lang="scss" scoped>
.people-card {
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
  border-radius: 30px 0 30px 0;
  background: rgba(33, 33, 33, 0.55);

  &__title {
    font-family: 'Cairo', sans-serif;
    font-size: 38px;
    font-weight: bolder;
  }

  &__info {
    font-family: 'Cairo', sans-serif;
    font-size: 16px;
  }

  &:hover {
    transition: 0.55s;
    transform: scale(1.05);
  }
}
</style>