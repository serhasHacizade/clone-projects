<script setup>
import {ref, watch, onMounted} from "vue";
import ShuffleVariant from "vue-material-design-icons/ShuffleVariant.vue";
import HeartOutline from "vue-material-design-icons/HeartOutline.vue";
import MicrophoneVariant from "vue-material-design-icons/MicrophoneVariant.vue";
import Plus from "vue-material-design-icons/Plus.vue";
import Tune from "vue-material-design-icons/Tune.vue";
import Play from "vue-material-design-icons/Play.vue";
import Pause from "vue-material-design-icons/Pause.vue";
import PictureInPictureBottomRight from "vue-material-design-icons/PictureInPictureBottomRight.vue";
import SkipBackward from "vue-material-design-icons/SkipBackward.vue";
import SkipForward from "vue-material-design-icons/SkipForward.vue";
import VolumeHigh from "vue-material-design-icons/VolumeHigh.vue";
import VolumeMute from "vue-material-design-icons/VolumeMute.vue";

import lyrics from "../lyrics.json"

import uniqolor from "uniqolor";

import { useSongStore } from "@/stores/song";
import { storeToRefs } from "pinia";

const useSong = useSongStore();
const {isPlaying, audio, currentTrack, currentArtist, trackTime, isLyrics, currentVolume} = storeToRefs(useSong);

let randolor =ref("");
randolor.value = uniqolor.random();
let isHover = ref(false);
let isVolumeHover = ref(false);
let isTrackTimeCurrent = ref("0:00");
let isTrackTimetotal = ref("0:00");
let seeker = ref(null);
let seekerContainer = ref(null);
let range = ref(0);

onMounted(() => {
    if (audio.value) {
        setTimeout(() => {
            timeupdate()
            loadmetadata()
        }, 300);
    }
})

const timeupdate = () => {
    audio.value.addEventListener("timeupdate", () => {
        var minutes = Math.floor(audio.value.currentTime / 60);
        var seconds = Math.floor(audio.value.currentTime - minutes * 60);
        isTrackTimeCurrent.value = minutes + ":" + seconds.toString().padStart(2, "0")

    })
};

</script>

<template>
    <div>
        
    </div>
</template>

<style> 
.rangeDotHidden[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 0;
    height: 0;
}

.rangeDot[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: white;
    border-radius: 100%;
    width: 12px;
    height : 12px;
}
</style>