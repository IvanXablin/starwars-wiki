<script setup lang="ts">
import axiosService from '@/api/AxiosService';
import { onMounted, ref } from "vue";
import { TStarships } from "@/types/TStarships";
import StarshipCard from "@/components/StarshipCard/StarshipCard.vue";
import Loader from "@/components/Loader/Loader.vue";
import { URL_LOGO_NAVE } from "@/utils/constants";

const starships = ref<TStarships | undefined>();
const page = ref(1);
const totalPages = ref(0);
const isLoading = ref(true);


const fetchStarships = async (): Promise<void> => {
  starships.value = await axiosService.getStarships(page.value);
  totalPages.value = Math.ceil(starships.value?.count/ 10);
  isLoading.value = false;
};

const handleNextPage = async (): Promise<void>  => {
  if (page.value < totalPages.value) {
    page.value = page.value + 1;
    await fetchStarships();
    window.scrollTo(0,0);
  }
  else {
    return;
  }
};

const handlePreviousPage = async (): Promise<void>  => {
  if (page.value > 1) {
    page.value = page.value - 1;
    await fetchStarships();
    window.scrollTo(0,0);
  }
  else {
    return;
  }
};

onMounted((): void => {
  fetchStarships();
});
</script>

<template>
  <div class="planets-page">
    <loader v-if="isLoading"/>
    <template v-else>
      <div class="planets-page__header">
        <p class="planets-page__counter">Total cards: {{ starships?.count }}</p>
        <img :src="URL_LOGO_NAVE" alt="" />
      </div>
      <div class="planets-page__content">
        <starship-card
            v-for="starship in starships?.results"
            :key="starship.name"
            :starship="starship"
        />
      </div>
      <div class="planets-page__footer">
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

  &__footer {
    display: flex;
    justify-content: center;
    padding: 40px;
  }
}
</style>