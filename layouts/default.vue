<script setup lang="ts">
import Navigation from "@/components/header/Navigation";
</script>

<template>
  <div class="flex min-h-screen w-full flex-col">
    <Navigation />
    <slot />
  </div>
</template>
