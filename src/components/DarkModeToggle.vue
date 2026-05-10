<template>
  <input type="checkbox" id="dark-mode" v-model="darkMode" />
  <label for="dark-mode">Dark mode?</label>
</template>

<script setup>
import { ref, watch } from "vue";

const darkMode = ref(false);
watch(darkMode, (newVal, oldVal) => {
  if (newVal === oldVal) {
    return;
  }
  console.log(newVal ? "dark" : "light");
  document.documentElement.setAttribute(
    "data-theme",
    newVal ? "dark" : "light",
  );
});
</script>
