<template>
    <div class="flex">
        <div id="header" class="fixed w-[420px] z-10">
            <div class="bg-[#F0F0F0] w-full flex justify-between items-center px-3 py-2">
                <img class="rounded-full ml-1 w-10"
                    src="https://musicimage.xboxlive.com/catalog/video.tvseason.8D6KGWX78G76/image?locale=en-us&purposes=BoxArt&mode=crop&q=90&h=100&w=100"
                    alt="">
                <div class="flex items-center justify-center">
                    <AccountGroupIcon fillColor="#515151" class="mr-6" />
                    <DotsVerticalIcon fillColor="#515151" class="cursor-pointer" />
                </div>
            </div>
            <div id="search" class="bg-white w-full px-2 border-b shadow-sm">
                <div class="px-1 m-2 bg-[#F0F0F0] flex items-center justify-center rounded-md">
                    <MagnifyIcon fillColor="#515151" :size="18" class="mr-6" />
                    <input type="text" class="ml-5 appearance-none w-full bg-[#F0F0F0] py-1.5 px-2.5 
                            text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm
                            placeholder:text-gray-500" autocomplete="off" placeholder="Start a new chat">
                </div>
            </div>
        </div>
        <ChatsView class="mt-[100px]" />

        <div v-if="open">
            <MessageView />
        </div>

        <div v-else>
            <div class="ml-[420px] fixed w-[calc(100vw-420px)] h-[100vh] -100 text-center">
                <div class="grid h-screen place-items-center">
                    <div>
                        <div class="w-full items-center justify-center">

                            <img width="375" src="../../public/w-web-not-loaded-chat.png" alt="">
                        </div>
                        <div class="text-[32px] text-gray-500 font-light mt-10">Whatsapp Web</div>
                        <div class="text-[14px] text-gray-600 font-light mt-2">
                            <div>Send and receive messages without keeping your phone online.</div>
                            <div>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script setup>
import ChatsView from "./ChatsView.vue";
import MessageView from "./MessageView.vue";

import AccountGroupIcon from "vue-material-design-icons/AccountGroup.vue";
import DotsVerticalIcon from "vue-material-design-icons/DotsVertical.vue";
import MagnifyIcon from "vue-material-design-icons/Magnify.vue";

import { ref } from "vue";

let open = ref(true);
</script>

<style lang="scss" scoped></style>