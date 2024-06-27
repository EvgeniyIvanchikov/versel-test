<script setup>
import Button from '../components/Button.vue'

</script>

<template>
<div id='white-paper' class="section whitepaper">

<div class="container whitepaper_container">

</div>
<div class="container whitepaper_container">
  <div class="whitepaper__grid">
    <div class="whitepaper__column whitepaper__column--with-image">
      <img class="whitepaper__image" src="/images/pepekas-with-thinkbook.webp" alt="hero images">
    </div>
    <div class="whitepaper__column">
      <div class="header-wrapper">
        <h2 class="heading heading--l">
          White Paper
        </h2>
        <p class='heading heading--duplicate'>White Paper</p>
      </div>
      <div class="whitepaper__description">
        <p class='paragraph paragraph--l'>
          Word on the street is that our whitepaper might just hold the keys to the Ultimate Question of Life, the Universe, and Everything... Wait, where'd it go?! 
          Organizing and breaking down all the 411 facts on PepeKAS into one sleek doc, printed in good ol' Earthling Latin fonts. Each letter drippin' with ancient wisdom from lost civilizations about Kaspa! It says something about 100 blocks per se... (<i>trails off into indistinct chatter</i>).
        </p>
      </div>
      <Button msg="SHOW ME THE WHITEPAPER" href="./documents/WP_PepeKAS_v1.0.pdf" download="White_Paper_PepeKAS_v1.0.pdf" />
    </div>
  </div>


</div>
</div>
</template>



<style scoped lang="scss">
.whitepaper{
  position: relative;
  overflow: hidden;
  z-index: 1;
  width: 100%;
  padding: 112px 0 94px;
  width: 100%;
  @media screen and (max-width: 991px) {
    padding: 4.75rem 0;
  }
}

.whitepaper__grid{
  width: 100%;
  display: flex;
  align-items: flex-end;
  gap: 54px;
  @media screen and (max-width: 1280px) {
    align-items: center;
  }
  @media screen and (max-width: 991px) {
    padding: 0;
    gap: 2.5rem;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 4.5rem;
  }
}
.whitepaper__column{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &.whitepaper__column--with-image{
    margin-bottom: -94px;
    @media screen and (max-width: 1280px) {
      margin-bottom: inherit;
    }
    @media screen and (max-width: 991px) {
      margin-left: -10%;
    }
    @media screen and (max-width: 767px) {
      margin-left: 0%;
      width: 80%;
      min-width: 80%;
  }
  }
  @media screen and (max-width: 767px) {
    align-items: center;
  }
}
.whitepaper__description{
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin: 44px 0 48px;
  @media screen and (max-width: 767px) {
    text-align: center;
  }
}
.whitepaper__image{
  width: 100%;
  max-height: 625px;
  position: relative;
}
.heading{
  &--duplicate{
    left: -1em;
    @media screen and (max-width: 767px) {
    left: auto;
  }
  }
}
</style>
