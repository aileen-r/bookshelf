<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem v-for="link in links">
        <NavigationMenuLink :href="link.href">
          {{ link.name }}
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
<script setup>
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];
</script>

<style lang="css" scoped>
nav {
  font-size: 1rem;
}
</style>
