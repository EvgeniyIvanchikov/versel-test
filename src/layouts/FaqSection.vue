<script setup>
import { onMounted, ref, computed } from 'vue';
import { questionsArray } from '@/assets/scripts/content/questions.js';
import AccordionsList from '../components/AccordionsList.vue'

const evenQuestions = computed(() => {
  return arrayOfQuestions.value.filter((_, index) => index % 2 === 1);
});
const oddQuestions = computed(() => {
  return arrayOfQuestions.value.filter((_, index) => index % 2 === 0);
});

const arrayOfQuestions = ref (questionsArray);

const closeOtherItems = (event) => {
  const { target } = event;
  const currentButton = target.closest('[data-accordion-role="summary"]');
  if (!currentButton) {
    return
  };

  const currentComponent = currentButton.closest('[data-role="accordion-wrapper"]'); 
  const componentId = currentComponent?.getAttribute('data-component-id');

  if (componentId === 'oddQuestions'){
    if (window.AccordionEven){
      window.AccordionEven.closeAll();
    }
  }
  if (componentId === 'evenQuestions'){
    if (window.AccordionOdd){
      window.AccordionOdd.closeAll();
    }
  }
}

onMounted(() => {
  window.addEventListener('click', closeOtherItems);
});
</script>

<template>

<div id='faq' class="section faq">
    <div class="container faq__container">
      <div class="faq__layout">
        <div class="faq__header">
          <div class="header-wrapper">
            <h1 class="heading heading--l">
              FAQ
            </h1>
            <p class='heading heading--duplicate'>Questions</p>
          </div>
          <p class='paragraph paragraph--l'>The cheat sheet to your cosmic quest starts here!</p>
        </div>
      <div class="faq__accordion-global">


<AccordionsList :arrayOfQuestions="oddQuestions" dataId='oddQuestions'/>
<AccordionsList :arrayOfQuestions="evenQuestions" dataId='evenQuestions'/>

      </div>
    </div>
  </div>
</div>


</template>

<style scoped lang="scss">
.faq{
  min-height: 50vh;
  padding: 110px 0 80px;
  @media screen and (max-width: 991px) {
    padding: 4.75rem 0;
  }
}
.faq__layout{
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
}
.faq__header{
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
  text-align: center;
}
.faq__list{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.faq__accordion-global{
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    gap: 1.25rem
  }
}
.heading{
  &--duplicate{
    // left: -1em;
    @media screen and (max-width: 991px) {
    left: auto;
  }
  }
}
.header-wrapper{
  @media screen and (max-width: 991px) {
    margin: auto;
  }
}

</style>
