<script setup lang="ts">
import useStore from "~~/store";
const store = useStore();
const device = store.device;
</script>

<template>
    <PageHandler :device="device" :url="''" :data="{ a: 1223 }"></PageHandler>
</template>
