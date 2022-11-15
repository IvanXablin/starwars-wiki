<script setup lang="ts">
import PeopleCard from "@/components/PeopleCard/PeopleCard.vue";
import axiosService from '@/api/AxiosService';
import { onMounted, ref } from "vue";
import { TCharacters } from "@/types/TCharacters";
import Loader from "@/components/Loader/Loader.vue";
import { URL_LOGO_HELMET } from "@/utils/constants";

const characters = ref<TCharacters | undefined>();
const page = ref(1);
const totalPages = ref(0);
const isLoading = ref(true);

const fetchCharacters = async (): Promise<void> => {
  characters.value = await axiosService.getCharacters(page.value);
  totalPages.value = Math.ceil(characters.value?.count/ 10);
  isLoading.value = false;
};

const handleNextPage = async (): Promise<void> => {
  if (page.value < totalPages.value) {
    page.value = page.value + 1;
    await fetchCharacters();
    window.scrollTo(0,0);
  }
  else {
    return;
  }
};

const handlePreviousPage = async (): Promise<void> => {
  if (page.value > 1) {
    page.value = page.value - 1;
    await fetchCharacters();
    window.scrollTo(0,0);
  }
  else {
    return;
  }
};

onMounted((): void => {
  fetchCharacters();
});
</script>

<template>
  <div class="characters-page">
    <loader v-if="isLoading"/>
    <template v-else>
      <div class="characters-page__header">
        <p class="characters-page__counter">Total cards: {{ characters?.count }}</p>
        <img :src="URL_LOGO_HELMET" alt="" />
      </div>
      <div class="characters-page__content">
        <people-card
            v-for="character in characters?.results"
            :key="character.name"
            :character="character"
        />
      </div>
      <div class="characters-page__footer">
        <el-button type="primary" @click="handlePreviousPage">
          <el-icon>
            <ArrowLeftBold />
          </el-icon>
          Back
        </el-button>
        <el-button type="primary" @click="handleNextPage">
          Next
          <el-icon>
            <ArrowRightBold />
          </el-icon>
        </el-button>
      </div>
    </template>
  </div>
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
    flex: 1 1 auto;
    color: white;
  }

  &__counter {
    margin: 0 20px;
    font-weight: bold;
    font-size: 36px;
    text-transform: uppercase;
    color: yellow;
  }

  &__footer {
    display: flex;
    justify-content: center;
    padding: 40px;
  }
}
</style>