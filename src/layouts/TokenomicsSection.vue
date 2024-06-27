<script setup>
import { schemeDetails } from '@/assets/scripts/content/scheme-details.js';

</script>

<template>
<div id='tokenomics' class="section tokenomics">

<div class="container tokenomics_container">
  <div class="tokenomics_header">
    <div class="header-wrapper">
          <h2 class="heading heading--l">
            Tokenomics
          </h2>
          <p class='heading heading--duplicate'>Money</p>
    </div>
    <p class='paragraph paragraph--l'>Tokenomics is an exact science. No joke!
    </p>
  </div>
  <div class="tokenomics_main">
    <div class="tokenomics_image-wrapper">
      <img class="tokenomics__image tokenomics__image--desktop" src="/images/tokenomics.svg" alt="hero images">
      <img class="tokenomics__image tokenomics__image--mobile" src="/images/scheme-without-description.svg" alt="hero images">
    </div>
    <div class="tokenomics_details">
      <template 
      v-for="(detail, index) in schemeDetails"
      :key="index"
      >
      <div class="tokenomics_detail">
        <div class="tokenomics_detail-ordinal-number description description--l">{{index + 1}}.</div>
        <div class="tokenomics_detail-content">
          <div class="tokenomics_detail-percent description description--l">{{detail.percent}}</div>
            <div class="tokenomics_detail-inner">
              <div class="tokenomics_detail-name description description--m">{{detail.name}}</div>
              <div class="tokenomics_detail-number description description--s">{{detail.number}}</div>
            </div>
        </div>
      </div>
    </template>
    </div>
    <div class="tokenomics_text-wrapper">
      <p class='paragraph paragraph--l'>
        Fair launch, no pre-sales. We will announce the date and time for the minting of the $PPKAS token in advance. Tokenomics and coin distribution will be as transparent as possible for the community, with addresses holding project tokens publicly disclosed. Developer shares will begin to unlock gradually 3 months after token deployment. Tokenomics include deflationary mechanisms and token burning. Play and earn!
      </p>
    </div>
  </div>
  <div class="tokenomics_footer">
    <div class="paragraph paragraph--l">Initial Total Supply:  10,000,000,000</div>
    <div class="paragraph paragraph--l">Minted Supply:  500,000,000</div>
    <div class="paragraph paragraph--l">Minted in batches: 5000 PPKAS</div>
    <div class="paragraph paragraph--l">Mint Opportunities: 100,000</div>
    <div class="paragraph paragraph--l">1 PPKAS = 0.0002 KAS</div>
</div>
</div>
</div>
</template>



<style scoped lang="scss">
.tokenomics{
  padding: 5.625rem 0;
  @media screen and (max-width: 991px) {
    padding: 4.75rem 0;
  }
}
.tokenomics_container{
  display: flex;
  flex-direction: column;
}
.tokenomics_header{
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    text-align: center;
  } 
}
.tokenomics_main{
  width: 100%;
  margin: 70px 0 40px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    gap:2.5rem;
  }
  @media screen and (max-width: 767px) {
      margin: 2.5rem 0;
    }
}
.tokenomics_image-wrapper{
  min-width: 50%;
  position: relative;
} 
.tokenomics_image{
  width: 100%;
}
.tokenomics__image{
  width: 110%;
  position: relative;
  max-width: inherit;
  @media screen and (max-width: 1280px) {
    width: 100%;
  }
  &.tokenomics__image--desktop{
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  &.tokenomics__image--mobile{
    display: none;
    @media screen and (max-width: 767px) {
      display: block;
    }
  }
}
.tokenomics_details{
  width: 100%;
  display: none;
  align-items: flex-start;
  column-gap: 2rem;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;

  @media screen and (max-width: 767px) {
    display: flex;
  }
}
.tokenomics_detail{
  display: flex;
  align-items: center;
  gap: 2rem;
  }
.tokenomics_detail-ordinal-number{
  font-size: 2.5rem;
  @media screen and (max-width: 479px) {
      font-size: 2rem;
    }
}
.tokenomics_detail-content{
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media screen and (max-width: 479px) {
    flex-direction: column;
    align-items: flex-start;
  }
}
.tokenomics_detail-percent{
color: var(--accent-palette-tone-100);
@media screen and (max-width: 479px) {
    border-bottom: 1px solid var(--primary-text-color);
  }
}
.tokenomics_detail-inner{
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.tokenomics_detail-name{
  
}
.tokenomics_detail-number{
  color: var(--base-palette-tone-400);
}
.tokenomics_text-wrapper{
  width: 100%;
  position: relative;
  z-index: 1;

}
.tokenomics_footer{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.5rem;
  flex-wrap: wrap;

  
  @media screen and (max-width: 1280px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: 479px) {
      flex-direction: column;
      align-items: flex-start;
    }
}
</style>
