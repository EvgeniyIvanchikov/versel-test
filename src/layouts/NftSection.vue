<script setup>
import Button from '../components/Button.vue'

</script>

<template>
<div id='nft-collection' class="section nft">
<div class="container nft_container">
  <div class="nft__grid">
    <div class="nft__column nft__column--with-image">
      <div class="nft__image-wrapper">
      <img src="/images/nft-new.webp" alt="" class="nft__image">
    </div>
    </div>
    <div class="nft__column">
      <div class="header-wrapper">
        <h2 class="heading heading--l">
          NFT COLLECTIOn
        </h2>
        <p class='heading heading--duplicate'>Be unique</p>
      </div>
      <div class="nft__description">
        <p class='paragraph paragraph--l'>
          This cosmic collection features 2641 different faces of PepeKAS, but trust, they're all fire, no cap! These visuals were handpicked with care! The ones that didn't vibe with PepeKAS personally? Sent into the void beyond the event horizon of a black hole (maybe they caught a one-way ticket to another galaxy via a wormhole).
These NFTs aren't just for show and tell – they're also part of the game mechanics.
        </p>
      </div>
      <Button msg="SHOW NFT" href="" target='_blank' />

    </div>

  </div>


</div>

</div>
</template>



<style scoped lang="scss">
.nft{
  padding: 192px 0 120px;
  @media screen and (max-width: 991px) {
    padding: 4.75rem 0;
  }
}
.section__background-overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(transparent, rgba(0, 0, 0, 0.5) 80%);
}

.nft__grid{
  width: 100%;
  display: flex;
  align-items: center;
  gap: 100px;
  @media screen and (max-width: 767px) {
    text-align: center;
    flex-direction: column;
  }
}
.nft__column{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  img{
    filter: drop-shadow(0px 0px 85px rgb(255 255 255 / 40%));
  }

  &.nft__column--with-image{
    max-width: 550px;
    @media screen and (max-width: 767px) {
      max-width: 300px;
      width: 80%;
    }
  }
  @media screen and (max-width: 767px) {
    align-items: center;
  }
}

.nft__description{
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin: 44px 0 48px;
  max-width: 760px;
}

</style>
