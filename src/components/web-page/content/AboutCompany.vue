<template>
  <nav-menu></nav-menu>
  <div>
    <h1>O firmie</h1>
    <div class="content">
      Działamy na rynku leśnym od 1997 roku. Do 2020 roku pracując w Polsce
      firma była znana pod nazwą Gospodarka Leśna S.A, obecnie jesteśmy
      rozpoznawalni jako Forest Industry S.A. 
      Przez cały ten czas nawiązaliśmy szereg różnorodnych kontaktów, dzięki
      którym weszliśmy na rynek europejski zachowując zaufanie oraz dobrą opinię
      klientów. <br />
      <br />
      Zajmujemy się wszelkimi pracami związanymi z gospodarką leśną, handlem
      drewna oraz budową domów z bali na terenie Europy.<br />
      Nasze składnice znajdują się głównie w Czechach oraz na Słowacji. <br />
      Posiadamy certyfikaty PEFC oraz FSC&reg;.
    </div>
  </div>
  <the-footer></the-footer>
</template>

<script>
import NavMenu from "../nav/NavMenu.vue";
import TheFooter from './TheFooter.vue';


export default {
  components: {
    NavMenu,
    TheFooter
  },
};
</script>

<style scoped>
h1 {
  margin-top: 3rem;
  text-align: center;
  font-family: 'Merriweather', serif;
}

.content {
  text-align: center;
  max-width: 50%;
  margin: auto;
  margin-top: 2rem;
  line-height: 1.5;
}

@media (max-width: 1028px) {
  .content {
    max-width: 90%;
  }
}
</style>