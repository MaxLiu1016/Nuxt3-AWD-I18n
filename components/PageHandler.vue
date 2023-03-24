import Device from '~~/types/eums/device'; import component from '../.nuxt/types/vue-shim';
<script setup lang="ts">
// prop
const props = defineProps({
    data: {
        type: Object,
        default: {},
    },
    device: {
        type: String,
        default: DEVICE_EUNM.Undefine,
    },
    url: {
        type: String,
        default: "",
    },
});
// console.log(props.device);
const componentUrl = computed(() => `${props.device}Page`);
</script>
<template>
    <div>
        <component :is="componentUrl" :data="data"></component>
    </div>
</template>
