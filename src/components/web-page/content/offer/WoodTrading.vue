<template>
  <nav-menu></nav-menu>
  <div>
    <h1 class="my-header">Handel drewnem</h1>
    <div class="content">
      <br />Oferujemy drewno iglaste w wymiarach od 2.5m do 14m. <br />

      Posiadamy w ofercie cenne gatunki drewna takie jak: <br />

      <ul style="text-align: left">
        <li>Dąb</li>
        <li>Buk</li>
        <li>Modrzew</li>
        <li>Jesion</li>
        <li>Jawor</li>
        <li>Olcha</li>
      </ul>
      <br />
      Ceny ustalane są indiwudalnie, na podstawie ilości zamówionego sortymentu.
      <br />
      Dla stałych klientów gwarancja dostawy każdej ilości drewna w ciągu całego
      roku. <br />
      <br />
      Handlujemy drewnem wyłącznie posiadającym certyfikaty PEFC oraz FSC&reg;.
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
}

@media (max-width: 1028px) {
  .content {
    max-width: 90%;
  }
}
</style>