<template>
 <div class="loader">
   <img class="loader__image" src="/src/assets/images/load.gif" alt=""/>
 </div>
</template>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &__image {
    max-width: 230px;
  }
}
</style>