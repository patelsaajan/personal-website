<template>
    <div class="flex flex-col gap-8 text-center my-8">
        <div class="flex justify-center">
            <NuxtImg
                src="/images/hero.jpg" 
                alt="Saajan Patel"
                class="w-52 h-52 rounded-full border-4 border-primary"
                :&hover="{
                    scale: 1.05,
                    transition: {
                        duration: 0.3,
                        ease: 'easeInOut'
                    }
                }"
                />
        </div>
        <span class="text-4xl"> Just a person who <span class="text-primary font-bold">loves</span> creating.</span>
        <span class="text-md max-w-lg">I'm a self-taught developer with a Master's in Engineering. I’ve spent the past two years building responsive, user-focused websites while working professionally in custom development.</span>
        <div class="flex flex-row gap-8 justify-center">
            <UButton
                variant="outline" 
                color="neutral" 
                class="rounded-full font-neutral font-bold py-2 px-4"
                to="/contact"
            >
                Get In Touch
            </UButton>
            <UButton 
                variant="outline" 
                color="neutral" 
                class="bg-neutral border-white font-bold text-white rounded-full py-2 px-4"
            >
                Download CV
            </UButton>
        </div>
        <span class="text-lg font-bold text-primary">Experienced With</span>
        <div class="flex flex-row gap-2 justify-center">
            <Icon name="lineicons:nuxt" size="40" />
            <Icon name="lineicons:vuejs" size="40" />
            <Icon name="lineicons:tailwindcss" size="40" />
            <Icon name="lineicons:typescript" size="40" />
            <Icon name="lineicons:wordpress" size="40" />
            <Icon name="lineicons:php" size="40" />
            <Icon name="hugeicons:sql" size="40" />
        </div>
        <span class="text-md max-w-lg">I love solving problems through design and code, and I’m always building new projects to learn and explore ideas.</span>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>


</style>