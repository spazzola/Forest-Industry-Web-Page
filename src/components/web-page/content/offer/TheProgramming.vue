<template>
  <nav-menu></nav-menu>
  <div>
    <h1 class="my-header">Strony internetowe / aplikacje</h1>
    <div class="content">
      Oferujemy dedykowane oprogramowania komputerowe, tworzone według wymagań i preferencji naszych klientów.
      Wykonane przez nas programy dostarczamy w wersji desktopowej bądź jako aplikacja internetowa.
      
      <br> <br>
      W swojej ofercie posiadamy rówież wykonywanie aplikacji mobilnych, 
      które wykonujemy w technologii React Native - raz napisana aplikacja działa na platformach iOS oraz Android, 
      a nie tak jak w przypadku większości firm, gdzie pod każdą platformę jest pisana oddzielna aplikacja.
      <br> <br>
      Dodatkowo wykonujemy również responsywne strony www, czyli takie, które idealnie dopasowują się do każdego rodzaju ekranu - od telefonu, przez tablet na panoramicznych ekranach kończąc.
      <br> <br>
      Zapewniamy darmową wycenę oprogramowania na podstawie wysłanych wymagań. <br>
      Po wiecej informacji zapraszamy do kontaktu <b>software@forestindustrysa.pl</b>
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
  text-align: left;
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