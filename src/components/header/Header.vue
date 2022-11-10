<script setup lang="ts">
import 'element-plus/theme-chalk/display.css';
import { Menu } from '@element-plus/icons-vue';
import { ref } from 'vue';
const drawer = ref(false);
</script>

<template>
<header class="header">
  <img src="src/assets/images/logo.svg" />
  <el-row :gutter="10" class="hidden-sm-and-down">
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
       <nav>
          <a href="">Home</a>
          <a href="">Characters</a>
          <a href="">Planets</a>
          <a href="">Starships</a>
      </nav>
    </el-col>
  </el-row>
  <el-row :gutter="10" class="hidden-md-and-up">
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" >
      <el-icon size="30px" color="white" @click="drawer = true">
        <Menu />
      </el-icon>
      <el-drawer v-model="drawer" title="I am the title" :with-header="false" size="50%">
          <a href="">Home</a>
          <a href="">Characters</a>
          <a href="">Planets</a>
          <a href="">Starships</a>
      </el-drawer>
    </el-col>
  </el-row>
</header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 35px;
  background: rgba(33, 33, 33, 0.85);
  opacity: 0.85;

  img {
    width: 25%;
    min-width: 160px;
  }

  a {
    margin: 0 15px;
    font-size: 17px;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Cairo', sans-serif;
    color: #ffffff;
  }
}
</style>