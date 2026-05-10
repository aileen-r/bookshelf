<template>
  <HugeiconsIcon v-bind="props" />
</template>

<script setup>
import { HugeiconsIcon } from "@hugeicons/vue";

const props = defineProps({
  icon: { type: Object, required: true },
  altIcon: { type: Object, default: null },
  showAlt: { type: Boolean, default: false },
  size: { type: Number, default: 16 },
  color: { type: String, default: "currentColor" },
  strokeWidth: { type: Number, default: 1.5 },
});
</script>
