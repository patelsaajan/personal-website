<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
const route = useRoute()
const siteUrl = 'https://saajanpatel.co.uk'
const siteDescription = 'Official website of Saajan Patel. Projects, insights and ideas on entrepreneurship, tech, strategy and building impactful digital products.'

useHead({
  titleTemplate: (title) => title ? `${title} ~ Saajan Patel` : 'Saajan Patel'
})

useSeoMeta({
  description: siteDescription,
  ogSiteName: 'Saajan Patel',
  ogType: 'website',
  ogTitle: 'Saajan Patel',
  ogDescription: siteDescription,
  ogUrl: () => `${siteUrl}${route.path}`,
  ogImage: `${siteUrl}/favicon.ico`,
  // The share image is square, so the small summary card avoids the 2:1 crop
  twitterCard: 'summary',
  twitterTitle: 'Saajan Patel',
  twitterDescription: siteDescription,
  twitterImage: `${siteUrl}/favicon.ico`
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
