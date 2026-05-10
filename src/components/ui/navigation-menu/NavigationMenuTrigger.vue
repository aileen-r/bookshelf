<script setup lang="ts">
import type { NavigationMenuTriggerProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { NavigationMenuTrigger, useForwardProps } from "reka-ui";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from ".";
import Icon from "@/components/common/Icon.vue";

const props = defineProps<
  NavigationMenuTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <NavigationMenuTrigger
    data-slot="navigation-menu-trigger"
    v-bind="forwardedProps"
    :class="cn(navigationMenuTriggerStyle(), 'group', props.class)"
  >
    <slot />
    <Icon
      :icon="ArrowDown01Icon"
      class="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuTrigger>
</template>
