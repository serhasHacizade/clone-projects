<template>
    <div class="ml-[420px] w-full">
        <div class="w-full">
            <div id="BG" class="w-full h-full fixed"></div>
            <div class="border-l border-green-500 w-full">
                <div class="bg-[#F0F0F0] fixed z-10 min-w-[calc(100vw-420px)] 
                flex justify-between items-center px-2 py-2">
                    <div class="flex items-center">
                        <img src="https://placehold.co/100x100" alt="" class="rounded-full mx-1 w-10">
                        <div class="text-gray-900 ml-1 font-semibold">Frank</div>
                    </div>
                    <DotsVerticalIcon fillColor="#515151" />
                </div>
            </div>
            <div id="messages-section" class="pt-20 pb-8 z-[-1] h-[calc(100vh-65px)] overflow-auto
            w-[calc(100vw-420px)] fixed touch-auto">
                <div class="text-sm px-20">
                    <div class="flex w-[calc(100%-50px)] justify-end">
                        <div class="inline-block bg-white p-2 rounded-md my-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, perferendis? Laboriosam
                            quisquam autem consequatur aspernatur officiis aliquam, perspiciatis incidunt at, placeat
                            quasi dolores quibusdam voluptas architecto nobis? Consequatur, quidem deserunt!
                        </div>
                    </div>
                    <div class="flex w-[calc(100%-50px)] space-x-1 float-right">
                        <div class="inline-block bg-green-200 p-2 rounded-md my-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, perferendis? Laboriosam
                            quisquam autem consequatur aspernatur officiis aliquam, perspiciatis incidunt at, placeat
                            quasi dolores quibusdam voluptas architecto nobis? Consequatur, quidem deserunt!
                        </div>
                    </div>
                </div>

            </div>
            <div class="w-[calc(100vw-420px)] p-2.5 z-10 bg-[#F0F0F0] fixed bottom-0">
                <div class="flex items-center justify-center">
                    <EmoticonExcitedOutlineIcon :size="27" fillColor="#515151" class="mx-1.5" />
                    <PaperclipIcon :size="27" fillColor="#515151" class="mx-1.5 mr-3" />
                    <input type="text" class="mr-1 shadow appearance-none rounded-lg w-full px-4 py-3
                    text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autocomplete="off"
                        placeholder="Message">
                    <button class="ml-3 p-2 w-12 flex items-center justify-center">
                        <SendIcon fillColor="#515151" />
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import DotsVerticalIcon from "vue-material-design-icons/DotsVertical.vue";
import EmoticonExcitedOutlineIcon from "vue-material-design-icons/EmoticonExcitedOutline.vue";
import PaperclipIcon from "vue-material-design-icons/Paperclip.vue";
import SendIcon from "vue-material-design-icons/Send.vue";


</script>

<style>
    #BG {
        background: url("/message-bg.png") no-repeat center;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: -1;
    }
</style>

