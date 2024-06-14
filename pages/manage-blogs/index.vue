<script setup lang="ts">
import useBlogResource from "../../composables/useBlogResource"
import { useRouter } from 'vue-router';
import useAuth from "../../composables/useAuth"


const {blogs} = useBlogResource("blogs")
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
    router.push('/manage-blogs/add-blog');

}

const addEvent = () => {
    router.push('/manage-events/');

}


</script>
<template>
<Header />
<div class="flex justify-end">
    <button @click.prevent="addBlog" class="mx-5 my-5 border-2 border-red-700 py-2 px-6 text-red-700 text-lg font-semibold hover:bg-red-600 hover:text-white">Add New Blog</button>
    <button @click.prevent="addEvent" class="mx-5 my-5 border-2 border-red-700 py-2 px-6 text-red-700 text-lg font-semibold hover:bg-red-600 hover:text-white">Manage Event</button>


</div>

<h1 class="mb-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white text-center">Manage Blogs</h1>

<BlogTable :blogs="blogs"/>


<div class="mt-28">
<Footer />
</div>
</template>