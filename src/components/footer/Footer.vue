<template>
<footer class="footer">
  <p class="footer__about">StarWars API</p>
  <p class="footer__warning">TM & © Lucasfilm Ltd. All Rights Reserved</p>
  <img class="footer__icon" src="src/assets/images/gh_icon.png" />
</footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  background: rgba(33, 33, 33, 0.85);
  opacity: 0.85;

  &__about {
    font-family: 'Cairo', sans-serif;
    font-size: 14px;
    color: white;
  }

  &__warning {
    font-family: 'Cairo', sans-serif;
    font-size: 14px;
    color: white;
  }

  &__icon {
    width: 35px;
    height: 35px;
  }
}
</style>