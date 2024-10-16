<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Magnify from "vue-material-design-icons/Magnify.vue";
import Bell from "vue-material-design-icons/Bell.vue";
</script>

<template>
  <div id="TopNav" class="fixed right-0 flex items-center justify-between w-[calc(100%-240px)] h-[56px] border-b border-b-[#32323D]"></div>
  <RouterView />
</template>