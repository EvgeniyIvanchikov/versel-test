<script setup>
import Networks from '../components/Networks.vue';


</script>

<template>
<div class="section footer">
  <div class="container footer__container">
    <div class="footer__grid">
      <div class="footer__column">
        <div class="footer__main-link-wrapper">
          <a href="" class='heading footer__main-link'>$PPKAS</a>
        </div>
        <div class="footer__networks-wrapper">
            <Networks />
        </div>

      </div>

      <div class="footer__column">
        <div class="footer__logos">
          <a href="https://kaspa.org/" target='_blank' class="footer__logo-link">
            <img class="footer__logo" src="/images/kaspa.svg" alt="hero images">
          </a>
          <a href="https://www.kasplex.org/" target='_blank' class="footer__logo-link">
            <img class="footer__logo" src="/images/kasplex.png" alt="hero images">
          </a>
          <a href="https://www.kasware.xyz/" target='_blank' class="footer__logo-link">
            <img class="footer__logo" src="/images/kasware-best.png" alt="hero images">
          </a>

        </div>
      </div>
          </div>

    </div>
    <div class="footer__copyright-box">
        <div class="container footer__container">
          <div class="footer__copyright">Copyright © 2024</div>
        </div>
    </div>
</div>
</template>



<style scoped lang="scss">
.footer{
  padding: 1.25rem 0;
  border-top: 2px solid hsla(0, 0%, 100%, 0.15);
  color: var(--base-palette-tone-300);
  display: flex;
  flex-direction: column;
  position: relative;
}
.footer__container{
  position: static;
}
a{
  transition: var(--transition-default);
  .footer__logo{
    transition: var(--transition-default);
    }
  &:hover{
    color: var(--primary-text-color) !important;
    .footer__logo{
      opacity: 1;
    }
  }
}
.footer__grid{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    gap: 1.875rem;
  }
}
.footer__column{
  display: flex;
  align-items: center;
  gap: 1.875rem;
  @media screen and (max-width: 479px) {
    flex-direction: column;
  }
}
.footer__main-link{
  font-size: 3.25rem;

}
.footer__logos{
  display: flex;
  gap: 1.875rem;
  align-items: center;
  @media screen and (max-width: 479px) {
    flex-direction: column;
  }
}
.footer__logo{
  filter: grayscale(1) invert(1) brightness(6);
  max-height: 1.5rem;
  opacity: 0.65;
  @media screen and (max-width: 479px) {
    max-height: 2.5rem;
  }
}
.footer__copyright-box{
  text-align: center;
  @media screen and (max-width: 1280px) {
    margin-top: 1.25rem;
    padding-top: 1.25rem;
    border-top: 2px solid hsla(0, 0%, 100%, 0.15);
  }
}
.footer__copyright{
  position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: 0;
    transform: translateY(-50%);
    @media screen and (max-width: 1280px) {
      position: relative;
      transform: none;
      top: 0;
    }
}
</style>
