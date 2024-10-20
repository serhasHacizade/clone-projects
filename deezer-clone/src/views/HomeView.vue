<script setup>
import MixesInspiredBy from "@/components/MixesInspiredBy.vue";
</script>

<template>
  <div class="max-w-[1500px] mx-auto">
    <div class="px-8 mt-8 mi-w-[800px] w-full">
      <div class="text-white text-xl font-semibold inline-block">
        Mixes inspired by...
        <div class="text-sm font-light text-[#A2A2AD]">
          Discover new tracks similar to ypur favourites
        </div>
      </div>
      <div class="py-3"></div>
      <div class="flex justify-between w-full gap-8">
        <div class="xl:w-1/3 w-1/2">
          <MixesInspiredBy
            class="pb-1.5"
            text="VAMPIRE (Oli Sykes of Bring Me The Horizon)"
            by="Ic3peak"
            to="/artist"
            image="https://picsum.photos/id/174/300/300"
          />
          <MixesInspiredBy
            class="pb-1.5"
            text="Deutchland"
            by="Rammstein"
            to="/artist"
            image="https://picsum.photos/id/166/300/300"
          />
          <MixesInspiredBy
            class="pb-1.5"
            text="Fallout"
            by="Masked Wolf"
            to="/artist"
            image="https://picsum.photos/id/127/300/300"
          />
        </div>
      </div>
      <div class="flex justify-between w-full gap-8">
        <div class="xl:w-1/3 w-1/2">
          <MixesInspiredBy
            class="pb-1.5"
            text="Pray For Pagues"
            by="Bring Me the Horizon"
            to="/artist"
            image="https://picsum.photos/id/201/300/300"
          />
          <MixesInspiredBy
            class="pb-1.5"
            text="Candy Truck / You Expected"
            by="Bring Me the Horizon"
            to="/artist"
            image="https://picsum.photos/id/202/300/300"
          />
          <MixesInspiredBy
            class="pb-1.5"
            text="L'efant sauvage"
            by="Gojira"
            to="/artist"
            image="https://picsum.photos/id/212/300/300"
          />
        </div>
      </div>
    </div>
  </div>
</template>
