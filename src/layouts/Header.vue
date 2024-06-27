<script setup>
import MainAnchor from '../components/MainAnchor.vue'
import { onMounted, ref  } from 'vue';
import { arrayOfAnchors } from '@/assets/scripts/content/anchors.js';
import { isOpen, toggleLock } from '@/assets/scripts/store.js';


const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  toggleLock();
};

onMounted(() => {

});

</script>

<template>
<div class="section header">
    <div class="container header_container">
      <div data-role="navigation-wrapper" class="navigation-wrapper" :class="{ 'js--open': isOpen }">
        <div class="navigation-controls">
          <!-- <div class="navigation-logo-wrapper">
            <a href="https://www.google.com/" target='_blank' class='navigation-logo-link'>
              <img class="hero__image hero__image--main" src="/images/pepe-logo-1.svg" alt="hero images">
            </a>
          </div> -->
          <div  class="burger" :class="{ 'js--open': isOpen }" @click="toggleMenu">
            <svg width="100%" height="100%" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="60" height="60" fill="white"/>
            </svg>
            <div class="burger_line burger_line--top"></div>
            <div class="burger_line burger_line--bottom"></div>
          </div>
        </div>
        <div class="navigation">
          <div class="navigation__scroll-box">
            <template 
            v-for="(anchor, index) in arrayOfAnchors" 
            :key="index"
            >
            <MainAnchor :href=anchor.href :msg=anchor.msg />
            <div v-if="index < arrayOfAnchors.length - 1" class="navigation__divider"></div>
            </template>
          </div>
        </div>
      </div>
</div>


</div>
</template>


<style scoped lang="scss">
.header{
  position: sticky;
  overflow: visible;
  top: 0;
  width: 100%;
  z-index: 5;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  margin-top: -6.5rem;
  // background: linear-gradient(0deg, #000 0%, transparent);
  // backdrop-filter: blur(2px);

  @media screen and (max-width: 991px) {
    // background: linear-gradient(180deg, #000 20%, transparent);
    padding-top: 1rem;
    padding-bottom: 1rem;
    order: -1;
    margin-top: 0;
    margin-bottom: -6.5rem;
  }
}

.navigation-wrapper{
  width: 100%;
  &.js--open{
    .navigation{
      transform: translateX(0);
    }
  }
}
.navigation-controls{
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: none;
  gap: 2rem;

  @media screen and (max-width: 991px) {
    display: flex;
  }
}
.navigation-logo-wrapper{
  width: 3.75rem;
  height: 3.75rem;
  position: relative;
  z-index: 3;
}
.navigation{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  @media screen and (max-width: 991px) {
    transition: var(--transition-default);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    height: 100vh;
    width: 100vw;
    background-color: #000;
    transform: translateX(-100%);
  }
}
.navigation__scroll-box{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 991px) {
    gap: 2rem;
    flex-direction: column;
    justify-content: flex-start;
    padding: 7rem 0;
    height: 100%;
    overflow: auto;
  }
}
.navigation__divider{
    display: block;
    width: 1.875rem;
    height: 2px;
    min-height: 1px;
    background-color: var(--primary-text-color);
    opacity: 0.75;
}
.burger{
  width: 3.75rem;
  min-width: 3.75rem;
  height: 3.75rem;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.95);
  position: relative;
  z-index: 3;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
  overflow: hidden;
  
  svg{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .burger_line{
    position: absolute;
    width: 2.5rem;
    height: 3px;
    background: #000;
    border-radius: 10px;
    transition : var(--transition-default);
    z-index: 2;

    &.burger_line--top{
      top: 2.125rem;
    }
    &.burger_line--bottom{
      bottom: 2.125rem;
    }
  }

  &.js--open{
    .burger_line{
      &.burger_line--top{
        transform: rotate(45deg);
        top: 1.75rem;
      }
      &.burger_line--bottom{
        transform: rotate(-45deg);
        bottom: 1.75rem;
      }
    }
  }
}
</style>
