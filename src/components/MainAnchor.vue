<script setup>
import { ref } from 'vue'
import { isOpen, toggleLock } from '@/assets/scripts/store.js';

defineProps({
  msg: String,
  href: String,
});

const scrollToSection = (event) => {
  // if (window.matchMedia('(min-width: 992px)').matches){
  //   event.preventDefault();
  // }
  // console.log();
  // const anchor = event.target;
  // const currentId = anchor?.getAttribute('href');
  // const currentSection = document.querySelector(currentId);
  // if (currentSection) {
  //       currentSection.scrollIntoView({
  //         behavior: 'smooth'
  //       });

  //       isOpen.value = false;
  //       toggleLock();
  // }
  
  // event.preventDefault();
  const anchor = event.target;
  const targetId = anchor.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 900;
    let startTime = null;

    const scroll = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const next = easeInOutQuad(timeElapsed, startPosition, distance, duration);

      window.scrollTo(0, next);

      if (timeElapsed < duration) {
        window.requestAnimationFrame(scroll);
      }
      isOpen.value = false;
      toggleLock();
    };

    window.requestAnimationFrame(scroll);
  }
}

// Функция плавного изменения (ease in out quad)
function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}

</script>

<template>
  <div 
  :href="href" 
  class="heading heading--m navigation__anchor"
  @click="scrollToSection"
  >
  {{ msg }}
</div>

</template>

<style scoped lang="scss">
.navigation__anchor {
  transition: var(--transition-default);
  cursor: pointer;
  user-select: none;
  
  &:hover {
        color: var(--accent-palette-tone-100);
  }
}

</style>
