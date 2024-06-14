<script setup lang="ts">

import type Event from "../types/Event"

const nuxtApp:any = useNuxtApp()
const router:any = useRouter()
const props = defineProps<{
  events:Event[]
  }>()
 
const deleteEvent= async(eventId:string)=>{

    try {
       await nuxtApp.$deleteDoc(nuxtApp.$doc(nuxtApp.$db, "events", eventId))
        location.reload();
  } catch (error) {
    console.log(error)
  }

}
</script>
<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-10">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    title
                </th>
                <th scope="col" class="px-6 py-3">
                    subject
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr  v-for="event in events" :key="event.id" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {{ event.title }}
                </th>
                <td class="px-6 py-4">
                    {{ event.subject }}
                </td>
                <td class="px-6 py-4">
                    <NuxtLink :to="`/manage-events/${event.id}`" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</NuxtLink> |
                    <NuxtLink to="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" @click.prevent="deleteEvent(event.id)">Delete</NuxtLink>
                </td>
            </tr>
        </tbody>
    </table>
</div>


</template>