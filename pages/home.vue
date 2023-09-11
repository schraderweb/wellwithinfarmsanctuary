<script setup lang="ts">
import useBlogResource from "../composables/useBlogResource"


const {blogs} = useBlogResource("blogs")
</script>
<template>
  <Header />
  <div
    class="relative h-[400px] md:h-[650px] w-full bg-cover bg-center"
    style="
      background-image: url('/images/bg-image.jpeg');
      background-position: 50% 100%;
      background-repeat: no-repeat;
      background-size: cover;
    "
  >
  <div class="hidden md:block md:absolute md:py-20 md:px-20">
    <img src="/images/logo.png" alt="" class="h-40">
  </div>
    <div class="absolute inset-0 opacity-50"></div>
    <!-- Optional: Background overlay for better text visibility -->
    <div class="relative z-10 flex flex-col items-center justify-center h-full">
      <h1 class="text-2xl md:text-6xl text-white font-bold mb-4">
        Well Within Farm Sanctuary
      </h1>
      <p class="text-xl text-center md:text-2xl text-white">
        The idea of Well Within Farm Sanctuary was planted with the intention of
        being more than a traditional farm.
      </p>
    </div>
  </div>

  <div class="container mx-auto px-2 w-full my-20 md:px-20">
    <h1 class="text-center text-5xl font-bold">About Us</h1>
    <div class="md:text-center text-xl mt-10 font-normal">
      <p class="pb-5 leading-8">
        The idea of Well Within Farm Sanctuary was planted with the intention of
        being more than a traditional farm. Its need was sprouted from the
        necessity to become sustainable in not only traditional farm practices
        but in many aspects of life.
      </p>
      <p class="pb-5 leading-8">
        Well Within Farm Sanctuary Is a place where a person can learn a skill,
        take a stroll through an LED light forest, hear beautiful music, host a
        magical event or gathering, relax in a wood fired sauna, plant a seed,
        eat pizza baked in an earthen oven, donate to a worthy cause, farm an
        idea, and cultivate peace well within their hearts and minds.
      </p>
      <p class="pb-5 leading-8">
        Please enjoy exploring our website to learn about our events, projects,
        offerings, and more at Well Within Farm Sanctuary.
      </p>
    </div>
  </div>
  <section class="px-10 py-20 bg-light-beige">
  <h1 class="text-5xl text-center font-bold">Blogs</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-center py-10">
    <div class="m-10 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-auto overflow-hidden items-center" v-for="blog in blogs" :key="blog.id">
      <a href="#">
        <h5 class="mb-2 text-2xl font-semibold text-center tracking-tight text-gray-900 dark:text-white pb-5">{{ blog.title }}</h5>
      </a>
      <div class="flex items-stretch pb-5">
    <img :src="blog.coverImage" alt="Blog Cover Image" class="w-full self-stretch object-contain h-56">
</div>

      <div class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <span v-html="blog.body.split(' ').slice(0, 30).join(' ')"></span>
        <NuxtLink :to="`/blogs/${blog.id}`" class="text-blue-600 underline">Read More...</NuxtLink>
      </div>
    </div>
  </div>
</section>


  <!-- Testimonials -->

 <Testimonials />

 <!-- Reviews -->
  <Reviews />
  <!-- Footer -->


  <Footer />
</template>
