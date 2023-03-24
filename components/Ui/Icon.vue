import { default } from '../config/pinia';
<!-- 創建一個icon的元件 -->
<template>
    <div :class="iconClass">
        <template v-if="url">
            <a :href="url">
                <img :src="imageSrc" :alt="alt" :width="size" />
            </a>
        </template>
        <template v-else>
            <img :src="imageSrc" :alt="alt" :width="size" />
        </template>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    url: {
        type: String,
    },
    src: {
        type: String,
        default: "",
    },
    icon: {
        type: String,
    },
    alt: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        default: 24,
    },
    class: {
        type: String,
        default: "",
    },
});
const imageSrc = computed(() => (props.src !== "" ? props.src : `./image/icon/${props.icon}.svg`));
const iconClass = computed(() => props.class + " icon");
</script>
<style lang="scss">
.icon {
    position: relative;
    min-width: 24px;
    min-height: 24px;
}
a,
img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
