<script setup lang="ts">
import { View } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

const props = defineProps<{
  logoUrl: string,
  title: string,
  description: string,
}>();

const router = useRouter();

const handleRedirectPage = (): void => {
  router.push({ path: props.title });
}
</script>

<template>
<div class="nav-card">
  <img class="nav-card__logo" :src="props.logoUrl" alt=""/>
  <div class="nav-card__content">
      <p class="nav-card__title">{{ props.title }}</p>
      <p class="nav-card__description">{{ description }}</p>
      <el-button type="info" :icon="View" @click="handleRedirectPage">View more</el-button>
  </div>
</div>
</template>

<style lang="scss" scoped>
.nav-card {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  max-width: 350px;
  min-width: 240px;
  max-height: 215px;
  min-height: 200px;
  width: 100%;
  height: 100%;
  margin: 30px 50px;
  padding: 10px;
  background: rgba(33, 33, 33, 0.75);
  border-radius: 30px 0;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 200px;
    color: white;
  }

  &__logo {
    position: relative;
    right: 40px;
    top: 5px;
    width: 100px;
    height: 100px;
  }

  &__title {
    font-weight: bold;
    font-size: 22px;
    text-transform: uppercase;
  }

  &__description {
    margin: 10px 0;
    font-size: 13px;
    color: #9d9b9b;
  }

  &:hover {
    transition: 0.55s;
    transform: scale(1.05);
  }
}
</style>