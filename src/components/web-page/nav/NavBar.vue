<template>

<nav class="navbar navbar-expand-xl navbar-light ml-auto">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse ml-auto" id="navbarTogglerDemo01">
    <ul class="navbar-nav mx-auto text-md-center text-left">
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/about">O FIRMIE</router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link class="nav-link dropdown-toggle" active-class="router-link-active" to="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          OFERTA
        </router-link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <router-link class="dropdown-item" active-class="active" to="/offer/woodtrading">Handel drewnem</router-link>
          <router-link class="dropdown-item" active-class="active" to="/offer/loghomes">Domy z bali</router-link>
          <router-link class="dropdown-item" active-class="active" to="/offer/hunting">Polowania w Rosji</router-link>
          <router-link class="dropdown-item" active-class="active" to="/offer/programming">Strony internetowe / aplikacje</router-link>
        </div>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/gallery">GALERIA</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/contact">KONTAKT</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {};
</script>

<style>

nav {
    max-width: 100%;
    margin-top: 4rem;
}

.navbar {
  padding: 0;
  
}

.nav-link {
    font-size: 1.2rem;
    color: rgb(136, 158, 129);
    font-weight: bold;
    font-family: 'Libre Baskerville', sans-serif;
}

 nav .router-link-active,
 nav .router-link-exact-active {
  color: brown;
}

@media only screen and (min-width: 1285px) and (max-width: 1466px) {
  .nav-link {
    font-size: 1rem;
  }
}

@media only screen and (min-width: 1029px) and (max-width: 1284px) {
  .nav-link {
    font-size: 0.9rem;
  }
}

@media only screen and (max-width: 1028px) {
  nav {
    margin: 1rem 0 1rem 0;
  }
}

</style>