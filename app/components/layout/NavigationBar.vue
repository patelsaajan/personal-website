<template>
   <UNavigationMenu 
     color="primary"
     variant="link" 
     :items="navigationItems" 
     class="w-full justify-center z-10"
   />
 </template>
 
 <script lang="ts" setup>
 const navigationItems = [
   {
     label: 'Home',
     icon : 'i-lucide-house',
     to   : '/'
   },
   {
     label: 'Contact',
     icon : 'i-lucide-book-open',
     to   : '/contact'
   },
   {
    label: 'Recipes',
    icon : 'uil:diary',
    to: 'https://soyboy.saajanpatel.co.uk',
    
   }
 ]
 </script>
 