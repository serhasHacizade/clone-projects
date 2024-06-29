<template>
    <div class="flex">
        <div id="header" class="fixed w-[420px] z-10">
            <div class="bg-[#F0F0F0] w-full flex justify-between items-center px-3 py-2">
                <img src="https://placehold.co/100x100" alt="" class="rounded-full ml-1 w-10">
                <div class="flex items-center justify-center">
                    <AccountGroupIcon fillColor="#515151" class="mr-6" />
                    <DotsVerticalIcon fillColor="#515151" class="mr-6 cursor-pointer" />
                </div>
            </div>
            
            <div id="searh" class="bg-white w-full px-2 border-b shadow-sm">
                <div class="px-1 m-2 bg-[#F0F0F0] flex items-center justify-center rounded-md">
                    <MagnifyIcon fillColor="#515151" class="ml-2" :size="18" />
                    <input type="text" class="ml-5 appearance-none w-full bg-[#F0F0F0] px-1.5 py-2.5
                    text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                    placeholder:text-sm placeholder:text-gray-500" autocomplete="off" 
                    placeholder="Start a new chat">
                </div>
            </div>
        </div>
        <ChatsView class="mt-[100px]"/>
    </div>
</template>


<script setup>
import AccountGroupIcon from "vue-material-design-icons/AccountGroup.vue";
import DotsVerticalIcon from "vue-material-design-icons/DotsVertical.vue"; 
import MagnifyIcon from "vue-material-design-icons/Magnify.vue"; 


import ChatsView from "./ChatsView.vue"
</script>