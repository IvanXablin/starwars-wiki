<script setup lang="ts">
import Layout from "@/layout/Layout.vue";
import NavCard from "@/components/NavCard/NavCard.vue";
import axiosService from "@/api/AxiosService";
import { onMounted, ref } from "vue";
import { TFilms } from "@/types/TFilms";
import { URL_LOGO_PLANET, URL_LOGO_HELMET, URL_LOGO_NAVE } from "@/utils/constants";

const films = ref<TFilms[]>([]);

const fetchFilms = async (): Promise<void> => {
    films.value = await axiosService.getFilms();
};

onMounted((): void => {
    fetchFilms();
});

</script>

<template>
  <layout>
    <div class="home-page">
      <div class="home-page__content">
        <div class="home-page__logo">
          <img src="/src/assets/images/logoYellow.png" alt=""/>
        </div>
        <div class="home-page__info page-info">
          <p class="page-info__header">Star Wars Wiki</p>
          <p class="page-info__description">Star Wars Wiki the most complete wikipedia about the StarWars universe.</p>
          <p class="page-info__description">Here you find everything you need to know about the StarWars universe.</p>
        </div>
        <div class="home-page__navigation">
          <nav-card
              :logo-url="URL_LOGO_HELMET"
              title="Characters"
              description="Here you can find information about all the characters in the StarWars universe."
          />
          <nav-card
              :logo-url="URL_LOGO_PLANET"
              title="Planets"
              description="Here you can find information about all the planets in the StarWars universe."
          />
          <nav-card
              :logo-url="URL_LOGO_NAVE"
              title="Starships"
              description="Here you can find information about all the starships in the StarWars universe."
          />
        </div>
        <div class="home-page__timeline">
          <h1>Classic Star Wars Movies</h1>
          <el-timeline>
              <el-timeline-item
                  v-for="film in films"
                  :key="film.episode_id"
                  placement="top"
                  color="#ffdd00"
                  size="large"
              >
              <div class="timeline-card">
                  <p class="timeline-card__title">{{ film.title }}</p>
                  <p class="timeline-card__episode">Episode {{ film.episode_id }}</p>
                  <p class="timeline-card__date">{{ film.release_date }}</p>
                  {{ film.opening_crawl }}
              </div>
            </el-timeline-item>
          </el-timeline>
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

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  &__logo {
    max-width: 700px;
    width: 100%;

    img {
      max-width: 100%;
      margin: 15px 0;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 720px;
    width: 100%;
    height: 200px;
    margin: 20px 0;
    padding: 20px;
    border-radius: 10px;
    background: rgba(33, 33, 33, 0.75);
  }

  &__navigation {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 40px 0 0 0;
  }

  &__timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 720px;
    width: 100%;
    margin: 50px 0;
    background: rgba(33, 33, 33, 0.75);
    color: white;

    h1 {
      font-weight: lighter;
      margin: 15px 0;
    }
  }
}

.page-info {
  &__header {
    margin: 0 0 10px 0;
    font-weight: 500;
    font-size: 35px;
    text-align: center;
    color: white;
  }

  &__description {
    margin: 0 0 10px 0;
    font-size: 18px;
    text-align: center;
    color: #9d9b9b;
  }
}

.timeline-card {
  color: white;

  &__title {
    margin: 10px 0;
    font-weight: bolder;
    font-size: 30px;
    color: yellow;
  }

  &__episode {
    margin: 5px 0;
    font-weight: lighter;
    font-size: 16px;
    color: white;
  }

  &__date {
    margin: 10px 0;
    font-weight: lighter;
    font-size: 15px;
    color: white;
  }
}
</style>