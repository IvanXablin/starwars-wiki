<template>
<div class="footer">
  <p class="footer__about">StarWars API</p>
  <p class="footer__warning">TM & © Lucasfilm Ltd. All Rights Reserved</p>
  <a href="https://github.com/IvanXablin/starwars-wiki" target="_blank">
    <img class="footer__icon" src="/src/assets/images/gh_icon.png" alt=""/>
  </a>
</div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 155px;
  font-size: 14px;
  text-align: center;
  background: rgba(33, 33, 33, 0.85);
  color: white;
  opacity: 0.85;

  &__about {
    margin: 10px 0;
  }

  &__warning {
    margin: 10px 0;
  }

  &__icon {
    width: 35px;
    height: 35px;
    margin: 10px 0;
  }

  @media screen and (max-width:720px)  {
    display: flex;
    flex-direction: column;
  }
}
</style>