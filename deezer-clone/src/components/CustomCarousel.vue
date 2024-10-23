<script setup>
import { toRefs, ref } from "vue";
import { RouterLink } from "vue-router";

import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import SliderItem from "./SliderItem.vue";

let currentSlide = ref(0);
let isHoverCategory = ref(false);

const props = defineProps({
  category: String,
  data: Array,
});

const { data, category } = toRefs(props);

const slideTo = (val) => {
  if (val && currentSlide.value <= 7) {
    let res = currentSlide.value + 4;
    if (res <= 12) {
      currentSlide.value = currentSlide.value + 4;
    } else if (res > 12) {
      currentSlide.value = 12;
    }
  } else if (!val) {
    let res = currentSlide.value - 4;
    if (res > 0) {
      currentSlide.value = currentSlide.value - 4;
    } else if (res < 1) {
      currentSlide.value = 0;
    }
  }
};
</script>
<template>
  <div>
    <div class="flex justify-between pb-5 ml-8 mr-6">
      <RouterLink
        to="/artist"
        @mouseenter="($event) => (isHoverCategory = true)"
        @mouseleave="($event) => (isHoverCategory = false)"
        :class="isHoverCategory ? 'hover:text-[#EF5465]' : 'text-white'"
        class="flex items-center font-semibold text-xl cursor-pointer"
      >
        {{ category }}
        <ChevronRight
          :fillColor="isHoverCategory ? '#EF5465' : '#FFFFFF'"
          :size="25"
          class="mt-1"
        />
      </RouterLink>
      <div class="flex items-center">
        <button class="rounded-full p-2 hover:bg-[#2b2b2b]">
          <ChevronLeft
            @click="($event) => slideTo(false)"
            fillColor="#FFFFFF"
            :size="30"
          />
        </button>
        <div class="px-2"></div>
        <button class="rounded-full p-2 hover:bg-[#2b2b2b]">
          <ChevronRight
            @click="($event) => slideTo(true)"
            fillColor="#FFFFFF"
            :size="30"
          />
        </button>
      </div>
    </div>
    <Carousel
      class="mr-8"
      ref="carousel"
      v-model="currentSlide"
      :itemsToShow="4"
      :itemsToScroll="4"
      :transition="800"
      snapAlign="start"
    >
    <Slide class="flex items-baseline" v-for="slide in data" :key="slide" >
      <SliderItem :slide="slide"/>
    </Slide>
  </Carousel>
  </div>
</template>
