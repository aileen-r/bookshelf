<template>
  <ul>
    <li v-for="book in books">{{book}}</li>
  </ul>
</template>
<script setup>
const props = defineProps({ books: Array });
</script>
