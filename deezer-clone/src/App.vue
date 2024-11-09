<script setup>
import {onBeforeMount} from "vue"

import { RouterLink, RouterView } from "vue-router";
import Magnify from "vue-material-design-icons/Magnify.vue";
import Bell from "vue-material-design-icons/Bell.vue";

import SideMenuItem from "./components/SideMenuItem.vue";
import MusicPlayer from "./components/MusicPlayer.vue";

import { useSongStore } from "./stores/song";
import { storeToRefs } from "pinia";
const useSong = useSongStore();
const {isPlaying, currentTrack, isLyrics, trackTime} = storeToRefs(useSong);
onBeforeMount(() => {
  isPlaying.value = false;
  isLyrics.value = false;
  trackTime.value = "0:00";
})

</script>

<template>
  <div
    id="TopNav"
    class="fixed right-0 flex items-center justify-between w-[calc(100%-240px)] h-[56px] border-b border-b-[#32323D]  overflow-x-hidden"
  >
    <div class="flex items-center w-full">
      <Magnify class="pl-6 mt-1 pr-2" fillColor="#7E7E88" :size="22" />
      <input
        type="text"
        class="pt-1 bg-transparent outline-none font-[300] placeholder-[#BEBEC7] text-[#FFF] w-full max-w-xl"
        placeholder="Search"
      />
    </div>
    <div class="flex items-center pr-10">
      <div class="mr-4 p-1 hover:bg-gray-600 rounded-full cursor-pointer">
        <Bell fillColor="#FFFFFF" :size="20" />
      </div>
      <img
        src="https://yt3.ggpht.com/yti/ANjgQV91DDHMknRuNLgEED2yGho-Qpj8YtY06V-eJGAsWweIVFY=s88-c-k-c0x00ffffff-no-rj"
        alt=""
        class="rounded-full w-[33px]"
      />
    </div>
  </div>
  <div
    id="SideNav"
    class="fixed w-[240px] bg-[#191922] h-[100vh] border-r border-r-[#32323D]"
  >
    <div class="w-full pl-6 pt-3 cursor-pointer">
      <RouterLink to="/">
        <img src="/images/deezer-logo.png" width="130" alt="logo">
      </RouterLink>
    </div>
    <div class="mt-[53px]"></div>

    <SideMenuItem iconString="music" :iconSize="20" pageUrl="/" name="Music"/>
    <SideMenuItem iconString="podcast" :iconSize="20" pageUrl="/podcasts" name="Podcasts"/>
    <SideMenuItem iconString="explore" :iconSize="20" pageUrl="/artist" name="Explore"/>
    <SideMenuItem iconString="favourite" :iconSize="20" pageUrl="/favourite" name="Favourites"/>

    <div class="text-[#A2A2AD] font-light text-[12px] pl-[62px] mt-[25px]">
      <div class="py-[9px] gover:text-[#EF5465] cursor-pointer">
        Favourite tracks
      </div>
      <div class="py-[9px] gover:text-[#EF5465] cursor-pointer">Playlist</div>
      <div class="py-[9px] gover:text-[#EF5465] cursor-pointer">Albums</div>
      <div class="py-[9px] gover:text-[#EF5465] cursor-pointer">Artists</div>
      <div class="py-[9px] gover:text-[#EF5465] cursor-pointer">Podcasts</div>
    </div>
  </div>

  <div
    class="fixed w-[calc(100%-240px)] h-[calc(100%-56px)] ml-[240px] mt-[56px] overflow-x-hidden"
  >
    <RouterView />
  </div>
  <MusicPlayer v-if="currentTrack"/>
</template>
