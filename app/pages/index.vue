<template>
    <div class="mx-autocontainer pb-20">
        <div class="w-full flex flex-col gap-12 justify-center">
            <LandingHero />
            <div class="w-full flex flex-col gap-4 max-w-lg mx-auto"> 
                <span class="text-lg font-bold text-primary">Education</span>
                <UAccordion type="multiple" :items="educationData">
                    <template #content="{ item }">
                        <ul class="list-disc list-inside">
                            <li v-for="line in bulletString(item.content)" :key="line">
                                {{ line }}
                            </li>
                        </ul>
                    </template>
                </UAccordion>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import educationData from '~~/data/education';

const bulletString = (text:string) => {
    return text.split('|')
}

</script>


<style lang="scss" scoped>


</style>