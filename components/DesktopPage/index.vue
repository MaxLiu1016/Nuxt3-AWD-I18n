<script setup lang="ts">
defineProps({
    data: {
        type: Object,
        default: {},
    },
});
</script>
<template>desktop {{ data }}</template>
