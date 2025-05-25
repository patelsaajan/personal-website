<template>
    <div class="container pb-20">
        <div class="w-full flex flex-col gap-12 justify-center">
            <LandingHero />
            <div>
            <span class="text-lg font-bold text-primary">Education</span>
            <UAccordion type="multiple" :items="educationData">
                <template #content="{ item }">
                    {{ bulletString(item.content) }}
                </template>
            </UAccordion>
        </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import educationData from '~~/data/education';

const bulletString = (text:string) => {
    console.log(text)

    return text

}

</script>


<style lang="scss" scoped>


</style>