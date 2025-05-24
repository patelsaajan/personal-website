<template>
   <UNavigationMenu :items="navigationItems" class="w-full justify-center"/>
</template>

<script lang="ts" setup>

const navigationItems: NavigationMenuItem[] = [
   {
    label: 'Home',
    icon: 'i-lucide-house',
    path: '/',
   },
   {
    label: 'Contanct',
    icon: 'i-lucide-book-open',
    path: '/',
   },
]
</script>