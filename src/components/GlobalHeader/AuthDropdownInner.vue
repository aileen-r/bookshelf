<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost">
        <Avatar v-if="loggedIn">
          <AvatarImage
            src="https://images.gr-assets.com/users/1747739675p8/41967655.jpg"
            alt="Aileen"
            width="32"
            height="32"
          />
        </Avatar>
        <Icon v-else :icon="UserIcon" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <template v-if="loggedIn">
        <DropdownMenuLabel>Logged in as Aileen</DropdownMenuLabel>
        <DropdownMenuItem asChild
          ><a href="/api/auth/signout">Sign out</a></DropdownMenuItem
        >
      </template>
      <DropdownMenuItem v-else asChild
        ><a href="/auth/signin">Sign in</a></DropdownMenuItem
      >
    </DropdownMenuContent>
  </DropdownMenu>
  <!-- <a v-if="loggedIn" href="/api/auth/signout" @click="signOut"> Sign Out </a>
  <a v-else href="/auth/signin"> Sign In </a> -->
</template>

<script setup>
import Button from "@/components/ui/button/Button.vue";
import aileen from "@/assets/aileen.jpg";
import Icon from "@/components/common/Icon.vue";
import { UserIcon } from "@hugeicons/core-free-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "../ui/avatar";

const props = defineProps({ loggedIn: Boolean });
</script>
