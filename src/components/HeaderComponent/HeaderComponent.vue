<script setup lang="ts">
import "element-plus/theme-chalk/display.css";
import { Menu } from "@element-plus/icons-vue";
import { ref } from "vue";

const drawer = ref(false);

const handleOpenMenu = (): void => {
  drawer.value = true;
}
</script>

<template>
<div class="header">
  <router-link class="header__link" to="/">
    <img class="header__logo" src="/src/assets/images/logo.svg" alt=""/>
  </router-link>
  <el-row :gutter="10" class="hidden-sm-and-down">
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
       <nav>
          <router-link class="header__link" to="/">Home</router-link>
          <router-link class="header__link" to="/characters">Characters</router-link>
          <router-link class="header__link" to="/planets">Planets</router-link>
          <router-link class="header__link" to="/starships">Starships</router-link>
      </nav>
    </el-col>
  </el-row>
  <el-row :gutter="10" class="hidden-md-and-up">
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" >
      <el-icon size="30px" color="white" @click="handleOpenMenu">
        <Menu />
      </el-icon>
      <el-drawer v-model="drawer" :with-header="false" size="50%">
          <div class="menu">
              <router-link class="menu__link" to="/">Home</router-link>
              <router-link class="menu__link" to="/characters">Characters</router-link>
              <router-link class="menu__link" to="/planets">Planets</router-link>
              <router-link class="menu__link" to="/starships">Starships</router-link>
          </div>
      </el-drawer>
    </el-col>
  </el-row>
</div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 220px;
  background: rgba(33, 33, 33, 0.85);
  opacity: 0.85;

  &__logo {
    max-width: 550px;
    min-width: 160px;
    width: 50%;
  }

  &__link {
    margin: 0 15px;
    font-size: 17px;
    text-decoration: none;
    text-transform: uppercase;
    color: #ffffff;

    &:hover {
      color: yellow;
    }
  }

  @media screen and (max-width:1320px)  {
    padding: 20px 120px;
  }

  @media screen and (max-width:900px)  {
    padding: 20px 35px;
  }
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__link {
    margin: 30px 15px;
    font-size: 21px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bolder;
    color: #ffffff;

    &:hover {
      color: yellow;
    }
  }
}
</style>