<template>
  <a v-if="loggedIn" href="/api/auth/signout" @click="signOut">Sign Out</a>
  <a v-else href="/auth/signin">Sign In</a>
</template>

<script setup>
const props = defineProps({loggedIn: Boolean});
</script>