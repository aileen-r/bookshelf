<template>
  <form class="w-full max-w-sm" :class="class" @submit.prevent="onSubmit">
    <!-- <form class="w-full max-w-sm" :class="class" action="/api/auth/signin" method="post"> -->
    <FieldGroup>
      <Field>
        <FieldLabel for="email"> Email </FieldLabel>
        <Input
          v-model="email"
          id="email"
          type="email"
          placeholder="me@example.com"
          required
        />
      </Field>
      <Field>
        <FieldLabel for="password"> Password </FieldLabel>
        <Input v-model="password" id="password" type="password" required />
      </Field>
      <Field>
        <Button type="submit" :disabled="loading">
          <Spinner v-if="loading" class="animate-spin" /> Login
        </Button>
      </Field>
    </FieldGroup>
  </form>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const email = ref("");
const password = ref("");
const loading = ref(false);
async function onSubmit() {
  loading.value = true;
  try {
    const response = await fetch("/api/auth/signin", {
      method: "POST",
      body: JSON.stringify({ email: email.value, password: password.value }),
    });
    // TODO: redirect to home needed
  } catch (err) {
    // Display error

  } finally {
    loading.value = false;
  }
}
</script>
