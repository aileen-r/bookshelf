<template>
  <!-- <input type="checkbox" id="dark-mode" v-model="darkMode" />
  <label for="dark-mode">Dark mode?</label> -->
  <Button variant="ghost" @click="darkMode = !darkMode"
    ><Icon :icon="Moon02Icon" :alt-icon="Sun03Icon" :showAlt="darkMode"></Icon
  ></Button>
</template>

<script setup>
import Button from "@/components/ui/button/Button.vue";
import Icon from "@/components/common/Icon.vue";
import { Moon02Icon } from "@hugeicons/core-free-icons";
import { Sun03Icon } from "@hugeicons/core-free-icons";
import { ref, watch } from "vue";

const darkMode = ref(false);
watch(darkMode, (newVal, oldVal) => {
  if (newVal === oldVal) {
    return;
  }
  document.documentElement.setAttribute(
    "data-theme",
    newVal ? "dark" : "light",
  );
});
</script>
