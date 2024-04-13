<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const supabase = useSupabaseClient();

await supabase.auth.signOut();
navigateTo("/");

definePageMeta({
  layout: "loggedout",
});
</script>

<template>
  <div>
    <h1>Logging out... See you soon !!!</h1>
  </div>
</template>
