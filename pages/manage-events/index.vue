<script setup lang="ts">
import useEventResource from "../../composables/useEventResource"
import { useRouter } from 'vue-router';
import useAuth from "../../composables/useAuth"


const {events} = useEventResource("events")
const router = useRouter()
const { isAuthenticated, loading } = useAuth();

watch(loading, (isLoading) => {
  if (!isLoading) {
    if (!isAuthenticated()) {
      router.push('/login');
    }
  }
});

const addBlog = () => {
    router.push('/manage-blogs/');

}

const addEvent = () => {
    router.push('/manage-events/add-event');

}

</script>
<template>
<Header />
<div class="flex justify-end">

    <button @click.prevent="addEvent" class="mx-5 my-5 border-2 border-red-700 py-2 px-6 text-red-700 text-lg font-semibold hover:bg-red-600 hover:text-white">Add New Event</button>
    <button @click.prevent="addBlog" class="mx-5 my-5 border-2 border-red-700 py-2 px-6 text-red-700 text-lg font-semibold hover:bg-red-600 hover:text-white">Manage Blog</button>


</div>

<h1 class="mb-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white text-center">Manage Events</h1>

<EventTable :events="events"/>


<div class="mt-28">
<Footer />
</div>
</template>