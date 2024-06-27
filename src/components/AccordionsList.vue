<script setup>
import { onMounted, ref, computed } from 'vue';
import { Accordions } from '@digital-butlers/components/accordions';

const props = defineProps({
  arrayOfQuestions: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(item => 
        typeof item.question === 'string' && typeof item.answer === 'string'
      );
    }
  },
  dataId: {
    type: String,
    required: true
  }
});

onMounted(() => {
  const componentElement = document.querySelector(`[data-component-id="${props.dataId}"]`);
  if (componentElement) {
    if (props.dataId ==='oddQuestions'){
      window.AccordionOdd =  new Accordions({
        parentElement: componentElement,
        isSingle: true,
      });
    } else{
      window.AccordionEven =  new Accordions({
        parentElement: componentElement,
        isSingle: true,
      });
    }
  }
});

const formattedAnswer = (answer) => {
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  return answer.replace(urlPattern, '<a href="$1" target="_blank">$1</a>');
};


</script>

<template>
  


<div data-role="accordion-wrapper" class="faq__accordion-wrapper" :data-component-id=dataId>
      <div data-role="accordion" class="faq__accordion">
        <template
        v-for="(question, index) in arrayOfQuestions"
        :key="index"
        >
      <div data-role="accordion-item" class="faq__accordion-item">
        <div data-role="accordion-summary" class="faq__summary" >
          <h3 class="paragraph paragraph--xl">{{ question.question }}</h3>
          <div class="faq__icon-wrapper">
            <svg width="27" height="14" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0.795345L10.5887 10.9722C12.1678 12.6481 14.8322 12.6481 16.4113 10.9722L26 0.795342" stroke="currentColor" stroke-width="2"/>
            </svg>
  
          </div>
        </div>
        <div data-role="accordion-details" class='faq__details'>
          <div class='faq__details-inner'>
           <p class="paragraph paragraph--m" v-html='formattedAnswer(question.answer)'></p>
          </div>
        </div>
      </div>
      </template>
    </div>
        </div>
        
</template>

<style scoped lang="scss">
.faq__accordion-wrapper{
  width: calc(50% - 1rem);
  @media screen and (max-width: 991px) {
    width: 100%;
  }
}
.faq__accordion{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    text-align: left;
}
[data-accordion-role='item'] {
	transition: var(--transition-default);
  border-radius: 6px;
  overflow: hidden;
  width: 100%;

	.faq__summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 14px 34px ;
		&:hover {
			.faq__icon-line {
				background: var(--accent-palette--accent-1);
			}
		}
	}
  .faq__icon-wrapper{
    transition: var(--transition-default);
  }
  .faq__details-inner{
    padding: 6px 70px 24px 34px;
    text-align: left;

    a{
      text-decoration: underline;
      text-underline-offset: 3px;
      &:hover{
        color: var(--accent-palette-tone-100);
        background-color: red;
      }
    }
  }
	&.js--open {
    background: var(--base-palette-tone-800);
		.faq__summary {
			.faq__icon-line {
				background: var(--accent-palette--accent-1);
			}
		}

		.faq__icon-wrapper{
      transform: rotate(180deg);
		}
	}
  &:hover{
    background: var(--base-palette-tone-800);
  }
}
</style>
