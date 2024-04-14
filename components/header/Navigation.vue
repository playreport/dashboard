<script setup lang="ts">
import {
  CircleUser,
  Globe,
  Tv2,
  Menu,
  Package2,
  Search,
} from "lucide-vue-next";
const colorMode = useColorMode();
const { t, locale, setLocale } = useI18n();
</script>
<template>
  <header
    class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6"
  >
    <nav
      class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
    >
      <NuxtLink to="/">Play Report</NuxtLink>

      <NuxtLink
        to="/"
        class="text-muted-foreground transition-colors hover:text-foreground"
        >{{ t("menu.dashboard") }}</NuxtLink
      >
      <NuxtLink
        to="/projects"
        class="text-muted-foreground transition-colors hover:text-foreground"
        >{{ t("menu.projects") }}</NuxtLink
      >
      <NuxtLink
        to="/settings"
        class="text-muted-foreground transition-colors hover:text-foreground"
        >{{ t("menu.settings") }}</NuxtLink
      >
    </nav>
    <Sheet>
      <SheetTrigger as-child>
        <Button variant="outline" size="icon" class="shrink-0 md:hidden">
          <Menu class="h-5 w-5" />
          <span class="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav class="grid gap-6 text-lg font-medium">
          <a href="#" class="flex items-center gap-2 text-lg font-semibold">
            <Package2 class="h-6 w-6" />
            <span class="sr-only">Acme Inc</span>
          </a>
          <a href="/" class="text-muted-foreground hover:text-foreground">
            Dashboard
          </a>
          <a
            href="/projects"
            class="text-muted-foreground hover:text-foreground"
          >
            Projects
          </a>
          <a
            href="/settings"
            class="text-muted-foreground hover:text-foreground"
          >
            Settings
          </a>
        </nav>
      </SheetContent>
    </Sheet>
    <div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
      <form class="ml-auto flex-1 sm:flex-initial">
        <div class="relative">
          <Search
            class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
          />
          <Input
            type="search"
            placeholder="Search products..."
            class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
          />
        </div>
      </form>

      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="secondary" size="icon" class="rounded-full">
            <Globe class="h-5 w-5" />
            <span class="sr-only">Toggle Language Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem @click="setLocale('en-GB')"> EN </DropdownMenuItem>
          <DropdownMenuItem @click="setLocale('pt-PT')"> PT </DropdownMenuItem>
          <DropdownMenuItem @click="setLocale('es')"> ES </DropdownMenuItem>
          <DropdownMenuItem @click="setLocale('fr')"> FR </DropdownMenuItem>
          <DropdownMenuItem @click="setLocale('de')"> DE </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="secondary" size="icon" class="rounded-full">
            <Tv2 class="h-5 w-5" />
            <span class="sr-only">Toggle Color Mode</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem @click="colorMode.preference = 'light'">
            Light
          </DropdownMenuItem>
          <DropdownMenuItem @click="colorMode.preference = 'dark'">
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem @click="colorMode.preference = 'system'">
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="secondary" size="icon" class="rounded-full">
            <CircleUser class="h-5 w-5" />
            <span class="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            ><NuxtLink to="/logout">Logout</NuxtLink></DropdownMenuItem
          >
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>
</template>
