<script setup lang="ts">
import useBlogResource from "../../composables/useBlogResource";

const { blogs } = useBlogResource("blogs");
</script>

<template>
  <Header />
  <h1 class="text-4xl text-center font-bold mt-10">Our Blogs</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center py-10">
    <div
      class="m-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full overflow-hidden flex flex-col justify-between"
      v-for="blog in blogs"
      :key="blog.id"
    >
      <a href="#">
        <h5 class="mb-2 text-2xl font-semibold text-center tracking-tight text-gray-900 dark:text-white pb-5">{{ blog.title }}</h5>
      </a>
      <div class="flex items-stretch pb-5">
        <img :src="blog.coverImage" alt="Blog Cover Image" class="w-full object-contain h-56">
      </div>
      <div class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">
        <span v-html="blog.body.split(' ').slice(0, 30).join(' ')"></span>
        <!-- <NuxtLink :to="`/blogs/${blog.id}`" class="text-blue-600 underline">Read More...</NuxtLink> -->
      </div>
    </div>
  </div>

  <Footer />
</template>
