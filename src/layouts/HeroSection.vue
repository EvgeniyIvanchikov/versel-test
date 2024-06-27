<script setup>
import { onMounted } from 'vue';
import { initParallaks } from '@/assets/scripts/initParallaks.js';

onMounted(() => {
  initParallaks();
});

</script>

<template>
<div id='hero' class="section hero">
<div class="hero__background-images">
  <div class="hero__overlay"></div>
  <div class="container hero_container">
    <div class="hero__layout">
      <div class="hero__heading-wrapper">
        <h1 class="heading heading--xxl">PEPEKAS</h1>
      </div>
    </div>
</div> 
  <!-- <img class="hero__image hero__image--layer0" src="/images/hero-desk-v-1.webp" alt=""> -->

  <img class="hero__image hero__image--layer1" src="/images/big-layer-1.webp" alt="">
  <div class="hero__image-wrapper hero__image-wrapper--layer2">
    <img class="hero__image hero__image--layer2" src="/images/big-layer-2.webp" alt="">
  </div>
  <div class="hero__image-wrapper hero__image-wrapper--layer3">
    <img class="hero__image hero__image--layer3" src="/images/big-layer-3.webp" alt="">
  </div>

  </div>
</div>
</template>



<style scoped lang="scss">
.hero{
height: 100vh;
position: relative;
}
.hero__image,
.hero__overlay,
.hero__background-images{
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}
.hero__background-images{
z-index: 0;
}
.hero__overlay{
  z-index: 100;
  background: linear-gradient(0deg, var(--primary-background-color) , transparent 7rem);
}
.hero__image-wrapper{
  position: absolute;
  width: 110%;
  height: 110%;
  left: -5%;
  top: -5%;
  &.hero__image-wrapper--layer2{
    z-index: 2;
  }
  &.hero__image-wrapper--layer3{
    z-index: 3;
  }
}
.hero__image{
object-fit: cover;
object-position: center 40%;
will-change: transform;

  &--layer0{
  z-index: 0;
  }
  &--layer1{
  z-index: 1;
  }
  &--layer2{
  z-index: 2;
  }
  &--layer3{
  z-index: 3;
  }
  &--layer4{
  z-index: 4;
  }
  &--layer5{
  z-index: 5;
  }
  &--layer6{
  z-index: 6;
  }
  &--layer7{
  z-index: 7;
  }
  &--layer8{
  z-index: 8;
  }


}

.hero_container{
position: relative;
z-index: 2;
min-height: 100%;
height: 100%;
padding-top: 2.5rem;
padding-bottom: 2.5rem;
text-align: center;

@media screen and (max-width: 991px) {
padding-top: 8.5rem;
padding-bottom: 4.5rem;
}
}
.hero__layout{
min-height: 100%;
display: flex;
flex-direction: column; 
justify-content: space-between;
}
.hero__heading-wrapper{

}

</style>
