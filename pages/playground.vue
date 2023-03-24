<template>
    <div class="text-center text-overlay px-3 text-white">
        <!-- <h1>{{ json }}</h1> -->
        <h2 class="text-primary-base">{{ $t("title") }}</h2>
        <h3>{{ count }}</h3>
        <UiIcon class="w-11 h-11" icon="cart" alt="test"></UiIcon>
        <UiButton color="inline" size="s"> 按鈕 </UiButton>
        <UiModel></UiModel>
    </div>
</template>
<script setup lang="ts">
import useStore from "~~/store";
const store = useStore();
const count = ref(store.count);
// const res = await fetch("https://randomuser.me/api");
// const json = await res.json();
const json = await useFetch("https://randomuser.me/api");
</script>
