<template>
  <NavBar />
  <NavHome />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import NavHome from "./components/NavHome.vue";

export default {
  name: "App",
  components: {
    NavBar,
    NavHome,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400&display=swap");
#app {
  font-family: "Noto Sans KR", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
