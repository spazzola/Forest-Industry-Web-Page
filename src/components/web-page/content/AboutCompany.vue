<template>
  <nav-menu></nav-menu>
  <div>
    <h1>O firmie</h1>
    <div class="content">
      Jako firma należąca do sektora gospodarki leśnej, na rynku polskim działamy od 1997 roku.
      Budowanie pozycji naszej firmy rozpoczęliśmy pod nazwą Gospodarka Leśna S.A. Dziś jesteśmy znani jako Forest Industry S.A. 
      Zmiana nazwy to dla nas symboliczny moment, który zwieńczył wejście Forest Industry na rynek europejski.
      <br> 
      <br>
      Tworząc naszą historię silny nacisk stawiamy na budowaniu grupy zaufanych klientów. 
      Dobra renoma oraz zadowolenie klientów, są dla nas podstawą własciwie funkcjonującego przedsiębiorstwa.
      <br>
      <br>
      Zajmujemy się wszelkimi pracami związanymi z gospodarką leśną, handlem drewna oraz budową domów z bali na terenie Europy. 
      Nasze składnice znajdują się w Rosji - Republika XAKASJI, Czechach oraz na Słowacji.
      <br>
      Dążymy do ciągłego rozwoju. Nie boimy się nowych wyzwań, ani innowacyjnych technologii. Dlatego w naszej ofercie znajdą Państwo 
      strony www, dedykowane aplikacje internetowe, mobilne i desktopowe, które sprostają najwyszym standardom. <br />
      <br />

    </div>
  </div>
  <the-footer></the-footer>
</template>

<script>
import NavMenu from "../nav/NavMenu.vue";
import TheFooter from "./TheFooter.vue";

export default {
  components: {
    NavMenu,
    TheFooter,
  },
};
</script>

<style scoped>
h1 {
  margin-top: 3rem;
  text-align: center;
  font-family: "Merriweather", serif;
}

.content {
  text-align: center;
  max-width: 50%;
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