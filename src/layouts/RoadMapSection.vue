<script setup>
import StageStatusIcon from '../components/StageStatusIcon.vue'
import { roadMap } from '@/assets/scripts/content/roadmap.js';

defineProps({
  status: Boolean,
})

</script>

<template>
<div id='road-map' class="section roadmap">
  <div class="section__background-images">
  <img class="section__background-image" src="/images/rocket-new.webp" alt="hero images">
  <div class="section__background-overlay"></div>
</div>

<div class="container roadmap_container">
  <div class="roadmap__grid">
    <div class="roadmap__column roadmap__column--heading">
      <div class="header-wrapper">
        <h2 class="heading heading--l">
          RoadMap
        </h2>
        <p class='heading heading--duplicate'>RoadMap</p>
      </div>
      <p class='paragraph paragraph--l'>
        Somewhere around here was a slick map for zippin' around on improbability thrust... Ah, there she blows!
      </p>

    </div>
    <div class="roadmap__column roadmap__column--content">
      <div class="roadmap__line"></div>
      <div class="roadmap__common-list">

        <div 
        class="roadmap__common-item"
        v-for='(list, index) in roadMap'
        :key='index'
        >
          <div class="roadmap__stage-status-box">
            <StageStatusIcon :status='list.listStage' />
          </div>
          <h3 class="heading heading--l">
          {{list.listName}}
          </h3>
          <div class="roadmap__inner-list">
            <div 
            class="roadmap__inner-item"
            v-for='(listItem, index) in list.listItems'
            :key='index'
            >
              <div class="roadmap__inner-item-status" >
                <svg v-if='listItem.listItemStage' width="31" height="26" viewBox="0 0 31 26" fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2056 6.53582L12.1162 20.8091L10.9886 20.7577L8.5978 17.3535L6.20703 13.9493L7.37458 13.1301L11.6252 19.1819L23.1166 5.61377L24.207 6.53582H24.2056Z" fill="currentColor"/>
                </svg>
                <svg v-if='!listItem.listItemStage' width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="3" y1="12.25" x2="27" y2="12.25" stroke="white" stroke-width="1,5"/>
                </svg>


              </div>
              <p>{{listItem.listItemName}}</p>
            </div>
        </div>
         </div>  
      </div>

    </div>

  </div>
</div>
</div>
</template>



<style scoped lang="scss">
.roadmap{
  overflow: inherit;
  padding: 174px 0 166px;
  @media screen and (max-width: 991px) {
    padding: 4.75rem 0;
  }
}

.section__background-overlay {
    background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 1) 100%);
}

.roadmap__grid{
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2.5rem;
  @media screen and (max-width: 991px) {
      flex-direction: column;
      gap: 4.5rem;
    }
}
.roadmap__column{
  width: auto;
  display: flex;
  gap: 3.75rem;

  &.roadmap__column--heading{
    width: 40%;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 11.5rem;
    gap:2rem;

    @media screen and (max-width: 1440px) {
      margin: 0 auto;
    }
    @media screen and (max-width: 991px) {
      position: static;
      top: 0;
      width: 100%;
      align-items: center;
      text-align: center;
    }
  }
  &.roadmap__column--content{
    width: calc(50% + 1.25rem);
    padding-left: 1.25rem;
    overflow: hidden;
    @media screen and (max-width: 1280px) {
      width: 60%;
    }
    @media screen and (max-width: 991px) {
      width: 100%;
    }
  }
}

.roadmap__line{
  width: 1px;
  height: auto;
  background: var(--primary-text-color);
  transform: translateY(2.5rem);
  opacity: 0;
  pointer-events: none;
}
.roadmap__common-list{
text-align: left;
}
.roadmap__common-item{
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  gap: 10px;
}
.roadmap__stage-status-box{
  position: absolute;
  top: 15px;
  left: -80px;
}
.roadmap__inner-list{
  display: flex;
  flex-direction: column;
}
.roadmap__inner-item{
  display: flex;
  gap: 10px;
}
.roadmap__inner-item-status{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
