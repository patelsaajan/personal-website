import type { AccordionItem } from '@nuxt/ui';

const educationData = [
  {
    label: 'University of Bristol',
    icon: 'i-lucide-graduation-cap',
    content: 'You have nothing to do, @nuxt/icon will handle it automatically.| This is a new list'
  },
  {
    label: 'Whitchurch High School',
    icon: 'i-lucide-school',
    content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
  },
] satisfies AccordionItem[]

export default educationData
