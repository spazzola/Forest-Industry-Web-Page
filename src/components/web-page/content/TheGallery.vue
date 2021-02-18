<template>
  <nav-menu></nav-menu>
  <div>
    <h1>Galeria</h1>

    <div class="content">

      <div class="photo-gallery">
        <div class="container">

            <div class="row photos">
                <div class="col-lg-3 col-md-6 item"><a href="#img_1" data-lightbox="photos"><img class="img-fluid" src="../../../assets/1.jpg"></a></div>
                <div class="col-lg-3 col-md-6 item"><a href="#img_2" data-lightbox="photos"><img class="img-fluid" src="../../../assets/2.jpg"></a></div>
                <div class="col-lg-3 col-md-6 item"><a href="#img_3" data-lightbox="photos"><img class="img-fluid" src="../../../assets/3.jpg"></a></div>
                <div class="col-lg-3 col-md-6 item"><a href="#img_4" data-lightbox="photos"><img class="img-fluid" src="../../../assets/4.jpg"></a></div>
            </div>
            <div class="row photos">
                <div class="col-lg-3 col-md-4 item"><a href="#img_5" data-lightbox="photos"><img class="img-fluid" src="../../../assets/5.jpg"></a></div>
                <div class="col-lg-3 col-md-4 item"><a href="#img_6" data-lightbox="photos"><img class="img-fluid" src="../../../assets/6.jpg"></a></div>
                <div class="col-lg-3 col-md-4 item"><a href="#img_7" data-lightbox="photos"><img class="img-fluid" src="../../../assets/7.jpg"></a></div>
            </div>
            <a href="#_1" class="lightbox trans" id="img_1"><img src="../../../assets/1.jpg"></a>
            <a href="#_2" class="lightbox trans" id="img_2"><img src="../../../assets/2.jpg"></a>
            <a href="#_3" class="lightbox trans" id="img_3"><img src="../../../assets/3.jpg"></a>
            <a href="#_4" class="lightbox trans" id="img_4"><img src="../../../assets/4.jpg"></a>
            <a href="#_5" class="lightbox trans" id="img_5"><img src="../../../assets/5.jpg"></a>
            <a href="#_6" class="lightbox trans" id="img_6"><img src="../../../assets/6.jpg"></a>

        </div>
    </div>


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
  max-width: 70%;
  margin: auto;
  margin-top: 2rem;
  line-height: 1.5;
}

.item {
    margin-top: 2%
}

.trans {
  transition: all 1s ease;
  -moz-transition: all 1s ease;
  -ms-transition: all 1s ease;
  -o-transition: all 1s ease;
  -webkit-transition: all 1s ease;
}

.top {
  position: relative;
  display: flex;
  margin-right: auto;
  margin-left: auto;
}

.lightbox {
  position: fixed;
  width: 100%;
  height: 100%;
  text-align: center;
  top: 0;
  left: 0;
  z-index: 999;
  opacity: 0;
  pointer-events: none;
}

.lightbox img {
  max-width: 90%;
  max-height: 80%;
  position: relative;
  top: -100%;
  /* Transition */
  transition: all 1s ease;
  -moz-transition: all 1s ease;
  -ms-transition: all 1s ease;
  -o-transition: all 1s ease;
  -webkit-transition: all 1s ease;
}

.lightbox:target {
  outline: none;
  top: 0;
  opacity: 1;
  pointer-events: auto;
  transition: all 1.2s ease;
  -moz-transition: all 1.2s ease;
  -ms-transition: all 1.2s ease;
  -o-transition: all 1.2s ease;
  -webkit-transition: all 1.2s ease;
}

.lightbox:target img {
  top: 0;
  top: 50%;
  transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
}

@media (max-width: 1028px) {
  .content {
    max-width: 90%;
  }
}

</style>