<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
  href: String,
})

</script>

<template>
  
<a 
  :href="href" 
  class="button button--transparent"
  @click="(e) => { if (href.length === 0){e.preventDefault()}}"
  >
  <div 
   class="button__overlay"
  :class="{ 'button__overlay--small-text': href.length === 0 }"
  >
    <template v-if="href.length > 0">
      {{ msg }} 
    </template>
    <template v-else>
      Coming soon;)
    </template>
  </div>
  {{ msg }}
</a>

</template>

<style scoped lang="scss">
.button {
  font-size: 1.625rem;
  font-weight: 400;
  border: 2px solid var(--accent-palette-tone-100);
  position: relative;
  color: var(--accent-palette-tone-100);
  text-transform: uppercase;
  line-height: 200%;
  font-family: var(--font-family-base);
  border-radius: 6px;
  padding: 18px 42px;
  width: max-content;
  max-width: 100%;
  text-align: center;

  .button__overlay{
    padding: 18px 42px;
    position: absolute;
    transition: all 1s ease;
    background-color: var(--primary-text-color);
    z-index: 2;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    clip-path: circle(0% at 50% 50%);
    &.button__overlay--small-text{
      font-size: 1rem;
    }
  }

  &:hover {
    .button__overlay{

      clip-path: circle(142% at 50% 50%);
    }
  }
}

</style>
