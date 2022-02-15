<template>
  <nav-menu></nav-menu>
  <div>
    <h1 class="my-header">Polowania w Rosji</h1>
    <div class="content">
        Więcej informacji już wkrótce!
    </div>
  </div>
  <the-footer></the-footer>
</template>

<script>
import NavMenu from "../../nav/NavMenu.vue";
import TheFooter from "../TheFooter.vue";

export default {
  components: {
    NavMenu,
    TheFooter,
  },
};
</script>

<style>
.my-header {
  margin-top: 3rem;
  text-align: center;
  font-family: "Merriweather", serif;
}

.content {
  text-align: center;
  max-width: 30%;
  margin: auto;
  margin-top: 2rem;
  line-height: 1.5;
  margin-bottom: 5rem;
}

@media (max-width: 1028px) {
  .content {
    max-width: 90%;
  }
}
</style>