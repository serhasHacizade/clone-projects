<template>
    <div id="create-post" class="fixed z-50 bottom-0 h-full w-full overflow-hidden">
        <div class="bg-black h-full w-full text-white overflow-auto">
            <div class="flex items-center justify-start py-4 max-w-[500px] mx-auto border-b border-b-gray-700">
                <button @click="userStore.isMenuOverlay = false;clearData()" class="rounded-full px-2">
                    <Icon name="mdi:close" size="25"/>
                </button>
                <div class="text-[16px] font-semibold">New Thread</div>
            </div>
            <div id="post" class="z-40 bottom-0 max-h-[100vh-200px] w-full px-3 max-w-[500px] mx-auto">
                <div class="py-2 w-full">
                    <div class="flex items-center">
                        <div class="flex items-center text-white">
                            <img class="rounded-full h-[35px]" src="https://picsum.photos/223/50" alt="">
                            <div class="ml-2 font-semibold text-[18px]">Erne Salih</div>
                        </div>
                    </div>
                    <div class="relative flex items-center w-full">
                        <div class="w-[42px] mx-auto">
                            <div class="absolute ml-4 mt-1 top-0 w-[1px] bg-gray-700 h-full" />
                        </div>
                        <div class="bg-black rounded-lg w-[calc(100%-50px)] text font-light">
                            <div class="pt-2 text-gray-300 bg-black w-full">
                                <textarea v-model="text" style="resize: none;" 
                                placeholder="Start a thread..." id="textarea" @input="adjustTextareaHeight()"
                                class="w-full bg-black outline-none" autofocus ></textarea>
                            </div>
                            <div class="w-full">
                                <div class="flex flex-col gap-2 py-1">
                                    <div v-if="fileDisplay">
                                        <img class="mx-auto w-full mt-2 mr-2 rounded-lg" :src="fileDisplay" alt="">
                                    </div>
                                    <label for="fileInput">
                                        <Icon name="clarity:paperclip-line" color="#fff" size="25" />
                                        <input type="file" ref="file" name="" id="fileInput" @input="onChange" hidden accept=".jpg,.jpeg,.png ">
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button v-if="text" :disabled="isLoading" class="fixed bottom-0 font-bold text-lg w-full bg-black inline-block float-right 
            p-4 border-t border-t-gray-700" :class="isLoading ? 'text-gray-600' : ''">
            <div v-if="!isLoading">Post</div>
            <div v-else class="flex items-center gap-2 justify-center">
                <Icon name="eos-icons:bubble-loading" size="25" />
                Please wait...
            </div>
            </button>
        </div>
    </div>
</template>

<script setup>
import {v4 as uuidv4} from "uuid";
import { useUserStore } from "../stores/user";
const userStore = useUserStore();
import { ref } from "vue";

const runtimeConfig = useRuntimeConfig();
let isMenu = ref(false);
let isLike = ref(false);
let isDeleting = ref(false);

const emit = defineEmits(["isDeleted"]);
const props = defineProps({ post: Object });

// const client = useSupabaseClient();
// const user = useSupabaseUser()

let text = ref(null);
let isLoading = ref(false);

const adjustTextareaHeight = () => {
    var textarea = document.getElementById("textarea");
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
};

let file = ref(null);
let fileDisplay = ref(null);
let fileData = ref(null);

const  clearData = () => {
    text.value = null;
    file.value = null;
    fileDisplay.value = null;
    fileData.value = null;
};

const onChange = () => {
    fileDisplay.value = URL.createObjectURL(file.value.files[0]);
    fileData.value = file.value.files[0]
};
</script>