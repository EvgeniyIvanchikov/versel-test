<script setup>
import Button from '../components/Button.vue'

</script>

<template>
<div id='about-us' class="section about">

<div class="container about_container">
  <div class="about__grid">
    <div class="about__grid-column about__grid-column--with-image">
      <div class="about__image-wrapper">
      <img src="/images/multipass.webp" alt="" class="about__image">
    </div>
    </div>
    <div class="about__grid-column">
      <div class="header-wrapper">
        <h2 class="heading heading--l">
          About Us
        </h2>
        <p class='heading heading--duplicate'>About</p>
      </div>

<div class="description-box">
  <p class='paragraph paragraph--l'>He popped out from the deep spiraling sleeves of the Galaxy to drop some Kaspa knowledge bombs on ya. Say hello to this fearless rebel and hopeless romantic, a total Legend and token chillin' in Kaspa's blockDAG.</p>
  <p class='paragraph paragraph--l'>Dude is so dope, you could mint him as an NFT collection and still be vibin'. Plus, he's all about diving into his own games!
  </p>
  <p class='paragraph paragraph--l'>A Kaspa-knowin', fun-lovin' hero, an energetic miner bringing the crew together!
  </p>
  <p class='paragraph paragraph--l'>And he's not just a boring ol' static token $PPKAS – he's out there hustlin' in the game's tokenomics. Play a lil' and you're already winning. That's the secret sauce of mixing the cool stuff with the useful!
  </p>
  <p class='paragraph paragraph--l'>Shut up and take my energy, PepeKAS!
  </p>
</div>

<Button msg="Mint Token" href="" target='_blank' />
    </div>

  </div>

</div>
</div>
</template>



<style scoped lang="scss">
.about{
  padding: 4.75rem 0;
  width: 100%;
}
.header-wrapper{
  width: max-content;
}
.heading--duplicate{
  position: absolute;
  z-index: -1;
}
.about__grid{
  width: 100%;
  display: flex;
  align-items: center;
  // padding: 0 110px;
  gap: 100px;
  @media screen and (max-width: 991px) {
  padding: 0;
  gap: 2.5rem;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 4.5rem;
  }
}
.about__grid-column{
  width: 100%;
  display: flex;
  flex-direction: column;
  &.about__grid-column--with-image{
    max-width: 550px;
    @media screen and (max-width: 767px) {
      max-width: none;
      width: 80%;
    }
  }
  @media screen and (max-width: 767px) {
    align-items: center;
  }
}
.description-box{
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin: 44px 0 48px;
  @media screen and (max-width: 767px) {
    text-align: center;
  }
}
.about__image-wrapper{
  width: 100%;
}
.about__image{
  max-height: 628px;
}
</style>
