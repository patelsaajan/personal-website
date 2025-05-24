<template>
    <div class="container mx-auto mt-12">
        <div class="flex flex-col gap-4 max-w-md mx-auto">
            <span class="text-primary text-2xl font-bold">Contact</span>

            <UForm :state="state" :schema="schema" @submit="handleSubmit" class="flex flex-col gap-4">
                <UFormField name="name" label="Name">
                    <UInput v-model="state.name" class="w-full" icon="i-lucide-user" placeholder="Name" />
                </UFormField>
                <UFormField name="email" label="Email">
                    <UInput v-model="state.email" class="w-full" icon="i-lucide-at-sign" placeholder="Enter your email" />
                </UFormField>
                <UFormField name="subject" label="Subject">
                    <UInput v-model="state.subject" class="w-full" icon="i-lucide-mail" placeholder="Subject" />
                </UFormField>
                <UFormField name="message" label="Message">
                    <UTextarea
                        v-model="state.message" 
                        class="w-full"
                        :rows=4 
                        autoresize
                        icon="i-lucide-message-circle" 
                        placeholder="Write your message here..."
                    />

                </UFormField>
                <UButton type="submit" class="w-fit">Submit</UButton>
            </UForm>
        </div>
    </div>
</template>

<script lang="ts" setup>
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const toast = useToast()

const schema = z.object({
    name   : z.string().min(3, 'Name must be at least 3 characters long'),
    email  : z.string().email('Invalid email address'),
    subject: z.string().min(3, 'Subject must be at least 3 characters long'),
    message: z.string().min(10, 'Message must be at least 10 characters long').max(200, 'Message must be less than 200 characters long'),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
    name   : '',
    email  : '',
    subject: '',
    message: '',
})

const handleSubmit = (event: FormSubmitEvent<Schema>) => {
    console.log(event)
}

</script>

<style lang="scss" scoped>


</style>