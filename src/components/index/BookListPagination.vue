<template>
  <nav aria-label="Pagination">
    <a v-if="activePage !== 1" :href="getHref(1)">1</a>
    <span v-if="activePage > 3">...</span>
    <a v-if="activePage > 2" :href="getHref(activePage - 1)">{{
      activePage - 1
    }}</a>
    <span>{{ activePage }}</span>
    <a v-if="activePage < pageCount - 1" :href="getHref(activePage + 1)">{{
      activePage + 1
    }}</a>
    <span v-if="activePage < pageCount - 2">...</span>
    <a v-if="activePage !== pageCount" :href="getHref(pageCount)">{{ pageCount }}</a>
  </nav>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({ pageCount: Number, activePage: Number });
function getHref(page) {
  return `/page/${page}`;
}
</script>

<style lang="css" scoped>
nav {
  display: flex;
  gap: 8px;
}
</style>
