<template>
  <nav-menu></nav-menu>

  <h1>Dane kontaktowe</h1>
  <div class="content">
    <div class="contactTile">
      <h2>Prezes firmy</h2>
      Adam Szczotka <br />
      tel.: +48 602 597 988 <br />
      biuro@forestindustrysa.pl <br />
      <br />
    </div>

    <div class="contactTile">
      <h2>Dyrektor handlowy</h2>
      Dalibor Leher <br />
      tel.: +48 797 860 707 <br />
      tel.: +420 602 139 114 <br />
      biuro@forestindustrysa.pl <br />
      <br />
    </div>

    <div class="contactTile">
      <h2>Technik administracji</h2>
      Bartosz Wisiński <br />
      tel.: +48 505 605 469 <br />
      biuro@forestindustrysa.pl <br />
      <br />
    </div>

    <div class="contactTile">
      <h2>Oprogramowania komputerowe</h2>
      Rafał Szczotka <br />
      tel.: +48 535 099 069 <br />
      software@forestindustrysa.pl <br />
      <br />
    </div>
    <div style="clear: both"></div>

    <div class="contactTile">
      <h2>Dane firmy</h2>
      Rycerka Górna 283C<br />
      34-370 Rajcza <br />
      NIP: 553 100 62 39 <br />
      IBAN: 18 1020 1390 0000 6702 0642 7589 <br />
      EUR: 57 1020 1390 0000 6102 0671 3913 <br />
      SWIFT: BPKOPLPW <br />
    </div>
  </div>
  <the-footer></the-footer>
</template>

<script>
import NavMenu from "../nav/NavMenu.vue";
import TheFooter from '../content/TheFooter.vue'

export default {
  components: {
    NavMenu,
    TheFooter
  },
};
</script>

<style scoped>
.content {
  text-align: center;
  margin-bottom: 5rem;
}

h1 {
  margin-top: 3rem;
  text-align: center;
  font-family: "Merriweather", serif;
}

.contactTile {
  font-size: 1rem;
  margin-top: 20px;
}
</style>