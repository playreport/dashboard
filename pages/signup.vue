<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const { t } = useI18n();

const supabase = useSupabaseClient();

const tabs = ref("account");
const nextTab = async () => {
  //validate account tab fields

  tabs.value = "agency";
};

const formSchema = toTypedSchema(
  z.object({
    email: z
      .string({
        required_error: "Please select an email to display.",
      })
      .email(),
  })
);

definePageMeta({
  layout: "loggedout",
});
</script>

<template>
  <div class="flex h-screen">
    <Card class="m-auto max-w-sm">
      <CardHeader>
        <CardTitle class="text-xl">
          {{ t("signup.title") }}
        </CardTitle>
        <CardDescription>
          {{ t("signup.description") }}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs v-model="tabs" default-value="account">
          <TabsList class="grid w-full grid-cols-2">
            <TabsTrigger value="account">
              {{ t("signup.account") }}
            </TabsTrigger>
            <TabsTrigger value="company">
              {{ t("signup.company") }}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div class="grid gap-4">
              <div class="grid grid-cols-2 gap-4">
                <div class="grid gap-2">
                  <Label for="first-name"> {{ t("signup.firstName") }} </Label>
                  <Input id="first-name" placeholder="Max" required />
                </div>
                <div class="grid gap-2">
                  <Label for="last-name"> {{ t("signup.lastName") }} </Label>
                  <Input id="last-name" placeholder="Robinson" required />
                </div>
              </div>
              <div class="grid gap-2">
                <Label for="email"> {{ t("signup.email") }} </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div class="grid gap-2">
                <Label for="password"> {{ t("signup.password") }} </Label>
                <Input id="password" type="password" />
              </div>
              <Button type="submit" @click="nextTab" class="w-full">
                {{ t("signup.next") }}
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="company">
            <div class="grid gap-4">
              <div class="grid grid-cols-1">
                <div class="grid gap-2">
                  <Label for="company-name">{{
                    t("signup.companyData.name")
                  }}</Label>
                  <Input id="company-name" placeholder="Agency" required />
                </div>
              </div>
              <div class="grid grid-cols-1">
                <div class="grid gap-2">
                  <Label for="company-name">{{
                    t("signup.companyData.country")
                  }}</Label>
                  <Select>
                    <SelectTrigger class="">
                      <SelectValue placeholder="Company Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apple"> Apple </SelectItem>
                      <SelectItem value="banana"> Banana </SelectItem>
                      <SelectItem value="blueberry"> Blueberry </SelectItem>
                      <SelectItem value="grapes"> Grapes </SelectItem>
                      <SelectItem value="pineapple"> Pineapple </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div class="grid grid-cols-1">
                <div class="grid gap-2">
                  <Label for="company-vat-number">Vat Number</Label>
                  <Input
                    id="company-vat-number"
                    placeholder="Vat Number"
                    required
                  />
                </div>
              </div>
              <div class="grid gap-2">
                <Label for="company-email">Email</Label>
                <Input
                  id="company-mail"
                  type="email"
                  placeholder="agency@example.com"
                  required
                />
              </div>
              <Button type="submit" class="w-full"> Create an account </Button>
            </div>
          </TabsContent>
        </Tabs>
        <div class="mt-4 text-center text-sm">
          Already have an account?
          <NuxtLink to="/login" class="underline"> Sign in </NuxtLink>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
