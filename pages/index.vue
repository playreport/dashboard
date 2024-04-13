<script setup lang="ts">
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-vue-next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

definePageMeta({
  layout: "default",
});
</script>

<template>
  <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
    <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card>
        <CardHeader
          class="flex flex-row items-center justify-between space-y-0 pb-2"
        >
          <CardTitle class="text-sm font-medium">
            Total Items Available
          </CardTitle>
          <DollarSign class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">35 000</div>
          <p class="text-xs text-muted-foreground">
            Items available in the platform
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader
          class="flex flex-row items-center justify-between space-y-0 pb-2"
        >
          <CardTitle class="text-sm font-medium"> Suppliers </CardTitle>
          <Users class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">+50</div>
          <p class="text-xs text-muted-foreground">
            Supplier available in the platform
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader
          class="flex flex-row items-center justify-between space-y-0 pb-2"
        >
          <CardTitle class="text-sm font-medium"> Item Count </CardTitle>
          <CreditCard class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">250</div>
          <p class="text-xs text-muted-foreground">
            Items available in your Subscription/p>
          </p></CardContent
        >
      </Card>
      <Card>
        <CardHeader
          class="flex flex-row items-center justify-between space-y-0 pb-2"
        >
          <CardTitle class="text-sm font-medium"> Active Now </CardTitle>
          <Activity class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">+573</div>
          <p class="text-xs text-muted-foreground">
            Items already associated to your Subscription
          </p>
        </CardContent>
      </Card>
    </div>
    <div class="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <Card class="xl:col-span-2">
        <CardHeader class="flex flex-row items-center">
          <div class="grid gap-2">
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              Recent transactions from your store.
            </CardDescription>
          </div>
          <Button as-child size="sm" class="ml-auto gap-1">
            <a href="#">
              View All
              <ArrowUpRight class="h-4 w-4" />
            </a>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead class="hidden xl:table-column"> Type </TableHead>
                <TableHead class="hidden xl:table-column"> Status </TableHead>
                <TableHead class="hidden xl:table-column"> Date </TableHead>
                <TableHead class="text-right"> Amount </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div class="font-medium">Liam Johnson</div>
                  <div class="hidden text-sm text-muted-foreground md:inline">
                    liam@example.com
                  </div>
                </TableCell>
                <TableCell class="hidden xl:table-column"> Sale </TableCell>
                <TableCell class="hidden xl:table-column">
                  <Badge class="text-xs" variant="outline"> Approved </Badge>
                </TableCell>
                <TableCell
                  class="hidden md:table-cell lg:hidden xl:table-column"
                >
                  2023-06-23
                </TableCell>
                <TableCell class="text-right"> $250.00 </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div class="font-medium">Olivia Smith</div>
                  <div class="hidden text-sm text-muted-foreground md:inline">
                    olivia@example.com
                  </div>
                </TableCell>
                <TableCell class="hidden xl:table-column"> Refund </TableCell>
                <TableCell class="hidden xl:table-column">
                  <Badge class="text-xs" variant="outline"> Declined </Badge>
                </TableCell>
                <TableCell
                  class="hidden md:table-cell lg:hidden xl:table-column"
                >
                  2023-06-24
                </TableCell>
                <TableCell class="text-right"> $150.00 </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div class="font-medium">Noah Williams</div>
                  <div class="hidden text-sm text-muted-foreground md:inline">
                    noah@example.com
                  </div>
                </TableCell>
                <TableCell class="hidden xl:table-column">
                  Subscription
                </TableCell>
                <TableCell class="hidden xl:table-column">
                  <Badge class="text-xs" variant="outline"> Approved </Badge>
                </TableCell>
                <TableCell
                  class="hidden md:table-cell lg:hidden xl:table-column"
                >
                  2023-06-25
                </TableCell>
                <TableCell class="text-right"> $350.00 </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div class="font-medium">Emma Brown</div>
                  <div class="hidden text-sm text-muted-foreground md:inline">
                    emma@example.com
                  </div>
                </TableCell>
                <TableCell class="hidden xl:table-column"> Sale </TableCell>
                <TableCell class="hidden xl:table-column">
                  <Badge class="text-xs" variant="outline"> Approved </Badge>
                </TableCell>
                <TableCell
                  class="hidden md:table-cell lg:hidden xl:table-column"
                >
                  2023-06-26
                </TableCell>
                <TableCell class="text-right"> $450.00 </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div class="font-medium">Liam Johnson</div>
                  <div class="hidden text-sm text-muted-foreground md:inline">
                    liam@example.com
                  </div>
                </TableCell>
                <TableCell class="hidden xl:table-column"> Sale </TableCell>
                <TableCell class="hidden xl:table-column">
                  <Badge class="text-xs" variant="outline"> Approved </Badge>
                </TableCell>
                <TableCell
                  class="hidden md:table-cell lg:hidden xl:table-column"
                >
                  2023-06-27
                </TableCell>
                <TableCell class="text-right"> $550.00 </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  </main>
</template>
