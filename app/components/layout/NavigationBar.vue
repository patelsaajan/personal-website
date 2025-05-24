<template>
   <UNavigationMenu 
        color="primary"
        variant="link" 
        :items="navigationItems" 
        class="w-full justify-center z-10 text-white"
   />
</template>

<script lang="ts" setup>
const route = useRouter()
const navigationItems: NavigationMenuItem[] = [
   {
    label: 'Home',
    icon: 'i-lucide-house',
    to: '/',
    active: computed(() => route.currentRoute.value.path === '/').value,
   },
   {
    label: 'Contact',
    icon: 'i-lucide-book-open',
    to: '/contact',
    active: computed(() => route.currentRoute.value.path === '/contact').value,
   },
]

</script>