<template>
<header class="header">
  <img src="src/assets/images/logo.svg" />
  <nav>
    <a href="">Home</a>
    <a href="">Characters</a>
    <a href="">Planets</a>
    <a href="">Starships</a>
  </nav>
</header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  background: #212121;
  opacity: 0.85;

  img {
    width: 20%;
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