<script setup>
import Button from '../components/Button.vue'

</script>

<template>
<div id='mobile-game' class="section game">
<div class="section__background-images">
  <img class="section__background-image" src="/images/space.webp" alt="hero images">
  <div class="section__background-overlay"></div>
</div>

<div class="container game_container">
  <div class="game__grid">
    <div class="game__column">
      <div class="header-wrapper">
        <h2 class="heading heading--l">
          Mobile Game
        </h2>
        <p class='heading heading--duplicate'>money</p>
      </div>
      <div class="game__description">
        <p class='paragraph paragraph--l'>
          This mobile game jets players off on a cosmic journey where you can link up with your squad, flex against other players, and rack up those tokens!
          On this escapade, you and your sidekick PepeKAS will be diving into the Kaspa world, answering Qs, leaping, sprinting, soaring, and even doing some mining.
          While you're at it, you'll be snagging those $PPKAS tokens because the PepeKAS tokenomics are all about fair, thrilling, and enlightening token distribution!

        </p>
      </div>
      <Button msg="PLAY on telegram" href="" target='_blank' />

    </div>
    <div class="game__column game__column--with-image">
      <img class="game__image" src="/images/game-mockup.webp" alt="hero images">
    </div>
  </div>


</div>
</div>
</template>



<style scoped lang="scss">
.game{
  position: relative;
  overflow: hidden;
  padding: 4.75rem 0;
  width: 100%;
}

.game__grid{
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 110px;
  gap: 100px;
  @media screen and (max-width: 991px) {
    padding: 0;
    gap: 2.5rem;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    gap: 4.5rem;
  }
}
.game__column{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &.game__column--with-image{
    width: 300px;
    min-width: 300px;
  }
  @media screen and (max-width: 767px) {
    align-items: center;
  }
}
.game__description{
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin: 44px 0 48px;
  @media screen and (max-width: 767px) {
    text-align: center;
  }
}
.game__image{
  width: 100%;
  max-height: 625px;
  position: relative;
  object-fit: contain;
  @media screen and (max-width: 479px) {
    width: 80%;
  }
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
