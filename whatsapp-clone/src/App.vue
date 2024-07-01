<template>
  <router-view></router-view>
</template>

<script setup>
import {onMounted} from "vue"
import { useUserStore } from "@/store/user-store";
const userStore = useUserStore();
import { useRouter } from "vue-router";

const router = useRouter();
onMounted(() => {
  if (!userStore.sub) router.push("/login");
})
</script>