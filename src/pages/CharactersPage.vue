<script setup lang="ts">
import Layout from '@/layout/Layout.vue';
import PeopleCard from '@/components/PeopleCard/PeopleCard.vue';
import axiosService from '@/api/AxiosService';
import { onMounted, ref } from 'vue';
import { TCharacters } from '@/types/TCharacters';

const characters = ref<TCharacters | undefined>();

const fetchCharacters = async (): Promise<void> => {
    characters.value = await axiosService.getCharacters();
};

onMounted(() => {
  fetchCharacters();
});
</script>

<template>
  <layout>
    <div class="characters-page">
      <div class="characters-page__header">
          <p class="characters-page__counter">Total cards: {{ characters?.count }}</p>
          <img src="src/assets/images/stormtrooper.png" />
      </div>
      <div class="characters-page__content">
          <people-card
              v-for="c in characters?.results"
              :key="c.name"
              :character="c"
          />
      </div>
    </div>
  </layout>
</template>

<style lang="scss" scoped>
.characters-page {
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
    font-family: 'Cairo', sans-serif;
    font-weight: bold;
    font-size: 36px;
    text-transform: uppercase;
    color: yellow;
  }
}
</style>