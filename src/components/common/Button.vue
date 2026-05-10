<template>
  <a
    v-if="href"
    :href="href"
    :target="{ external: '_blank' }"
    :rel="{ external: 'noopener nofollow' }"
    ><slot></slot
  ></a>
  <button v-else><slot></slot></button>
</template>

<script setup>
const props = defineProps({ href: [String, null], external: Boolean });
</script>

<style scoped>
  a, button {
    border-radius: 0.5rem;
    /* border-style: var(--tw-border-style); */
    /* font-size: var(--text-sm); */
    /* line-height: var(--tw-leading,var(--text-sm--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium); */
    background-clip: padding-box;
    border-width: 1px;
    border-color: #0000;
  }
</style>
