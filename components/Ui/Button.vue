<template>
    <button :class="allClass" :style="{ width }"><slot></slot></button>
</template>
<script setup lang="ts">
// props
enum styleType {
    primary = "primary",
    red = "red",
    write = "write",
    disabled = "disabled",
    inline = "inline",
}
enum sizeType {
    s = "s",
    m = "m",
    full = "full",
}
const props = defineProps({
    color: {
        type: String,
        default: "primary",
    },
    text: {
        type: String,
    },
    size: {
        type: String,
        default: "m",
    },
    width: {
        type: String,
    },
});
// computed
const bgClass = computed(function () {
    // switch case
    switch (props.color) {
        case styleType.primary:
            return "bg-primary-base hover:bg-primary-120 duration-300 text-write";
        case styleType.red:
            return "bg-danger-base hover:bg-danger-120 duration-300 text-red-base";
        case styleType.write:
            return "bg-write-base hover:bg-primary-10 duration-300 text-primary-base";
        case styleType.disabled:
            return "bg-neutral-50";
        case styleType.inline:
            return "bg-transparent border-2 border-primary-base hover:border-primary-120 hover:bg-primary-10 duration-300 text-primary-base";
    }
});
const sizeClass = computed(function () {
    // switch case
    switch (props.size) {
        case sizeType.s:
            return "inline-block px-4 py-2";
        case sizeType.m:
            return "inline-block px-8 py-4";
        case sizeType.full:
            return "w-full py-4";
    }
});
const allClass = computed(function () {
    return "flex items-center justify-center rounded-lg text-base " + sizeClass.value + " " + bgClass.value;
});
</script>
