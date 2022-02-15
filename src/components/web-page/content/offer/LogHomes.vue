<template>
  <nav-menu></nav-menu>
  <div>
    <h1>Domy z bali</h1>

    <div class="col-lg-6 col-md-6" style="margin: auto;"><a href="#img_4"><img class="img-fluid" src="../../../../assets/loghome1.jpg"></a></div>

    <div class="content">
      Obecnie nawiązaliśmy kontakt z naszym partnerem z Rosji działającym w
      branży leśnej co zaowocowało znakomitą współpracą i pojawieniu się jako
      jedynej w europie oferty budowy elitarnych domów z 200 letnich bali cedru
      syberyjskiego o średnicy do 100 cm. Drewno to pozyskujemy w czystych
      ekologiczne rejonach Xakasji u żródeł Jeniseju. <br />
      Proponowane przez nas domy z bali nie wymagają dodatkowego ocieplenia,
      dlatego służą do całorocznego zamieszkania. Ich specjalne właściwości
      powodują, że w okresie jesienno-zimowym utrzymują ciepłą temperaturę, zaś
      w okresie letnim zachęcają przyjemnym chłodem. Stawiając na zdrowie oraz
      naturę i wybierając domy z bali, dostajecie też Państwo krótki czas
      oczekiwania na zakończenie budowy, wsparcie merytoryczne oraz pomoc na
      każdym etapie, a co najważniejsze najtrwalszy materiał i stabilną
      konstrukcję, najwyższą jakość oraz gwarancję na lata. <br />
      <br />

      <p>Dlaczego cedr syberyjski to wyjątkowe drzewo?</p>
      Drewno Cedru syberyjskiego jest unikalne pod względem właściwości
      leczniczych, wydziela olejki eteryczne oraz fitoncydy, które zabijają
      bakterie patogenne (chorobotwórcze) i odstraszają szkodliwe owady, dlatego
      powietrze w lasach cedrowych i pomieszczeniach z drewna cedrowego, jest
      świeże i zdrowe. Mieszkańcy Uralu, Syberii, Europejskiej Północy znali
      lecznicze właściwości cedru i przez całe wieki wykorzystywali go w
      leczeniu wielu niedomagań. Z igliwia sporządzali zasobny w witaminy napój,
      żywicą leczyli rany i wrzody, z orzechów otrzymywali cenny olej roślinny,
      który oprócz odżywczych, posiada również i lecznicze właściwości.
      Przygotowane z jąder orzecha cedrowe „chude mleko” wykorzystywano do
      leczenia gruźlicy, zapalenia płuc, chorób nerek, nerwic. W odróżnieniu do
      przybyszy ludność miejscowa Syberii nigdy nie chorowała na szkorbut. W
      lasach cedrowych powietrze nasycone żywiczną wonią, fitoncydami jest
      praktycznie sterylne i chroni człowieka przed infekcjami. Kto choćby raz
      odwiedzi cedrową tajgę, będzie długo pamiętał wrażenie czystości,
      świeżości i zdrowia. Szczególne zainteresowanie cedrami pojawiło się pod
      koniec poprzedniego stulecia. To czas, kiedy człowiek zmęczony jest
      ciągłym napięciem i walką z chorobami, problemami ekologicznymi,
      wywołanymi przez niego katastrofami przyrodniczymi, życiowymi
      niepowodzeniami, niekończącym się łańcuchem nierozwiązanych spraw. Wielu
      ludzi dążąc do fizycznego i duchowego zdrowia rezygnuje z „osiągnięć”
      technokratycznej cywilizacji. Zwracają się w stronę przyrody i poprzez
      duchowe poznanie siebie jako osobowości, istoty ludzkiej – odkrywają ten
      świat, jego harmonię i doskonałość stworzone przez naturę. Na naszej
      planecie naliczono około 600 rodzajów roślin iglastych. Najważniejsza i
      najbardziej reprezentatywna ich rodzina to sosnowate: sosny, świerki,
      jodły, modrzewie. Do tej rodziny należy i syberyjski cedr, biolodzy
      nazywają go syberyjską cedrową sosną. Nasze Polsko - Rosyjskie biuro
      projektowe jest w stanie spełnić każde oczekiwanie wykonawcy. Cedr
      syberyjski, którymi dysponujemy jest najwyższej jakości i stanowi
      doskonały pod względem trwałości materiał. Domy powstałe według
      wykorzystywanej przez nas technologii od wielu lat budowane są w Rosji i
      na Syberii, a ich konstrukcje do tej pory nie uległy zniszczeniu.
      Cedr syberyjski to jedno z największych
      drzew jakie rośnie na Syberii, charakteryzuje się dużą izolacyjnością oraz
      doskonale sprawdza się w mroźnych warunkach, nawet przy temperaturze do
      -50ºC.

      <div class="col-lg-6 col-md-6 img"><a href="#img_4"><img class="img-fluid" src="../../../../assets/loghome2.jpg"></a></div>
      <div class="col-lg-6 col-md-6 img"><a href="#img_4"><img class="img-fluid" src="../../../../assets/loghome3.jpg"></a></div>
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

<style scoped>
h1 {
  margin-top: 3rem;
  text-align: center;
  font-family: "Merriweather", serif;
}

p {
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.content {
  text-align: center;
  max-width: 50%;
  margin: auto;
  margin-top: 2rem;
  line-height: 1.5;
  margin-bottom: 5rem;
}

.img {
  margin: 2% auto auto auto;
}

@media (max-width: 1028px) {
  .content {
    max-width: 90%;
  }
}
</style>