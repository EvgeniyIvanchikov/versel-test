<script setup>
import Header from './layouts/Header.vue';
import HeroSection from './layouts/HeroSection.vue';
import ProjectFooter from './layouts/ProjectFooter.vue'
import AboutUsSection from './layouts/AboutUsSection.vue'
import GameSection from './layouts/GameSection.vue';
import NftSection from './layouts/NftSection.vue';
import TokenomicsSection from './layouts/TokenomicsSection.vue';
import WhitePaperSection from './layouts/WhitePaperSection.vue';
import RoadMapSection from './layouts/RoadMapSection.vue';
import FaqSection from './layouts/FaqSection.vue';


</script>

<template>
  <HeroSection />
  <Header />
  <AboutUsSection />
  <GameSection />
  <NftSection />
  <div class="combosection">
    <div class="combosection__background-images">
      <img class="combosection__background-image" src="/images/space.webp" alt="hero images">
      <div class="combosection__background-overlay"></div>
    </div>
    <TokenomicsSection />
    <WhitePaperSection />
  </div>
  <RoadMapSection />
  <FaqSection />
  <ProjectFooter />
</template>

<style scoped lang="scss">
.combosection{
  position: relative;
  overflow: hidden;
  width: 100%;
}
.combosection__background-images,
.combosection__background-image,
.combosection__background-overlay{
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}
.combosection__background-images{
z-index: 0;
}
.combosection__background-image{
  z-index: -1;
  object-fit: cover;
  object-position: top;
}
.combosection__background-overlay{
  background: linear-gradient(180deg, rgb(0 0 0) 0%, rgba(0, 0, 0, 0.5) 34%, rgba(0, 0, 0, 0.75) 67%, rgb(0 0 0) 100%);
  z-index: 1
}

</style>
