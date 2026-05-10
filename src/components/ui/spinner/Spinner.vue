<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Loading02Icon } from "@hugeicons/core-free-icons";
import Icon from "@/components/common/Icon.vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <Icon
    :icon="Loading02Icon"
    role="status"
    aria-label="Loading"
    :class="cn('size-4 animate-spin', props.class)"
  />
</template>
