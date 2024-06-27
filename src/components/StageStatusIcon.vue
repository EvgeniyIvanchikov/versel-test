<script setup>
const props = defineProps({
  status: Boolean,
})
</script>

<template>
    <div 
    class="roadmap__stage-status-inner-box"
    :class="{ 'complete': props.status, 'wait': !props.status }"
  >

  <template v-if="!status">
    <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2636 17.0893V20.3304H2.7373V17.0893C2.7373 16.083 2.94133 15.0905 3.33324 14.1904C3.72514 13.2903 4.29414 12.5074 4.9952 11.9036L6.50046 10.6072L8.00573 11.9036C8.70678 12.5074 9.27579 13.2903 9.66769 14.1904C10.0596 15.0905 10.2636 16.083 10.2636 17.0893Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.00573 9.31082L6.50046 10.6072L4.9952 9.31082C4.29414 8.70703 3.72514 7.92409 3.33324 7.02401C2.94133 6.12393 2.7373 5.13143 2.7373 4.1251V0.884033H10.2636V4.1251C10.2636 5.13143 10.0596 6.12393 9.66769 7.02401C9.27579 7.92409 8.70678 8.70703 8.00573 9.31082Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M0.855469 20.3305H12.1449M0.855469 0.884033H12.1449" stroke="#5BB6A5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
  </template>
  <template v-if="status">
            <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.89746 6.40963L8.32239 12.9519L19.0306 2.0481" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
  </template>
</div>
</template>

<style scoped lang="scss">
.roadmap__stage-status-inner-box{
width: 2.5rem;
min-width: 2.5rem;
height: 2.5rem;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
position: relative;

&.wait{
  background-color: var(--primary-text-color);
  color: var(--primary-text-color);
}
&.complete{
  background-color: var(--accent-palette-tone-100);
  color: var(--accent-palette-tone-100);

}
&::before{
  content: "";
  position: absolute;
  width: 1px;
  height: 150rem;
  background: currentColor;
  z-index: -1;
  top: 0;
  left: auto;
  right: auto;
}
}
</style>
